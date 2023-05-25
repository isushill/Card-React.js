import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

const Card = ({ title, description, img }) => {
    return (

        <div className="card my-2 mx-2" >
            <img className="card-img-top" src={img} alt="Card image cap" style={{ width: "100%", height: "300px" }} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}
export default Card;