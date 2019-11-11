function findOdds(nums, b){
    return nums.filter((numbers) => numbers%b == 0)
}

console.log(findOdds([1,2,3,4,5,6], 3))
console.log(findOdds([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5))