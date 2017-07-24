import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';


export const Tasks = new Mongo.Collection('tasks');


Meteor.methods({


    'tasks.insert': function (text) {
        check(text, String);

        //Make suer the user is logged in before inserting a task
        if ( ! Meteor.userId() ) {
            throw new Meteor.Error('not-authorized');
        }

        Tasks.insert({
            text,
            createdAt: new Date(),
            owner: Meteor.user().username,
            username: Meteor.user().username
        });
    },

    'tasks.remove': function (taskId) {
        check(taskId, String);

        Tasks.remove(taskId);

    },

    'tasks.setChecked': function (taskId, setChecked){
        check(taskId, String);
        check(setChecked, Boolean);

        Tasks.update(taskId, { $set: { checked: setChecked } });
    },


});
