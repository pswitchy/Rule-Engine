import React, { useState } from 'react';
import axios from 'axios';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const CombineRule = () => {
    const [ruleId1, setRuleId1] = useState('');
    const [ruleId2, setRuleId2] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleCombine = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/rules/combine_rule', { rule_id_1: ruleId1, rule_id_2: ruleId2 });
            setMessage(`Rules combined with new rule ID: ${response.data.new_rule_id}`);
            setIsSuccess(true);
        } catch (error) {
            setMessage('Error combining rules: ' + error.message);
            setIsSuccess(false);
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Combine Rules</h2>
            <input
                type="text"
                value={ruleId1}
                onChange={(e) => setRuleId1(e.target.value)}
                placeholder="Enter first rule ID"
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                value={ruleId2}
                onChange={(e) => setRuleId2(e.target.value)}
                placeholder="Enter second rule ID"
                className="w-full p-2 border rounded"
            />
            <button onClick={handleCombine} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Combine Rules</button>
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

export default CombineRule;