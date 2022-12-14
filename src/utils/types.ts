

export type CreateUserParams = {
    email:string
    firstName:string
    lastName:string
    password:string
}

export type LoginUserParams = {
    email:string
    password:string
}

export type User = {
    id:number
    email:string
    firstName:string
    lastName:string
}

export type ConversationType = {
    id:number
    creator:User
    receiver:User
}