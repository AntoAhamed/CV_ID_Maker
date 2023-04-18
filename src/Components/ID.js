import React from 'react'

function ID(props) {
    const idStyle = {
        marginTop: "14vh",
        marginBottom: "14vh",
        borderRadius: "10px",
        padding: "10%",
        backgroundColor: "#B4D2EB"
    }
    return (
        <div className='container text-center' style={idStyle}>
            <div className="row">
                <div className="col">
                    <h3>{props.Institute}</h3>
                    <img src={props.Img} alt="..." height={"200px"} width={"200px"} className='my-4' />
                    <h5>Name: {props.Name}</h5>
                    <h5>ID: {props.ID}</h5>
                    <h5>Program: {props.Program}</h5>
                    <h5>Phone: {props.Phone}</h5>
                </div>
            </div>
        </div>
    )
}

export default ID
