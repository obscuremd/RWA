import { atom } from "recoil";

const something = atom

export const user = atom({
    key :'user',
    default:{something:something}
})