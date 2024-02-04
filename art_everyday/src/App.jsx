import { useState, useEffect} from 'react'
import './App.css'
let SEARCH_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
let BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste Renoir';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ArtInfo({art_piece}){
  return(
    <ul className = "artInfo">
      <li>
        <h3>Title: {art_piece.title}</h3>
      </li>
      <li>
        <h3>Artist: {art_piece.artistDisplayName}</h3>
      </li>
      <li>
        <h3>Medium: {art_piece.medium}</h3>
      </li>
      <li>
        <a href={art_piece.objectURL}>Learn More</a>
      </li>
    </ul>
  )
}



function ArtImg({art_piece,loading}){
  if(loading){
    return(
      <h2>Loading...</h2>
    )
  }
  if(art_piece.primaryImage == ""){
    return(
      <h2>No Image...</h2>
    )
  }
  return(
    <img src = {art_piece.primaryImage} className = "artImg"/>
  );
}

function App() {
  
  const [loading,setLoading] = useState(true);
  const [artObj, setArtObj] = useState([]);
  const [art, setArt] = useState({});

  async function getArt(obj_id){
    setLoading(true);
    const response= await fetch(`${SEARCH_URL}/${obj_id}`);
    const art = await response.json();
    setArt(art);
    console.log(obj_id);
    setLoading(false);
  };

  useEffect(() => {
    const fetchArt = async () => {
      const response = await fetch(BASE_URL);
      const artObj = (await response.json());
      setArtObj(artObj);
    }
    fetchArt();
    getArt(438815)
    console.log(artObj);
  }, []);

  return (
  <>
    <button onClick = {() => getArt(artObj.objectIDs[getRandomIntInclusive(0,artObj.objectIDs.length)])} className = "generateArt">
      Generate Art
    </button>
    <ArtImg art_piece={art} loading = {loading}></ArtImg>
    <ArtInfo art_piece={art}></ArtInfo>
  </>
  );
}

export default App
