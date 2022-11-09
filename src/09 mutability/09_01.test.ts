function icreaseAge(user: UserType) {
    user.age++;
}
type UserType = {
    name: string
    age: number
    address: {title: string}
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Artem',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    icreaseAge(user);
    expect(user.age).toBe(33)

const superman = user
superman.age = 1000;
expect(user.age).toBe(1000)

    let user2: UserType = {
        name: 'Nata',
        age: 26,
        address: user.address
    }
  user2.address.title = 'kanary';

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe("kanary")

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
    letters.sort();
    console.log(letters);
}