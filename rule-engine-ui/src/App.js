// rule-engine-ui/src/App.js
import React from 'react';
import './index.css';
import CreateRule from './components/CreateRule';
import UpdateRule from './components/UpdateRule';
import DeleteRule from './components/DeleteRule';
import CombineRule from './components/CombineRule';
import EvaluateRule from './components/EvaluateRule';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Rule Engine</h1>
      <div className="space-y-8">
        <CreateRule />
        <UpdateRule />
        <DeleteRule />
        <CombineRule />
        <EvaluateRule />
      </div>
    </div>
  );
};

export default App;
