import React, { useState } from 'react';
import axios from 'axios';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';

const CreateRule = () => {
  const [ruleString, setRuleString] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/rules/create_rule', { rule_string: ruleString });
      setMessage(`Rule created with ID: ${response.data.rule_id}`);
      setIsSuccess(true);
    } catch (error) {
      setMessage('Error creating rule: ' + error.message);
      setIsSuccess(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Create Rule</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
          placeholder="Enter rule"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Create Rule</button>
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

export default CreateRule;