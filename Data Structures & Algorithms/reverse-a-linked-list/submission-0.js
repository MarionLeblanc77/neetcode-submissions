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
     * @return {ListNode}
     */
    reverseList(head) {
        if (head === null) return head
        let nextNode = head.next;
        let nextVal = head.val;
        let previousNode = new ListNode(nextVal, null);
        while (nextNode !== null) {
            let newNode = new ListNode(nextNode.val, previousNode);
            previousNode = newNode;
            nextNode = nextNode.next;
        }
        return previousNode
    }
}








