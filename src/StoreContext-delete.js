import React from "react";
const StoreContextDelete = React.createContext(null);
export default StoreContextDelete;

export const Provider = (props) =>{
    return  <StoreContextDelete.Provider value={props.store}>
        {props.children}
    </StoreContextDelete.Provider>
}