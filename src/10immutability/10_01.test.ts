import {
    addNewBooksToUser,
    makeHairstyle,
    moveUser, moveUserToOtherHouse,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType
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

test('add new books to user', () => {
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

    const userCopy = addNewBooksToUser (user, ['TS', 'React'])

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('TS')
    expect(userCopy.books[5]).toBe('React')

})