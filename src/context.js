import React from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ( {children}) =>{
     const [laoding, setLaoding]=React.useState(false)
     const [cocktails,setCocktails]=React.useState([]);
     const [searchTerm, setSearchTerm]=React.useState('a')
     
     const fetchData =  React.useCallback( async ()  =>{
        setLaoding(true)
        try{
            const response=await fetch(`${url}${searchTerm}`);
            const {drinks}=await response.json()
            if(drinks){
              const newCocktailList =  drinks.map((item) =>{
                     const {
                        idDrink,
                        strDrink,
                        strAlcoholic,
                        strGlass,
                        strDrinkThumb
                    }=item
                    return {
                        id:idDrink,
                        name:strDrink,
                        info:strAlcoholic,
                        glass:strGlass,
                        image:strDrinkThumb
                    }
                })
                setCocktails(newCocktailList)
            }
            else{
                setCocktails([])
            }
            setLaoding(false)
        }catch(error){
          console.log(error)
          setLaoding(false)
        }
     },[searchTerm])
     React.useEffect(() =>{
         fetchData()
     },[searchTerm,fetchData])

     return (<AppContext.Provider value={{
         laoding,
         cocktails,
         setSearchTerm
     }}>
         {children}
     </AppContext.Provider>)
}
export  const useContext = () =>{
    return React.useContext(AppContext)
}
export {AppContext,AppProvider}