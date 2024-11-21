"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

interface Data {
  url: string;
  price: string;
  title: string;
  time: string;
}

function useIsScreen1024px(): boolean {
  const [is1024px, setIs1024px] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIs1024px(window.innerWidth === 1024);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return is1024px;
}

export default function HitchedEvents({ className }: { className?: string }) {
  const [data, setData] = useState<Data[]>([]);
  const is1024px = useIsScreen1024px()
  useEffect(() => {
    async function getHitchedEvent() {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error getting hitched data: ", error);
      }
    }
    getHitchedEvent()
  }, []);
  return (
    <div
      className={`max-w-[2115px] 2xl:w-[2115px] bg-[rgba(0,0,0,0.5)] min-h-[741px] ${className} pl-2 lg:pl-0 md:pl-[85px]`}
    >
      <h3 className="text-[23px] md:text-[34px] px-24 font-[500] my-12">HITCHED EVENTS</h3>
      <div className={`grid grid-cols-1 ${is1024px ? "lg:grid-cols-2" : "lg:grid-cols-3"} 2xl:grid-cols-4  gap-10 2xl:gap-0 justify-items-center md:pr-20 lg:px-0`}>
        {data.map((item, idx) => (
          <div key={idx}>
            <Card
              price={item.price}
              time={item.time}
              title={item.title}
              url={item.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
