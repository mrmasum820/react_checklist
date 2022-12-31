const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

const Card = (props) => {
    const { title, description } = props;

    return (
        <div className="card">
            <h3 className="cardTitle">{title}</h3>
            <p className="cardDesc">{description}</p>
            <p className="cardFooter">{dateName + '/' + monthName + '/' + yearName}</p>
        </div>
    );
}

export default Card;