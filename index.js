'use strict';

let BinaryTree = require("./binaryTree");
let binarySearchTree = require("./binarySearchTree");
let Node = require("./Node");


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

let preOrder = tree.preOrder();
console.log('pre order: ', preOrder);
//pre order > 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5



let inOrder = tree.inOrder();
console.log('in order: ', inOrder);
//pre order > 6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5



let postOrder = tree.postOrder();
console.log('post order: ', postOrder);
//pre order > 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1


let bst = new binarySearchTree();
bst.add(5);
bst.add(2);
bst.add(8);
bst.add(9);
bst.add(7);
bst.add(4);
bst.add(3);

console.log("BST preOrder",bst.preOrder());

console.log(bst.contains(5));
console.log(bst.contains(4));
console.log(bst.contains(8));
console.log(bst.contains(1));