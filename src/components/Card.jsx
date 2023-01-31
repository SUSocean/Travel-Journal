import React from "react"
import data from '../../public/data'


export default function Card(props) {
    return (
        <div className="card">
            <img className="card--img" src={props.destination.imageUrl} alt={props.destination.title} />
            <div className="card--information">
                <div className="card--information--location">
                    <i className="fa-solid fa-location-dot"></i>
                    <h4 className="card--information--location--country">{props.destination.location}</h4>
                    <a className="card--information--location--mapUrl" target="_blank" href={props.destination.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--information--name">{props.destination.title}</h1>
                <span className="card--information--dates">{props.destination.startDate} - {props.destination.endDate}</span>
                <p className="card--information--description">{props.destination.description}</p>
            </div>
        </div>

    )
}