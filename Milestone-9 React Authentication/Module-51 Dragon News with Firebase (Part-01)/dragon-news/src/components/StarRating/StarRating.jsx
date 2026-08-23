const StarRating = ({ rating }) => {
    return (
        <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((star) => (
                <input
                    key={star}
                    type="radio"
                    name={`rating-${rating}`}
                    className="mask mask-star-2 bg-[#FF8C47]"
                    defaultChecked={star <= rating}
                    aria-current={star <= rating}
                />
            ))}
        </div>
    );
};

export default StarRating;