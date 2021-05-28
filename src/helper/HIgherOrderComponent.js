import React from 'react'

const withCounter = (WrappedComponent,factor) => {
	class WithCounter extends React.Component {
		constructor(props) {
			super(props)

			this.state = {
				count: 0
			}
		}

		incrementCount = () => {
			let x=this.state.count;
			x+=factor;
			this.setState({
				count: x,
			})
		}
    render() {
			return (
				<WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props.name}
				/>
			)
		}
	}
	return WithCounter
}

export default withCounter