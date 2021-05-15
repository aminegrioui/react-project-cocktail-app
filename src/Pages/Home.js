import React from 'react'
import SearchForm from '../Component/SearchForm'
import CocktaiList from '../Component/CocktailList'

const Home = () =>{
    return <>
        <h1>Deploy CI</h1>
        <SearchForm/>
        <CocktaiList/>
    </>
}
export default Home