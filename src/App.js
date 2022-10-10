import GlobalStyle from "./GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Navbar from "./Navbar"
import Poster from "./Poster"
import Time from "./Time"
import Session from "./Session"
import Success from "./Success"

export default function App() {

    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <StyledBody>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Poster />}></Route>
                        <Route path="/filme/:idFilme" element={<Time />}></Route>
                        <Route path="/sessao/:idSessao" element={<Session />}></Route>
                        <Route path="/sucesso" element={<Success />}></Route>
                    </Routes>
                </StyledBody>
            </BrowserRouter>
        </>
    )
}

const StyledBody = styled.div`
    font-family: 'Roboto', sans-serif;
    position: relative;
    margin-top: 105px;
    margin-bottom: 150px;
    box-sizing: border-box;
`