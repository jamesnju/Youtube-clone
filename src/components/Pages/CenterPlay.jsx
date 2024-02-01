import React from 'react';

const CenterPlay = ({ info }) => {
    if (!info) {
        return <div>No video selected</div>;
    }
    return (
        <div>
            <video src={info.vedio} autoPlay loop muted />
        </div>
    );
}

export default CenterPlay;
