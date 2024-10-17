const express = require('express');
const router = express.Router();
const Rule = require('../models/Rule');
const { parseRule, combineRules, evaluateRule } = require('../utils/ruleUtils');
const { v4: uuidv4 } = require('uuid');
const validateAttributes = require('../utils/validation');

// Create a rule
router.post('/create_rule', async (req, res) => {
    try {
        const { rule_string } = req.body;
        const ruleTree = parseRule(rule_string);
        validateAttributes(ruleTree); 
        const rule = new Rule({ rule_id: uuidv4(), rule_tree: ruleTree });
        await rule.save();
        res.status(201).send(rule);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Combine rules
router.post('/combine_rules', async (req, res) => {
    try {
        const { rules } = req.body;
        const ruleTrees = rules.map(parseRule);
        const combinedRuleTree = combineRules(ruleTrees);
        res.send({ combined_rule_tree: combinedRuleTree });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Evaluate rule
router.post('/evaluate_rule', async (req, res) => {
    try {
        const { rule_tree, data } = req.body;
        if (!rule_tree || !data) {
            throw new Error('Invalid data format');
        }
        const result = evaluateRule(rule_tree, data);
        res.send({ result });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Update a rule
router.put('/update_rule/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { rule_string } = req.body;
        const ruleTree = parseRule(rule_string);
        const rule = await Rule.findOne({ rule_id: id });
        if (rule) {
            rule.rule_tree = ruleTree;
            rule.metadata.updated_at = Date.now();
            await rule.save();
            res.send(rule);
        } else {
            res.status(404).send({ error: 'Rule not found' });
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Get a rule by ID
router.get('/rule/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rule = await Rule.findOne({ rule_id: id });
        if (rule) {
            res.send(rule);
        } else {
            res.status(404).send({ error: 'Rule not found' });
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Delete a rule
router.delete('/delete_rule/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const rule = await Rule.findOneAndDelete({ rule_id: id });
        if (rule) {
            res.send({ message: 'Rule deleted' });
        } else {
            res.status(404).send({ error: 'Rule not found' });
        }
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;
