require('../utils');
/*
    Given a list lst and a number N, create a new list
    that contains each number of the list at most N times without reordering.
    
    For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
    drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, 
    which leads to [1,2,3,1,2,3]
*/

//  Time complexity O(n^2)
const deleteNthNaive = (array, N) => {
    let newArr = []
    for(let num of array) {
        if(array.count(num) < N) newArr.push(num)
    }
    
    return newArr
}

// Runnning examples:
console.log("deleteNthNaive([1,2,3,1,2,1,2,3], 2) -> ", deleteNthNaive([1,2,3,1,2,1,2,3], 2))

//  Time complexit O(n), using hash table