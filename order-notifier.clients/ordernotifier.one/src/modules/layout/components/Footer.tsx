interface FooterProps {
    className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <footer className={`flex px-10 py-3 font-bold ${className}`}>
            <p>
                order-notifier 1.0 by&nbsp;
                <a
                    className="text-primary font-bold underline"
                    href="https://github.com/kahleryasla"
                    target="_blank"
                >
                    kahleryasla
                </a>
            </p>
        </footer>
    )
}
