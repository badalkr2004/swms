
import main_page_garbage from  "@/public/main-page-garbage.jpg"
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full h-full lg:w-1/2 m-auto min-h-[500px] ">
     
      <Image src={main_page_garbage} alt="main image" />
      <h1 className="font-bold text-3xl text-center w-full md:w-4/5 m-auto md:text-3xl text-green-900">
      Efficient Waste Solutions for a Cleaner Tomorrow
        
      </h1>
      <p className="text-center">Trash Track is your ultimate solution for efficient and eco-friendly waste management. Our smart technology helps you sort, track, and manage waste effortlessly, promoting a cleaner and greener environment. Join us in making sustainable living easy and accessible for everyone.</p>
    </div>
  );
}
