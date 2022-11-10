import React from 'react'
import logo from "../Assets/logo.png"
import { BsMouse } from "react-icons/bs"

const Music = () => {
    return (
        <>
            <div className="cursor"></div>

            
            <a href="/log" className="logo" data-cursorpointer = {true}>
                <img src={logo} alt="logo" data-cursorpointer = {true} />
            </a>

            <a href="/franchise" data-cursorpointer = {true} className="franchiseBtn">
                Get A Franchise
            </a>

            <BsMouse data-cursorpointer = {true} className='iconSvg'/>
        </>
    )
}

export default Music