class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const hash = new Map()
       for (let s of strs){
        // 26 character set (signature)
        const count = new Array(26).fill(0) 
        for (let c of s){
            // distance from "a". basically index
            const index = c.charCodeAt(0) - "a".charCodeAt(0)
            count[index]++
        }
        // signature / key created. indepident of position. only frequency.
        const key = count.join(",")

        if(!hash[key]){
            hash[key] = []
        }
        hash[key].push(s)
       }
       return Object.values(hash)
    }
}
