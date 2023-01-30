const str: string = 'hello world'
const isOpen: boolean = true
let sum: number = 34.4
const arr: number[] = [1,2,3]
const strArr: Array<string> = ['4334']

//Tuple
const contact: [string, number] = ['Vladilen', 2332]

//any
let color: any = 'green'
color = 434

function sayPhrase (phrase: string): void {
    console.log(phrase)
}
sayPhrase('hello person')

//never
function throwError(message: string): never {
    throw new Error('Custom Error')
}

function infinite(): never {
    infinite() //while(true) {}
}

//Type
type Login = string
const login: Login = 'Pavel'

type Id = string | number
const id1: Id = '43'
const id2: Id = 45

type someType = string | null | undefined