import React from 'react';
import GridItem from './GridItem/GridItem';
import './App.scss';

function App() {

    const randomImages = [] ;

    for (let i = 0; i < 10; i++) {
        randomImages.push({
            id: i,
            url: `https://loremflickr.com/320/240/kitten?random=${Math.random()}`,
            alt: 'placeholder',
        });
    }

    const item = {
        images: randomImages,
        title: 'Example Item Title',
        description: 'Example description for the item goes here.',
    };

    return (
        <div className='App'>
            <div className='grid'>
                <GridItem item={item} />
            </div>
        </div>
    );
}

export default App;
