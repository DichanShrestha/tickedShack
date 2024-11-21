import Footer from "@/components/Footer";
import HitchedEvents from "@/components/HitchedEvents";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="w-full flex justify-center">
        <Navbar />
      </div>
      <div className="relative h-[3500px] md:h-[2300px] xl:h-[2200px] w-full 2xl:h-[1736px]">
        <Image
          src="https://s3-alpha-sig.figma.com/img/0d19/bdcc/3c5ee5306a0148b253b8e1a2cd0c72e7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VdI2Gcio0t0zViAL7aveNGvDougpUmfz1OgNVuRR4YQ7ckDvGareJ5HUEAGLn7MbvFighrjmJSVEOejry6iWGmhM4zMcs4Ae4R2h339PMzYagIZq5~rtByixGWKYjaF96REWTscj-lP~oyZcyQNenRtRE0tarC~t8xCvF5lPnDD6MAj0az8ySIVh0USYIBV38a8fu5BeBkyBzL66i4nYMFaj5bu5Fg0zg5bWqNz9MBRXHytHdFJA~5tzi4Yy3qcvnvT-JRFGVESoiVChm737oHGMzdlAMJ-z~jTw7TEF4Y7GWnR7Qo5ubFtg9lUcfOAzTqp9Mo7OpKZSqPyyQB6-sw__"
          alt="bg-img"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="bg-black absolute h-full w-full opacity-90 bg-custom-gradient" />
      </div>
      <div className="flex w-full h-auto justify-center absolute top-56 md:top-80 lg:top-[387px] flex-col gap-20 items-center">
        <div>
          <h2 className="text-[#AC906C] tracking-widest sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[62px] font-[500]">
            Events
          </h2>
        </div>
        <div>
          <h2 className=" tracking-widest sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[62px] font-[500]">
            SEE BELOW OUT UPCOMING EVENTS
          </h2>
        </div>
      </div>
      <div className="flex justify-center">
        <HitchedEvents className="absolute top-[470px] md:top-[650px] lg:top-[800px]"/>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
