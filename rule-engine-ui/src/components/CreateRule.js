import React, { useState } from 'react';
import axios from 'axios';

const CreateRule = () => {
    const [ruleString, setRuleString] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/rules/create_rule', { rule_string: ruleString });
            setMessage(`Rule created with ID: ${response.data.rule_id}`);
        } catch (error) {
            setMessage('Error creating rule: ' + error.message);
        }
    };
    // console.log(ruleString);
    // console.log(message);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ruleString}
                    onChange={(e) => setRuleString(e.target.value)}
                    placeholder="Enter rule"
                />
                <button type="submit">Create Rule</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CreateRule;
