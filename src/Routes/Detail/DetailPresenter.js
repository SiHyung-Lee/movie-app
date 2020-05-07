import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    padding: 30px 40px;
    margin: 0 -50px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    background-color: #000;
`;

const Poster = styled.div`
    width: 300px;
    overflow: hidden;
    border-radius: 10px;
    img {
        width: 100%;
    }
`;

const Description = styled.div``;

const Title = styled.h1``;

const Genres = styled.span``;

const Release = styled.span``;

const Average = styled.span``;

const Overview = styled.p``;

class DetailPresenter extends React.Component {
    render() {
        const {
            title,
            overview,
            release,
            average,
            genres,
            poster,
            loading,
        } = this.props;
        console.log(loading, poster);
        return (
            <>
                {loading ? (
                    'loading'
                ) : (
                    <Header
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster})`,
                        }}>
                        <Poster>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${poster}`}
                                alt=""
                            />
                        </Poster>
                        <Description>
                            <Title>{title}</Title>
                            <Release>{release}</Release>
                            <Genres>
                                {genres.map((item, idx) => (
                                    <span key={idx}>{item.name}</span>
                                ))}
                            </Genres>
                            <Average>{average}</Average>
                            <Overview>{overview}</Overview>
                        </Description>
                    </Header>
                )}
            </>
        );
    }
}

export default DetailPresenter;
