/** @jsx h */
// @ts-nocheck
import { createContext, h } from 'preact';
import { useContext, useReducer } from 'preact/hooks';
import dataReducer from './reducer';


const DataStateContext: DataContext = createContext(Object.create(null));
const DataDispatchContext = createContext(null);



function DataProvider({ children, initial }) {
  const [state, dispatch] = useReducer(dataReducer, initial);
  return (
    <DataStateContext.Provider value={state} >
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataStateContext.Provider>
  );
}

function useDataState(): DataContext {
  const context = useContext(DataStateContext);
  if (context === undefined) {
    throw new Error("useDataState must be used within a DataProvider");
  }
  return context;
}

function useDataDispatch(): ({ type: ActinType, payload: any }) => void {
  const context = useContext(DataDispatchContext);
  if (context === undefined) {
    throw new Error("useDataDispatch must be used within a DataProvider");
  }
  return context;
}

export { DataProvider, useDataState, useDataDispatch };
