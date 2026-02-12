import type { Coffee } from "../types";

type CardProps = {
  card: Coffee;
};

export function Card({ card }: CardProps) {
  return (
    <article key={card.id}>
      <div>
        <div className="relative mb-2">
          <img
            src={card.image}
            alt={card.name}
            className="object-center w-full rounded-xl"
          />
          {card.popular && (
            <p className="absolute top-2 left-2 bg-yellow text-brown px-3 py-1 rounded-full text-[12px] font-medium">
              popular
            </p>
          )}
        </div>
      </div>

      <div className="custom-flex mb-2">
        <p className="font-semibold">{card.name}</p>
        <span className="bg-lightgreen text-black text-[12px] py-1 px-2 rounded-md font-semibold">
          {card.price}
        </span>
      </div>

      {card.rating ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src="Star_fill.svg" alt="Start fill icon" />
            <p className="paragraph">{card.rating}</p>
            <span className="paragraph text-lightgray">
              ({card.votes}) votes
            </span>
          </div>
          <div>
            {card.available === false && (
              <p className="paragraph text-red">Sold out</p>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <img src="./Star.svg" alt="Empty star icon" />
          <p className="paragraph text-lightgray">No ratings</p>
        </div>
      )}
    </article>
  );
}
