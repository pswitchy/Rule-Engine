import React, { useState } from 'react';
import axios from 'axios';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const EvaluateRule = () => {
    const [ruleId, setRuleId] = useState('');
    const [evaluationInput, setEvaluationInput] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleEvaluate = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/rules/evaluate_rule', { rule_id: ruleId, input: evaluationInput });
            setMessage(`Rule evaluation result: ${response.data.result}`);
            setIsSuccess(true);
        } catch (error) {
            setMessage('Error evaluating rule: ' + error.message);
            setIsSuccess(false);
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Evaluate Rule</h2>
            <input
                type="text"
                value={ruleId}
                onChange={(e) => setRuleId(e.target.value)}
                placeholder="Enter rule ID"
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                value={evaluationInput}
                onChange={(e) => setEvaluationInput(e.target.value)}
                placeholder="Enter input for evaluation"
                className="w-full p-2 border rounded"
            />
            <button onClick={handleEvaluate} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Evaluate Rule</button>
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

export default EvaluateRule;