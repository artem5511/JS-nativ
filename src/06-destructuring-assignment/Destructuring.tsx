type ManType = {
    name: string
    age: number
    lessons : Array<LessonsType>
    address: {
        street: {
            title: string
            name: string
        }
    }
}
type PropsType ={
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}
function useArtemState (m:string) {
    return [m, function (){}]
}
function useArtemState2 (m: string) {
    return {
        message: m,
        setMessage: function () {
        }
    }
}

export const ManComponent: React.FC<PropsType> =({title, man, ...props})=> {
    // const {title, man} = props;   перемещено вместо props
    const [message, setMessage]= useArtemState('Hello')
    return  <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {props.car.model}
        </div>
        <div>
            {man.name}
        </div>
    </div>


}