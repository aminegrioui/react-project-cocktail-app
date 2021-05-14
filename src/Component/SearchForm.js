import React from 'react'
import {useContext} from '../context'
const SearchForm = () =>{
    const {setSearchTerm} =useContext()

    const searchValue =React.useRef('')

   const handelSubmit = (e) =>{
        e.preventDefault()
   }
    const getCocktails = () =>{
        console.log(searchValue)
        setSearchTerm(searchValue.current.value)
    }
    React.useEffect(() =>{
        searchValue.current.focus()
    },[])
    return (
       <section className="section search">
            <form className="search-form" onSubmit={handelSubmit}>
                <div className="form-control">
                    <label>
                    search your favorite cocktail
                    </label>
                    <input type="text" className="form-control" ref={searchValue} onChange={getCocktails}>
                    
                    </input>
                </div>
            </form>
       </section>
    )
}
export default SearchForm