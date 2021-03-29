import React from 'react';
// function Hello(){
// 	return (
// 		<div>
// 			<h1>Ini h1</h1>
// 			<h3>Ini h3</h3>
// 		</div>
// 		)
// }

class Hello extends React.Component {
	constructor(){
		super()
		this.state = {
			name: "Sendi Dian Hadiwijaya",
			kelas: "S2B",
			counter: 1
		}
	}

	increment = () => {
		this.setState({
			name: "Sendi Dian Hadiwijaya Update",
			counter: this.state.counter <= 1 ? 1 : this.state.counter - 1
		})
	}
	decrement = () => {
		this.setState({
			counter: this.state.counter + 1
		})
	}
	reset = () => {
		this.setState({
			counter: 1
		})
	}
	render(){
		return (
			<div>
			<h1>Hello {this.state.name} {this.state.counter} </h1>
			<h3>Hello {this.state.kelas}</h3>
			<h5>{this.props.nama}</h5>
			<button onClick={this.increment}>Increment</button>
			<button onClick={this.decrement}>Decrement</button>
			<button onClick={this.reset}>reset</button>
			</div>
			)
	}
}
export default Hello