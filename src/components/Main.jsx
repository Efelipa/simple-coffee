import PropTypes from 'prop-types';

const Main = ({vector}) => {
    return (
        <main className="card-container">
            <div className="title" >
                <img src={vector} alt="coffee-vector" className="coffee-vector"/>
                <div className="text">
                    <h1>Our Collection</h1>
                    <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types origins, expertly roasted in small batches and shipped fresh weekly.</p>
                </div>
            </div>
            <div className="coffee-grid">
                Hola
            </div>
        </main>
    )
}

Main.propTypes = {
    vector: PropTypes.oneOf(['img', 'svg']),
}
export default Main;