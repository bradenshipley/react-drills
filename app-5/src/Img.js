import React, {Component } from 'react';
//in order to use props from parent component, props needs to be passed in as an argument
export default function Img(props)  {
    //setting up function to return image, setting props for size
    // and alt text
    return(
        <div>
        <img src={props.myImage} 
        width='100%'
        height='100%'
        alt="weird flex but ok" />
        <img src={props.myImage} 
        width='100%'
        height='100%'
        alt="weird flex but ok" />
        <img src={props.myImage} 
        width='100%'
        height='100%'
        alt="weird flex but ok" />
        <img src={props.myImage} 
        width='100%'
        height='100%'
        alt="weird flex but ok" />
        <img src={props.myImage} 
        width='100%'
        height='100%'
        alt="weird flex but ok" />
        <img src={props.myImage} 
        width='100%'
        height='100%'
        alt="weird flex but ok" />
        <img src={props.myImage} 
        width='100%'
        height='100%'
        alt="weird flex but ok" />
        <img src={props.myImage} 
        width='100%'
        height='100%'
        alt="weird flex but ok" />
        <img src={props.myImage} 
        width='100%'
        height='100%'
        alt="weird flex but ok" />
    </div>)

}