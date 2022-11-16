import {
    addNewBookToUser, updateBook,
    makeHairstyle,
    moveUser, moveUserToOtherHouse,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, removeBook, WithCompaniesType, updateCompanyTitle, updateCompanyTitle2
} from './10_01';

test('reference type test', () => {
    let user: UserType = {
        name: 'Artem',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }

    const awesomeuser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeuser.hair).toBe(16)
    expect(awesomeuser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Artem',
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Artem',
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const userCopy = upgradeUserLaptop (user, 'HP')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('HP')
    expect(user.laptop.title).toBe('ZenBook')
})

test('move user to other house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Artem',
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['CSS','HTML','JS']
    }

    const userCopy = moveUserToOtherHouse (user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).toBe(userCopy.books)
    expect(userCopy.address.house).toBe(99)
})

test('add new book to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Artem',
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['CSS','HTML','JS']
    }

    const userCopy = addNewBookToUser (user, 'TS')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[3]).toBe('TS')
    expect(userCopy.books.length).toBe(4)
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Artem',
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['CSS','HTML','JS']
    }

    const userCopy = updateBook (user, 'JS', 'TS')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('TS')
})

test('remove HTML book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Artem',
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['CSS','HTML','JS']
    }

    const userCopy = removeBook (user,'HTML')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[1]).toBe('JS')
})

test('add companies', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Artem',
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'BAPB'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'LWO') as UserWithLaptopType & WithCompaniesType
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('LWO')
})

test('update companies', () => {

    let companies = {
        'Artem': [{id: 1, title: 'Epam'}, {id: 2, title: 'BAPB'}],
        'Dimych': [{id: 1, title: 'IT-INCUBATOR'}]
    }
   const copy = updateCompanyTitle2(companies, 1, 'Dimych', 'EPAM')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
})