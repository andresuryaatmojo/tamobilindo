import React, { useState } from "react";
import { reviews, ratingBreakdown } from "../../data/reviews";

function StarRating({ value }: { value: number }) {
  return (
    <span className="text-purple-500">
      {Array.from({ length: 5 }).map((_, i) =>
        i < Math.floor(value) ? "★" : "☆"
      )}
    </span>
  );
}

const ConsumerReviews: React.FC = () => {
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto my-12">
      <h2 className="text-2xl font-extrabold mb-2">Consumer reviews</h2>
      <div className="flex items-center gap-2 text-lg font-bold mb-1">
        {avgRating.toFixed(1)}
        <StarRating value={avgRating} />
        <span className="text-base font-normal text-blue-600">
          ({reviews.length} reviews)
        </span>
      </div>
      <div className="text-gray-500 mb-4">
        {Math.round((avgRating / 5) * 100)}% of drivers recommend this car
      </div>
      <div className="mb-6">
        <div className="font-semibold mb-2">Rating breakdown (out of 5):</div>
        <table className="w-full text-sm">
          <tbody>
            {ratingBreakdown.map((r) => (
              <tr key={r.aspect}>
                <td className="py-1">{r.aspect}</td>
                <td className="py-1">
                  <StarRating value={r.value} /> {r.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="font-bold mb-2">Most recent consumer reviews</div>
      <div className="flex flex-col gap-4">
        {reviews.map((r, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold">{r.rating.toFixed(1)}</span>
              <StarRating value={r.rating} />
            </div>
            <div className="font-semibold">{r.title}</div>
            <div className="text-xs text-gray-500 mb-1">
              {new Date(r.date).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              | By {r.author} {r.owns && <span className="italic">(Owns this car)</span>}
            </div>
            <div className="text-gray-700">
              {expanded === idx ? r.content : r.content.slice(0, 180) + (r.content.length > 180 ? "..." : "")}
            </div>
            {r.content.length > 180 && (
              <button
                className="text-blue-600 text-sm mt-1 hover:underline"
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              >
                {expanded === idx ? "Show less" : "Show full review"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsumerReviews; 