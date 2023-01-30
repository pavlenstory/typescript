interface Person {
    readonly id: string,
    color?: string,
    person: {
        age: number,
        name?: string
    }
}

const rect: Person = {
    id: '4',
    person: {
        age: 43
    }
}

const rect2 = {} as Person
const rect3 = <Person>{}

/////////////////////

interface PersonWithSize extends Person {
    size: {
        width: number
        height: number
    },
    getName: () => string
}

const rect4: PersonWithSize = {
    id: '43',
    person: {
        age: 43,
        name: 'Max'
    },
    size: {
        width: 18,
        height: 43
    },
    getName: () => this.person.name
}

interface IDate {
    date: Date
    setDate(date: Date): void
}

class customDate implements IDate {
    date: Date = new Date()
    setDate(newDate: Date): void {
        this.date = newDate
    }
}

//////////////////

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solic green',
    padding: '10px',
    color: 'gold'
}