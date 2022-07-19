"use strict";


function fizzBuzz(tree){

    
        // root -> left -> right
        let result = [];
        let tt=[];
        let traverse = (root) => {
            if (root == null) return;
            tt.push(root.value);
            if (root.value %3 ==0 && root.value %5 ==0) root.value = "fizzBuzz";
            if (root.value %3 ==0) root.value = "fizz";
            if (root.value %5 ==0) root.value = "buzz";
            
            result.push(root.value);
            traverse(root.left);
            traverse(root.right);

            return;
        }

        traverse(tree.root);
        console.log('tt',tt);
        console.log('result',result);
        return result;
    
}

module.exports= fizzBuzz;