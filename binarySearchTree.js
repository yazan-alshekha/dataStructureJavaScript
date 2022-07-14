'use strict';

let binaryTree = require('./binaryTree');
let Node = require("./Node");

class binarySearchTree extends binaryTree {

    constructor(root = null) {
        super();
        this.root = root;
    }

    add(value) {

        let newNode1 = new Node(value);


        let traverse = (newNode, root) => {

            // if the tree is empty 
            if (root == null) {
                this.root = newNode;
                return;
            }
            // console.log(newNode.value , root);
            if (newNode.value >= root.value) {
                if (root.right) {
                    traverse(newNode, root.right);
                    return;
                }

                else {
                    root.right = newNode;
                    return;
                }
            }

            else if (newNode.value < root.value) {
                if (root.left) {
                    traverse(newNode, root.left);
                    return;
                }
                else {
                    root.left = newNode;
                    return;
                }

            }

        }
        // this.root=newNode1;
        traverse(newNode1, this.root);
    }






    contains = (value) => {
        let result = null;


        let traverse = (value, root) => {

            if (root) {
                if (value == root.value) {  return true; }

                if (value > root.value) {  return traverse(value, root.right); }

                if (value < root.value) {  return traverse(value, root.left); }
            }
            return false;
        }

        return traverse(value, this.root);

    }


}

module.exports = binarySearchTree;