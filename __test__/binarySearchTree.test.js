"use strict";
let Node = require('../tree/Node.js');
let BinarySearchTree = require('../tree/binarySearchTree');
///////////
let bst = new BinarySearchTree();
bst.add(5);
bst.add(2);
bst.add(8);
bst.add(9);
bst.add(7);
bst.add(4);
bst.add(3);
/////////////

describe('contains method for binary search tree', () => {

    it('contains(5)', () => {

        expect( bst.contains(5) ).toEqual(true)
        
    });

    it('contains(4)', () => {

        expect( bst.contains(4) ).toEqual(true);

    });

    it('contains(8)', () => {   

        expect( bst.contains(8) ).toEqual(true);
    });

    it('contains(1)', () => {

        expect( bst.contains(1) ).toEqual(false);
    });

});