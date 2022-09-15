import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Productos en Data base",
    valor: 12,
    icono: "fas fa-film",
}


let user = {
    color:   "warning",
    titulo: "Usuarios en data base",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;