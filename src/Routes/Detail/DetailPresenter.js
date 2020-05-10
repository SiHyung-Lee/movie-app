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
    font-weight: 700;
`;

const Subtitle = styled.h2`
    width: 100%;
    margin: 20px 0 8px;
    font-size: 20px;
    font-weight: 600;
`;

const Sectiontitle = styled.h2`
    width: 100%;
    margin: 20px 0;
    font-size: 23px;
    font-weight: 600;
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

const Profiles = styled.ul`
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    > li {
        width: 140px;
        min-width: 140px;
        overflow: hidden;
        margin-right: 15px;
        border-radius: 10px;
        border: 1px solid lightgray;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        .thumbnail {
            display: flex;
            align-items: center;
            height: 210px;
            background-color: #dbdbdb;
            img {
                width: 100%;
            }
        }

        .name {
            display: block;
            padding-top: 10px;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 16px;
            font-weight: 600;
        }
        .character {
            display: block;
            padding-top: 5px;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 14px;
        }
    }
`;

class DetailPresenter extends React.Component {
    render() {
        const { result, creditsResult, loading } = this.props;
        return (
            <>
                {loading ? (
                    'loading'
                ) : (
                    <>
                        {console.log(result)}
                        <Header
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${result.backdrop_path})`,
                            }}
                        >
                            <Poster>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                                    alt=''
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
                        <Sectiontitle>Top Billed Cast</Sectiontitle>
                        <Profiles>
                            {creditsResult.data.cast.map((cast, idx) => (
                                <li key={idx}>
                                    <span className='thumbnail'>
                                        <img
                                            src={
                                                cast.profile_path
                                                    ? `https://image.tmdb.org/t/p/w200/${cast.profile_path}`
                                                    : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`
                                            }
                                            alt={cast.name}
                                        />
                                    </span>
                                    <strong className='name'>
                                        {cast.name}
                                    </strong>
                                    <span className='character'>
                                        {cast.character}
                                    </span>
                                </li>
                            ))}
                        </Profiles>
                    </>
                )}
            </>
        );
    }
}

export default DetailPresenter;
