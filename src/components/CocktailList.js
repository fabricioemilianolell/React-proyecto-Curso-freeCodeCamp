import { useContext } from "react"
import { AppContext } from "../Context"
import { Loading } from "./Loading"
import { Cocktail } from "./Cocktail"


export const CocktailList = () => {

  const { cocktails, loading } = useContext(AppContext)
  
  if(loading) {
    return <Loading />
  }

  if(cocktails.length < 1)  {
    return (
    <h2 className="section-title">
      no cocktails matched your search criteria
    </h2>
    )
  }

  return (
    <section className="section">
      <h2 className="section-title">Cocktailst</h2>
      <div className="cocktails-center"></div>
      {
        cocktails.map(el=>{
          return <Cocktail key={el.id} {...el} />
        })
      }
    </section>
  )
}
