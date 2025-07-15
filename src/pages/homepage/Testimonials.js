import UserOne from '../../assets/user-1.png';
import UserTwo from '../../assets/user-2.png';
import UserThree from '../../assets/user-3.png';
import UserFour from '../../assets/user-4.png';

export default function Testimonials() {
    return (
        <section className='testimonials-section'>
            <h2 className='section-title'>Testimonials</h2>
            <ul className='testimonials'>
                <li className='user'>
                    <p className='user-name'>
                        <strong>Kaitlyn</strong>
                    </p>
                    <img className='user-img' src={UserOne} alt='user 1' />
                    <p className='user-review'>
                        So yummy! The food here is fantastic and the service was great.  My favorite shawarma I’ve had in the valley!
                    </p>
                </li>
                <li className='user'>
                    <p className='user-name'>
                        <strong>Shivaya</strong>
                    </p>
                    <img className='user-img' src={UserTwo} alt='user 2' />
                    <p className='user-review'>
                        Absolute YUM!  Delicious fresh quality ingredients.  We were surprised how good it was!
                    </p>
                </li>
                <li className='user'>
                    <p className='user-name'>
                        <strong>Sri</strong>
                    </p>
                    <img className='user-img' src={UserThree} alt='user 3' />
                    <p className='user-review'>
                        The best Amazing lunch special. Really tasty and filling. Definitely try the lunch special.
                    </p>
                </li>
                <li className='user'>
                    <p className='user-name'>
                        <strong>William</strong>
                    </p>
                    <img className='user-img' src={UserFour} alt='user 4' />
                    <p className='user-review'>
                        Reasonably priced, good portions, fresh, fast (drive through!), and includes lots of fresh whole foods. Pretty much the perfect restaurant.
                    </p>
                </li>
            </ul>
        </section>
    );
}

