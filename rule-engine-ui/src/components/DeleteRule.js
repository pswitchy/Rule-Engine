import React, { useState } from 'react';
import axios from 'axios';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';

const DeleteRule = () => {
  const [ruleId, setRuleId] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/rules/delete_rule/${ruleId}`);
      setMessage('Rule deleted successfully');
      setIsSuccess(true);
    } catch (error) {
      setMessage('Error deleting rule: ' + error.message);
      setIsSuccess(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Delete Rule</h2>
      <div className="flex space-x-4">
        <input
          type="text"
          value={ruleId}
          onChange={(e) => setRuleId(e.target.value)}
          placeholder="Enter rule ID"
          className="flex-grow p-2 border rounded"
        />
        <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete Rule</button>
      </div>
      {message && (
        <Alert variant={isSuccess ? "default" : "destructive"}>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>{isSuccess ? "Success" : "Error"}</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default DeleteRule;