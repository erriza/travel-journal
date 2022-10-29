import ping from './../Icons/ping.svg'

function Card (props) {
    return (
        <div className="card">
            <img className='card-img' src={`${props.imageUrl}`}></img>
            <div className="aside">
                <img className="card-ping" src={ping}></img>
                <span className="card-location">{props.location.toUpperCase()}</span>
                <a className="card-link" href={`${props.googleMapsUrl}`}>View on google maps</a>
                <h2 className='card-title'>{props.title}</h2>
                <span className='bold'>{props.startDate} - </span>
                <span className='bold'>{props.endDate}</span>
                <p className='card-desc'>{props.description}</p>
            </div>
        </div>
    )
}

export default Card