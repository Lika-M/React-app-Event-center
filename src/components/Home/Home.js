import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
    return (
        <section className='home'>
            
            <div className="img-wrapper">
                <img src="/images/hall-1.jpg" alt="hall-1" />
            </div>
            <h1 className="title">
                EVENT CENTER
            </h1>
            <p className="subtitle">
                Modern Event space. Multifunctional halls.Combining art, design & technology.

            </p>
            <Link to="/event/create" className="header-btn">EVENT RESERVATION</Link>

        </section>
    )
}

