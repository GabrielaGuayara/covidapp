import React from 'react'


const MarkerInfo = ({info}) => {
    return (
        <div id='details' >
           <h6>Updated information</h6>
            <ul className='mark_info'>
                <li className='li_mark'>{info.country}</li>
                <li className='li_mark'>Today Cases:{info.todaycases}</li>
                <li className='li_mark'>Today Recov:{info.todayrecov}</li>
                <li className='li_mark'>Today Deaths:{info.todaydeaths}</li>
                
            </ul>
        </div>
    )
}

export default MarkerInfo
