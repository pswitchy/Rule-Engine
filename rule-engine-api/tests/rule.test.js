// rule-engine-api/tests/rule.test.js
const { parseRule, combineRules, evaluateRule } = require('../utils/ruleUtils');

test('parseRule should correctly parse a rule string into an AST', () => {
    const ruleString = "age > 30 AND department = 'Sales'";
    const ast = parseRule(ruleString);
    expect(ast).toMatchObject({
        nodeType: 'operator',
        value: 'AND',
        left: { nodeType: 'operand', value: 'age > 30' },
        right: { nodeType: 'operand', value: "department = 'Sales'" }
    });
});

test('combineRules should correctly combine multiple rules into a single AST', () => {
    const rule1 = parseRule("age > 30 AND department = 'Sales'");
    const rule2 = parseRule("age < 25 AND department = 'Marketing'");
    const combinedAST = combineRules([rule1, rule2]);
    
    expect(combinedAST).toMatchObject({
        nodeType: 'operator',
        value: 'AND',
        left: {
            nodeType: 'operator',
            value: 'AND',
            left: { nodeType: 'operand', value: 'age > 30' },
            right: { nodeType: 'operand', value: "department = 'Sales'" },
        },
        right: {
            nodeType: 'operator',
            value: 'AND',
            left: { nodeType: 'operand', value: 'age < 25' },
            right: { nodeType: 'operand', value: "department = 'Marketing'" },
        },
    });
});

test('evaluateRule should correctly evaluate a rule against provided data', () => {
    const ruleTree = parseRule("age > 30 AND department = 'Sales'");
    const data = { age: 35, department: 'Sales', salary: 60000, experience: 3 };
    const result = evaluateRule(ruleTree, data);
    
    expect(result).toBe(true);
});

test('evaluateRule should return false when data does not match the rule', () => {
    const ruleTree = parseRule("age > 30 AND department = 'Sales'");
    const data = { age: 25, department: 'Marketing', salary: 60000, experience: 3 };
    const result = evaluateRule(ruleTree, data);
    
    expect(result).toBe(false);
});
