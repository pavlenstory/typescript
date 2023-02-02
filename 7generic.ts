const arrayOfNumber: Array<number> = [1,4,5]
const arrayOfStrings: Array<string> = ['one','two','four']


function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumber)
reverse(arrayOfStrings)