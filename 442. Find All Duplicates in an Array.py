class Solution(object):
    def findDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        temp = {}
        rs = []
        for item in nums:
            if item not in temp:
                temp[item] = 1
            else:
                rs.append(item)
        return rs

