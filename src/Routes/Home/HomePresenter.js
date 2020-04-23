import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Lists = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const List = styled.li`
    width: 200px;
    margin-bottom: 30px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #e3e3e3;
    overflow: hidden;
`;

const Title = styled.h2`
    margin-top: 70px;
    margin-bottom: 30px;
    font-size: 26px;
    font-weight: 700;
`;

const Poster = styled.div`
    height: 300px;
    img {
        vertical-align: top;
        height: 100%;
    }
`;

const Desc = styled.div`
    padding: 26px 10px 12px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    strong {
        width: 100%;
        display: block;
        font-size: 1em;
        font-weight: 700;
        color: #000;
        line-height: 1.2;
    }
    p {
        color: rgba(0, 0, 0, 0.6);
        line-height: 1.5;
    }
    span {
        position: absolute;
        top: -19px;
        left: 10px;
        width: 38px;
        height: 38px;
        padding: 2px;
        border-radius: 50%;
        background: #081c22;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        font-size: 14px;
        &:after {
            content: '%';
            font-size: 2px;
        }
    }
`;

const ListMore = styled.button`
    display: block;
    width: 100%;
    font-size: 16px;
    padding: 10px;
    text-align: center;
    background: none;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    text-transform: uppercase;
`;

class HomePresenter extends React.Component {
    render() {
        const {
            nowPlaying,
            upcoming,
            popular,
            topRated,
            error,
            loading,
        } = this.props;
        return (
            <>
                {loading ? (
                    'loading'
                ) : (
                    <>
                        <Container>
                            <Title>Now Playing Movies</Title>
                            <Lists>
                                {nowPlaying.map((item, idx) => (
                                    <List key={idx}>
                                        <Poster>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                                                alt={item.title}
                                            />
                                        </Poster>
                                        <Desc>
                                            <strong>{item.title}</strong>
                                            <p>{item.release_date}</p>
                                            <span>
                                                {item.vote_average * 10}
                                            </span>
                                        </Desc>
                                    </List>
                                ))}
                            </Lists>
                            <ListMore>List More</ListMore>
                        </Container>
                        <Container>
                            <Title>Upcoming Movies</Title>
                            <Lists>
                                {upcoming.map((item, idx) => (
                                    <List key={idx}>
                                        <Poster>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                                                alt={item.title}
                                            />
                                        </Poster>
                                        <Desc>
                                            <strong>{item.title}</strong>
                                            <p>{item.release_date}</p>
                                            <span>
                                                {item.vote_average * 10}
                                            </span>
                                        </Desc>
                                    </List>
                                ))}
                            </Lists>
                            <ListMore>List More</ListMore>
                        </Container>
                        <Container>
                            <Title>Popular Movies</Title>
                            <Lists>
                                {popular.map((item, idx) => (
                                    <List key={idx}>
                                        <Poster>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                                                alt={item.title}
                                            />
                                        </Poster>
                                        <Desc>
                                            <strong>{item.title}</strong>
                                            <p>{item.release_date}</p>
                                            <span>
                                                {item.vote_average * 10}
                                            </span>
                                        </Desc>
                                    </List>
                                ))}
                            </Lists>
                            <ListMore>List More</ListMore>
                        </Container>
                        <Container>
                            <Title>Top Rated Movies</Title>
                            <Lists>
                                {topRated.map((item, idx) => (
                                    <List key={idx}>
                                        <Poster>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                                                alt={item.title}
                                            />
                                        </Poster>
                                        <Desc>
                                            <strong>{item.title}</strong>
                                            <p>{item.release_date}</p>
                                            <span>
                                                {item.vote_average * 10}
                                            </span>
                                        </Desc>
                                    </List>
                                ))}
                            </Lists>
                            <ListMore>List More</ListMore>
                        </Container>
                    </>
                )}
            </>
        );
    }
}

export default HomePresenter;
