import React, { useState } from 'react';
import axios from 'axios';

const UpdateRule = () => {
    const [ruleId, setRuleId] = useState('');
    const [ruleString, setRuleString] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/rules/update_rule/${ruleId}`, { rule_string: ruleString });
            setMessage('Rule updated successfully');
        } catch (error) {
            setMessage('Error updating rule: ' + error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ruleId}
                    onChange={(e) => setRuleId(e.target.value)}
                    placeholder="Enter rule ID"
                />
                <input
                    type="text"
                    value={ruleString}
                    onChange={(e) => setRuleString(e.target.value)}
                    placeholder="Enter new rule"
                />
                <button type="submit">Update Rule</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UpdateRule;
