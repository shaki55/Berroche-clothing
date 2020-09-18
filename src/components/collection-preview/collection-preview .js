
import React from 'react';
import CollectionItem from '../collection-item/collection-item';

const CollectionPreview= ({title, items})=>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((_item,idx)=>idx<4)
            .map(({id, ...otherItemProp})=>(
                <CollectionItem key={id} {...otherItemProp}/>
            ))}
            </div>    
        
    </div>
);

export default CollectionPreview;