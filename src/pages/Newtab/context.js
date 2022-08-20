import React, { createContext, useState } from "react";
import { get } from "../../components/Store/Store";
import { getLocalisations } from "../../components/Translation/Translation";

export const UserContext = createContext();

export const updated_localisation_store = getLocalisations({ store: get() });

export const ProviderContext = (props) => {
    const [store, setStore] = useState(updated_localisation_store);
    return <UserContext.Provider value={{ store, setStore }}>{props.children}</UserContext.Provider>
}