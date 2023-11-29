const promise = new Promise(function(resolve, reject) {
    // Эта функция будет вызвана автоматически

    // В ней можно делать любые асинхронные операции,
    // А когда они завершатся — нужно вызвать одно из:
    // resolve(результат) при успешном выполнении

    // reject(ошибка) при ошибке
})

findUserInDB(1)
    .then(user => user.name)
    .then(name => console.log(name))

const promise1 = axios.get('https://google.com')

async function run() {
    let user = await findUserInDB(1)
    console.log(user.name)
        let friend1 = await findUserInDB(user.friend)
    console.log(friend1.name)
    let friend2 = await findUserInDB(friend1.friend)
    console.log(friend2.name +  " " + user.name)
}
run()

// const promise2 = axios.get()

const promise2 = findUserInDB(100)
console.log(promise2)
promise2
    .then((user) => {
        console.log(user)
    })
