class Solution {
    /**
     * @param {number[][]} customers
     * @return {number}
     */
    averageWaitingTime(customers) {
        let waitingTime = 0;
        let chefTiming = 0;

        customers.forEach((customer)=>{
            const customerArrival = customer[0]
            const chefStarts = Math.max(chefTiming, customerArrival)
            chefTiming = chefStarts + customer[1]
            waitingTime = waitingTime + (chefTiming - customerArrival)
        })
        return waitingTime / customers.length
    }
}
