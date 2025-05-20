import React, { createContext } from 'react';
import data from '../data';

export const PicklesContext = createContext();

export const PicklesProvider = ({ children }) => {
    return (
        <PicklesContext.Provider value={data}>
            {children}
        </PicklesContext.Provider>
    );
};