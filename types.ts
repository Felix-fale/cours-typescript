interface IHello {
    (name: string, age?: number): void;
}

const sayHello: IHello = name =>{
    console.log(`bonjour a toi ${name}`);
}

const bestFriend: IHello = name =>{
    return name
}

sayHello("alexis")
console.log(`${bestFriend("justine")}`);

