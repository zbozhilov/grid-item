# Grid Item Component 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A very basic grid item component including Title, Description and Item Image gallery with image preloader

# Example

```javascript

import React from 'react';
import GridItem from './GridItem/GridItem';

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

```
