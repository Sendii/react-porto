import Header from './template/Header'
import CardGrid from './template/CardGrid'

function About(){
	return(
		<div className="row" id="about">
			<Header keterangan="About" />
			<div className="outer-card">
				<CardGrid info="ea"/>
				<CardGrid info="ea"/>			
			</div>
		</div>
		)
}

export default About