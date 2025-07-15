import PictureOne from '../../assets/storefront.png';
import PictureTwo from '../../assets/dining-in.png';

export default function About() {
    return (
        <section className='about-section'>
            <div className='about-info'>
                <h2 className='about-title'>Little Lemon Story</h2>
                <p className='hero-location'>Chicago</p>
                <p className='hero-descr'>Lorem ipsum dolor sit amet consectetur. Mattis turpis potenti cum libero tortor accumsan varius. Placerat tincidunt vitae cursus phasellus. Lorem ipsum dolor sit amet consectetur. Mattis turpis potenti cum libero tortor accumsan varius. Placerat tincidunt vitae cursus phasellus. Lorem ipsum dolor sit amet consectetur. Mattis turpis potenti cum libero tortor accumsan varius. Placerat tincidunt vitae cursus phasellus.</p>
            </div>
            <div className='about-images'>
                <img className='overlap-1' src={PictureOne} alt='Our first location.' />
                <img className='overlap-2' src={PictureTwo} alt='A woman enjoying our dine-in experience.' />
            </div>
        </section>
    );
}
