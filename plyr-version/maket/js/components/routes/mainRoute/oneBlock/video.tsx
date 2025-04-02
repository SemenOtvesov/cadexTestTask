import React, { useEffect } from 'react';
import style from './style';

type Tprops = {};

let timerLocal = 0;
export default ({}: Tprops) => {
    const { Video } = style();

    useEffect(() => {
        const player = new Plyr(document.getElementById('player'), {
            invertTime: false,
        });
        setTimeout(() => {
            player.currentTime = timerLocal;
        }, 100);
    });

    useEffect(() => {
        setInterval(() => {
            const timer = document.querySelector('[role="timer"]') as HTMLInputElement;
            if (timer) {
                const splitTime = timer.innerHTML.split(':');
                console.log(splitTime, +splitTime[0] * 60 + +splitTime[1]);
                if (timer.innerHTML != '00:00') {
                    timerLocal = +splitTime[0] * 60 + +splitTime[1] || 0;
                }
            }
        }, 500);
    }, []);

    return (
        <Video>
            <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="dQw4w9WgXcQ"></div>
        </Video>
    );
};
