
import React, { useEffect,useState} from 'react';
import Producto from './Producto';


let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
]

function GenresInDb(){

const [articulos, setArticulos] = useState([]);

    
    useEffect(() => {
      fetch('http://localhost:3001/products')
        .then((response) => {
          return response.json()
        })
        .then((articulos) => {
          setArticulos(articulos.data)
          console.log(articulos);
          
        })
    }, [])



                       
    return (
        <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">PLANTAS DISPONIBLES</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">

                            {articulos.map((producto, index) =>

<Producto
    id={producto.id}
    name={producto.name}
    price={producto.price}
    description={producto.description}
    key={index}
/>)
}

                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}
export default GenresInDb;