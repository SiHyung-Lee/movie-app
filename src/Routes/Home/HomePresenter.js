import React from 'react';
import styled from 'styled-components';
import Poster from '../../Components/Poster';

const Container = styled.div``;

const Lists = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px;
    margin-bottom: 30px;
`;

const List = styled.li`
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
            //error,
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
                                        <Poster
                                            id={item.id}
                                            category={'movie'}
                                            title={item.title}
                                            poster={item.poster_path}
                                            release={item.release_date}
                                            vote={item.vote_average}
                                        />
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
                                        <Poster
                                            id={item.id}
                                            category={'movie'}
                                            title={item.title}
                                            poster={item.poster_path}
                                            release={item.release_date}
                                            vote={item.vote_average}
                                        />
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
                                        <Poster
                                            id={item.id}
                                            category={'movie'}
                                            title={item.title}
                                            poster={item.poster_path}
                                            release={item.release_date}
                                            vote={item.vote_average}
                                        />
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
                                        <Poster
                                            id={item.id}
                                            category={'movie'}
                                            title={item.title}
                                            poster={item.poster_path}
                                            release={item.release_date}
                                            vote={item.vote_average}
                                        />
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
