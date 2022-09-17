import React from "react";
import './Resume.css'

const Resume = (props) => {

    let fitPage;
    let margin;

    if(props.open === true) {
        fitPage = '80vw'
        margin = '0vw'
    } else {
        fitPage = '55vw'
        margin = '25vw'
    }

    const containerStyles = {
        container:  {
            width: fitPage,
            marginLeft: margin,
            transition: 'all 0.4s'
        }
    }

    return (
        <div id="resume-section">
            <div id="blue-container" style={containerStyles.container}>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quos ratione similique harum minus aperiam nesciunt ad tempora facilis, quaerat, numquam laudantium consequatur qui, repellendus totam! Sunt, quisquam minus!</p>

                </div>
            </div>
        </div>
    )
}

export default Resume