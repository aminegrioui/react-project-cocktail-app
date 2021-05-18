import React from 'react'
import {Link} from 'react-router-dom'

const Cocktail = ({id,image,info, name,glass}) =>{
    console.log("hallo from remote")
    return (
       <section className="cocktail">
           <img src={image} alt={name}></img>
           <footer className="cocktail-footer">
               <h3>{name}</h3>
               <h4>{glass}</h4>
               <p>{info} </p>
               <Link to={`/cocktail/${id}`} className="btn btn-primary">
               detail
               </Link>
              
           </footer>
       </section>
    )
}
export default Cocktail
