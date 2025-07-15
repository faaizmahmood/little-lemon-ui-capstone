import Card from './Card';
import './cardGallery.css';

import CardOne from '../../../assets/restaurant-chef-B.jpg';
import CardTwo from '../../../assets/lemon-dessert.jpg';
import CardThree from '../../../assets/greek-salad.jpg';

export default function CardGallary() {
    const cardData = [
        {
            title: `Meat Loaf Gyros`,
            description: `This is definitely a different gyro meat recipe, yet it is so good! I slice leftover meat in individual portions and freeze for any time I crave a gyro.`,
            image: CardOne,
            price: `$18.00`,
            delivery: `Delivery Available`,
            altText: `Meat Loaf Gyros`,
         },
        {
            title: `Lemon Dessert`,
            description: `This cake is not your typical sugary treat. It's got a lovely sweet and tart flavors. The cake is usually topped with a sweet glaze. It's optional but adds an extra layer of flavor and moisture.`,
            image: CardTwo,
            price: `$18.00`,
            delivery: `Delivery Available`,
            altText: `Meat Loaf Gyros`,
         },
        {
            title: `Mediterranean Pork and Orzo Salad`,
            description: `On a really busy day, this meal in a bowl is one of my top picks. It's quick to put together, leaving a lot more time to relax at the table.`,
            image: CardThree,
            price: `$18.00`,
            delivery: `Delivery Available`,
            altText: `Meat Loaf Gyros`,
         },
    ];

    return (
        <ul className="card-gallery">
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    price={card.price}
                    delivery={card.delivery}
                    altText={card.altText}
                />
            ))}
        </ul>
    );
};