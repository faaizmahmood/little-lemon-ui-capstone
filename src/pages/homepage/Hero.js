import { Link } from 'react-router-dom';

import HeroImage from '../../assets/restaurant-food.jpg';
import Button from '../../components/ui/button/Button';

const Hero = () => {

    const handleClick = () => {
        console.log('Button was clicked!');
      };

    return (
        <section className='hero-section'>
            <div className='col-1'>
                <h2 className='hero-title'>Little Lemon</h2>
                <p className='hero-location'>Chicago</p>
                <p className='hero-descr'>Lorem ipsum dolor sit amet consectetur. Mattis turpis potenti cum libero tortor accumsan varius. Placerat tincidunt vitae cursus phasellus.</p>
                <Link to='/reservation'>
                    <Button color='ctaButtonColor' text='Reservations' onClick={handleClick} />
                </Link>
            </div>
            <div className='col-2'>
                <img className='hero-image' src={HeroImage} alt='restaurant food' />
            </div>
        </section>
    );
};

export default Hero;
