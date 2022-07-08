'use strict';

let Node = require("./Node");


class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        // root -> left -> right
        let result = [];

        let traverse = (root) => {
            if (root == null) return;
            result.push(root.value);
            traverse(root.left);
            traverse(root.right);

            return;
        }

        traverse(this.root);
        return result;
    }

    inOrder() {
        //  left -> root ->right
        let result = [];

        let traverse = (root) => {
            if (root == null) return;
            traverse(root.left);
            result.push(root.value);
            traverse(root.right);

            return;
        }

        traverse(this.root);
        return result;
    }

    postOrder() {
        //  left -->right > root 
        let result = [];

        let traverse = (root) => {
            if (root == null) return;
            traverse(root.left);
            traverse(root.right);
            result.push(root.value);

            return;
        }

        traverse(this.root);
        return result;



    }

}

module.exports = BinaryTree;