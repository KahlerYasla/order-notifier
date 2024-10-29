import React from "react"

// router v6
import { Link } from "react-router-dom"

// icons
import { AiFillProduct } from "react-icons/ai"
import { RiFolderUserFill } from "react-icons/ri"
import { FaCartShopping } from "react-icons/fa6"
import { IoIosNotifications } from "react-icons/io"

// stores
import { useUserStore } from "../../auth"

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    // stores
    const userRole = useUserStore((state) => state.user.role)
    const isLoggedIn = useUserStore((state) => state.isLoggedIn)
    const userName = useUserStore((state) => state.user.username)

    return (
        <nav className={`${className}`}>
            <ul className="flex flex-row items-center justify-start gap-8 px-10 py-3 pr-12 font-bold">
                <img
                    src="/images/brand/raw.png"
                    alt="logo"
                    className="-mr-4 h-8 w-8 bg-primary p-[3px]"
                />
                <h1 className="font-bold">Order Notifier</h1>
                <li className="ml-auto">
                    <Link className="ml-auto flex items-center gap-3" to="/">
                        <AiFillProduct size={"20px"} />
                        Products
                    </Link>
                </li>
                <div className="h-[30px] w-[1px] bg-white bg-opacity-20" />
                {userRole !== "admin" ? (
                    <>
                        <li>
                            <Link
                                className="flex items-center gap-3"
                                to="/cart"
                            >
                                <FaCartShopping size={"18px"} />
                                Cart
                            </Link>
                        </li>
                        <div className="h-[30px] w-[1px] bg-white bg-opacity-20" />
                    </>
                ) : null}
                <li>
                    <Link className="flex items-center gap-3" to="/order">
                        <IoIosNotifications size={"22px"} />
                        Orders
                    </Link>
                </li>
                <div className="h-[30px] w-[1px] bg-white bg-opacity-20" />
                <li>
                    <Link
                        className={`${isLoggedIn ? "text-primary" : ""} flex items-center gap-3`}
                        to={isLoggedIn ? "/profile" : "/auth"}
                    >
                        <RiFolderUserFill size={"20px"} />
                        {isLoggedIn ? userName : "Login"}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
