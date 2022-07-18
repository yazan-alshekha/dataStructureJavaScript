"use strict";

let BinaryTree = require('../tree/binaryTree.js');
let Node = require('../tree/Node.js');
let BinarySearchTree = require('../tree/binarySearchTree');
let breadthFirst = require("../tree/breadthFirst.js");

////////////////////////
let tree = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

tree = new BinaryTree(one);
/////////////////////////
let bst = new BinarySearchTree();
bst.add(5);
bst.add(2);
bst.add(8);
bst.add(9);
bst.add(7);
bst.add(4);
bst.add(3);

///////////////////
describe('breadthFirst', () => {

    it('correct case BinaryTree', () => {

        expect(breadthFirst(tree)).toEqual([1, 2, 3, 6, 4, 5, 7, 8, 9]);
        
    });

    it('correct case BinarySearchTree', () => {

        expect(breadthFirst(bst)).toEqual([5,2,8,4,7,9,3]);

    });

});