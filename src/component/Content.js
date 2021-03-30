import Navbar from './Navbar'
import OuterCard from './OuterCard'
import Header from './Header'

function Content(){
	return(
		<div className="row">
			<Navbar />
			<Header keterangan="Achievement" />
			<OuterCard />
		</div>
		)
}

export default Content