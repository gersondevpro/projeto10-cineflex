import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Session() {
    const [movieSession, setMovieSession] = useState({})
    const [seatsMovie, setSeatsMovie] = useState([])
    const {idSessao} = useParams()
    const [checkSeat, setCheckSeat] = useState([])

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise.then((resp) => { setMovieSession(resp.data); setSeatsMovie(resp.data.seats) })
        promise.catch((err) => {console.log(err.response.data)})
    }, [])

    function selectSeat(seat) {
        if(seat.isAvailable === true) {
            const reserved = [...checkSeat, seat]
            setCheckSeat(reserved)
        }
    }
    console.log(checkSeat)
    return (
        <>
            <StyledTitlePage>Selecione o(s) assento(s):</StyledTitlePage>
            <StyledSeatsScreen>

                {seatsMovie.map((s) =>
                    <StyledSeat
                        key={s.id}
                        color={s.isAvailable.toString()}
                        onClick={() => selectSeat(s)}
                        checkSeat={checkSeat.includes(s).toString()}
                        >
                        <h6>{s.name}</h6>
                    </StyledSeat>)}
                
            </StyledSeatsScreen>
            <StyledLegendDisplay>
                <StyledLegendUnit>
                    <StyledLegendGreen/>
                    <StyledLegendText>Selecionado</StyledLegendText>
                </StyledLegendUnit>
                <StyledLegendUnit>
                    <StyledLegendGray/>
                    <StyledLegendText>Disponível</StyledLegendText>
                </StyledLegendUnit>
                <StyledLegendUnit>
                    <StyledLegendYellow/>
                    <StyledLegendText>Indisponível</StyledLegendText>
                </StyledLegendUnit>
            </StyledLegendDisplay>
        </>
    )
}

const StyledTitlePage = styled.h2`
    font-size: 20px;
    text-align: center;
    margin: 30px 0 25px 0;
    color: #293845;
`

const StyledSeatsScreen = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 7px;
    margin: 0px 17px;
`

const StyledSeat = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    background-color: ${props => props.checkSeat === "true" ? "#1AAE9E" : props.color === "true" ? "#C3CFD9" : "#FBE192"};
    border: ${props => props.checkSeat === "true" ? "1px solid #0E7D71;" : props.color === "true" ? "1px solid #808F9D" : "1px solid #F7C52B"};
    border-radius: 13px;
    margin-bottom: 15px;
    cursor: ${props => (props.color === "false" ? "none" : "pointer")};
    h6 {
        font-size: 11px;
    }
`

const StyledLegendDisplay = styled.div`
    display: flex;
    justify-content: center;
    gap: 35px;
    margin-top: 10px;
`

const StyledLegendUnit = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

const StyledLegendYellow = styled.div`
    width: 26px;
    height: 26px;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 13px;
`

const StyledLegendGray = styled.div`
    width: 26px;
    height: 26px;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 13px;
`

const StyledLegendGreen = styled.div`
    width: 26px;
    height: 26px;
    background-color: #1AAE9E;
    border: 1px solid #0E7D71;
    border-radius: 13px;
`

const StyledLegendText = styled.p`
    font-size: 13px;
`