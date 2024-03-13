import logo from './assets/arth-logos_transparent.png';
import './SideBar.css';

function Logo(){
    return(
        <div>
            <img src = {logo} className = 'logo'></img>
        </div>
    )
}

function Favorites_Button(){
    return(
        <div>
            Favorites
        </div>
    )
}


function SideBar(){

    return(
        <div className = "sideBar">
            <ul>
                <li>
                    <Logo></Logo>
                </li>
                <li>
                    <Favorites_Button></Favorites_Button>
                </li>
            </ul>
        </div>
    )


}


export default SideBar