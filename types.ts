interface IRepertory extends Array<number> {
    [index: number]: number;
}

const days: IRepertory = [1,2,3,4,5];

console.log(days);
days.push(6)
console.log(days);

// --------------------

interface IObject{
    [index: string]: any;
    sayHello: {(name: string): void}
}

const myObject: IObject = {
    title: "alexis",
    age: 27,
    color: "crimon",
    isMajeur: true,
    sayHello(name: string): void{
        console.log(name);
    }
}

console.log(myObject.title);
myObject.sayHello("alexis")
