import React, {useEffect} from 'react';
import './App.css';
import AppRoutes from "./AppRoutes/AppRoutes";
import { useSyncSongsData } from "./hooks/useSyncSongsData";

function App() {
 //   useSyncSongsData();
    return (
        <div className="App">
           <AppRoutes/>
        </div>
    );
}

export default App;
