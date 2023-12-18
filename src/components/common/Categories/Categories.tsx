"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { categoryFilters } from "@/components/constant";
import * as Style from "./index.styled";

const Categories = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const handleTags = (item: string) => {
    router.push(`${pathName}?category=${item}`);
  };

  return (
    <Style.Categories>
      <div className="flexBetween w-full gap-5 flex-wrap">
        <ul className="flex gap-2 overflow-auto">
          {categoryFilters.map((filter) => (
            <Style.Button
              key={filter}
              type="button"
              onClick={() => handleTags(filter)}
              active={category === filter}
            >
              {filter}
            </Style.Button>
          ))}
        </ul>
      </div>
    </Style.Categories>
  );
};

export default Categories;
