import React from 'react';

const Arrows = ({
    hasNext,
    hasPrev,
    onPrev,
    onNext,
}: {
    hasNext: boolean;
    hasPrev: boolean;
    onPrev: () => void;
    onNext: () => void;
}) => {
    return (
        <div className='zb-grid-item-image-slider-arrows'>
            {hasPrev && (
                <div
                    className='zb-grid-item-image-slider-arrows-prev'
                    onClick={onPrev}
                >
                    <i className='fa-solid fa-chevron-left'></i>
                </div>
            )}
            {hasNext && (
                <div
                    className='zb-grid-item-image-slider-arrows-next'
                    onClick={onNext}
                >
                    <i className='fa-solid fa-chevron-right'></i>
                </div>
            )}
        </div>
    );
};

export default Arrows;