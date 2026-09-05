class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        let newS = []
        const isAplhaNum = (c) =>{ return ((c>="a" && c <="z") ||  (c>="A" && c <="Z") || (c>="0" && c <="9"))
        }

        for(let i = 0; i<s.length; i++){
            if(isAplhaNum(s[i])) newS.push(s[i].toLowerCase())
        }
        let i = 0
        let j = newS.length-1

        while (i<j){
            if(newS[i]!==newS[j]) return false
            i++
            j--
        }
        return true
    }
}
