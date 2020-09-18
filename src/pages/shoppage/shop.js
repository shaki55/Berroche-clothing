import React from 'react';
import SHOP_DATA from './shopda';
import CollectionPreview from '../../components/collection-preview/collection-preview '
 

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            collections: SHOP_DATA
        };
    }


    render(){
        const {collections}=this.state
        return(
            <div className='shop-page'>
                {collections.map(({id, ...collectionprops})=>(
                    <CollectionPreview key={id} {...collectionprops}/>
                ))}

            </div>
        
        )
    }
}

export default ShopPage;