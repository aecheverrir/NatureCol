import React, { Component } from 'react';
import { Comments } from '../../../api/comments.js';
import { Meteor } from 'meteor/meteor';

// Comment component - represents a single comment item
export default class Comment extends Component {
    toggleChecked() {
        // Set the checked property to the opposite of its current value
        Meteor.call('comments.setChecked', this.props.comment._id, !this.props.comment.checked);
    }
     
    deleteThisComment() {
        Meteor.call('comments.remove', this.props.comment._id);
    }
     
    render() {
        // Give comments a different className when they are checked off,
        // so that we can style them nicely in CSS
     
        return (
                <div className="comment">
                    <div className="comment-user">
                        {this.props.comment.username}
                    </div>
                    <div className="comment-content">
                    {this.props.comment.text ? this.props.comment.text : this.props.comment.comment }
                    </div>
                </div>
        );
    }
}
