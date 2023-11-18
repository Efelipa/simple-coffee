import PropTypes from 'prop-types';
import Star from '../assets/Star.svg';
import StartFill from '../assets/Star_fill.svg';

export const Card = ({data}) => {
    return (
        <div className="card">
            <div className="card-img">
                <img src={data.image} alt={data.name} />
                {(data.popular === true) && <span className="popular-pill">Popular</span>}
            </div>
            <div className='description'>
                <p>{data.name}</p>
                <p className='price-btn'>{data.price}</p>
            </div>
            <div className="rating">
                {(data.votes > 1) 
                ?   <>
                        <img src={StartFill}/>
                        <span>{data.rating}</span>
                        <p className='votes'>({data.votes} votes)</p>
                        {(data.available === false) && <span className='out-stock'>Sold out</span>}
                    </> :
                    <>
                        <img src={Star}/>
                        <span className='votes'>No ratings</span>
                        <p className='transparent'>Hola</p>
                    </>}
            </div>
        </div>
    )
};

Card.propTypes = {
    data: PropTypes.object,
}