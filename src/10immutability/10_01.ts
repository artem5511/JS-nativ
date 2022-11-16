export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house: number
    }
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type LaptopType = {
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

type CompanyType = {id: number, title: string}
export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle (u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}

export function moveUser (u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city:city
        },
    }
    // copy.address = {...copy.address,
    //     city: city
    // }
       // return copy
}
export function moveUserToOtherHouse (u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        },
    }
}

export function upgradeUserLaptop (u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBookToUser (u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export function updateBook (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u,
        books: u.books.map( b => b === oldBook ? newBook : b)
    }
    // const copy = {
    //     ...u,
    //     books: u.books.map( b => {
    //         if (b === oldBook) {
    //             return newBook
    //         } else {
    //             return b
    //         }
    //     })
    // }
    // return copy
}

export function removeBook (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) {
    return {
        ...u,
        books: u.books.filter( b => b !== bookForDelete)
    }}

export const updateCompanyTitle = (user: WithCompaniesType,companyID: number, newTitle: string) => {
   const copy ={
       ...user,
       companies: user.companies.map(c => c.id === companyID ? {...c, title: newTitle} : c)
   }
    // const copy = {
   //     ...user,
   //     companies: user.companies.map(c => c.id === companyID ? {
   //         ...c, title: newTitle}
   //         : c)
   //     }
    return copy;
    }

    export const updateCompanyTitle2= (companies: {[key: string]: Array<CompanyType> }, companyID: number, userName: string, newTitle: string) => {
        let companyCopy = {...companies}
        companyCopy[userName] = companyCopy[userName].map(c => c.id === companyID ?
        {...c, title:newTitle} : c)
    return companyCopy;
    }
