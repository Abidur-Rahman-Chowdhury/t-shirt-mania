import React from 'react';
import useTShirt from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirt, setTShirts] = useTShirt();
    return (
        <div className='home-container'>
            <div className="tShirt-container">
                {
                    tShirt.map(tshirt => <TShirt key={tshirt._id} tShirt={tshirt}></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;