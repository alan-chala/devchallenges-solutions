import { useState, useMemo } from "react";
import type { Coffee } from "../types";
import { Card } from "./Card";
import { buttons } from "../constants";

type CardsProps = {
  data: Coffee[];
};

export function Cards({ data }: CardsProps) {
  const [activeBtn, setActiveBtn] = useState<"all" | "now">("all");

  const filteredData = useMemo(() => {
    if (activeBtn === "now") {
      return data.filter((item) => item.available);
    }

    return data;
  }, [data, activeBtn]);

  return (
    <>
      <section className="flex items-center gap-4">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            className={btn.value === activeBtn ? "active-btn" : "btn"}
            onClick={() => setActiveBtn(btn.value as "all" | "now")}
          >
            {btn.content}
          </button>
        ))}
      </section>

      <section className="custom-grid gap-10 w-full">
        {filteredData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </section>
    </>
  );
}
