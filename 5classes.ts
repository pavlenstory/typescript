class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(paragraph: string): string{
        return `${paragraph}. The end`
    }
}

class Plane {
    readonly id: string | number = 1
    readonly airplaneModel: string
    
    constructor(theAirplaneModel: string) {
        this.airplaneModel = theAirplaneModel
    }
}

class Plane {
    readonly id: string | number = 1
    constructor(readonly model: string){} 
}