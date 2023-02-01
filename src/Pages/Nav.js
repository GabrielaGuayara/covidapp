import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/PagesStyle.css'

export default class Nav extends Component {
    render() {
        return (
        <nav>
            <div className='pages'>
                <ul className='nav-links' >
                <Link to='/Home'>
                    <li>
                    Home
                    </li>
                    </Link>
                    <Link to ='/WorldData'>
                    <li>
                    Worldwide Data
                    </li>
                    </Link>
                    <Link to='/USAData'>
                    <li>
                    USA Data
                    </li>
                    </Link>
                    <Link to='/ContactUs'>
                    <li>
                    Contact Me
                    </li>
                    </Link>
                    </ul>
                </div>
                <div>
                    <ul>
                    <Link to='/Login'>
                    <li  className='logout'>
                    Log Out
                    </li>
                    </Link>
                    </ul>
                </div>
           
        </nav>
        )
    }
}
