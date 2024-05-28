import '../App.css'
import newspaperLogo from '../assets/newspaper.png'
import groupLogo from '../assets/group.png'

export default function Navbar() {

  return (
    <>
    <div id="navbar">
        <div className='nav-item'>
            <img className='icon' src={newspaperLogo} />
            <a href="/news">News</a>
        </div>
        <div className='nav-item'>
            <img className='icon' src={groupLogo}/>
            <a href="/community">Community</a>
        </div>
    </div>
    </>
  )
}

