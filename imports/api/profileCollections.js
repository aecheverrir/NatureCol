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
          species_guess: Match.Maybe(String),
          description: Match.Maybe(String),
        });
      }
      return true;
    })

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
          species_guess: Match.Maybe(String),
          description: Match.Maybe(String),
        });
      }
      return true;
    })


  },
  'collections.remove'(collectionJSON) {
    if (!this.userId || collectionJSON.ownerId !== this.userId) {
      throw new Meteor.Error('[Error] Not-authorized for the action');
    }
    

  }

});