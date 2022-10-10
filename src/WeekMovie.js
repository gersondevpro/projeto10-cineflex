import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export default function WeekMovie({ value, movie }) {
    return (
        <div>
            <StyledMovie>
                <h3 data-identifier="session-date">{value.weekday} - {value.date}</h3>
                <StyledMovieBox>
                    <Link to={`/sessao/${value.showtimes[0].id}`}>
                        <StyledMovieBoxUnit data-identifier="hour-minute-btn">
                            <h4 data-identifier="session-date">{value.showtimes[0].name}</h4>
                        </StyledMovieBoxUnit>
                    </Link>
                    <Link to={`/sessao/${value.showtimes[1].id}`}>
                        <StyledMovieBoxUnit data-identifier="hour-minute-btn">
                            <h4 data-identifier="session-date">{value.showtimes[1].name}</h4>
                        </StyledMovieBoxUnit>
                    </Link>
                </StyledMovieBox>
                <StyleFooterMovie>
                    <StyledMovieImage>
                        <img src={movie.posterURL} alt={movie.title} data-identifier="movie-img-preview"/>
                    </StyledMovieImage>
                    <h2>{movie.title}</h2>
                </StyleFooterMovie>
            </StyledMovie>
        </div>
    )
}

const StyledMovie = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    margin-top: 40px;
    margin-bottom: 30px;
    h3 {
        margin-left: 20px;
    }
    `

const StyledMovieBox = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    margin-left: 20px;
    `

const StyledMovieBoxUnit = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 82px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 5px;
    border: none;
    text-decoration: none;
    h4 {
        font-size: 18px;
        color: #FFFFFF;
        text-align: center;
        text-decoration: none;
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