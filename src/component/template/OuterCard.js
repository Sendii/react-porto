import Card from './Card'

function OuterCard(){
	return (
		<div className="outer-card">
		{/*disini nerima data props, terus di loop	*/}
			<Card name="Skill 1"/>
			<Card name="Skill 2"/>
			<Card name="Skill 3"/>
			<Card name="Skill 4"/>
			<Card names="Skill 5"/>
		</div>
		)
}

export default OuterCard