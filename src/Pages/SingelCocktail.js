import React from 'react'
import {Link,useParams} from 'react-router-dom'
import Loading from '../Component/Loading';

const SingleCocktail = () =>{

    const [laoding, setLaoding]=React.useState(false);
    const [cocktail,setCocktail]=React.useState(null)
    const {id}=useParams()
    React.useEffect(() =>{
         async function getCocktail(){

            setLaoding(true)
            try{
                const response= await fetch( `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                const data=await response.json()
                if(data.drinks){
                    const  {
                       
                        strDrink:name,
                        strDrinkThumb:image,
                        strGlass:glass,
                        strCategory:categorie,
                        strAlcoholic:info,
                        strInstructions:instrutction,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5
                    }=data.drinks[0]
                    const ingredient={
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5
                    }
                    const newCocktail={image,info,name,glass,instrutction,ingredient,categorie}
                    setCocktail(newCocktail)
                }
                else{
                    setCocktail(null)
                }
                setLaoding(false)
                
            }catch(error){
              console.log(error)
            }
        }
        getCocktail()
         
    },[id])

    if(laoding){
        <Loading/>
    }
    if(!cocktail){
        <h2 className="section-titel"> No Cocktail </h2>
    }

    const {name,image,categorie, info,glass,instructions,ingredient}=cocktail
    return <section className="section  cocktail-section">
      <Link to="/" className="btn btn-primary">
       Back Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink"> 
       
            <img src={image} alt={name}></img>
            <div className="drink-info">
             <p>
               <span className='drink-data'>
                    name : {name}
               </span>
             </p>
             <p>
               <span className='drink-data'>
               categorie : {categorie}
               </span>
             </p>
             <p>
               <span className='drink-data'>
               info : {info}
               </span>
             </p>
             <p>
               <span className='drink-data'>
               glass : {glass}
               </span>
             </p>
             <p>
               <span className='drink-data'>
               instructions : {instructions}
               </span>
             </p>
             <p>
               <span className='drink-data'>
               {ingredient.map((item,index) =>{
                 return item ? <span key={index}>{item}</span>:null
               })}
               </span>
             </p>

            </div>
        
      </div>
     

    </section>
     
}

export default SingleCocktail