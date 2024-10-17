// rule-engine-ui/src/App.js
import React from 'react';
import CreateRule from './components/CreateRule';
import UpdateRule from './components/UpdateRule';
import DeleteRule from './components/DeleteRule';

function App() {
    return (
        <div className="App">
            <h1>Rule Engine</h1>
            <CreateRule />
            <UpdateRule />
            <DeleteRule />
        </div>
    );
}

export default App;
