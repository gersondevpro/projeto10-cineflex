import GlobalStyle from "./GlobalStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Navbar from "./Navbar"
import Poster from "./Poster"
import Time from "./Time"
import Session from "./Session"

export default function App() {

    return (
        <>
            <BrowserRouter>
            <GlobalStyle/>
                <StyledBody>
                    <Navbar />

                    <Routes>

                        <Route path="/" element={<Poster/>}></Route>
                        <Route path="/filme/:idFilme" element={<Time/>}></Route>
                        <Route path="/sessao" element={<Session/>}></Route>


                        {/* <Route path="/filme/:idFilme" element={</Exemplo de componente>}></Route>
                        <Route path="/sessao/:idSessao" element={</Exemplo de componente>}></Route>
                        <Route path="/sucesso" element={</Exemplo de componente>}></Route> */}
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

`