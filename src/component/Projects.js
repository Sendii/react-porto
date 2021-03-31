import Header from './template/Header'
import Card from './template/Card'

function Projects(){
	const data = [
		{
			'nama': 'Project 1',
			'desc': 'Ini Project 1'
		},
		{
			'nama': 'Project 2',
			'desc': 'Ini Project 2'
		},
		{
			'nama': 'Project 3',
			'desc': 'Ini Project 3'
		},
		{
			'nama': 'Project 4',
			'desc': 'Ini Project 4'
		},
	]
	
	const content = Object.entries(data).map((v, k) => {
		return (
			<Card key={k} name={v[1].nama} desc={v[1].desc} />
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