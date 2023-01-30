function sum(a: number, b: number): number {
    return a + b
}

interface CurrentPosition {
    x: number | undefined
    y: number | undefined
}

interface CurrentPositionWithDefault extends CurrentPosition {
    default: any
}

function position(): CurrentPosition
function position(a: number): CurrentPositionWithDefault
function position(a: number, b: number): CurrentPosition

function position(a?: number, b?: number) {
  if(!a && !b) {
    return {x: undefined, y: undefined}
  } 

  if (a && !b) {
    return {x: a, y: undefined, default: a.toString()}
  } 

    return {x: a, y: b}
}

console.log('Empty position', position())
console.log('One param', position(4))
console.log('Two params', position(13,43))
