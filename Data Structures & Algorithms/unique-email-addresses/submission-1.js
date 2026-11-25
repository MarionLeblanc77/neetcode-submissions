class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let sent = new Set

        for(let email of emails){
            const {domain, local} = this.processEmail(email)
            sent.add(`${local}@${domain}`)
        }
        return sent.size
    }

    processEmail (email) {
        const {domain, local} = this.splitEmail(email)        
        return {domain, local : this.cleanLocal(local)}
    }
        
    cleanLocal (local) {
        return local.split("+")[0].split(".").join('')
    }
    
    splitEmail (email) {
        let splitEmail = email.split("@")
        return {domain : splitEmail[1], local : splitEmail[0]}
    }
}
