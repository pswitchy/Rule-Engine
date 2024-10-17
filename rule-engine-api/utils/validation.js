// rule-engine-api/utils/validation.js
const validAttributes = ['age', 'department', 'salary', 'experience'];

function validateAttributes(ruleTree) {
    if (ruleTree.nodeType === 'operand') {
        const attr = ruleTree.value.split(' ')[0];
        if (!validAttributes.includes(attr)) {
            throw new Error(`Invalid attribute: ${attr}`);
        }
    } else if (ruleTree.nodeType === 'operator' || ruleTree.nodeType === 'function') {
        if (ruleTree.left) validateAttributes(ruleTree.left);
        if (ruleTree.right) validateAttributes(ruleTree.right);
    }
}

module.exports = validateAttributes;
