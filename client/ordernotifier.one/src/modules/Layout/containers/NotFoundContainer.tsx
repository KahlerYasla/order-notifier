interface NotFoundContainerProps {
    className?: string;
}

const NotFoundContainer: React.FC<NotFoundContainerProps> = ({ className }) => {
    return (
        <div className={className}>
            <Header />
            <main className="main">
                <h1>404</h1>
                <p>Page not found</p>
            </main>
            <Footer />
        </div>
    );
}