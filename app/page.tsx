import Masonry from "@/app/_components/Masonry";

const getData = async (page: number, category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${category || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

export default async function Home() {
  const category = "valentine";
  const data = await getData(1, category);

  return (
    <>
      <main className="flex flex-col items-center justify-center p-[4vw]">
        <Masonry data={data} />
      </main>
    </>
  );
}
