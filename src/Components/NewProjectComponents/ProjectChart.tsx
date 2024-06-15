import { 
  CandlestickChart,
    Commodity,
    EaseCurveControlPoints,
    GraphUp,
    ReportsSolid,
    Search, } from "iconoir-react";
import { useState } from "react";
import { Shared } from "../../assets/Shared";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import AreaChartComponent from "../../Atoms/Charts/AreaChartComponent";
import { ipsum, monthlySalesData } from "../../assets/Data";
import BarChartComponent from "../../Atoms/Charts/BarChartComponent";
import LineChartComponent from "../../Atoms/Charts/LineChartComponent";
import ComposedChartComponent from "../../Atoms/Charts/ComposedChartComponent";
import styles from "../../assets/Shared.module.css";
import Dropdown from "../../Atoms/Buttons/Dropdown";

const ProjectChart = () => {
  const isMobile = window.innerWidth < 768;
  const [index, setIndex] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const buttons = [ <EaseCurveControlPoints/>, <GraphUp/>, <CandlestickChart/>, <ReportsSolid/>, ];
  const [fullText, setFullText] = useState(false);
  // const [activeChart, setActiveChart] = useState(0);

  return (
    <motion.div className="flex w-full md:gap-[2%] gap-3 md:flex-row flex-col">
      {/* chart */}
      <motion.div
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={`${styles.box} md:p-8 p-2 rounded-3xl flex items-center w-full flex-col md:justify-between gap-5`}
      >
        {/* insights */}
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-3  ">
            {/* input */}
            <motion.div
              whileFocus={{ borderColor: "#5d7cb9" }}
              className={`${styles.box} px-2 flex justify-center items-center rounded-full`}
              style={{ fontSize: Shared.Text.small }}
            >
              <motion.input
                type="text"
                placeholder="Search For Insights..."
                className="bg-transparent border-transparent outline-transparent"
              />
              <Search />
            </motion.div>
            <Dropdown
              key={index}
              index={index}
              data={buttons}
              setIndex={setIndex}
              dropdown={dropdown}
              setDropdown={setDropdown}
              padding={10}
            />
          </div>

          <div style={{ fontSize: Shared.Text.small }} className="flex gap-2">
            <motion.button
              whileTap={{ opacity: 0.1 }}
              className="bg-[#9EB1D840] p-2 rounded-md"
            >
              M
            </motion.button>
            <motion.button
              whileTap={{ opacity: 0.1 }}
              className="bg-[#9EB1D840] p-2 rounded-md"
            >
              W
            </motion.button>
            <motion.button
              whileTap={{ opacity: 0.1 }}
              className="bg-[#9EB1D840] p-2 rounded-md"
            >
              D
            </motion.button>
          </div>
        </div>

        {/* Chart Info */}
        <div className="w-full border-y px-5 border-[#445B8A] flex justify-center gap-[5%]">
          <div className="border-r border-[#445B8A] px-[10%] py-3 flex flex-col gap-2 items-center">
            <p style={{ fontSize: Shared.Text.large, fontWeight: "bold" }}>
              38,000
            </p>
            <p
              style={{
                fontSize: Shared.Text.small,
                opacity: 0.5,
                textDecoration: "underline",
              }}
            >
              Auctions
            </p>
          </div>
          <div className="px-[10%] py-3 flex flex-col gap-2 items-center">
            <p style={{ fontSize: Shared.Text.large, fontWeight: "bold" }}>
              6,400
            </p>
            <p
              style={{
                fontSize: Shared.Text.small,
                opacity: 0.5,
                textDecoration: "underline",
              }}
            >
              Bids
            </p>
          </div>
          <div className="border-l border-[#445B8A] px-[10%] py-3 flex flex-col gap-2 items-center">
            <p style={{ fontSize: Shared.Text.large, fontWeight: "bold" }}>
              2,200
            </p>
            <p
              style={{
                fontSize: Shared.Text.small,
                opacity: 0.5,
                textDecoration: "underline",
              }}
            >
              Sales
            </p>
          </div>
        </div>

        {/* charts */}
        <div className="w-full md:h-[40vh] h-[20vh]">
          {index === 0 && <AreaChartComponent Data={monthlySalesData} />}
          {index === 1 && <LineChartComponent Data={monthlySalesData} />}
          {index === 2 && <ComposedChartComponent Data={monthlySalesData} />}
          {index === 3 && <BarChartComponent Data={monthlySalesData} />}
        </div>
      </motion.div>

      {/* info */}
      <motion.div
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className={`${styles.box} p-5 rounded-3xl flex flex-col md:w-fit w-full md:gap-5 gap-2`}
      >
        {/* title */}
        <div className="flex items-center gap-2">
          <div className={`${styles.box} p-2 w-fit rounded-full`}>
            <Commodity />
          </div>
          <p style={{ fontSize: Shared.Text.large, fontWeight: "bold" }}>
            Gold
          </p>
        </div>

        <div className="flex flex-col md:gap-2">
          <p style={{ fontSize: Shared.Text.small, opacity: 0.5 }}>
            {" "}
            Current Value
          </p>
          <p style={{ fontSize: Shared.Text.large, fontWeight: "bold" }}>
            {" "}
            $3,500.00
          </p>
        </div>

        <span>
          <p
            style={{
              fontSize: Shared.Text.small,
              color: "#9EB1D8BF",
              width: "30em",
              height : !fullText ? (isMobile ? "10em" : "20em") : "auto",
              overflow: "hidden",
            }}
          >
            {ipsum}{" "}
          </p>
          <button
            onClick={() => setFullText(!fullText)}
            className="text-[#9EB1D8] md:text-base text-sm font-bold"
          >
            Read More
          </button>
        </span>

        <div className="w-full flex gap-[25%]">
          <div className="flex flex-col md:gap-2">
            <p style={{ fontSize: Shared.Text.small, opacity: 0.5 }}>
              Current Bid
            </p>
            <p style={{ fontSize: Shared.Text.large, fontWeight: "bold" }}>
              $35,000.00
            </p>
          </div>
          <div className="flex flex-col md:gap-2">
            <p style={{ fontSize: Shared.Text.small, opacity: 0.5 }}>
              Highest Bid
            </p>
            <p style={{ fontSize: Shared.Text.large, fontWeight: "bold" }}>
              $105,000.00
            </p>
          </div>
        </div>

        <div className="w-full flex gap-[15%]">
          <motion.button
            whileHover={{
              borderColor: "#445B8A",
              boxShadow: "0 0 20px rgba(68, 91, 138, 0.5)",
            }}
            className={`${styles.box} py-2 px-3 rounded-full`}
          >
            <p style={{ fontSize: Shared.Text.large, fontWeight: "bold" }}>
              View Details
            </p>
          </motion.button>
          <motion.button
            whileHover={{
              borderColor: "#445B8A",
              boxShadow: "0 0 20px rgba(68, 91, 138, 0.5)",
            }}
            className={`${styles.box} py-2 px-3 rounded-full`}
          >
            <p style={{ fontSize: Shared.Text.large, fontWeight: "bold" }}>
              Start A Bid
            </p>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectChart;
