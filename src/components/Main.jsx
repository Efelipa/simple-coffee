import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from './Card';



const Button = ({handleClick, activeLink, condition, text}) => <button onClick={handleClick} className={(activeLink === condition ? 'btn active': 
'btn')}>{text}</button>;



export const Main = ({vector, data}) => {
    // States
    const [dataMain, setData] = useState([]);
    const [showAll, setShow] = useState(true);
    const [activeLink, setActive] = useState('unavailable');

    useEffect(() => {
        setData(data)
    },[data]);
    
    // Button handler
    const availableCoffees = () => {
        setShow(false);
        setActive('available');
    }
    
    const showAllCoffees = () => {
        setShow(true);
        setActive('unavailable');
    }

    // Filtered Components
    const coffeesToShow = showAll
        ? dataMain
        : dataMain.filter(coffee => coffee.available === true);

    return (
            <main className="card-container">
                <div className="title" >
                    <img src={vector} alt="coffee-vector" className="coffee-vector"/>
                    <div className="text">
                        <h1>Our Collection</h1>
                        <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types origins, expertly roasted in small batches and shipped fresh weekly.</p>
                    </div>
                </div>
                <div className="buttons">
                    <Button 
                    handleClick={showAllCoffees} 
                    activeLink={activeLink}
                    condition={'unavailable'} 
                    text={'All products'}
                    />
                    <Button
                    handleClick={availableCoffees}
                    activeLink={activeLink}
                    condition={'available'}
                    text={'Available Now'}
                    />
                </div>
                <div className="coffee-grid">
                    {coffeesToShow.map((data) => {
                        return (
                            <Card key={data.id} data={data}/>
                        )
                    })}
                </div>
            </main>
    )
}

Main.propTypes = {
    vector: PropTypes.string.isRequired,
    data: PropTypes.array,
}

Button.propTypes = {
    handleClick: PropTypes.func,
    activeLink: PropTypes.string,
    condition: PropTypes.string,
    text: PropTypes.string,
}

