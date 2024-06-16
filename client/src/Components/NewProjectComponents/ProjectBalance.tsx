import { Shared } from "../../assets/Shared";
import { DollarCircle } from "iconoir-react";
import Analytics from "../../Atoms/Analytics";
import { AddButton } from "../../Atoms/Buttons/AddButton";

interface Props{
  dropdown:boolean, 
  setDropdown:(value: boolean) => void, 
  index:number, 
  setIndex:(value: number) => void
}

const ProjectBalance: React.FC<Props> = ({ dropdown, setDropdown, index, setIndex }) => {

  dropdown
  setDropdown
  index
  setIndex 

  return (
    <div className="flex flex-col md:flex-row gap-5 w-full md:items-center">
      {/* paragraph */}
      <div className="flex flex-col gap-5">
        <p
          style={{ fontSize: Shared.Text.large }}
          className="capitalize font-bold text-balance w-[15em] md:w-full"
        >
          Discover, Collect, Sell and Create your own projects
        </p>
        {/* buttons */}
        <div className="flex gap-[2%]">
          <AddButton func={()=>console.log(1)} name='Projects'/>
          <AddButton func={()=>console.log(1)} name='Discover'/>

          
        </div>
      </div>

      <div className="flex gap-[2%] w-full overflow-scroll md:overflow-visible">
        <Analytics colors={"#C2E7B1"} icon={<DollarCircle />} title={"Total Earnings"} amount={"$4,500.00"} link={"View Net Earnings"} rate={"+24.8%"} />
        <Analytics colors={"#9EB1D8"} icon={<DollarCircle />} title={"Estimated"} amount={"$4,500.00"} link={"View Net Earnings"} rate={"+24.8%"} />
        <Analytics colors={"#CE7F54"} icon={<DollarCircle />} title={"Total Invested"} amount={"$4,500.00"} link={"View Net Earnings"} rate={"+24.8%"} />
        <Analytics colors={"#CE7F54"} icon={<DollarCircle />} title={"Total Invested"} amount={"$4,500.00"} link={"View Net Earnings"} rate={"+24.8%"} />
      </div>
    </div>
  );
};

export default ProjectBalance;
