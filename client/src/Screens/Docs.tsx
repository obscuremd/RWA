import Hero from "../Components/DocsComponents/Hero";
import Table from "../Atoms/Table";
import AddDocument from '../Atoms/AddDocument';
import { useRecoilState, useRecoilValue } from "recoil";
import { AddDocumentState } from "../States/AddDocumentState";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../assets/Shared";
import { DocsData } from "../States/DocsData";
import { waveform } from "ldrs";


waveform.register()


const Docs = () => {

  const [docs, setDocs]= useRecoilState(DocsData)
  const [docFetching, setDocFetching]= useState(true)

  useEffect(() => {
    const fetchDocs = async() =>{
      setDocFetching(true)
      const res = await axios.get(`${url}/docs/66716ae91527ac8d699703f2`)
      setDocs(res.data)
      setTimeout(() => {
        setDocFetching(false)
        console.log(res.data)
      }, 2000);
    }

    fetchDocs()
    docs
    docFetching
  }, []);

  const AddDocumentVisible = useRecoilValue(AddDocumentState)

  if (docFetching) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <l-waveform size="35" stroke="3.5" speed="1" color="white" />
      </div>
    );
  }

    return (
      <div className="container md:p-[2%] p-[4%] flex flex-col gap-6 relative">
        {/* part 1 */}
        <Hero/>
        <Table/>
        {AddDocumentVisible && <AddDocument/>}
      </div>
    );
}

export default Docs