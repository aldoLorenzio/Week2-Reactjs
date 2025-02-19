var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // Handle empty array case

    let i = 0; // Pointer for the next unique element
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) { // If we find a new unique value
            i++;                   // Move `i` to the next position
            nums[i] = nums[j];      // Place the new unique value at `nums[i]`
        }
    }

    return nums.slice(0, i + 1); // Return the count of unique elements
};

console.log(removeDuplicates([1,3,3,5,5,6,7,8,8]))