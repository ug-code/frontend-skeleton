import './App.css';
import Footer from "./shared/footer/footer";
import Header from "./shared/header/header";
import Routes from "./router/Routes";

function App() {
    return (
        <>
            <Routes/>
            <Header/>
            <Footer/>
        </>
    );
}

export default App;
