import React from 'react'

const BPMSlider = (props) => {

    function handleChange(event) {
        console.log(event.target.value);
        
        props.onBPMChange(event.target.value)
        
    }


    
        return (
            <div className="slider">
                <input type="range" id="start" name="bpm" min="30" max="240" onChange={handleChange}></input>
                <label for="bpm">BPM Slider</label>
                
            </div>
        )
    
}

export default BPMSlider