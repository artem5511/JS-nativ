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