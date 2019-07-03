import React, {Fragment} from 'react'
import logo from '../baz.jpeg';

const MetronomeAnimation = (props) => {


  let delay = props.delay;

  function delayFunc() {
    // BPMStop()
    
    props.onBPMChange(0.000001)
   
  }

  const divStyle = {
    animation: 'App-logo-spin infinite ' + delay + 'ms alternate linear'
  }

  return (
    <Fragment>
      <div className="App-header">
       

       <img src={logo} style={divStyle} className="App-logo" alt="logo" />
      </div>
      <div className="buttons">
       {/* <button className="button" id="play" onClick={delayFunc}>Play</button> */}
        <button className="button" id="stop" onClick={delayFunc}>Stop</button>
      </div>
    </Fragment>
      )
    }

export default MetronomeAnimation