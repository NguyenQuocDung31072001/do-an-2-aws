import React from "react"

const labelRating: Record<string, string> = {
  "1": "Rất không hài lòng",
  "2": "Không hài lòng",
  "3": "Bình thường",
  "4": "Hài lòng",
  "5": "Cực kì hài lòng",
}
interface IProps {
  rating: number
  setRating: React.Dispatch<
    React.SetStateAction<number>
  >
}
export default function RatingCommon({
  rating,
  setRating,
}: IProps) {
  const [ratingMouse, setRatingMouse] =
    React.useState(rating)

  const handleWidth = (order: number) => {
    if (order <= ratingMouse) {
      return "100%"
    }
    if (
      order > ratingMouse &&
      order - ratingMouse < 1
    ) {
      return (
        (ratingMouse - Math.floor(ratingMouse)) *
          100 +
        "%"
      )
    }
    return "0%"
  }
  return (
    <div>
      <div className="flex items-center">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <div
              className="relative"
              key={index}
              onMouseEnter={() => {
                setRatingMouse(index + 1)
              }}
              onMouseLeave={() => {
                setRatingMouse(rating)
              }}
              onClick={() => setRating(index + 1)}
            >
              <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{
                  width: handleWidth(index + 1),
                }}
              >
                <svg
                  enableBackground="new 0 0 15 15"
                  viewBox="0 0 15 15"
                  x={0}
                  y={0}
                  className="h-6 w-6 fill-yellow-300 text-yellow-300"
                >
                  <polygon
                    points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                  />
                </svg>
              </div>
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x={0}
                y={0}
                className="h-6 w-6 fill-current text-gray-300"
              >
                <polygon
                  points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                />
              </svg>
            </div>
          ))}
      </div>
      <div className="flex justify-center">
        {labelRating[ratingMouse.toString()]}
      </div>
    </div>
  )
}
