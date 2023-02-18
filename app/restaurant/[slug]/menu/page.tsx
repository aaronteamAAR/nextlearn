import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import Header from "../components/Header";
import Menu from "../components/Menu";
import RestaurantNav from "../components/RestaurantNav";

export default function MenuPage() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
       <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
           <RestaurantNav />
            <Menu />
  
          </div>
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
