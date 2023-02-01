import '../CSS/USAStyle.css'
import React,{useState, useEffect} from 'react'
import Nav from '../Pages/Nav'
import Statetable from './Statetable'
import ChartUSA from './ChartUSA'
import USAimg from '../img/USA.png'


const USAData = () => {

    const [states, setState] = useState([])
    const [statename, setStateName]= useState('')


    useEffect(() => {

    getData()

    }, [])

    const getData =async()=>{
        await fetch ('https://corona.lmao.ninja/v2/states?sort&yesterday') //Using fetch method to get the data. 
        .then (response => response.json())
        .then (data => setState(data))}

       const filterst = states.filter(state=>(
           //If it is false, it will return an array with one element; otherwise, the states array.
            statename !=="" ? state.state === statename : states 
            
           
        ))

    return (
        
        <div className='usadata'>

            <Nav />

            <div className='inner_usa'>

                <div>
                    <h1 id='usah1'><span><img src={USAimg} alt='usaflag' id='usaflag'/></span> COVID-19 USA </h1>
                    <ChartUSA/>
                </div>

                <div>
                    <form className='form_usa'>
                        <input className='state_inp' 
                        type="text" 
                        required 
                        name="state" 
                        placeholder="Enter a state, Ex. California" 
                        onChange={e => setStateName(e.target.value)} /* Updating setStateName state */
                        />  
                   
                    </form>
                    
                    <Statetable filterst={filterst}/>
                    {console.log(filterst)}
                    
                </div>
               
            </div>
        </div>
    )
}

export default USAData
