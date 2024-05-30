"use client";
import CardItemDetail from "@/Components/CardItemDetail";
import { useSearchParams } from "next/navigation";

const page = async ({ searchParams }) => {
  const req = await fetch(
    `https://api.mirafgan.me/starbucks?category=${searchParams.category}&sub_category=${searchParams.sub_category}`,
    {
      cache: "no-store",
    }
  );
  const data = await req.json();

  return (
    <>
      <div className="row">
        {data.products.map((details) => {
          return (<CardItemDetail detail={details}/>)
        })}
      </div>
    </>
  );
};

export default page;
