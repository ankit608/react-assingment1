import React from 'react'
import Success from './success'

function fifthstep({flag}) {
  return (
    <div style={{width:"30%", fontSize:"14px", position:"absolute"}}>

        <div style={{padding:"10px",width:"90%", border:"solid 1px", borderColor:"#818181", borderRadius:"8px"}}>
            <div style={{display:"flex",padding:"4px"}}>
                <div style={{flex:1}}>Country</div>
                <div style={{flex:1,color:"#818181"}}>: Country Name</div>
            </div>
            <div style={{display:"flex",padding:"5px"}}>
                <div style={{flex:1}}>State</div>
                <div style={{flex:1,color:"#818181"}}>: State Name</div>
            </div>
            <div style={{display:"flex",padding:"5px"}}>
                <div style={{flex:1}}>City</div>
                <div style={{flex:1,color:"#818181"}}>: City Name</div>
            </div>
            <div style={{display:"flex",padding:"5px"}}>
                <div style={{flex:1}}>Option A</div>
                <div style={{flex:1,color:"#818181"}}>: Option1</div>
            </div>
            <div style={{display:"flex",padding:"5px"}}>
                <div style={{flex:1}}>Option B</div>
                <div style={{flex:1,color:"#818181"}}>: Option2</div>
            </div>
            <div style={{display:"flex",padding:"5px"}}>
                <div style={{flex:1}}>Option C</div>
                <div style={{flex:1,color:"#818181"}}>: Option 3</div>
            </div>
            <div style={{display:"flex",padding:"5px"}}>
                <div style={{flex:1}}>Option D</div>
                <div style={{flex:1,color:"#818181"}}>: Option 4</div>
            </div>
            <div style={{display:"flex",padding:"5px"}}>
                <div style={{flex:1}}>Option E</div>
                <div style={{flex:1, color:"#818181"}}>: Option 5</div>
            </div>
            <div style={{display:"flex",padding:"5px"}}>
                <div style={{flex:1}}>Option F</div>
                <div style={{flex:1 ,color:"#818181"}}>: Option 6</div>
            </div>
            <div style={{display:"flex",padding:"5px"}}>
                <div style={{flex:1}}>Option F</div>
                <div style={{flex:1 ,color:"#818181"}}><div>: Option 7</div>
                 <div>1-Loream ipsum dolor sit amet</div>
                 <div>2-Loream ispum color sit amet</div>
                 <hr></hr>
                 
                </div>
            </div>
            
        </div>
        {flag? <Success></Success>:""}
    </div>
  )
}

export default fifthstep