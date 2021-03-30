import logo_fb from '../asset/fb.webp'
import logo_github from '../asset/github.png'
import logo_linkedin from '../asset/linkedin.png'

function Home(){
	return(
		<div className="row">
			{/*<Navbar />*/}
			<div className="profile">
				<img src="https://i.pinimg.com/originals/59/ee/c4/59eec4313a3d4d113561916ff255594a.jpg" alt="gaada gambar" />
				<h1>Ini namaku</h1>
				<h4>Ini keterangan</h4>
				<div className="social-media">
					<a href="#ea" target="_blank" rel="noreferrer">
						<img src={logo_fb} alt="gambar"/>
					</a>
					<a href="https://github.com/Sendii" target="_blank" rel="noreferrer">
						<img src={logo_github} alt="gambar"/>
					</a>
					<a href="#ea" target="_blank" rel="noreferrer">
						<img src={logo_linkedin} alt="gambar"/>
					</a>
				</div>
			</div>
		</div>
		)
}

export default Home