"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <main> 
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            <RestaurantCard />
          </div>
        </main>
      </main>
    </main>
  );
}
