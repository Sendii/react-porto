import Navbar from './template/Navbar'
import OuterCard from './template/OuterCard'
import Header from './template/Header'

function Skills(){
	return(
		<div className="row">
			<Navbar />
			<Header keterangan="Achievement" />
			<OuterCard />
		</div>
		)
}

export default Skills