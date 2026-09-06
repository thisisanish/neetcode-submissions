class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let hashy:Record<number,number> =  {}
        for(let i = 0; i<nums.length; i++){
            if(!hashy[nums[i]]) hashy[nums[i]] = 1
            else hashy[nums[i]]++
        }

       return Object.entries(hashy).sort((a,b)=>b[1]-a[1]).slice(0,k).map(a=> Number(a[0]))
    }
}
