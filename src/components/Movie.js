import React from 'react';



function Movie(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">todos los Productos en  Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>nombre</th>
                                            <th>descripcion</th>
                                            <th>Precio</th>
                                            <th>stock</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
                                            <th>Id</th>
                                            <th>nombre</th>
                                            <th>descripcion</th>
                                            <th>Precio</th>
                                            <th>stock</th>
										</tr>
									</tfoot>
									<tbody>
										<tr>
											<td>01</td>
											<td>ALOCASIA AMAZONICA</td>
											<td>  Presenta hojas color verde intenso, c..</td>
                                            <td>3000</td>
											<td>3</td>
										</tr>
										<tr>
											<td>02</td>
											<td>AGLAOEMA</td>
											<td>Son plantas herbáceas perennes que alcaNZAN..</td>
											<td>3500</td>
											<td>3</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default Movie;