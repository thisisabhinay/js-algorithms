
Array.prototype.count = function(num) {
    let i = 0
    let map = {}
    
    if(!this.includes(num)) return 0
    
    while( i < this.length) {
        let current = this[i]
        i++
        if(map[current]) {
            map[current]++
            continue
        }
        
        map[current] = 1
    }

    return map[num]
}
