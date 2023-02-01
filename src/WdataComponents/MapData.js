import React, { useContext, useState} from 'react'
import GoogleMapReact from "google-map-react"
import { DataContext } from './ContextandReducer'
import Marker from './MarkerMap'
import MarkerInfo from "./MarkerInfo"
import '../CSS/Wdata.css'


const MapData = ({center, zoom}) => {
    //Giving access to the data inside the Context provider
    const {state} = useContext(DataContext);
    const [markinfo, setMarkInfo]=useState('')

   //Using the data from our context provider to set the marker on the map and build the description box using useState.
    const markLocation = state.worldata.map((data, i)=> <Marker key={i} lat={data.countryInfo.lat} lng={data.countryInfo.long} 
            onClick={()=>setMarkInfo({
            lat: data.countryInfo.lat,
            lng:data.countryInfo.long,
            country: data.country, 
            todaycases: data.todayCases,
            todayrecov:data.todayRecovered,
            todaydeaths:data.todayDeaths,})
            }/>)


    return (
        <div style={{height:'90%', width:'90%'}} id='map'>
            
            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyCsKRTWdedWzFhmR2mCbSLOpKwC8LXIghk'}} //The Google API was removed to prevent it from being used by third parties.
            defaultCenter={center}
            defaultZoom={zoom}
            >
            {markLocation}
            
            {markinfo&& <MarkerInfo lat={markinfo.lat} lng={markinfo.lng} info={markinfo}/>//Setting descripbox box on the map using markinfo state.
            }
            </GoogleMapReact>
           
        </div>
    )

}
        MapData.defaultProps={
            center:{
                lat:37.090240,
                lng:-95.712891
            },
            zoom: 4

        }



export default MapData
