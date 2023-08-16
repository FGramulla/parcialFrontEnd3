import './Card.css'

const Card = (props) => {

    return (
        <div className='Card'>
            <p>Hola {props.data.name}!! <br /> Tu país de residencia es: {props.data.country}</p>
            <img src={`https://flagcdn.com/16x12/${props.data.code.toLowerCase()}.png`}
                width="32"
                height="24"
                alt={props.data.country} />
        </div>
    )
}

export default Card;
