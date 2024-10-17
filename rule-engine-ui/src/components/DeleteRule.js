import React, { useState } from 'react';
import axios from 'axios';

const DeleteRule = () => {
    const [ruleId, setRuleId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/rules/delete_rule/${ruleId}`);
            setMessage('Rule deleted successfully');
        } catch (error) {
            setMessage('Error deleting rule: ' + error.message);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={ruleId}
                onChange={(e) => setRuleId(e.target.value)}
                placeholder="Enter rule ID"
            />
            <button onClick={handleDelete}>Delete Rule</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteRule;
