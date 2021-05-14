import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from '../context'
import Loading from './Loading'
import Cocktail from './Cocktail'
const CocktaiList = () =>{
    const {laoding,cocktails}=useContext()
    console.log(cocktails)
    if(laoding){
         return  <Loading/>
    }
   
    return (
       <section className="section">
           <h2 className="section-title">Cocktail amine </h2>
          
           <div className="cocktails-center">
              {
                  cocktails.map((item) =>{
                      return <Cocktail key={item.id} {...item}></Cocktail>
                  })
              }
           </div>
       </section>
    )
}
export default CocktaiList