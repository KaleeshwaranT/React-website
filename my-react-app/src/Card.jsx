import Chicken from './assets/food.jpg'


const Card = (props) => {
    console.log(props)
    return (
        <div className="card">
            <img className="card-image" src={props.image_url} alt="food picture"></img>
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.title}</p>

        </div>
    );

}


export default Card 
