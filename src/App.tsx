import React from 'react';
import {delay} from './sprint3/js10';

function App() {
    const delay = (time: number | undefined) => {
        return new Promise((res) => {
            setTimeout(res, time);
        });
    };

    delay(2000).then(() => {
        console.log("Hello");
    });
    return (
        <div className="App">
        </div>
    );
}

export default App;
