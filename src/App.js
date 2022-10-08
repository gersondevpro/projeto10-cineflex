import GlobalStyle from "./GlobalStyle"
import styled from "styled-components"
import Navbar from "./Navbar"
import Poster from "./Poster"
import Time from "./Time"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {

    return (
        <>
            <BrowserRouter>
            <GlobalStyle/>
                <StyledBody>
                    <Navbar />

                    <Routes>

                        <Route path="/" element={<Poster/>}></Route>
                        <Route path={`/filme/:idFilme`} element={<Time/>}></Route>


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
`