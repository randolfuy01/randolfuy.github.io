import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';

export const Typewriting = () => {

    const[text] = useTypewriter({
        words: ['building pipelines', 'creating models', 'designing system designs', 'studying algorithms', 'developing projects', 'deploying on the cloud'],
        loop: true,
        typeSpeed: 100
    })

    return (
        <div className='font-semibold font-mono text-center text-2xl'>
            <h1>
                Currently {' '}
                <span className = 'typewriter'>
                    {text}
                </span>
                <span>
                    <Cursor cursorStyle='|'/>
                </span>
            </h1>
        </div>
    );
};