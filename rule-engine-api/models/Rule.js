// rule-engine-api/models/Rule.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NodeSchema = new Schema({
    nodeType: String,
    value: String,
    left: Schema.Types.Mixed,
    right: Schema.Types.Mixed,
});

const RuleSchema = new Schema({
    rule_id: { type: String, unique: true },
    rule_tree: NodeSchema,
    metadata: {
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now }
    }
});

const Rule = mongoose.model('Rule', RuleSchema);
module.exports = Rule;
