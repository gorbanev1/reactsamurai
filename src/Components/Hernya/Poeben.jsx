let a: number | null = 10
a= 10 
type AddressType={
  city?:string | null
  country: string | null
}

type UserType ={
  sayHello?: Function
  name: string
  age: number
  isEblan: boolean
  address: AddressType | null
}

let user: UserType = {
  sayHello(message: string){ alert('yo')},
  name: "fsafsf",
  age: 11,
  isEblan: true,
  address: {
    city: 'sfsfs',
    country: 'sfaasf'
  }
  
}
let initialState ={
  name: null as string | null,
  age: null as number | null,
  isEblan: null as boolean | null,
  address: [] as Array<AddressType>,
  counter: 0
}
export type initialStateType = typeof initialState;
let state: initialStateType = {
  address: [ {
    country: "sfsdsf",
    city: 'afsdfsd'

  }],
  age: null,
  counter: 10,
  isEblan: true,
  name: "ZCZx"

}
let GET_TASKS = "APP/GetTASKS";
type GetTasksActionType ={
  id: number
  type: typeof GET_TASKS
}
let action: GetTasksActionType = {
  type: "APP/GetTASKS",
  id: 12
}

let names: Array<string> = ["sfa",'add','adAD']
let names2: string[] = ["sfa",'add','adAD']
names.forEach(n=>{
  // alert(n.toLowerCase());
})
let name='asfsdfasd'
let sex: 'male'|'female'
sex='male'


function Pizda(){
  debugger
  return (
    <div>
      <ul>
        <li>ssdfds</li>
      </ul>
      <p>idi nahui</p>
      <p>idi nahui</p>    
      <p>idi nahui</p>
      <p>idi nahui</p>
      <p>idi nahui</p>
    </div>
  )
}