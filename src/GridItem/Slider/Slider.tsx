import React, { useState } from 'react';
import { imageProps } from '../GridItemProps';
import Slide from './Slide';
import Arrows from './Arrows';
import Counter from './Counter';
import '../style/Slider.scss';

const ImageSlider = ({ imageGallery }: { imageGallery: imageProps[] }) => {
    
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const imagesCounter = imageGallery.length;

    if (imagesCounter <= 0) {
        return null;
    }

    const hasNext = currentSlide < imagesCounter - 1;
    const hasPrev = currentSlide > 0;

    return (
        <div className='zb-grid-item-image-slider'>
            <div
                className='zb-grid-item-image-slider-container'
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
                {imageGallery.map((image, i) => {
                    const isVisible = i === currentSlide;

                    return (
                        <Slide
                            key={image.id}
                            image={image}
                            alt={image.alt}
                            isVisible={isVisible}
                        />
                    );
                })}
            </div>

            <Arrows
                hasNext={hasNext}
                hasPrev={hasPrev}
                onPrev={() => {
                    setCurrentSlide(
                        (currentSlide - 1 + imagesCounter) % imagesCounter
                    );
                }}
                onNext={() => {
                    setCurrentSlide((currentSlide + 1) % imagesCounter);
                }}
            />

            <Counter
                currentSlide={currentSlide + 1}
                total={imagesCounter}
            />
        </div>
    );
};

export default ImageSlider;
