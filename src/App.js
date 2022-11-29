import './scss/app.scss'
import Header from "./Components/Header";
import MainPhoto from "./Components/MainPhoto";
import CompanyBlock from "./Components/CompanyBlock";
import ProductionBlock from "./Components/ProductionBlock";
import ContactsBlock from "./Components/ContactsBlock";
import Footer from "./Components/Footer";
import {useRef} from "react";

function App() {
    return (
        <div className="App">
            <Header />
            <MainPhoto id={'MainPhoto'}/>
            <CompanyBlock id={'CompanyBlock'}/>
            <ProductionBlock id={'ProductionBlock'}/>
            <ContactsBlock id={'ContactsBlock'}/>
            <Footer/>
        </div>
    );
}

export default App;
