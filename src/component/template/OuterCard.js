import Card from './Card'

function OuterCard(){
	const data = [
		{
			'nama': 'Skill 1',
			'rate': 1
		},
		{
			'nama': 'Skill 2',
			'rate': 2
		}
	]

	const content = Object.entries(data).map((v, k) => {
		return (
			<Card key={k} name={v[1].nama} rate={v[1].rate} />
			)
	})

	return (
		<div className="outer-card">
		{content}
		</div>
		)
}

export default OuterCard