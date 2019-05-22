import React from 'react';


interface PictureProfileProps {
    pictureProfile: string
}


const PictureProfile = (props: PictureProfileProps) => {
    const { pictureProfile } = props;
    
   return(
        <div className="media-left">
            <p className="image is-64x64">
                <img src={pictureProfile} />
            </p>
        </div>
    )
};

PictureProfile.defaultProps = {
    pictureProfile: "",
}

export default PictureProfile;