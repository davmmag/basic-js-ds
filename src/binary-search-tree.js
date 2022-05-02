const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.main = null;
  }

  root() {
    return this.main;
  }

  add(data) {
        const newNode = new Node();
        newNode.data = data;
        if(this.main === null) {
            this.main = newNode;
            return;
        }
        this._addItem(this.main, newNode);
  }

  _addItem(current, newNode) {
    if(newNode.data < current.data) {
        if(current.left === null) {
            current.left = newNode;
        } else {
            this._addItem(current.left, newNode);
        }
    }
  
    if(newNode.data > current.data) {
        if(current.right === null) {
            current.right = newNode;
        } else {
            this._addItem(current.right, newNode);
        }
    }
  
    if(newNode.data === current.data) {
        return current.data;
    }
  }

  has(data) {
    return searchWithin(this.main, data);

    function searchWithin(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      return data < node.data ?
        searchWithin(node.left, data) :
        searchWithin(node.right, data);
      }
  }

  find(data) {
    return searchWithin(this.main, data);

    function searchWithin(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      return data < node.data ?
        searchWithin(node.left, data) :
        searchWithin(node.right, data);
      }
  }

  remove(data) {
    if (this.main === null) {
      return null;
    }

    this.main = this._deleteNode(this.main, data);
  }

  _deleteNode(currentNode, itemValue) {
    if (currentNode.data === itemValue) {
      if (currentNode.left === null && currentNode.right === null) {
        return null;
      }

      if (currentNode.left === null) {
        return currentNode.right;
      }

      if (currentNode.right === null) {
        return currentNode.left;
      }

      const minNodeInRightSubtree = this._findMinElement(currentNode.right);
      currentNode.data = minNodeInRightSubtree.data;

      currentNode.right = this._deleteNode(
        currentNode.right,
        minNodeInRightSubtree.data
      );
      return currentNode;
    }

    if (itemValue < currentNode.data) {
      if (currentNode.left === null) {
        return currentNode;
      }

      currentNode.left = this._deleteNode(currentNode.left, itemValue);
      return currentNode;
    }

    if (itemValue > currentNode.data) {
      if (currentNode.right === null) {
        return currentNode;
      }

      currentNode.right = this._deleteNode(currentNode.right, itemValue);
      return currentNode;
    }
  }

  _findMinElement(node) {
    if (node.left === null) return node;

    return this._findMinElement(node.left);
  }

  min() {
    let current = this.main;
    if(current.left === null) return current;
    while(current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.main;
    if(current.right === null) return current;
    while(current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};