import '../../css/navbar.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'
import Home from '../../component/Home'
import Skills from '../../component/Skills'

function Navbar(){
	return (
		<Router>
			<ul className="nav">
				<li>
					<Link to="/home" className="active">Home</Link>
				</li>
				<li>
					<Link to="/skills">Skill</Link>
				</li>
				<li>
					<Link to="/project">Projects</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>

			<Switch>
				<Route path="/home">
				<Home />
				</Route>
				<Route path="/skills">
				<Skills />
				</Route>
				<Route path="/project">
				<Skills />
				</Route>
				<Route path="/about">
				<Skills />
				</Route>
				<Route path="/contact">
				<Skills />
				</Route>
			</Switch>
		</Router>
	)
}

export default Navbar