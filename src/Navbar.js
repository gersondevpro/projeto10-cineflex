import styled from "styled-components"

export default function Navbar() {
    return(
        <>
            <StyleNavbar>
                <h1>CINEFLEX</h1>
            </StyleNavbar>
        </>
    )
}

const StyleNavbar = styled.div`
    background-color: #C3CFD9;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 34px;
        color: #E8833A;
    }
`