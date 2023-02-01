import React, { Component } from 'react'
import Nav from './Nav'
import '../CSS/PagesStyle.css'
import Imag from '../img/world.jpg'


export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Nav />
                <h1>WELCOME TO COVID-19 DATA COLLECTION APP </h1>
                <div className= 'parag'>
                    <div className="p1">
                    <p>
                    COVID-19 is an infectious disease caused by the SARS-CoV-2 virus, which has impacted the lives of millions of people negatively around the world since 2019. The amount of human and economic losses is significant and incomparable to other pandemics that have affected humanity. As a result, countries around the globe took restrictive measures to reduce the adverse effects. However, these new measures generate new problems, such as increasing poverty and mental health problems.
                    </p>
                    </div>
                    <div className="p1">
                    <p>
                    Currently, different vaccines could protect people from SARS-CoV-2, so people's lives are returning to the "normality." However, it is essential to let people know how bad the impact of COVID-19 was. Hence, the Data Collection App was born to provide information about this disease’s live cases and historical data. People can use this information to build statistical charts; it will be shared and encourage people to continue taking precautions to end the pandemic.
                    </p>
                   
                    <p id='meg'>Stay Safe and Healthy</p>
                    </div>
                    </div>
                    <div className='rside'>
                        <img src={Imag} alt='imag' id='world'/>
                        
                    </div>
            </div>
        )
    }
}
