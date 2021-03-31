import '../../css/navbar.css'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
} from 'react-router-dom'
import Home from '../../component/Home'
import Skills from '../../component/Skills'
import Project from '../../component/Projects'

function Navbar(){
	return (
		<Router>
			<ul className="nav">
				<li>
					<NavLink to="/home">Home</NavLink>
				</li>
				<li>
					<NavLink to="/skills">Skill</NavLink>
				</li>
				<li>
					<NavLink to="/project">Projects</NavLink>
				</li>
				<li>
					<NavLink to="/about">About</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contact</NavLink>
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
				<Project />
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