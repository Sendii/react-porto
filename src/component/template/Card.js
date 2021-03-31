import React from 'react'
import logo_github from '../../asset/github.png'
import logo_fullstar from '../../asset/full-star.png'

class Card extends React.Component{
	render(){	
		// kalau component skill
		const desc_skill = <div className="skill">
						<img src={logo_fullstar} alt="gambar" className="rate-skill"/>
						<img src={logo_fullstar} alt="gambar" className="rate-skill"/>
						<img src={logo_fullstar} alt="gambar" className="rate-skill"/>
						<img src={logo_fullstar} alt="gambar" className="rate-skill"/>
						<img src={logo_fullstar} alt="gambar" className="rate-skill"/>
					</div>

		const desc_project = <p>{this.props.desc}</p>
		console.log(this.props.rate)
		return(
			<div className="card">
			<img src={logo_github} alt="gambar" className="logo-skill"/>
			<p>{this.props.name}</p>
			{(this.props.desc ? desc_project : desc_skill) }
			</div>
			)
	}
}

export default Card