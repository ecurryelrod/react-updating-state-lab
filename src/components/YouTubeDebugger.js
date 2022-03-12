// Code YouTubeDebugger Component Here

import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrateButton = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                }
            }
        })

        // these both seem to work...

        // this.setState({
        //     settings: {
        //         ...this.state.settings,
        //         bitrate: 12
        //     }
        // })
    }

    handleResButton = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })

        // these both seem to work...

        // this.setState({
        //     settings: {
        //         ...this.state.settings,
        //         video: {
        //             resolution: '720p'
        //         }
        //     }
        // })
    }
    
    render() {
        return (
            <div>
                {/* {console.log(this.state)} */}
                <button className='bitrate' onClick={this.handleBitrateButton}>{this.state.settings.bitrate}</button>
                <button className='resolution' onClick={this.handleResButton}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}
