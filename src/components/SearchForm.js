import { useContext, useEffect, useRef } from "react"
import { AppContext } from "../Context"


export const SearchForm = () => {

  const { setSearchTerm } = useContext(AppContext);
  const searchValue = useRef(null);

  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value)
  }

  useEffect(() => {
    searchValue.current.focus()
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">search your favorite cocktail</label>
            <input type="text" id="name" ref={searchValue} onChange={searchCocktails} />
          </div>
        </form>
    </section>
  )
}
   