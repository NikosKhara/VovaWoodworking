import '../Css/About/about-backgrounds.css';
import '../Css/nav.css';
import '../Css/About/about.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Vova from '../images/VOVA.png'
import Admin from '../images/4216248-200-1.png'
import NavImg from '../images/navbar-img.png'
import meetTheOwner from '../images/356392192_1032486871131406_1303385691663870325_n-1.png'

function About() {

        function handleClick(){
            const nav = document.getElementById('Nav');

            nav.classList.toggle('show');
        }

  return (
    <div className="App container-fluid">
        <div className='container-fluid header-body c'>
            <div className='container-fluid header-bg'>
                <header className="App-header">
                    <div className='row'>
                        <div className="container nav">              
                            <div className="logo-nav">     
                                <a href="./Home" className="logo1">
                                    <img className="logo" src={Vova} alt='logo' />
                                </a>   
                            </div> 
                            <img src={NavImg} alt='nav-img' className='navbar-tog' id='navbar-tog' onClick={handleClick} />  
                            <nav className='Nav' id='Nav'>              
                                    <div className='col-xxl-1.5'>
                                        <li className="nav-item">
                                            <a className="nav-link active text-white" href="./About">ABOUT</a>
                                        </li>
                                    </div>
                                    <div className='col-xxl-1.5'>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="./Inventory">INVENTORY</a>
                                        </li>
                                    </div>
                                    <div className='col-xxl-1.5'>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="./Contact">CONTACT</a>
                                        </li>
                                    </div>
                                    <div className='col-xxl-1.5'>
                                        <li className="nav-item">
                                            <img src={Admin} alt='Admin' />
                                        </li>
                                    </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
            <div className='container-fluid main-header'>
                <div className='row'>
                    <div className='col-xxl-12'>
                        <p className='text-white main-h mx-auto'>ABOUT</p>
                    </div>
                </div>
            </div> 
        </div>
        <div className='about-body container-fluid'>
            <div className='row about'>
                <div className='col-xl-4 col-lg-0'>
                    <p className='about-p-1 text-white'>
                        <b>Vova Woodworking</b> offers the best price along with the cleanest work 
                        in the Statham area. With the ability to do tables, chairs, and drawers, 
                        we can fulfil all your woodworking needs. We’re continually enhancing out 
                        proccess to always provide our customers with the best products.
                    </p>
                </div>
                <div className='col-xl-3 col-lg-12'>
                    <p className='about-p-hidden text-white mx-auto'>
                        <b>Founded in 2023</b> Vova Woodworking is a privately owned, local business. 
                        We have already established a solid reputation in the area as a company 
                        that you can trust to deliver high quality and sustainable products that 
                        will last for generations. We also offers the best price along with the cleanest work 
                        in the Statham area. We’re continually enhancing out 
                        proccess to always provide our customers with the best products.
                    </p>
                </div>
                <div className='col-xl-4 col-lg-0'>
                    <p className='about-p-2 text-white'>
                        <b>Founded in 2023</b> Vova Woodworking is a privately owned, local business. 
                        We have already established a solid reputation in the area as a company 
                        that you can trust to deliver high quality and sustainable products that 
                        will last for generations.
                    </p>
                </div>
            </div>
            <div className='row meet-the-owner-h'>
                <div className='col-xl-12'>
                    <p className='meet-the-owner-head text-white mx-auto'>
                        MEET THE OWNER
                    </p>
                </div>
            </div>
            <div className='row meet-the-owner'>
                <div className='col-xl-4 col-lg-12'>
                    <p className='meet-the-owner-p text-white mx-lg-auto'>
                        <b>Vladimir Kharabora</b> has been woodworking for over 10 years in which he perfected 
                        the creation of coffee tables, large dining room tables, outdoor chairs, and cabinets. 
                        In 2023 he finally decided to start his own business. He has been selling his products 
                        locally for over 3 years to many people in the area who can vouch for his ability's. 
                        Vlademir is also a family man who has been married for 5 years and has 2 kids.
                    </p>
                </div>
                <div className='col-xl-2 col-lg-0'></div>
                <div className='col-xl-4 col-lg-6 col-md-7 col-10 mx-xl-0 mx-auto'>
                    <img src={meetTheOwner} alt='Meet The Owner' className='meet-the-owner-img mx-auto' />
                </div>
            </div>
            <div className='row'>
                <div className='col-xl-12'>
                    <p className='text-white copyright mx-auto'>LLC © Vova Woodworking 2024</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;