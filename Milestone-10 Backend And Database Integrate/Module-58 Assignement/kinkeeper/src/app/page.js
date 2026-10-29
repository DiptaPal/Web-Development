import Friends from "@/components/Friends";
import Hero from "@/components/Hero";
import friends from "../app/data/friends.json";

export default function Home() {
  return (
    <main className="max-w-277.5 mx-auto py-20 px-8">
      <Hero></Hero>
      <div className="w-full border-t border-[#E9E9E9] my-2 pb-10"></div>
      <div className="">
        <h3 className="text-xl md:text-2xl lg:text-4xl text-[#1F2937] font-semibold my-4">Your Friends</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch gap-6">
          {
            friends.map(friend => <Friends key={friend.id} friend={friend}></Friends>)
          }
        </div>
      </div>
    </main>
  );
}
