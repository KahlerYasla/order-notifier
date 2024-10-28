

interface LayoutContainerProps {
    children: React.ReactNode;
    className?: string;
    }

const LayoutContainer: React.FC<LayoutContainerProps> = ({ children, className }) => {
    return (
        <div className={className}>
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    );
}