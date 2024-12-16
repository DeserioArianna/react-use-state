import Card from "./Card";

const AppCard = ({language}) => {
    return (
        <div className="row">
            <Card
                key={language.id}
                title={language.title}
                description={language.description}
            />
        </div>
    )
}

export default AppCard;