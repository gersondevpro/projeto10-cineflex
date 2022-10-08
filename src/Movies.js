import styled from "styled-components"

export default function Movies({film, screen, setScreen}) {

    return(
        <StyledPoster>
            <img 
                onClick={() => displayTime(film)}
                src={film.posterURL}
                alt={film.title}
            />
        </StyledPoster>
    )
}

const StyledPoster = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        width: 145px;
        height: 209px;
        img {
            width: 129px;
            height: 193px;
        }
`