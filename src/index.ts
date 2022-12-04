type Operacion =  "add" | "substract" | "multiply" | "divide"

const calcular = (a: number, b: number, op: Operacion) => {
  if(op == "add") return a + b
  if(op == "substract") return a - b
  if(op == "multiply") return a * b
  
  if(op == "divide" && b != 0) return a / b

  throw new Error("Operation not implemented")
}

calcular(2,4,"add")