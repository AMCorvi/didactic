import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsUIWrapper extends Component {
    componentDidMount() {
        // Use Meteor Blaze to render login buttons
        this.view = Blaze.render( Template.loginButtons,
            findDOMNode(this.refs.container));
    }

    componentWillUnmount() {
        Blaze.remove(this.view);
    }

    render() {
        // Just render a placeholder container that will be filled in 
        return <span ref="container" /> ;
    }

}
