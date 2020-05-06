import React from 'react';
import styled from 'styled-components';

const Title = styled.h1``;

const Text = styled.p``;

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
        return (
            <>
                {loading ? (
                    'loading'
                ) : (
                    <>
                        <Title>{title}</Title>
                        <Text>{overview}</Text>
                        <Text>{release}</Text>
                        <Text>{average}</Text>
                        <Text>
                            {genres.map((item, idx) => (
                                <span key={idx}>{item.name}</span>
                            ))}
                        </Text>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${poster}`}
                            alt=""
                        />
                    </>
                )}
            </>
        );
    }
}

export default DetailPresenter;
