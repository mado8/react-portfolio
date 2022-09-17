import { React } from 'react';
import './Dropdown.css'

const Dropdown = (props) => {

    let height;
    let visibleLink;

    if(props.hidden === 100) {
        height = '100vh'
        visibleLink = 'visible'
    } else {
        height = '0vh'
        visibleLink = 'hidden'
    }

    const sandwichStyles = {
        container:  {
            transition: 'height 1.2s',
            height: height
        },
        listItem: {
            visibility: visibleLink,
            transition: 'opacity .4s',
            activeLink: '#f1f1f1'
        }
    }

    const pageChange = (page) => {
        props.handlePage(page)
        // activeLink(page)
    }

    // const activeLink = (page) => {
    //     if(page === 'about') {
    //         document.getElementById('list-1').style.color = '#a5cad9'
    //     }
    // }

    return (
        <ul id="menu" style={sandwichStyles.container}>
            <li id='home' onClick={() => pageChange('home')} style={sandwichStyles.listItem}><button>Home</button></li>
            <li id='about' onClick={() => pageChange('about')} style={sandwichStyles.listItem}><button>About</button></li>
            <li id='resume' onClick={() => pageChange('resume')} style={sandwichStyles.listItem}><button>Resume</button></li>
            <li id='resources' onClick={() => pageChange('resources')} style={sandwichStyles.listItem}><button>Resources</button></li>
            <li id='contact' onClick={() => pageChange('contact')} style={sandwichStyles.listItem}><button>Contact</button></li>
            <div id='collapse' style={sandwichStyles.listItem} onClick={() => props.toggleOpen()}>
                <div className='left-arrow'></div>
                <div className='right-arrow'></div>
            </div>
        </ul>
    )
}

export default Dropdown