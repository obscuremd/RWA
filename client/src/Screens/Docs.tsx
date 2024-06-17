import Hero from "../Components/DocsComponents/Hero";
import Table from "../Atoms/Table";

const Docs = () => {
    
    return (
      <div className="container md:p-[2%] p-[4%] flex flex-col gap-6">
        {/* part 1 */}
        <Hero/>
        <Table />
        
      </div>
    );
}

export default Docs