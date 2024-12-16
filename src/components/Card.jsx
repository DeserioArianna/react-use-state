
const Card = ({title, description}) => {
    return (
        <div className="col border border-primary my-4">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;