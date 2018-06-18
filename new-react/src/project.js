import React, { Component } from 'react';

    const Project = (props) => {
        return (
            <div>
                <h3>{ props.title }</h3>
                <p>{ props.text }</p>
            </div>
        )
    }

export default Project