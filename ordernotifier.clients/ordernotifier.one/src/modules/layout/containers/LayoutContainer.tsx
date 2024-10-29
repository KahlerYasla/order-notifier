// router v6
import { Outlet } from "react-router-dom"

// components
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

interface LayoutContainerProps {
    className?: string
}

export const LayoutContainer: React.FC<LayoutContainerProps> = ({
    className,
}) => {
    return (
        <div className={className}>
            <Navbar />
            <main className="my-6 px-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
