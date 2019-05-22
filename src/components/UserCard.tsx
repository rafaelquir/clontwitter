import React, { ReactElement } from 'react';
import { User } from '../models/User';
import PictureProfile from '../components/PictureProfile';
import '../styles/UserCard.css';


interface UserProps extends User {
    key?: string;
}


const UserCard = (props: UserProps): ReactElement => {
    console.log("PROPS DE LA USERCARD");
    console.log(props);
    const { description } = props;
    const {name} = props;
    const {username} = props;
    
    return (
        <div className="box card">
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <PictureProfile></PictureProfile>
                    </p>

                </figure>
                <div className = "media-content">
                    <div >
                        <span className="name">{name} </span> <span className="userName">@ {username}</span>
                    </div>
                    <div>
                        {description}
                    </div> 
                </div>
            </article>
        </div>
    );
    
}

export default UserCard;