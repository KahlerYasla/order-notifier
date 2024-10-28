interface FooterProps {
    className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <footer className={className}>
            <p>Footer</p>
        </footer>
    )
}
