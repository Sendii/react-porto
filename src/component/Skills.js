import OuterCard from './template/OuterCard'
import Header from './template/Header'

function Skills(){
	return(
		<div className="row">
			<Header keterangan="Skill" />
			{/*harusnya disini ngasih nilai array ke props buat di loop */}
			<OuterCard />
		</div>
		)
}

export default Skills