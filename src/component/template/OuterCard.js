import Card from './Card'

function OuterCard(){
	const data = [
		{
			'nama': 'Sendi Dian Hadiwijaya',
			'kelas': 'S2B'
		},
		{
			'nama': 'M Rizky',
			'kelas': 'S2B'
		}
	]

	const content = Object.entries(data).map((v, k) => {
		return (
			<Card key={k} name={v[1].nama} kelas={v[1].kelas} />
			)
	})

	return (
		<div className="outer-card">
		{content}
		</div>
		)
}

export default OuterCard