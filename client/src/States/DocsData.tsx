import { atom } from "recoil";

export const DocsData = atom({
    key: "docData",
    default:[]
})

export const DocsFetching = atom({
    key: "docFetching",
    default:false
})

export const DocsId = atom({
    key: "docId",
    default:''
})


