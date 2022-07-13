const today = new Date
console.log(today)

// 7 kyu: Complementary DNA:

//DNA strings, symbols A and T are complements of each others, as C and G. 
//my function recieves one side of the DNA, I need to return the other side. DNA strand is never empyty or there is no DNA at all. 

// ATTGC --> TAACD
// GTAT --> CATA

//

function DNAStrand(dna) {
    const pairs = {'A' : 'T', 'T' : 'A', 'C' : 'G', 'G' : 'C'}
    return dna.split('').map(n => { pairs[n] }).join('')
}

console.log(DNAStrand('AAAA'))