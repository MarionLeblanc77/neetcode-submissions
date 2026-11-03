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
     * @return {number}
     */
    maxDepth(root) {

        let lvl = 0;
        let lvls = [lvl];

        function isDeeper(root, lvl) {
            if (root == null) return Math.max(...lvls);
            let newLvl = lvl + 1;
            lvls.push(newLvl);
            isDeeper(root.left, newLvl);
            isDeeper(root.right, newLvl);
        }
        isDeeper(root, lvl);
        return Math.max(...lvls)
    }
}
