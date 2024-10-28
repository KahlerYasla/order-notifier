// router v6
import { Link } from "react-router-dom"

// icons
import { AiFillProduct } from "react-icons/ai"
import { MdAccountCircle } from "react-icons/md"

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    return (
        <nav className={`${className}`}>
            <ul className="flex flex-row items-center justify-start gap-8 px-10 py-3 pr-12 font-bold">
                <img
                    src={`${process.env.PUBLIC_URL}/images/brand/raw.png`}
                    alt="logo"
                    className="bg-primary -mr-4 h-8 w-8 p-[3px]"
                />
                <h1 className="font-bold">Order Notifier</h1>
                <li className="ml-auto">
                    <Link className="ml-auto flex items-center gap-2" to="/">
                        <AiFillProduct size={"20px"} />
                        Product
                    </Link>
                </li>
                <li>
                    <Link className="flex items-center gap-2" to="/profile">
                        <MdAccountCircle size={"20px"} />
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
