import Header from './template/Header'
import Card from './template/Card'

function Skills(){
	const data = [
		{
			'nama': 'Skill 1',
			'rate': 1
		},
		{
			'nama': 'Skill 2',
			'rate': 2
		},
		{
			'nama': 'Skill 3',
			'rate': 5
		},
		{
			'nama': 'Skill 4',
			'rate': 4
		},
	]

	const content = Object.entries(data).map((v, k) => {
		return (
			<Card key={k} name={v[1].nama} rate={v[1].rate} />
			)
	})

	return(
		<div className="row">
			<Header keterangan="Skill" />
			<div className="outer-card">
				{content}
			</div>
		</div>
		)
}

export default Skills