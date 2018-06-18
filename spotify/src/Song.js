import React, { Component } from 'react';

const Song = function (props) {
    return(<div><p><strong>{props.title}</strong></p><p>by {props.artist}</p><br/></div>)
}
export default Song;