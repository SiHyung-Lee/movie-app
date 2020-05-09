import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    grid-gap: 40px;
    position: relative;
    padding: 30px 40px;
    margin: 0 -50px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    background-color: #000;
    color: #fff;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            to right,
            rgba(13.73%, 18.04%, 14.9%, 1) 150px,
            rgba(21.96%, 23.53%, 22.35%, 0.84) 100%
        );
    }
`;

const Poster = styled.div`
    position: relative;
    width: 300px;
    overflow: hidden;
    border-radius: 10px;
    img {
        width: 100%;
    }
`;

const Description = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: center;
    line-height: 1.4;
`;

const Title = styled.h1`
    width: 100%;
    font-size: 35px;
`;

const Subtitle = styled.h2`
    width: 100%;
    margin: 20px 0 8px;
    font-size: 20px;
`;

const Genres = styled.span`
    span {
        margin-right: 10px;
        margin-left: 10px;
    }
`;

const Release = styled.span``;

const Average = styled.span``;

const Overview = styled.p``;

class DetailPresenter extends React.Component {
    render() {
        const { result, creditsResult, loading } = this.props;
        return (
            <>
                {loading ? (
                    'loading'
                ) : (
                    <>
                        {console.log(creditsResult)}
                        <Header
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${result.poster_path})`,
                            }}>
                            <Poster>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                                    alt=""
                                />
                            </Poster>
                            <Description>
                                <Title>{result.title}</Title>
                                <Release>{result.release_date}</Release>
                                <Genres>
                                    {result.genres.map((item, idx) => (
                                        <span key={idx}>{item.name}</span>
                                    ))}
                                </Genres>
                                <Average>{result.vote_average}</Average>
                                <Subtitle>Overview</Subtitle>
                                <Overview>{result.overview}</Overview>
                            </Description>
                        </Header>
                        <ul>
                            {creditsResult.data.cast.map((who, idx) => (
                                <li key={idx}>{who.name}</li>
                            ))}
                        </ul>
                    </>
                )}
            </>
        );
    }
}

export default DetailPresenter;
