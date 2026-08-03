import { createContext, useState } from 'react';
import "./FamilyTree.css";
import GrandPa from "./GrandPa";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0)

const FamilyTree = () => {
    const asset = "Diamond";
    const newAsset = "Gold"
    const [money, setMoney] = useState(0);

    return (
        <div className="family-tree">
            <h1 className="text-3xl text-center mb-10">Family Tree</h1>
            <p>Total Family Money: {money}</p>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <GrandPa asset={asset}></GrandPa>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;

/** 
 * 1. create a context using createContext with default value
 * make sure you export the context to be used in other file
 * 
 * 
*/