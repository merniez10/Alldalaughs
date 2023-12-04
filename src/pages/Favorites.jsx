import { useState, useEffect } from 'react'


function Favorites() {

  var [favs, setFavs] = useState([])

  useEffect(()=>{

    // get array of favorites from localStorage.getItem("favs") if exists, otherwise it's an empty []
    let jsonstr = localStorage.getItem("favs")
    let arr = []
    if (jsonstr){
      arr = JSON.parse(jsonstr)
    }
    setFavs(arr);

    // mocking data for now
    // var favsFromLocalStorage = [
    //   {
    //     image: "https://1",
    //     title: "Title 1",
    //     joke: "Some Joke 1"
    //   },
    //   {
    //     image: "https://2",
    //     title: "Title 2"
    //     joke: "Some Joke 2"
    //   }
    // ]

    // setFavs(favsFromLocalStorage)

  }, []) // run once after react page finishes loading

  function removeFav(i) {
    //alert(i)
    // Get all favs from the localstorage
    let jsonstr = localStorage.getItem("favs")
    let arr = []
    if (jsonstr){
      arr = JSON.parse(jsonstr)
    }
    arr.splice(i, 1)
    setFavs(arr);

    localStorage.setItem("favs", JSON.stringify(arr))

    // convert favs string into array
    // remove item from array if joke matches
  }

  return (
    <>
    <h2 className="text-xl text-center mb-6">Favorites</h2>
      <ul>
      {favs.map((favObject,i) => {
        return (
          <li key={"fav-"+i} className="mb-12 text-center font-mono p-4">
            Meme {i+1}<br/>
            <div className="flex justify-center">
            <iframe src={favObject.image}></iframe>
            </div>
            <b>Title</b>: {favObject.title}<br/>
            <b>Joke</b>: {favObject.joke}<br/>
            <button className="border rounded bg-slate-500 border-slate-500 p-1 mt-2" onClick={()=>{ removeFav(i) }}>Remove from Favorites</button>
          </li>
        )
      })}
      </ul>
    </>
  )
}

export default Favorites
