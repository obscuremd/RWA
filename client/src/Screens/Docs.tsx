import Hero from "../Components/DocsComponents/Hero";
import Table from "../Atoms/Table";

const Docs = () => {

  const data = [0,1,2,3,4,5]
    
    return (
      <div className="container md:p-[2%] p-[4%] flex flex-col gap-6">
        {/* part 1 */}
        <Hero/>
        <Table tableData={data}/>
        
      </div>
    );
}

export default Docs