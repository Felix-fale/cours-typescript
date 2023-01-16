interface IUserProfile {
    firstname: string;
    nickname: string;
    age?: number;
}

interface IAdvanceUserProfile extends IUserProfile{
    hobbies: string[];
    color: string;
    isMajeur: boolean;
}

const user2 = <IAdvanceUserProfile>{};

user2.firstname = "justine";
console.log(user2.firstname);


const user1: IAdvanceUserProfile={
    firstname: "alexis",
    nickname: "ayu",
    age: 27,
    hobbies: ["lire", "basket"],
    color: "crimson",
    isMajeur: true
}

console.log(user1);
