import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Session() {
    const [movieSession, setMovieSession] = useState({})
    const [seatsMovie, setSeatsMovie] = useState([])
    const {idSessao} = useParams()
    const [checkSeat, setCheckSeat] = useState([])
    const [numberSeat, setNumberSeat] = useState([])
    const [checkName, setCheckName] = useState("")
    const [checkCPF, setCheckCPF] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise.then((resp) => { setMovieSession(resp.data); setSeatsMovie(resp.data.seats) })
        promise.catch((err) => {console.log(err.response.data)})
    }, [])

    function selectSeat(seat) {

        if(checkSeat.includes(seat.id)) {
            const arr = checkSeat.filter((s) => seat.id !== s)
            const nums = numberSeat.filter((n) => seat.name !== n)
            setCheckSeat(arr)
            setNumberSeat(nums)

        } else if (seat.isAvailable === true) {
            const reserved = [...checkSeat, seat.id]
            setCheckSeat(reserved)
            const numsSeat = [...numberSeat, seat.name]
            setNumberSeat(numsSeat)

        } else if (seat.isAvailable === false) {
            alert("Esse assento não está disponível")
        }
    }

    function addSelection(event) {
        event.preventDefault()
        alert("Deu certo!")

        const request = {
            seats: numberSeat,
            movie: movieSession,
            ids: checkSeat,
            name: checkName,
            cpf: checkCPF
        }

        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", request)

        promise.then(() => {
            alert("envio de reserva deu certo")
            navigate("/sucesso", {state: request})
        })

        promise.catch((err) => {
            console.log(err.response.data.mensagem)
        })
    }
    console.log(movieSession)
    if(Object.keys(movieSession).length !== 0) {
    return (
        <>
            <StyledTitlePage>Selecione o(s) assento(s):</StyledTitlePage>
            <StyledSeatsScreen>

                {seatsMovie.map((s) =>
                    <StyledSeat
                        key={s.id}
                        color={s.isAvailable.toString()}
                        onClick={() => selectSeat(s)}
                        checkSeat={checkSeat.includes(s.id).toString()}
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

            <StyledFormScreen onSubmit={addSelection}>
                <StyledForm>
                    <label forhtml="name">Nome do comprador:</label>
                    <input
                        id="name" 
                        name="name" 
                        type="text" 
                        placeholder="Digite seu nome..."
                        onChange={(e) => setCheckName(e.target.value)}
                        required>
                        </input>
                </StyledForm>
                <StyledForm>
                    <label forhtml="cpf">CPF do comprador:</label>
                    <input
                        id="cpf"
                        name="cpf"
                        type="text"
                        placeholder="Apenas números..."
                        onChange={(e) => setCheckCPF(e.target.value)}
                        required>
                        </input>
                </StyledForm>
                    <button type="submit"><h4>Reservar assento(s)</h4></button>
            </StyledFormScreen>
            <StyleFooterMovie>
                <StyledMovieImage>
                    <img src={movieSession.movie.posterURL} alt={movieSession.movie.title} />
                </StyledMovieImage>
                <h2>{movieSession.movie.title}</h2>
            </StyleFooterMovie>
        </>
    )} else {
        return <div>Carregando...</div>
    }
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

const StyledFormScreen = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    gap: 20px;
    button {
        display: flex;
    justify-content: center;
    align-items: center;
    width: 225px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 5px;
    border: none;
    margin-top: 10px;
    h4 {
        font-size: 18px;
        color: #FFFFFF;
        text-align: center;
    }
    }
`

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
        font-size: 18px;
    }
    input {
        width: 327px;
        height: 51px;
        font-size: 18px;
        font-style: italic;
        color: #AFAFAF;
        border-radius: 5px;
        border: none;
        border: 1px solid #D5D5D5;
        padding-left: 20px;
    }
`

const StyleFooterMovie = styled.div`
    width: 100vw;
    height: 117px;
    background-color: #9EADBA;
    position: fixed;
    z-index: 1;
    bottom: 0;
    border: 1px solid #9EADBA;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    h2 {
        font-size: 20px;
        color: #293845;
    }
    `

const StyledMovieImage = styled.div`
    background-color: #FFFFFF;
    width: 64px;
    height: 89px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    img {
        width: 48px;
        height: 72px;
    }
`