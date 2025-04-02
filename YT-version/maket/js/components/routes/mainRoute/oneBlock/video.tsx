import React from 'react';
import style from './style';

type Tprops = {};

export default ({}: Tprops) => {
    const { Video } = style();
    return (
        <Video>
            <iframe
                width="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=_wow01VoIisAG2H1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
            ></iframe>
        </Video>
    );
};
