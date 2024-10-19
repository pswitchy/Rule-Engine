import React, { useState } from 'react';
import axios from 'axios';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';

const UpdateRule = () => {
  const [ruleId, setRuleId] = useState('');
  const [ruleString, setRuleString] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/rules/update_rule/${ruleId}`, { rule_string: ruleString });
      setMessage('Rule updated successfully');
      setIsSuccess(true);
    } catch (error) {
      setMessage('Error updating rule: ' + error.message);
      setIsSuccess(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Update Rule</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={ruleId}
          onChange={(e) => setRuleId(e.target.value)}
          placeholder="Enter rule ID"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
          placeholder="Enter new rule"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Update Rule</button>
      </form>
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

export default UpdateRule;