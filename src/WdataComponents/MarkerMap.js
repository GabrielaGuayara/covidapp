import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';


const Marker = ({onClick}) => {
  return(
    <div className='mapmarker' onClick={onClick}>
      <FaMapMarkerAlt className='locationicon'/>

    </div>
  )
}
  export default Marker;
