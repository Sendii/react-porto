import Header from './template/Header'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp,
	faGithub,
	faLinkedin,
	faGoogle
} from '@fortawesome/free-brands-svg-icons' 

library.add(faWhatsapp,
	faGithub,
	faLinkedin,
	faGoogle
); 

function Contact(){
	return(
		<div className="row" id="contact">
			<Header keterangan="Contact" />
			<div className="outer-card">
				<div className="box">
					<div className="in-box">
						<FontAwesomeIcon icon={['fab', 'whatsapp']} />
						<p>ini whatsapp</p>
					</div>
				</div>
				<div className="box">
					<div className="in-box">
					<FontAwesomeIcon icon={['fab', 'linkedin']} />
						<p>ini linkedin</p>
					</div>
				</div>
				<div className="box">
					<div className="in-box">
						<FontAwesomeIcon icon={['fab', 'github']} />
						<p>ini github</p>
					</div>
				</div>
				<div className="box">
					<div className="in-box">
						<FontAwesomeIcon icon={['fab', 'google']} />
						<p>ini gmail</p>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Contact