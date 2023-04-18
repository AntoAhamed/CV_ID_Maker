import React from 'react'

function CV(props) {
    const cvStyle = {
        marginTop: "14vh",
        padding: "10%",
        borderRadius: "10px",
        backgroundColor: "#B4D2EB"
    }
    return (
        <div className="container" style={cvStyle}>
            <hr />
            <div className="row">
                <div className="col-9">
                    <h1>{props.Name}</h1>
                    <h4>{props.Phone} | {props.Email}</h4>
                    <h4>{props.Address}</h4>
                </div>
                <div className="col-3">
                    <img src={props.Img} alt="..." height={"200px"} width={"200px"} />
                </div>
            </div>
            <div className="row">
                <h2>Educational Qualifications</h2>
                <hr />
                <h4>{props.Institute}</h4>
                <h4>{props.Degree}</h4>
            </div>
            <div className="row">
                <h2>Skills</h2>
                <hr />
                <h4>{props.Skill1}</h4>
                <h4>{props.Skill2}</h4>
                <h4>{props.Skill3}</h4>
            </div>
        </div>
    )
}

export default CV
