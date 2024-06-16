

import ProjectChart from "../Components/NewProjectComponents/ProjectChart";

import Hero from "../Components/DocsComponents/Hero";
const Docs = () => {
    
    return (
      <div className="container md:p-[2%] p-[4%] flex flex-col gap-6">
        {/* part 1 */}
        <Hero/>
        <ProjectChart />
        
      </div>
    );
}

export default Docs