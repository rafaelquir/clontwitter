import React from 'react';
import Icon from './Icon';
import { Post } from '../models/Post';
import PictureProfile from './PictureProfile';
import '../styles/Tweet.css';

interface TweetProps extends Post {
    key?: string,
    onLike?: Function,
}


const Tweet = (props: TweetProps) => {

    const { id, comments, key, content, error, likes, picture, timestamp, onLike, userId } = props;

    const icon = <Icon id={id} iconName="heart" checked={true} key={key} onClick={onLike}/>

    
    return (
        <div className="box card">
            <div className="media">
                <PictureProfile pictureProfile={picture}></PictureProfile>
                <div className="media-content">
                    <div className="content">
                        <p>
                             <span className="name"> Nombre del usuario {/* name*/}</span> <span className="userName">@Nombreusuario{/*userId*/}{/*timestamp.toLocaleDateString()*/}</span> 
                            <br />
                            {content}
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            {icon}
                            <a className="level-item">
                                <span className="icon is-small"><i className="fas fa-reply"></i></span>
                            </a>
                            <a className="level-item">
                                <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="media-right">
                    <button className="delete"></button>
                </div>
            </div>
        </div>
    );
   
}

export default Tweet;
