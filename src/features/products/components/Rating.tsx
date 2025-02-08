import { FaStar, FaRegStar } from "react-icons/fa"
const MAX = 5
type RatingProps = { rating: number; size: number }

export const Rating: React.FC<RatingProps> = ({ rating = 0, size = 16 }) => (
  <div className="flex gap-1">
    {Array.from({ length: MAX }, (_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-amber-500" size={size} />
      ) : (
        <FaRegStar key={i} className="text-gray-400" size={size} />
      ),
    )}
  </div>
)
