import ImagePreloader from './ImagePreloader';
import { imageProps } from '../GridItemProps';
import React from 'react';

const Slide = ({
    image,
    alt,
    isVisible,
}: {
    image: imageProps;
    alt: string;
    isVisible: boolean;
}) => {
    return (
        <div className='zb-grid-item-image-slider-slide'>
            <ImagePreloader
                image={image}
                alt={alt}
                isVisible={isVisible}
            />
        </div>
    );
};

export default Slide;
