import { React } from 'react'
import './Navbar.css'
import Sandwich from './Sandwich'

const Navbar = (props) => {

    return (
        <div id='navbar' style={{position: props.position}}>
            <div id="nav-contents">
                <Sandwich page={props.page} handlePage={props.handlePage} open={props.open} setOpen={props.setOpen}/>
                <div id="nav-text-div">
                    <p id='nav-text'>Madeline Donley</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar