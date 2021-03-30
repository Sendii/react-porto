import '../../css/navbar.css'

function Navbar(){
	return (
		<ul className="nav">
			<li><a href="/" className="active">Home</a></li>
			<li><a href="/work/">News</a></li>
			<li><a href="/about/">Search</a></li>
			<li><a href="/clients/">About</a></li>
			<li><a href="/contact/">Contact</a></li>
		</ul>
	)
}

export default Navbar