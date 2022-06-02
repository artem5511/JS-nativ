type CityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: CityType
}
type TechType = {
    id: number
    title: string
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    tehnologies: Array<TechType>
}

const student: StudentType = {
    id: 1,
    name: "Artem",
    age: 33,
    isActive: false,
    address: {
        streetTitle: "Zvezdnaya",
        city: {
            title: "Ozerco",
            countryTitle: "Belarus"
        }
    },
    tehnologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "REACT"
        }
    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.address.city.countryTitle)
console.log(student.tehnologies[2].title)
console.log()


