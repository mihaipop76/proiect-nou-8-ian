import logo from './logo.svg';
import './scss/main.scss';
import muntiiFagaras from "./images/muntii-fagaras.jpg"
import {Contributors} from "./contributors";

function App() {
    return (
        <div className="App">

            <header className="container">
                <h1 className="logo">MIHAI POP</h1>
                <input type="checkbox" id="show-menu"/>
                <label className="menu" for="show-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav className="mobile-menu">
                    <ul>
                        <li className="menu-items">
                            <a href="#" className="active">Despre mine</a>
                        </li>
                        <li className="menu-items">
                            <a href="#">Hobby</a>
                        </li>
                        <li className="menu-items">
                            <a href="#">Servicii</a>
                        </li>
                        <li className="menu-items">
                            <a href="#">CONTACT</a>
                        </li>
                    </ul>
                </nav>
                <nav className="desktop-menu">
                    <ul>
                        <li className="menu-items">
                            <a href="#" className="active">Despre mine</a>
                        </li>
                        <li className="menu-items">
                            <a href="#">Hobby</a>
                        </li>
                        <li className="menu-items">
                            <a href="#">Servicii</a>
                        </li>
                        <li className="menu-items">
                            <a href="#">CONTACT</a>
                        </li>
                    </ul>
                </nav>

            </header>

            <section className="banner">
                <div className="container">
                    <h1>Aceasta este proiectul meu final</h1>
                    <p>Colaboratori</p>

                </div>
            </section>
            <div className="row mt-5">
                <div className="col">
                    <Contributors/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <div className="card">
                        <img src="images/transfagarasan.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Titlul primei poze</h5>
                            <p className="card-text">Un exemplu de loc de vizitat</p>
                            <a href="#" className="btn btn-primary">Porneste undeva</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card">
                        <img src={muntiiFagaras} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Titlul celei de a doua poze</h5>
                            <p className="card-text">Un exemplu de loc de vizitat</p>
                            <a href="#" className="btn btn-primary">Porneste undeva</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div className="card">
                        <img src="images/muntii-fagaras-2.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Titlul celei de a treia poze</h5>
                            <p className="card-text">Un exemplu de loc de vizitat</p>
                            <a href="#" className="btn btn-primary">Porneste undeva</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="row footer">
                    <div className="container">
                        <div className="col">
                            Acesta e footer-ul paginii mele.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
