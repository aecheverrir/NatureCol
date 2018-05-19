import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';

export const ProfileCollections = new Mongo.Collection('profileCollections');

Meteor.methods({

  'collections.create'(collectionJSON){
    if (!this.userId) {
      throw new Meteor.Error('[Error] Not-authorized for the action');
    }

    check(collectionJSON, {
      ownerId: Match.OneOf(String, Number),
      name: String,
      description: Match.Maybe(String),
      observations: [Object]
    });

    Match.Where(collectionJSON.observations, function (observations) {
      for(let obs of observations){
        check(obs,{
          id: Match.OneOf(String, Number),
          url: String,
          description: Match.Maybe(String),
        });
      }
      return true;
    });

    ProfileCollections.insert(collectionJSON);

  },
  'collections.update'(collectionJSON) {
    if (!this.userId) {
      throw new Meteor.Error('[Error] Not-authorized for the action');
    }

    check(collectionJSON, {
      _id: Match.OneOf(String, Number),
      ownerId: Match.OneOf(String, Number),
      name: String,
      description: Match.Maybe(String),
      observations: [Object]
    });

    Match.Where(collectionJSON.observations, function (observations) {
      for (let obs of observations) {
        check(obs, {
          id: Match.OneOf(String, Number),
          url: String,
          description: Match.Maybe(String)
        });
      }
      return true;
    });

    ProfileCollections.update({
      $and: [
        { _id: collectionJSON._id },
        { ownerId: collectionJSON.ownerId }
      ]},
      {
      $set: { 
        observations: collectionJSON.observations
    }});

  },
  'collections.remove'(collectionJSON) {
    check(collectionJSON._id, Match.OneOf(String, Number));

    if (!this.userId || collectionJSON.ownerId !== this.userId) {
      throw new Meteor.Error('[Error] Not-authorized for the action');
    }
    
    ProfileCollections.remove({
      $and: [
        { _id: collectionJSON._id },
        { ownerId: collectionJSON.ownerId }
      ]
    });
  }

});