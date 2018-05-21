import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
  
export const Comments = new Mongo.Collection('comments');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('comments', function commentsPublication() {
      return Comments.find();
    });
}

Meteor.methods({
    'comments.insert'(text) {
      check(text, String);
   
      // Make sure the user is logged in before inserting a comment
      if (! this.userId) {
        throw new Meteor.Error('not-authorized');
      }
   
      Comments.insert({
        text,
        createdAt: new Date(),
        owner: this.userId,
        username: Meteor.users.findOne(this.userId).username,
      });
      // En la inserción de nuevos comentarios deberían tener en cuenta el id de la especie sobre la cual se hace el comentario
      // ya que se siempre se muestran los mismos comentarios para todas las especies.
      // Importante hacer la relación con el post
    },
  });
