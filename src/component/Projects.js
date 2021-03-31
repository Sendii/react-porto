import Header from './template/Header'
import Card from './template/Card'

function Projects(){
	const data = [
		{
			'nama': 'Project 1',
			'rate': 1
		},
		{
			'nama': 'Project 2',
			'rate': 2
		},
		{
			'nama': 'Project 3',
			'rate': 5
		},
		{
			'nama': 'Project 4',
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
			<Header keterangan="Projects" />
			<div className="outer-card">
				{content}
			</div>
		</div>
		)
}

export default Projects