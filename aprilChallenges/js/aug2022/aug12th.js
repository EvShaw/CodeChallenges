const today = new Date
console.log(today)

function hello(name) {
    if(!name) return 'Hello, World!'
    
    let n = name.split('')[0].toUpperCase() + name.split('').slice(1).join('').toLowerCase()
    
    return `Hello, ${n}!`
  }

  
