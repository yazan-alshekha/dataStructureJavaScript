"use strict";

let BinaryTree = require("../tree/binaryTree");

let Node = require("../tree/Node");


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
6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5
describe('Binary tree', () => {

    it('preOrder', () => {

        expect( tree.preOrder() ).toEqual([1,2,6,7,8,9,3,4,5]);
        
    });

    it('inOrder', () => {

        expect( tree.inOrder() ).toEqual([6,8,7,9,2,1,4,3,5]);

    });
    8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1
    it('postOrder', () => {

        expect( tree.postOrder() ).toEqual([8,9,7,6,2,4,5,3,1]);

    });

});