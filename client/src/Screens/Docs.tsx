import Hero from "../Components/DocsComponents/Hero";
import Table from "../Atoms/Table";
import AddDocument from '../Components/DocsComponents/AddDocument';
import { useRecoilState, useRecoilValue } from "recoil";
import { AddDocumentState, EditDocumentState } from "../States/AddDocumentState";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../assets/Shared";
import { DocsData } from "../States/DocsData";
import { waveform } from "ldrs";
import EditDocument from "../Components/DocsComponents/EditDocument";
import { AddButton } from "../Atoms/Buttons/AddButton";
import { MongoUser } from "../States/LoggedInState";
import toast from "react-hot-toast";


waveform.register()

const Docs = () => {

  const User = useRecoilValue(MongoUser)
  console.log(User)

  const [docs, setDocs]= useRecoilState(DocsData)
  const [docFetching, setDocFetching]= useState(true)

  useEffect(() => {
    
    const fetchDocs = async() =>{
      if(!User){
        toast.error("User")
      }
      setDocFetching(true)
      const res = await axios.get(`${url}/docs/${User?._id}`)
      setDocs(res.data)
      setTimeout(() => {
        setDocFetching(false)
      }, 2000);
    }

    fetchDocs()
    docs
    docFetching
  }, []);

  const EditDocumentVisible = useRecoilValue(EditDocumentState)
  const [addDocumentVisible, setAddDocumentVisible] = useRecoilState(AddDocumentState)

  if (docFetching) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <l-waveform size="35" stroke="3.5" speed="1" color="white" />
      </div>
    );
  }

  if(docs.length === 0){
    return(
      <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
        create your first Document
        <AddButton func={()=>setAddDocumentVisible(true)} name='create new document'/>
        {addDocumentVisible && <AddDocument/>}
      </div>
    )
  }

    return (
      <div className="container md:p-[2%] p-[4%] flex flex-col gap-6 relative">
        {/* part 1 */}
        <Hero/>
        <Table/>
        {addDocumentVisible && <AddDocument/>}
        {EditDocumentVisible && <EditDocument/>}
      </div>
    );
}

export default Docs