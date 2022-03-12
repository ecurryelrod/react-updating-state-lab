// Code DigitalClicker Component Here

import React, {Component} from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {timesClicked: 0}
    }

    handleClick = () => {
        this.setState(previousState => {
            return {timesClicked: previousState.timesClicked + 1}
        })

        // all three of these seem to work...

        // let newClick = this.state.timesClicked + 1
        // this.setState({timesClicked: newClick})

        // this.setState({timesClicked: this.state.timesClicked + 1})
    }

    render() {
        return (
            <div>
                {/* {console.log(this.state)} */}
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
