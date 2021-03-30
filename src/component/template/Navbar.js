import '../../css/navbar.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'
import Home from '../../component/Home'

function Navbar(){
	return (
		<Router>
			<ul className="nav">
				{/*<li><a href="/" className="active">Home</a></li>*/}
				<li>
					<Link to="/">Home</Link>
				</li>
				{/*<li><a href="/work/">News</a></li>*/}
				<li>
					<Link to="/news">Home</Link>
				</li>
				<li><a href="/about/">Search</a></li>
				<li><a href="/clients/">About</a></li>
				<li><a href="/contact/">Contact</a></li>
			</ul>

			<Switch>
				<Route path="/">
				<Home />
				</Route>
			</Switch>
		</Router>
	)
}

export default Navbar