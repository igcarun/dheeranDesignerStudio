import { createContext } from "react";

const DataContext = createContext(null);

export const DataProvider = ({children}) => {

    const title = 'Dheeran Studio';

    return (<DataContext.Provider value={{title}}>
        {children}
    </DataContext.Provider>
    )
}

export default DataContext;