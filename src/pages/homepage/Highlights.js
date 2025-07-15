import Button from '../../components/ui/button/Button';
import CardGallary from '../../components/ui/card/CardGallery';

export default function Highlights() {
    return (
        <section className='highlights-section'>
            <div className='announcement'>
                <h2>This weeks specials!</h2>
                <Button color='orderButtonColor' text="Order online" />  
            </div>
            <CardGallary />
        </section>
    );
}
