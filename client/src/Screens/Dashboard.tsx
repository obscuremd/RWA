import { useState } from "react";
import Balance from "../Components/DashboardComponents/Balance";
import Chart from "../Components/DashboardComponents/Chart";
import List from "../Atoms/List";
import { transactions } from "../assets/Data";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [index, setIndex] = useState(5);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="container md:p-[2%] p-[4%] flex flex-col gap-6">
      <Balance
        dropdown={dropdown}
        setDropdown={setDropdown}
        index={index}
        setIndex={setIndex}
      />
      <Chart />
      <div className="flex w-full flex-col md:flex-row gap-6">
        <motion.div
          initial={{ x: "25%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="md:w-[35%]"
        >
          <List data={transactions} date={false} title={"Timeline"} />
        </motion.div>
        <motion.div
          initial={{ x: "25%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="md:w-[65%]"
        >
          <List data={transactions} date={true} title={"Transactions"} />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
