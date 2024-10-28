interface ListingGridProps {
    className?: string;
    listings: Listing[];
}

const ListingGrid: React.FC<ListingGridProps> = ({ className, listings }) => {
    return (
        <div className={className}>
            <div className="listing-grid">
                {listings.map(listing => (
                    <ListingCard key={listing.id} listing={listing} />
                ))}
            </div>
        </div>
    );
}

export default ListingGrid;

const ListingCard: React.FC<{ listing: Listing }> = ({ listing }) => {
    return (
        <div className="listing-card">
            <img src={listing.image} alt={listing.title} />
            <h2>{listing.title}</h2>
            <p>{listing.description}</p>
            <p>{listing.price}</p>
        </div>
    );
}