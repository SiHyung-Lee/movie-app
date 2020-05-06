import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    padding: 30px 40px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    background-image: url(${`https://image.tmdb.org/t/p/w500/${poster}`});
`;

const Poster = styled.div``;

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
                    <Header>
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
