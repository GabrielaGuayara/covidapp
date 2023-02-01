import React, { useReducer, createContext } from 'react'
import '../CSS/Wdata.css'
import GetData from './GetData';
import Nav from '../Pages/Nav'
import MapData from './MapData';


export const DataContext =createContext()

    // Initializing the state
    const initialState={
            worldata:[]
        }
    //Creating the reducer funtion
    const dataReducer =(state, action)=> {
        switch(action.type){
        
            case "FETCH_DATA":
                return  {
                    worldata: [...state.worldata, action.payload ]
                }
            case "REMOVE" :
                return {
                worldata:[] }
        
            default: 
                return state;
        }
    }


const WorldData = () => {

    //Setting useReducer hook and assigning dataReducer function as its first parameter and initialState as its second.
    const [state, dispatch] = useReducer(dataReducer, initialState)
    

    return (
        //Wrapping children components inside the contex provider. 
        <DataContext.Provider value ={{state, dispatch}}>
            <Nav/>
            <GetData/>
            <MapData/>   
        </DataContext.Provider>
    )
}

export default WorldData