import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Thumbnail = styled.div`
    background: #dbdbdb
        url(https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg)
        no-repeat 50% 50%;
    background-size: 50%;
    padding-top: 141.997012%;
    position: relative;
    height: 0;
    img {
        position: absolute;
        top: 0;
        left: 0;
        vertical-align: top;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Desc = styled.div`
    padding: 26px 15px 12px;
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
        left: 12px;
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

class Poster extends React.Component {
    render() {
        const { id, category, title, poster, release, vote } = this.props;
        return (
            <Link to={`/${category}/${id}`}>
                <Thumbnail>
                    {poster ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${poster}`}
                            alt={title}
                        />
                    ) : (
                        ''
                    )}
                </Thumbnail>
                <Desc>
                    <strong>{title}</strong>
                    <p>{release}</p>
                    <span>{vote * 10}</span>
                </Desc>
            </Link>
        );
    }
}

export default Poster;
