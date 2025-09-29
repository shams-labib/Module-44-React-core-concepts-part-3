import React, { createContext } from 'react';
import Grandpa from './Grandpa';
import './family.css'

export const AssetContext = createContext('');



const FamilyTree = () => {
    const asset = 'Diamond'
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <AssetContext.Provider value={asset}>
                <Grandpa></Grandpa>
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;