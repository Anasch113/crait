import React from 'react'
import "./styles/DashNav.css";
import logo from './images/logo.png'
function DashNav() {
  return (
    <nav className='dashnav' id='dashNav'>
        <div className='nav__container'>
            <div className='nav__left'>
                <div className='nav__left__logo'>
                    <img src={logo} alt="YouCoin Logo" />
                    <p className='nav__left__logo__name'>YouCoin</p>
                    <p className='nav__beta'>BETA</p>
                </div>  
            </div>
            <div className='nav__right'>
                <div className='nav__right__flex'>
                    <img src="https://cloud.appwrite.io/v1/avatars/initials?name=Hery+Ruiz&width=80&height=80&project=console" alt="Avatar" />
                    <div className='nav__right__info'>
                        <p>first last</p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default DashNav