import { Shared } from "../../assets/Shared"

interface PayloadItem {
  value: string | number;
}

interface Props {
  active: boolean;
  payload: PayloadItem[];
  label: string;
}

export const CustomToolTip: React.FC<Props> =({active, payload, label}) =>{
    if (active && payload && payload.length){
      return(
        <div className="p-4 bg bg-[#2F406480] border-[1px] border-[#445B8A] backdrop-blur-lg flex flex-col gap-4 rounded-md">
          <p>{label}</p>
          {/* product 1 */}
          <p style={{fontSize:Shared.Text.small}}>
            Product 1: <span className="ml-2">{payload[0].value}</span>
          </p>
          {/* product 2 */}
          <p style={{fontSize:Shared.Text.small}}>
            Product 2: <span className="ml-2">{payload[1].value}</span>
          </p>
        </div>
      )
    }
  }