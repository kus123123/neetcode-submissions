class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unique_num = new Set(nums)
        if (unique_num.size !== nums.length){
            return true
        }
        return false 
    }
}
