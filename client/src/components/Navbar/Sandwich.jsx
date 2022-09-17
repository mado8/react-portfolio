import { React, useState } from 'react'
import Dropdown from './Dropdown'
import './Sandwich.css'

const Sandwich = (props) => {

    const [hidden, setHidden] = useState(100)
    const [sandwichOpacity, setSandwichOpacity] = useState(0)

    const dropdownStyles = {
        container:  {
            opacity: sandwichOpacity,
            transition: 'all 0.4s'
        }
    }

    const toggleOpen = () => {
        props.setOpen(!props.open)
        console.log('click')
        if(props.open === true) {
            setHidden(100)
            setSandwichOpacity(0)
        } else {
            setHidden(0)
            setSandwichOpacity(100)
        }
    }

    return (
        <>
        <div style={dropdownStyles.container} id='sandwich-div' onClick={() => toggleOpen()}>
            <div className='sandwich'></div>
            <div className='sandwich sandwich2'></div>
            <div className='sandwich'></div>
        </div>
        <Dropdown hidden={hidden} handlePage={props.handlePage} toggleOpen={toggleOpen}/>
        </>
    )
}

export default Sandwich