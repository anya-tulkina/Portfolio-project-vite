import './App.css'
import {Header} from "./components/layout/header/Header.tsx";
import {Main} from "./components/layout/section/main/Main.tsx";
import {Works} from "./components/layout/section/works/Works.tsx";
import {Testimony} from "./components/layout/section/testimony/Testimony.tsx";
import {Contacts} from "./components/layout/section/contacts/Contacts.tsx";
import {Footer} from "./components/layout/footer/Footer.tsx";
import {AboutMe} from "./components/layout/section/aboutMe/AboutMe.tsx";

function App() {
    return (
        <div className={"main-container"}>
            <Header/>
            <Main/>
            <AboutMe/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App

