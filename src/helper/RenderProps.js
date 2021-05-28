import React, { Component } from 'react'

class RenderProps extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 100
        }
    }

    incrementCount = () => {

        this.setState(current=>{
           return {count:current.count-1}
        })
    }

    render() {
        return(
            <div>
                {this.props.render(this.state.count,this.incrementCount)}
            </div>
        )
	}
}

export default RenderProps