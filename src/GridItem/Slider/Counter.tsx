import React from 'react';

const Counter = ({
    currentSlide,
    total,
}: {
    currentSlide: number;
    total: number;
}) => {
    return (
        <div className='zb-grid-item-image-slider-counter'>
            {currentSlide} / {total}
        </div>
    );
};

export default Counter;