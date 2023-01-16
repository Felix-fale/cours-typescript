interface PersonId {
    name: string;
    color: string;
    age: number;
}

const user1: PersonId ={
    name: "alex",
    color: "red",
    age: 27
}

function hello(person: PersonId) {
    console.log(`Bonjour a toi ${person.name} et tu as ${person.age} ans.`);
}

hello(user1);