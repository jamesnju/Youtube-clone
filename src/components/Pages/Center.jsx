import React, { useState } from 'react';
import Data from './Data';
import CenterPlay from './CenterPlay';

const Center = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    }

    return (
        <div className='container-fluid centerside mt-12px'>
            {Data.map((info, index) => (
                <div key={index} onClick={() => handleVideoClick(info)}>
                    <video src={info.vedio} autoPlay loop muted />
                    {selectedVideo && <CenterPlay info={selectedVideo} />}
                </div>
            ))}
        </div>
    );
}

export default Center;
