"use strict";

let fizzBuzz = require("../tree/fizz_buzz.js");
let Node = require("../tree/Node.js");
let BinaryTree = require("../tree/binaryTree");

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
let fifteen = new Node(15);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;
five.right= fifteen;


tree = new BinaryTree(one);


describe("fizzBuzz",()=>{

    it("fizzBuzz",()=>{
        // console.log(fizzBuzz(tree));
        expect( fizzBuzz(tree) ).toEqual([1,2,"fizz",7,8,"fizz","fizz",4,"buzz",'fizzBuzz']);
    });

});