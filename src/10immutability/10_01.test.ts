import {UserType} from './10_01';

function makeHairstyle (u: UserType, power: number) {
    const copy ={
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Artem',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

const awesomeuser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeuser.hair).toBe(16)
    expect(awesomeuser.address).toBe(user.address)
})




test('array type reference test', () => {
    let users = [
        {
            name: 'Artem',
            age: 32
        },
        {
            name: 'Dima',
            age: 32
        }
    ]

let admins = users
admins.push({name: 'Bandit', age: 11})
expect(users[2]).toEqual({name: 'Bandit', age: 11})
})

test('value type test', () => {
    let usersCount = 100;
    let adminsCount = usersCount
    adminsCount = adminsCount + 1
    usersCount++
})

test('reference type array test', () => {
    const address = {
        title: 'Minsk'
    }
    let user: UserType =
        {
            name: 'Artem',
            age: 32,
            address: address
        }
        let user2: UserType =
        {
            name: 'nata',
            age: 26,
            address: address
        };
const users = [user, user2, {name: 'Misha',age: 14, address: address}]

const admins = [user, user2]
    admins[0].name = 'Dmitry'

    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e']
    letters.sort();
    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
});

function passportist (letters:any) {
    letters.sort();   //неправильно, нужна копия
    console.log(letters);
}