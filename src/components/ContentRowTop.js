import React, { useEffect,useState} from 'react';
import imagenFondo from '../assets/images/gomero.jpg';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';

function ContentRowTop(){

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


    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Última planta agregada</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Ficus elastica, llamado comúnmente árbol del caucho, ​ o gomero, es una especie perennifolia del género Ficus, nativa del nordeste de India, oeste de Indonesia. Fue introducida en Europa en 1815 como planta de interior </p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;