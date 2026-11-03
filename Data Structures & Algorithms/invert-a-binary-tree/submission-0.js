/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        function invert(root){
            if (root === null) return null
            else {
                let leftNode = invert(root.left);
                let rightNode = invert(root.right);
                root.left = rightNode;
                root.right = leftNode
                return root
            }
        }
        return invert(root);
        
    }
}
