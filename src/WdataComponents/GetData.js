import React, { useContext, useState } from 'react'
import { DataContext } from './ContextandReducer'


const GetData = () => {

    const {state, dispatch} = useContext(DataContext);
    const [country, setCountry] = useState(" ");


    const fetchData = async (country) => {
            const resp = await fetch(`https://corona.lmao.ninja/v2/countries/${country}`); 
            const data = await resp.json();
            //Updating the state with the dispatch function
         return dispatch({
             type: "FETCH_DATA",
             payload: data
         });

    }
       
    //Checking the user's input
    const getCountryData = (e) => {
        e.preventDefault();
            
        if(country==="" || country===undefined){
                alert("Nothing to look for")
        }else{
                fetchData(country).then( res => {
                    console.log("The results has been fetched");
                }).catch( err => {
                    console.log(err);
                });
                e.target.reset()
           
            }
    }

    
    return (
         <div className='country_info'>

             <h3>COVID-19 WorldWide Data </h3>

            <form onSubmit={getCountryData}>
                
                    <input className='inp_country' 
                    type="text" required 
                    name="name" 
                    placeholder="Enter a country name, Ex. USA" 
                    onChange={e => setCountry(e.target.value)} //Updating the country state
                    />

                    <input type='submit'
                     value='Check' 
                     id='btn2'
                     />
                     
            </form>
            
            {/* Updating the state with the dispatch function */}
            <button id='btn1' 
            onClick={() => dispatch({ type: 'REMOVE' })}>Clear </button>   
            
            
            <div>
                {
                    state.worldata.map((data, index)=>{ return <ul key={index}>
                            <li className='li_data'>{data.country}</li>
                            <br/>
                            <img src={data.countryInfo.flag} alt='flag'/>
                            <p>Historical Data</p>
                            <li className='li_data'>Cases:  {data.cases}</li>
                            <li className='li_data'>Deaths:  {data.deaths}</li>
                            <li className='li_data'>Recovered:  {data.recovered}</li>
                        </ul>})
                    }   

            </div>  
                   
         </div>

    )

}
export default GetData