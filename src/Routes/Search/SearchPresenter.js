import React from 'react';
import styled from 'styled-components';
import Poster from '../../Components/Poster';

const Form = styled.form`
    padding: 20px 20px;
    background-color: lightgray;
    label {
        display: none;
    }

    input {
        display: inline-block;
        box-sizing: border-box;
        width: calc(100% - 100px);
        height: 40px;
        padding: 0 15px;
        border: none;
        vertical-align: top;
        font-size: 16px;
        background: #fff;
    }

    button {
        display: inline-block;
        box-sizing: border-box;
        width: 100px;
        height: 40px;
        font-size: 16px;
        text-transform: uppercase;
        border: none;
        border-left: 1px solid #eee;
    }
`;

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

const Sectiontitle = styled.h2`
    width: 100%;
    margin: 20px 0;
    font-size: 23px;
    font-weight: 600;
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

class SearchPresenter extends React.Component {
    render() {
        const {
            searchTerm,
            movieResults,
            tvResults,
            loading,
            handleChangeInput,
            handleSubmitSearch,
        } = this.props;
        return (
            <>
                <Title>Search</Title>
                <Form onSubmit={handleSubmitSearch}>
                    <label htmlFor='searchInput'>Keyword</label>
                    <input
                        type='text'
                        id='searchInput'
                        value={searchTerm}
                        onChange={handleChangeInput}
                        placeholder='Input search keyword'
                    />
                    <button type='submit' onClick={handleSubmitSearch}>
                        Submit
                    </button>
                </Form>
                <ul>
                    {loading ? (
                        ''
                    ) : (
                        <>
                            <Container>
                                <Sectiontitle>
                                    Search Movies Results about '{searchTerm}'
                                </Sectiontitle>
                                <Lists>
                                    {movieResults.map((item, idx) => (
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
                                <Sectiontitle>
                                    Search TV Results about '{searchTerm}'
                                </Sectiontitle>
                                <Lists>
                                    {tvResults.map((item, idx) => (
                                        <List key={idx}>
                                            <Poster
                                                id={item.id}
                                                category={'show'}
                                                title={item.name}
                                                poster={item.poster_path}
                                                release={item.first_air_date}
                                                vote={item.vote_average}
                                            />
                                        </List>
                                    ))}
                                </Lists>
                                <ListMore>List More</ListMore>
                            </Container>
                        </>
                    )}
                </ul>
            </>
        );
    }
}

export default SearchPresenter;
