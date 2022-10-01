import React, {ChangeEvent} from "react";
import {MouseEvent} from "react";
// const callback =(): number => {
//     alert('Hey')
//     return 12;
// }
// window.setTimeout(callback, 1000)

 export const User = () => {

    const deleteUser =(event: MouseEvent<HTMLButtonElement>)=> {
        alert(event.currentTarget.name)
        // alert('user was deleted')
    }
    const saveUser = () => {
        alert('user was saved')
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>)=> {
        console.log('age changed:' + event.currentTarget.value)
    }

    return <div> <textarea
        onChange={onNameChanged}
        onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
    <button name={'delete'} onClick={deleteUser}>delete</button>
    <button  onClick={saveUser}>save</button>
    </div>
}
