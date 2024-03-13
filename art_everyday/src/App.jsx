import { useState, useEffect} from 'react'
import './App.css'
import SideBar from './SideBar';
import noImg from './assets/No_image_available.svg.png';
let SEARCH_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
let BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste Renoir';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ArtInfo({art_piece}){
  return(
    <div className = "artInfo">
      <h2>Artwork Details</h2>
      <ul>
        <li>
          <h3>Title:</h3>{art_piece.title}
        </li>
        <li>
          <h3>Artist:</h3> {art_piece.artistDisplayName}
        </li>
        <li>
          <h3>Medium:</h3> {art_piece.medium}
        </li>
        <li>
          <a href={art_piece.objectURL}>Learn More</a>
        </li>
      </ul>
    </div>
  )
}



function ArtImg({art_piece,loading}){
  if(loading){
    return(
      <div className = "loader"></div>
    )
  }
  if(art_piece.primaryImage == ""){
    return(
      <img src = {noImg} className = "artImg"/>
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
    
    
  
    <SideBar></SideBar>
    <div className = "main">
      <ArtImg art_piece={art} loading = {loading}></ArtImg>
      <ArtInfo art_piece={art}></ArtInfo>
      <button onClick = {() => getArt(artObj.objectIDs[getRandomIntInclusive(0,artObj.objectIDs.length)])} className = "generateArt">
      Generate Art
      </button>
    </div>
  </>
  );
}

export default App
