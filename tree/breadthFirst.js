let node = require('./Node.js');
let binaryTree = require('./binaryTree');


function breadthFirst(tree){
    
    let queue = [];
    let result=[];
    queue.push(tree.root);
    
    while(queue.length >0){
        let temp = queue.shift();
        result.push(temp.value);
        
        if (temp.left) queue.push(temp.left);
        if (temp.right) queue.push(temp.right);

    }
    return result;
}

module.exports = breadthFirst;