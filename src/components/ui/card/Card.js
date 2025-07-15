import './card.css';

function Card({
    image,
    title,
    price,
    description,
    delivery,
    altText,
}) {


    return (
        <li
            className='card'
            >
            <img
                className='card-img'
                src={image}
                alt={altText}
            />
            <div className='card-body'>
                <div className='card-details'>
                    <h3 className='card-title'>{title}</h3>
                    <p className='card-price'>{price}</p>
                </div>
                <p className='card-description'>{description}</p>
                <p className='card-delivery'>{delivery}</p>
            </div>
        </li>
    );
}

export default Card;
