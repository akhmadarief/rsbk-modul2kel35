import React from 'react';

function greetings(praktikan) {
    return praktikan.name + ' dari ' + praktikan.jurusan;
}

const praktikan = {
    name: 'Akhmad Arief Widodo',
    jurusan: 'Teknik Komputer 2017'
};

// Menggunakan JSX
const ReactJSX = () => {
    return (
        <div>
            <h1>Hello Asisten RSBK</h1>
            <h2>Perkenalkan saya {greetings(praktikan)}!</h2>
            <p style={{color:'#00ff00'}}>Ini adalah contoh penggunaan JSX</p>
        </div>
    )
}

// Ini tanpa menggunakan JSX
const ReactNoJSX = () => {
    return React.createElement('div', null,
        React.createElement('h1', null, 'Hello Asisten RSBK'),
        React.createElement('h2', null, 'Perkenalkan saya ', greetings(praktikan)),
        React.createElement('p', {style: {color:'#ff0000'}}, 'Ini adalah contoh tanpa JSX :(')
    )
}

export default ReactJSX;
export {ReactNoJSX};
