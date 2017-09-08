class Solution:
    def countSubstrings(self, s):
        """
        全局变量害死人啊！！！！！
        :type s: str
        :rtype: int
        """
        count = 0
        if len(s) == 0:
            return count

        def check(str, i, j):
            nonlocal  count
            while i >= 0 and j < len(str) and (str[i] == str[j]):
                i -= 1
                j += 1
                count = count + 1

        for index, item in enumerate(s):
            check(s, index, index)
            check(s, index, index + 1)
        return count




