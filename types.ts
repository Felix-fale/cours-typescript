interface IUserProfile {
    readonly firstname: string;
    nickname: string;
    age?: number;
    password: string;
}

const user1: IUserProfile={
    firstname: "alexis",
    nickname: "ayu",
    // age: 27,
    password: "idk",
}

console.log(user1);
