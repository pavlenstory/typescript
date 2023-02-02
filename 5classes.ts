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

// class Plane {
//     readonly id: string | number = 1
//     constructor(readonly model: string){} 
// }

///////////////

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string) : void {
        this.voice = voice
    }
}

const cat = new Cat()
//cat.voice

/////////////

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class MobileComponent extends Component {
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'information'
    }
}