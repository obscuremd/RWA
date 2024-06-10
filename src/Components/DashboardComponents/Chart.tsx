import { CandlestickChart, EaseCurveControlPoints, GraphUp, ReportsSolid, } from "iconoir-react";
import { useState } from "react";
import { Shared } from "../../assets/Shared";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { monthlySalesData } from "../../assets/Data";
import styles from "../../assets/Shared.module.css";
import AreaChartComponent from "../../Atoms/Charts/AreaChartComponent";
import LineChartComponent from "../../Atoms/Charts/LineChartComponent";
import ComposedChartComponent from "../../Atoms/Charts/ComposedChartComponent";
import BarChartComponent from "../../Atoms/Charts/BarChartComponent";
import Dropdown from "../../Atoms/Buttons/Dropdown";

const Chart = () => {
  const isMobile = window.innerWidth < 768;
  const [index, setIndex] = useState(0);
  console.log(index);
  const [dropdown, setDropdown] = useState(false);
  const buttons = [ <EaseCurveControlPoints key={""} />, <GraphUp key={""} />, <CandlestickChart key={""} />, <ReportsSolid key={""} />, ];
  const period = [ "Daily Insights", "Weekly Insights", "Monthly Insights", "Yearly Insights", ];

  const [activeChart, setActiveChart] = useState(0);

  return (
    <div className="flex w-full md:gap-[2%] gap-3 md:flex-row flex-col-reverse">
      {/* chart */}
      <motion.div
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={`${styles.box} md:p-8 p-2 rounded-3xl flex items-center w-full flex-col md:flex-row`}
      >
        {/* insights */}
        <div className="flex md:flex-col items-center gap-7">
          {/* dropdown */}
          <Dropdown
            truncate=""
            number
            data={period}
            dropdown={dropdown}
            index={index}
            setDropdown={setDropdown}
            setIndex={setIndex}
            padding={10}
            dataStyle={"text-nowrap"}
          />
          <div className="flex md:flex-col gap-2">
            {!isMobile && (
              <p style={{ fontSize: Shared.Text.small }}>Net Profits</p>
            )}
            <p style={{ fontSize: Shared.Text.large, fontWeight: "bold" }}>
              $3,500.00
            </p>
            <Link
              to={"#"}
              style={{ fontSize: Shared.Text.small }}
              className="opacity-50 underline"
            >
              View Net Earnings
            </Link>
          </div>
        </div>

        {/* charts */}
        <div className="w-full md:h-full h-[20vh]">
          {activeChart === 0 && <AreaChartComponent Data={monthlySalesData} />}
          {activeChart === 1 && <LineChartComponent Data={monthlySalesData} />}
          {activeChart === 2 && (
            <ComposedChartComponent Data={monthlySalesData} />
          )}
          {activeChart === 3 && <BarChartComponent Data={monthlySalesData} />}
        </div>
      </motion.div>

      {/* selector */}
      <motion.div
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={`${styles.box} md:p-3 p-1 rounded-3xl inline-flex md:flex-col flex-row md:w-fit w-[50%] justify-between`}
      >
        {/* buttons */}
        {buttons.map((item, index) => (
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            key={index}
            style={{
              borderColor: activeChart == index ? "#445B8A" : "transparent",
              fontSize: Shared.Text.small,
              color: activeChart == index ? "#fff" : "#FFFFFF80",
            }}
            onClick={() => setActiveChart(index)}
            className="p-2 border-[1px] border-transparent rounded-xl"
          >
            {item}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default Chart;
