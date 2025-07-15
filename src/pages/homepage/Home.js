import './home.css';

import About from './About';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';

function Main() {
    return (
        <main className="App">
            <article>
                <Hero />
                <Highlights />
                <Testimonials />
                <About />
            </article>
        </main>
    );
}

export default Main;
