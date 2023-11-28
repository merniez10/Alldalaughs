import { useState, useEffect } from 'react'


function Favorites() {

  var [favs, setFavs] = useState([])

  useEffect(()=>{

    // get array of favorites from localStorage.getItem("favs") if exists, otherwise it's an empty []

    // mocking data for now
    var favsFromLocalStorage = [
      {
        image: "https://1",
        title: "Title 1"
      },
      {
        image: "https://2",
        title: "Title 2"
      }
    ]

    setFavs(favsFromLocalStorage)

  }, []) // run once after react page finishes loading

  return (
    <>
      <ul>
      {favs.map((favObject, i) => {
        return (
          <li key={"fav-"+i}>
            <b>Iframe url</b>: {favObject.image}<br/>
            <b>Title</b>: {favObject.title}
          </li>
        )
      })}
      </ul>
    </>
  )
}

export default Favorites
