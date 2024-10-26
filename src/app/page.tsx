import main_page_garbage from "@/public/main-page-garbage.jpg";
import add_garbage from "@/public/add-garbage.png";
import nearby_bin_location from "@/public/nearby-bin-location.png";
// import add_garbage from "@/public/add-garbage.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="w-full h-full lg:w-1/2 m-auto min-h-[500px] ">
      <Image src={main_page_garbage} alt="main image" />
      <h1 className="font-bold text-3xl text-center w-full md:w-4/5 m-auto md:text-3xl text-green-900">
        Efficient Waste Solutions for a Cleaner Tomorrow
      </h1>
      <p className="text-center">
        Trash Track is your ultimate solution for efficient and eco-friendly
        waste management. Our smart technology helps you sort, track, and manage
        waste effortlessly, promoting a cleaner and greener environment. Join us
        in making sustainable living easy and accessible for everyone.
      </p>
      <br />
      <br />
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <Image
              src={add_garbage}
              alt="Addgarbage"
              title="Addgarbage"
              className="p-8 rounded-t-lg"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                Add Garbage Locations
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
              <Link href="/check" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Add Now →
              </Link>
            </div>
          </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
            <Image
              src={nearby_bin_location}
              alt="Addgarbage"
              title="Addgarbage"
              className="p-8 rounded-t-lg"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                Nearby Bin Locations
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse"></div>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
              <Link href="/listDustbins" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Bin Locations →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex gap-4 align-middle items-center p-3  h-fit outline rounded outline-green-600 justify-between">
        <h1 >Are you a Admin? Login to continue:</h1>
        
        <Link href="/admin">
          <Button className="bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white text-sm rounded-lg px-10 py-3">
            Admin
          </Button>
        </Link>
      </div>
    </div>
  );
}
