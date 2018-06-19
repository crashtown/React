import React, { Component } from 'react';

const Profile = props => {
    return (
        <div>
            <img src={props.picUrl} alt="pic" />
            <p>{props.firstName} {props.lastName}</p>
            <p>{props.email}</p>
            <p>{props.phoneNumber}</p>
        </div>
    )
};

export default Profile;