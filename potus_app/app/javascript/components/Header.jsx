import React from 'react';
import {Link} from 'react-router-dom';
import myLightImage from 'images/binoculars-light.png'


class HeaderNav extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                {/* <a className="navbar-brand" href="#">POTUS-Watch</a> */}
                <Link to="/"><img className='logo-navbar' src={myLightImage} alt="light-themed logo"/></Link>
                <Link to="/" className="navbar-brand">POTUS-Watch</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>

                {/* <div >
                    <img className='logo' src={myLightImage} alt="light-themed logo"/>
                </div> */}
            </nav>
        );
    }
}


export default HeaderNav