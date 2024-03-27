import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between gap-[4vw] px-[4vw] py-[6vw] md:flex-row">
      <div className="grow">
        <h2 className=" pb-6 text-4xl">Hi there</h2>
        <p className="w-4/5">
          I&apos;m Elke, the person who picked out all the cool stuff you see on
          this website. I really love nice things and making spaces look
          awesome. I&apos;ve gone through the interwebs and back to find my
          absolute favorites, and now I&apos;m sharing them with you. <br />
          <br />
          Here, you&apos;ll see a bunch of things that I think are both stylish
          and useful. They&apos;re the kind of items that I love having around,
          and I hope you&apos;ll like them too. <br />
          <br />I enjoy creating a cozy and welcoming atmosphere at home, and I
          want to help you do the same. Check out these cool finds and
          let&apos;s make our spaces even more awesome together! <br />
          <br />
          Cheers, <br />
          <br />
          Elke
        </p>
      </div>
      <Image
        className="order-first grow"
        src={"/Elke.png"}
        alt="Profile image of Elke"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      ></Image>
    </main>
  );
}
