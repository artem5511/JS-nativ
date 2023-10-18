
//
// let appartment = {
//     floor: 4,
//     door: 'metall',
//     kitchen: {
//         refregerator: 'LG',
//         furniture1: 'sofa',
//         furniture2: 'table',
//         electronic: {
//             tv: 'samsung',
//             lightspot: 5,
//             ligtonoff: true,
//         },
//         food: 'chiken',
//     },
//     room: 2,
//     chairs: 6,
//     people: {
//         name: 'artem',
//         age: 33
//     }
// }
//
// console.log(appartment.kitchen.electronic.tv)
// console.log(appartment['people']['age'])


type StudentType = {
    id: number,
    name: string
}
type FriendsType = {
    [key: string]: Array<string>
}

export const students: Array<StudentType> = [
    {id: 1, name: "Bob"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Ann"},
    {id: 4, name: "Charley"},
]

const friends: FriendsType = {
    1: ["Oliver", "Jack", "Oscar",],
    2: ["Jack", "Lewis", "Thomas",],
    3: ["William", "Michael", "Lewis",],
    4: ["Oscar", "James", "William",],
}



console.log(friends[students[0].id][3])

type samuraiType = {
    id: string
    name: string
    status: "online" | "offline"
}
type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"
type CourseType = {
    name: CourseNameType
    mentor: string
    isDone: boolean
}
type TechnologiesType = {
    [userID: string]: Array<CourseType>
}

const samuraiID_1 = "64jf-87kg"
const samuraiID_2 = "90lg-34ks"
const samuraiID_3 = "12jm-05fd"

export const samurai: Array<samuraiType> = [
    {id: samuraiID_1, name: "Bob", status: "online"},
    {id: samuraiID_2, name: "Alex", status: "offline"},
    {id: samuraiID_3, name: "Ann", status: "offline"},
]

export const technologies: TechnologiesType = {
    [samuraiID_1]: [
        {name: "HTML", mentor: "Svetlana", isDone: true},
        {name: "JS", mentor: "Viktor", isDone: true},
        {name: "React", mentor: "Dmitrij", isDone: false},
        {name: "Redux", mentor: "Valera", isDone: false},
        {name: "HomeWorks", mentor: "Ignat", isDone: true},
    ],
    [samuraiID_2]: [
        {name: "HTML", mentor: "Svetlana", isDone: true},
        {name: "JS", mentor: "Viktor", isDone: true},
        {name: "React", mentor: "Dmitrij", isDone: true},
        {name: "Redux", mentor: "Valera", isDone: false},
        {name: "HomeWorks", mentor: "Ignat", isDone: true},
    ],
    [samuraiID_3]: [
        {name: "HTML", mentor: "Svetlana", isDone: true},
        {name: "JS", mentor: "Viktor", isDone: true},
        {name: "React", mentor: "Dmitrij", isDone: false},
        {name: "Redux", mentor: "Valera", isDone: false},
        {name: "HomeWorks", mentor: "Ignat", isDone: false},
    ],
}

// export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {
//     return {...technologies,
//         [samuraiID]: technologies[xxx].map(c => c.name === name ? {...c, isDone} : c)
//     }
// }