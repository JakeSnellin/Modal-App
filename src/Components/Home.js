import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { Bio } from '../Components/Bio/Bio.js';

export function Home(props) {

    return(
        <div>
            {props.showBio ? <Link to='/' onClick={props.onclick}>Home</Link> : <Link to="/bio" onClick={props.onclick}>Home</Link>}
        </div>
    )
}