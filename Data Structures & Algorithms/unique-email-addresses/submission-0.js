class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let sent = new Map
        let count = 0

        for(let i = 0; i < emails.length ; i++){
            const {domain, local} = this.processEmail(emails[i])
            if (!sent.has(domain)){
                sent.set(domain, [local])
                count++
            } else {
                let locals = sent.get(domain)
                if (!locals.includes(local)){
                    locals.push(local)
                    count++
                }
            }
        }
        return count
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
