import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import WeekMovie from "./WeekMovie"

export default function Time() {
    const [movie, setMovie] = useState({})
    const [schedule, setSchedule] = useState([])
    const {idFilme} = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)

        promise.then((resp) => { setMovie(resp.data); setSchedule(resp.data.days)})
        promise.catch((err) => {console.log(err.response.data)})
    }, [])


        return (
            <div>
                <StyledTitlePage>Selecione o horário:</StyledTitlePage>
                {schedule.map((value) => <WeekMovie value={value} key={value.id} movie={movie}/>)}
            </div>
        )
}

const StyledTitlePage = styled.h2`
    font-size: 20px;
    text-align: center;
    margin: 30px 0 25px 0;
    color: #293845;
`