import logo from './assets/arth-logos_transparent.png';
import './SideBar.css';

function Logo(){

    return(
        <div>
            <img src = {logo} className = 'logo'></img>
        </div>


    )
}





function SideBar(){

    return(
        <div className = "sideBar">
            <Logo></Logo>
        </div>
    )


}


export default SideBar