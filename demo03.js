function func(x) {
  return (x < x) && (x === x) && (x > x)
}

// func({valueOf:_=>n--%2},n=2)

let a = [1, 2, ,2, 1]
a.toString= () => a.shift()
console.log(func(a))
// console.log(func({ valueOf: () => n-- % 2 }, n=2))