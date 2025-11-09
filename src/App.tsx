import './App.css'
import {Header} from "./components/layout/header/Header.tsx";
import {Main} from "./components/layout/section/main/Main.tsx";
import {Skills} from "./components/layout/section/skills/Skills.tsx";
import {Works} from "./components/layout/section/works/Works.tsx";
import {Testimony} from "./components/layout/section/testimony/Testimony.tsx";
import {Contacts} from "./components/layout/section/contacts/Contacts.tsx";
import {Footer} from "./components/layout/footer/Footer.tsx";

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App

