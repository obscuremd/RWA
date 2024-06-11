import { Shared } from "../../assets/Shared";
import { DollarCircle, Plus } from "iconoir-react";
import Analytics from "../../Atoms/Analytics";

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
          <button
            className="md:p-2 p-1 bg-[#2F406480] border-[1px] border-[#445B8A] rounded-full flex items-center md:gap-[5%] gap-[10px] md:w-full w-fit"
            style={{ fontSize: Shared.Text.small }}
          >
            <div className="md:p-1 bg-[#2F406480] border-[1px] border-[#445B8A] rounded-full w-fit">
              <Plus />
            </div>
            <p className="text-nowrap min-w-[7em]">New Project</p>
          </button>

          <button
            className="md:p-2 p-1 bg-[#2F406480] border-[1px] border-[#445B8A] rounded-full flex items-center md:gap-[5%] gap-[10px] md:w-full w-fit"
            style={{ fontSize: Shared.Text.small }}
          >
            <div className="md:p-1 bg-[#2F406480] border-[1px] border-[#445B8A] rounded-full w-fit">
              <Plus />
            </div>
            <p className="text-nowrap min-w-[7em]">Discover</p>
          </button>
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
