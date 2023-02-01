import React from 'react'

const Statetable = ({filterst}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Cases</th>
                        <th>Recovered</th>
                        <th>Active</th>
                        <th>Death</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {filterst.map((state,i)=>(
                         <tr key={i}>
                         <td id='state'>{state.state}</td>
                         <td>{state.cases}</td>
                         <td>{state.recovered}</td>
                         <td>{state.active}</td>
                         <td>{state.deaths}</td>

                     </tr>
                    ))}
                   
                </tbody>
            </table>
        


        </div>
    )
}

export default Statetable
