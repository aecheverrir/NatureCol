import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

export const ObservationComments = new Mongo.Collection('observationComments');


Meteor.methods({

  'comments.create'(commentJSON) {
    if (!this.userId) {
      throw new Meteor.Error('[Error] Not-authorized for the action');
    }

    check(commentJSON, {
      ownerId: Match.OneOf(String, Number),
      ownerName: String,
      observationId: Match.OneOf(String, Number),
      comment: String,
      likes: Match.OneOf(Match.Integer, Number),
    });

    if (this.userId !== commentJSON.ownerId) {
      throw new Meteor.Error('[Error] Not-authorized for the action');
    }

    ProfileCollections.insert(commentJSON);
  },
  'comments.update'(commentJSON) {
    if (!this.userId) {
      throw new Meteor.Error('[Error] Not-authorized for the action');
    }

    check(commentJSON, {
      ownerId: Match.OneOf(String, Number),
      ownerName: String,
      observationId: Match.OneOf(String, Number),
      comment: String,
      likes: Match.OneOf(Match.Integer, Number),
    });

    ProfileCollections.update({_id: commentJSON._id},{
      $set: { likes: commentJSON.likes},
      $currentDate: { lastModified: true }
    });

  },
  'comments.remove'(commentJSON) {
    
    if (!this.userId) {
      throw new Meteor.Error('[Error] Not-authorized for the action');
    }

    check(commentJSON, {
      ownerId: Match.OneOf(String, Number),
      ownerName: String,
      observationId: Match.OneOf(String, Number),
      comment: String,
      likes: Match.OneOf(Match.Integer, Number),
    });

    if (this.userId !== commentJSON.ownerId) {
      throw new Meteor.Error('[Error] Not-authorized for the action');
    }

    ProfileCollections.remove({ _id: commentJSON._id});
  }

});