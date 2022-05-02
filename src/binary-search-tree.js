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
    this.main = removeNode(this.main, data);

        function removeNode(node, data) {
          console.log(data)
            if(data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if(node.data < data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                if(!node.left && !node.right) {
                    return null;
                }
            }

            if(!node.left)  {
                node = node.right;
                return node;
            }       

            if(!node.right) {
                node = node.right;
                return node;
            }

            let minFromRight = node.right;
            while(minFromRight.left) {
                minFromRight = minFromRight.left;
            }

            node.data = minFromRight.data;

            node.right = removeNode(node.right, minFromRight.data);
            return node;
        }
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