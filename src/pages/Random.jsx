import { useState, useEffect } from 'react'
import "./Random.css"

function Random() {
var [image, setImage] = useState("")
  var [title, setTitle] = useState("")
  var [joke, setJoke] = useState("");

  function getPic() {
    fetch("https://api.giphy.com/v1/gifs/random?api_key=wco35cnXQ7RW6wv3okMN02kXAqGe1GvR")
    .then(response=>response.json())
    .then(resource=>{
      console.log(resource);
      const url = resource.data.embed_url;
      const title = resource.data.title

      setImage(url)
      setTitle(title)
    });
  }

  async function getJoke() {
    let url = `https://ai-joke-generator1.p.rapidapi.com/make_joke?prompt=`;
    if(title==="") {
      url = url + "Make a joke about not knowing how to name your art" // concatenation
      // url = `https://ai-joke-generator1.p.rapidapi.com/make_joke?prompt=blah`;
    } else {
      url = url + title // concatenation
      // url = `https://ai-joke-generator1.p.rapidapi.com/make_joke?prompt=${title}`;
    }

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c9ed94d74fmshd5283b232bc4295p126d94jsn9989628e163f',
        'X-RapidAPI-Host': 'ai-joke-generator1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);

      setJoke(data.result)
    } catch (error) {
      console.error(error);
    }

  }

  // Once webpage is done loading, because that's when it's ok to monitor variables
  useEffect(()=>{
    getPic();
    console.log("Page is done loading")
  }, []) // Run once the webpage is done running. One-Off

  // Monitor variables
  // useEffect(()=>{
  //   console.log("One of your variables a,b,or c has changed or initialized")
  // }, [a,b,c]) // Run once the webpage is done running. One-Off

  // Monitor for webpage changes/repaints/reernder
  //useEffect(()=>{
  //  console.log("Something's changed on the webpage because of initialization, or a value in JSX has changed")
  //})
  function addFav() {
    alert("Successfully added to favorites.")

    let savingItems = []
    
    let jsonstrOld = localStorage.getItem("favs")
    if(jsonstrOld) {
      savingItems = JSON.parse(jsonstrOld)
    }

    // Add new item into X position or 0th position
    savingItems.push({
        image:image,
        title:title,
        joke
    })
    let jsonstr = JSON.stringify(savingItems)
    localStorage.setItem("favs", jsonstr)
  }

  return (
    <>
      <div className="text-center">
        <h2 className="jokeTitle text-lg">Random Meme</h2>
        <div className="flex justify-center">
          <iframe src={image} className="block-center"/>
        </div>
        <h3>{title}</h3>
        <button className="border rounded bg-slate-500 border-slate-500 p-1 mt-2" onClick={()=>{ getJoke() }}>Get Joke</button>
        <div id = "joke" className="mt-5">{joke}</div>
        <br/>
        <br/>
       {
          joke.length>0 ?
         (<button className="border rounded bg-slate-500 border-slate-500 p-1 mt-2" onClick={()=>{ addFav() }}>Add to Favorites</button>)
         : ""

       }
      </div>
    </>
  )
}

export default Random
