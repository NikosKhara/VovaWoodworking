import '../Css/Home/background.css';
import '../Css/nav.css';
import '../Css/Home/home-body.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Vova from '../images/VOVA.png'
import Admin from '../images/4216248-200-1.png'
import NavImg from '../images/navbar-img.png'

function Home() {

        function handleClick(){
            const nav = document.getElementById('Nav');

            nav.classList.toggle('show');
        }

  return (
    <div className="App">
        <header className="App-header container-fluid">
            <div className='row'>
                <div className="container nav">              
                    <div className="logo-nav">     
                        <a href="./Home" className="logo1">
                            <img className="logo" src={Vova} alt='logo' />
                        </a>   
                    </div> 
                    <img src={NavImg} alt='nav-img' className='navbar-tog' id='navbar-tog' onClick={handleClick} />  
                    <nav className='Nav' id='Nav'>              
                            <div className='col-1.5'>
                                <li className="nav-item">
                                    <a className="nav-link active text-white" href="./About">ABOUT</a>
                                </li>
                            </div>
                            <div className='col-1.5'>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="./Inventory">INVENTORY</a>
                                </li>
                            </div>
                            <div className='col-1.5'>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="./Contact">CONTACT</a>
                                </li>
                            </div>
                            <div className='col-1.5'>
                                <li className="nav-item">
                                    <img src={Admin} alt='Admin' />
                                </li>
                            </div>
                    </nav>
                </div>
            </div>
        </header>
        <div className='body container-fluid'>
            <div className='row front-h'>
                <div className='col-xxl-7 col-xl-6 col-lg-6 col-sm-12 col-12'>
                    <div className='front-p-cont'>
                        <p className='front-p'>VOVA<br />WOODWORKING</p>
                    </div>
                </div>
                <div className='col-xxl-5 col-xl-5 col-lg-4 col-sm-2 col-2'>
                    <div className='side-p-cont'>
                        <p className='side-p'>Do it Once, Do it Right, Make it Last</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
