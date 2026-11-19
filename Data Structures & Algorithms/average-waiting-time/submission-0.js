class Solution {
    /**
     * @param {number[][]} customers
     * @return {number}
     */
    averageWaitingTime(customers) {
        let avgTime = [];
        let chefTiming = 0;

        function average(array){
            let sum = 0
            array.forEach(x => sum = sum + x)
            return sum / array.length
        }

        customers.forEach((customer)=>{
            const customerArrival = customer[0]
            const chefStarts = Math.max(chefTiming, customerArrival)
            chefTiming = chefStarts + customer[1]
            avgTime.push(chefTiming - customerArrival)
        })
        return average(avgTime)
    }
}
