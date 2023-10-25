import miklopolisImage from '../../assets/miklopolis.png';
import './header.css'

export default function Header() {
  return (
		<header>
			<div className="container">
				<img className='logo' src={miklopolisImage} alt="Logo Miklopolis" />	
				<input type="text" placeholder='Search..'/>
			</div>
		</header>
	)
}