const ages = [45, 85, 69, 72, 34]

const predicate = (age: number) => {
    return age > 70
}

const newAges = [85, 72] // > 70

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'HTML', price: 110},
    {title: 'CSS', price: 140},
    {title: 'JS', price: 180}
]

const cheapPredicate = (courses: CourseType) => {
    return courses.price < 160;
}
const cheapCourses = [
    {title: 'HTML', price: 110},
    {title: 'CSS', price: 140}
]


