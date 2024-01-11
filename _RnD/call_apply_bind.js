const user = { name: "Dan", age: 30, isStudent: false }

function greet() {
  console.log(`Hi! ${this.name}`)
}

greet.call(user)

