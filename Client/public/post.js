const infoList = [
    {
        name: "name1",
        age: 22,
        blogNum: 1,
    },
    {
        name: "name2",
        age: 22,
        blogNum: 2,
    },
    {
        name: "name3",
        age: 22,
        blogNum: 3,
    },
    {
        name: "name4",
        age: 28,
        blogNum: 4,
    },
    {
        name: "name5",
        age: 21,
        blogNum: 6,
    },
    {
        name: "name6",
        age: 21,
        blogNum: 1,
    },
    {
        name: "name7",
        age: 12,
        blogNum: 1,
    },
    {
        name: "name8",
        age: 32,
        blogNum: 1,
    },
    {
        name: "name9",
        age: 22,
        blogNum: 1,
    },
];
/**
 *
 * @param {object} params
 * @returns Arr
 */
/* 
    Accurate search and fuzzy search for user information, 
    when accurate search, search corresponding data based on name,
    fuzzy search based on age and blogNum as the search benchmark.
*/
const findUserInfo = (params) => {
    let { name } = params;
    // exact search
    if (name) {
        return exactSearch(name);
    } else {
        return fuzzySearch(params);
    }
};

const exactSearch = (name) => {
    let user = [];
    infoList.forEach((v) => {
        if (v.name == name) {
            user.push(v);
        }
    });
    return user;
};
/* 
Fuzzy query parameters include the user's age and blogNum
 */
const fuzzySearch = (params) => {
    let age = null;
    let blogNum = null;
    let userList = [];
    let userArr = [];
    if (params.age) {
        age = params.age;
    }
    if (params.blogNum) {
        blogNum = params.blogNum;
    }
    infoList.forEach((v) => {
        if (v.age == age || v.blogNum == blogNum) {
            userList.push(v);
        }
    });

    userList.forEach((v) => {
        if (v.age == age && v.blogNum == blogNum) {
            userArr.push(v);
        }
    });
    return userArr;
};
//  exact search
let user1 = findUserInfo({ name: "name9" });
console.log("line105");
console.log(user1);
// fuzzy search
let user2 = fuzzySearch({ age: 22, blogNum: 1 });
console.log("line19");
console.log(user2);

