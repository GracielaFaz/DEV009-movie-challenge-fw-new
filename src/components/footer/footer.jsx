import './footer.css'
import linkedinLogo from '../../assets/linkedin.svg'
import githubLogo	 from '../../assets/github.svg'

export default function WebFooter() {
	return (
		<footer>
			<div className='logos'>
			<a href="https://www.linkedin.com/in/gracielafaz/">
				<img src={linkedinLogo} alt="Linkedin Logo" />
			</a>
			<a href="https://github.com/GracielaFaz">
				<img src={githubLogo} alt="Github Logo" />
			</a>
			</div>

			<div className='info'>
				<p>2023 Miklopolis by Graciela Faz</p> 
				<p>Database: <a href="https://www.themoviedb.org/">TMDB</a></p>
			</div>
		</footer>
	)
}