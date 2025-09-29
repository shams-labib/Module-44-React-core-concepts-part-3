import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';





const Special = () => {
    const newAsset = useContext(AssetContext);
    console.log(newAsset)
    return (
        <div>
            <h3>Special</h3>
        </div>
    );
};

export default Special;