import React from 'react'
import logo_github from '../../asset/github.png'
import logo_fullstar from '../../asset/full-starr.png'
import logo_halfstar from '../../asset/half-star.png'
import logo_emptystar from '../../asset/empty-star.png'

class Card extends React.Component{
	render(){
		return(
			<div className="card">
			<img src={logo_github} alt="gambar" className="logo-skill"/>
			<p>{this.props.name}</p>
			<img src={logo_fullstar} alt="gambar" className="rate-skill"/>
			<img src={logo_fullstar} alt="gambar" className="rate-skill"/>
			<img src={logo_fullstar} alt="gambar" className="rate-skill"/>
			<img src={logo_halfstar} alt="gambar" className="rate-skill"/>
			<img src={logo_emptystar} alt="gambar" className="rate-skill"/>
			</div>
			)
	}
}

export default Card