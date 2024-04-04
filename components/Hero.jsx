import React from 'react'
import locLogo from '/loc.png'
import { getImageUrl } from './imgs.js';

function Tile(props) {
    return(
        <>
            <div className="tile--component">
                <div className="tile--img"><img src={getImageUrl(props.img)}/></div>
                <div className="tile--content">
                    <div className="tileContent--loc">
                        <img className='tileContent--loc--img' src={locLogo} />
                        <p className="tileContent--loc--country">{props.location}</p>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <div className="tileContent--title">
                        <p>{props.title}</p>
                    </div>
                    <div className="tileContent--date">
                        <h4>{props.startDate} - {props.endDate}</h4>
                    </div>
                </div>
                <div className="tileContent--text">
                    <p>{props.description}</p>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Tile