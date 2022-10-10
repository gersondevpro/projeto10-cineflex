import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";


export default function Success({request}) {
    console.log(request)
    const location = useLocation()
    const seatsReserved = location.state.seats
    return (
        <>
            <StyledTitlePage>Pedido feito <br></br> com sucesso!</StyledTitlePage>
            <StyledSuccessScreen>
                <StyledSuccessUnit>
                    <h3>Filme e sessão</h3>
                    <h4>{location.state.movie.movie.title} <br></br> {location.state.movie.day.date} ({location.state.movie.name})</h4>
                </StyledSuccessUnit>
                <StyledSuccessUnit>
                    <h3>Ingressos</h3>
                    {seatsReserved.map((s) => <h5 key={s}>Assento {s}</h5>)}
                </StyledSuccessUnit>
                <StyledSuccessUnit>
                    <h3>Comprador</h3>
                    <h4>Nome: {location.state.name} <br></br> CPF: {location.state.cpf}</h4>
                </StyledSuccessUnit>
            </StyledSuccessScreen>
            <Link to="/">
                <StyledSuccessButton><h4>Voltar pra Home</h4></StyledSuccessButton>
            </Link>
        </>
    )
}

const StyledTitlePage = styled.h2`
    font-size: 25px;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
    margin: 30px 0 50px 0;
    color: #247A6B;
`

const StyledSuccessScreen = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;
    gap: 30px;
`

const StyledSuccessUnit = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    h3 {
        font-size: 24px;
        font-weight: 700;
        color: #293845;
    }
    h4 {
        font-size: 22px;
        color: #293845;
        line-height: 30px;
    }
    h5 {
        font-size: 22px;
        color: #293845;
        line-height: 15px;
    }
`

const StyledSuccessButton = styled.button`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 225px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 5px;
    border: none;
    margin-top: 150px;
    text-decoration: none;
    h4 {
        font-size: 18px;
        color: #FFFFFF;
        text-align: center;
    }
`