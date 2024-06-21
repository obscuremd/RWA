import { atom } from "recoil";

interface User {
    _id: string;
    name: string;
    // add other properties as needed
  }

const something = atom

export const user = atom({
    key :'user',
    default:{something:something}
})

export const MongoUser = atom<User | null>({
    key :'mongoUser',
    default:null
})