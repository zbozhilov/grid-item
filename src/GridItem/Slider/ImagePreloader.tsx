import React, { useEffect, useState } from 'react';
import { imageProps } from '../GridItemProps';
import Loader from './Loader';

const ImagePreloader = ({
    image,
    alt,
    isVisible,
}: {
    image: imageProps;
    alt: string;
    isVisible: boolean;
}) => {
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        let mounted = true;

        if (!isVisible) {
            return;
        }

        const img = new Image();
        img.src = image.url;
        img.onload = () => {
            if (!mounted) {
                return;
            }
            setLoaded(true);
        };

        return () => {
            mounted = false;
            img.onload = null;
        };
    }, [image.url, isVisible]);

    return (
        <div className='zb-grid-item-image-slider-preload'>
            {!loaded && <Loader />}
            {loaded && (
                <img
                    src={image.url}
                    alt={alt}
                    style={{ display: loaded ? 'block' : 'none' }}
                    onLoad={() => {
                        setLoaded(true);
                    }}
                />
            )}
        </div>
    );
};

export default ImagePreloader;