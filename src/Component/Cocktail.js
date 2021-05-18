import React from 'react'
import {Link} from 'react-router-dom'

const Cocktail = ({id,image,info, name,glass}) =>{
    hello(){
        console.log("Hi"); // changed by person1 A1
    }
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
<!-- add comment in last line Cocktail  -->