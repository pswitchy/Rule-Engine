// rule-engine-api/utils/ruleUtils.js
const Node = require('../models/Node');
const customFunctions = {
    customFunction: (age, department) => {
        return age > 30 && department === 'Sales';
    }
};

function parseRule(ruleString) {
    // Tokenize rule string
    const tokens = tokenize(ruleString);
    // Parse tokens into an AST
    return buildAST(tokens);
}

function evaluateRule(ruleTree, data) {
    if (ruleTree.nodeType === 'operand') {
        const [attr, operator, value] = ruleTree.value.split(' ');
        switch (operator) {
            case '>':
                return data[attr] > Number(value);
            case '<':
                return data[attr] < Number(value);
            case '=':
                return data[attr] === value.replace(/'/g, '');
            // Add more operators as needed
        }
    } else if (ruleTree.nodeType === 'operator') {
        if (ruleTree.value === 'AND') {
            return evaluateRule(ruleTree.left, data) && evaluateRule(ruleTree.right, data);
        } else if (ruleTree.value === 'OR') {
            return evaluateRule(ruleTree.left, data) || evaluateRule(ruleTree.right, data);
        }
    } else if (ruleTree.nodeType === 'function') {
        const func = customFunctions[ruleTree.value];
        const args = ruleTree.args.map(arg => data[arg]);
        return func(...args);
    }
}

function buildAST(tokens) {
    // Placeholder logic to build AST
    let index = 0;

    function parseExpression() {
        let token = tokens[index];

        if (token === '(') {
            index++;
            const node = parseExpression();
            index++; // Skip ')'
            return node;
        }

        if (token in customFunctions) {
            const func = token;
            index++; // Skip function name
            const args = [];
            while (tokens[index] !== ')') {
                if (tokens[index] !== ',') {
                    args.push(tokens[index]);
                }
                index++;
            }
            index++; // Skip ')'
            return new Node('function', func, args);
        }

        const node = new Node('operand', token);
        index++;
        return node;
    }

    return parseExpression();
}

function tokenize(ruleString) {
    return ruleString.replace(/(\(|\)|\,)/g, ' $1 ').trim().split(/\s+/);
}

module.exports = {
    parseRule,
    buildAST,
    tokenize,
    evaluateRule
};
