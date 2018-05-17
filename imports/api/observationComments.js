import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const ObservationComments = new Mongo.Collection('observationComments');

Meteor.methods({

  'comments.create'(commentJSON) {
    if (!this.userId) {
      throw new Meteor.Error('[Error] Not-authorized for the action');
    }

    ProfileCollections.insert(commentJSON);

  },
  'comments.update'(commentJSON) {
    if (!this.userId) {
      throw new Meteor.Error('[Error] Not-authorized for the action');
    }

    ProfileCollections.update({});

  },
  'comments.remove'(commentJSON) {
    
    if (!this.userId) {
      throw new Meteor.Error('[Error] Not-authorized for the action');
    }

    ProfileCollections.remove({ });
  }

});