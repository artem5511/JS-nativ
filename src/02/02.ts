type CityType = {
    title: string
    countryTitle: string
}
type AdressType = {
    streetTitle: string
    city: Array<CityType>
}

type TechnoType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    adress: Array<AdressType>
    technologies: Array<TechnoType>
}

const student = {
    id: 1,
    name: "Artem",
    age: 32,
    isActive: false,
    adress: {
        streetTitle: "Surganova 2",
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
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
            title: "React"
        }
    ]
}


    console.log(student.age)
    console.log(student.adress.city.title)
