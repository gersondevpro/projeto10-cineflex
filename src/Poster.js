import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import Movies from "./Movies"

export default function Poster({film}) {
    
    const [films, setFilms] = useState([])
    const [error, setError] = useState(false)
    const [screen, setScreen] = useState(false)

    useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        
        promise.then((res) => { setFilms(res.data) })
        promise.catch((erro) => {console.log(erro.response.data)})

    }, [])

    function displayTime(movie) {
        setScreen(!screen)
        console.log(screen)
    }

    {}
    return (
        <>
            <StyledTitlePage>Selecione o filme</StyledTitlePage>
            <StyledScreenPoster>
                {films.map((film) => <Movies key={film.id} film={film} screen={screen} setScreen={setScreen}/>)}
            </StyledScreenPoster>
        </>
    )
}

const StyledTitlePage = styled.h2`
    font-size: 20px;
    text-align: center;
    margin: 35px 0 30px 0;
    color: #293845;
`

const StyledScreenPoster = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-bottom: 30px;
`