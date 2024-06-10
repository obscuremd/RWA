import { CoinsSwap, HomeShield, HomeSimple, Journal, MultiplePages, Plus } from "iconoir-react"
import { Shared } from "../assets/Shared"
import { Link } from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"
import { useClerk } from "@clerk/clerk-react"


// const image = "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1604"

interface ButtonProps{
    icon:React.ReactNode;
    name:string;
    link:string;
    number:number;
}

const SideBar = () => {

    const { user } = useClerk()

    const [active, setActive] = useState(0)

    const buttonProps = [
        { name: 'Dashboard', icon: <HomeSimple />, link: '/' },
        { name: 'Docs', icon: <Journal />, link: '/documents' },
        { name: 'Contracts', icon: <MultiplePages />, link: '/' },
        { name: 'New Project', icon: <Plus />, link: '/new-project' },
        { name: 'RWA', icon: <HomeShield />, link: '/' },
        { name: 'Bidding', icon: <CoinsSwap />, link: '/' },
    ]

    const Button: React.FC<ButtonProps> =({ icon, name, link, number }) => {
        return (
            <Link to={link}>
                <motion.button
                    onClick={() => setActive(number)}
                    initial={{ x: '-25%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{ borderColor: '#445B8A', boxShadow: '0 0 5px rgba(68, 91, 138, 0.25)' }}
                    style={{ borderColor: active == number ? '#445B8A' : 'transparent' }}
                    className="flex items-center gap-2 p-1 rounded-full focus:border-[1px] border-[1px] border-transparent w-full">
                    <div className="p-1 rounded-full border-[1px] border-[#445B8A] inline-flex">{icon}</div>
                    <p>{name}</p>
                </motion.button>
            </Link>
        )
    }

    return (
        <motion.div
            initial={{ x: '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute z-20 md:sticky top-0 py-8 px-[17px] backdrop-blur-md bg-[#2F406480] border-[1px] border-[#445B8A] rounded-r-[50px] flex flex-col justify-between h-screen mr-[1%]">
            {/* image and name */}
            <div className="flex flex-col justify-center items-center">
                {user && <img src={user.imageUrl} alt="" className="w-20 rounded-full" />}
                {user && <p style={{ fontSize: Shared.Text.large }} className="font-bold capitalize max-w-[7em] truncate">Hello, {user.username}</p>}
            </div>

            {/* routes */}
            <div style={{ fontSize: Shared.Text.small }} className="flex flex-col gap-3">
                {buttonProps.map((item, index) => (
                    <Button key={index} name={item.name} icon={item.icon} link={item.link} number={index} />
                ))}
            </div>

            {/* newsletter */}
            <div className="p-3 border-[1px] border-[#445B8A] rounded-3xl flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full border-[1px] border-[#445B8A]"></div>
                <p style={{ fontSize: Shared.Text.small }}>sign up for our news letter<br /> get the latest updates</p>
                <div style={{ fontSize: Shared.Text.small }} className="p-2 rounded-full border-[1px] border-[#445B8A] text-center text-nowrap">Subscribe Now</div>
            </div>
        </motion.div>
    )
}

export default SideBar
