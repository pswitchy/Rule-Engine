// rule-engine-api/models/Node.js
class Node {
    constructor(nodeType, value = null, left = null, right = null) {
        this.nodeType = nodeType;  // "operator" or "operand"
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

module.exports = Node;
