class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
 

        const mappy = new Map()
        for(let i = 0; i<nums.length; i++){
            const current = nums[i]
            const compliment = target-nums[i]
            if(mappy.has(current)) return [i,mappy.get(current)]
            mappy.set(compliment,i)
        }

    }
}
