import React from 'react'

function Footer() {
    const footerStyle = {
        textAlign: "center",
        paddingTop: "15px",
        paddingBottom: "15px",
        color: "white",
        position: "relative",
        marginTop: "30vh"
    }
    return (
        <div className='bg-dark' style={footerStyle}>
            @CopyRight CV_ID_Maker 2023
        </div>
    )
}

export default Footer