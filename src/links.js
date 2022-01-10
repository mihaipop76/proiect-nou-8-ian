import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {useEffect, useState} from "react";


export function Links() {
    const [linksList, setlinksList] = useState(false)
    useEffect(() => {
        fetch("links.json")
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setlinksList(response)
            })
    }, [])
    // console.log(linksList);
    if (!linksList) {
        return (
            <div>
                Incarcare date!
            </div>
        )
    }
    return (
        <nav className="main-nav">
            <ul className="main-nav-list">
                {linksList.map((link)=>{
                   return(
                       <li key={link.id}><a href={link.href}>{link.label}</a></li>
                   )
                })}

            </ul>
        </nav>

    )
}

