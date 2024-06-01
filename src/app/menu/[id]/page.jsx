"use client";
import CardItemDetail from "@/Components/CardItemDetail";
import CardItemDetailChildren from "@/Components/CardItemDetailChildren";

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
        {data.products[0]
          ? data.products.map((details) => <CardItemDetail detail={details} />)
          : data.children.map((details) => <CardItemDetailChildren detail={details} />)}
      </div>
    </>
  );
};

export default page;
