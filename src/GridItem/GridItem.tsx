import React from 'react';
import Slider from './Slider/Slider';
import { GridItemProps } from './GridItemProps';
import './style/GridItem.scss';

const GridItem = (props: GridItemProps) => {
    const { item } = props;

    return (
        <div className='zb-grid-item'>
            <Slider imageGallery={item.images} />
            {item.title && <div className='zb-grid-item-title'>{item.title}</div>}
            {item.description && <div className='zb-grid-item-description'>{item.description}</div>}
        </div>
    );
};

export default GridItem;
