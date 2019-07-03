import React, { Component, Fragment } from 'react'
import MetronomeHeader from '../Components/MetronomeHeader'
import MetronomeAnimation from '../Components/MetronomeAnimation';
import BPMSlider from '../Components/BPMSlider';
import BPMIndicator from '../Components/BPMIndicator';


class MetronomeContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beatsPerMinute: 60
        }
        this.BPMChange = this.BPMChange.bind(this)
        this.BPMStop = this.BPMStop.bind(this)
    }

    BPMChange(newBPM) {
        // const updatedBPM = this.state.beatsPerMinute
        this.setState({ beatsPerMinute: newBPM })
    }

    BPMStop() {
        console.log("sbodjv");
        
        this.setState({ beatsPerMinute: 1})
    }

    render() {
        return (
            <Fragment>
                <MetronomeHeader/>
                <MetronomeAnimation delay={60000 / this.state.beatsPerMinute} onBPMChange={this.BPMChange}/>
                <BPMSlider onBPMChange={this.BPMChange} />
                <BPMIndicator prop={this.state.beatsPerMinute}/>
            </Fragment>
        )
    }

}


export default MetronomeContainer