import React from 'react';


const Producto = ({ id, name, price, description}) => {
    return (
        <div>
                <h1>{id} - {name}</h1>
                <h3>{price}</h3>
                <p>{description}</p>

        </div>
    );
}

export default Producto;