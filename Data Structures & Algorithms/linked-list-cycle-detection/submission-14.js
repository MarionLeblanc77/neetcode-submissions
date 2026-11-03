/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {

        if (!head) return false
        
        let storageArray = [head];
        let upperNode = head.next;
        let index = storageArray.indexOf(upperNode, 0);

        while (index === -1 && upperNode !== null) {
            storageArray.push(upperNode);
            upperNode = upperNode.next;
            index = storageArray.indexOf(upperNode, 0)
        }
        return index !== -1
    }
}
