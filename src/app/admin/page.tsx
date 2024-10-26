import main_page_garbage from "@/public/main-page-garbage.jpg";
import add_garbage from "@/public/add-garbage.png";
import nearby_bin_location from "@/public/nearby-bin-location.png";
// import add_garbage from "@/public/add-garbage.png";
import Image from "next/image";
import Link from "next/link";
export default function Admin() {
  return (
    <div className="w-full h-full lg:w-1/2 m-auto min-h-[500px] ">
      <Image src={main_page_garbage} alt="main image" />
      <h1 className="font-bold text-3xl text-center w-full md:w-4/5 m-auto md:text-3xl text-green-900">
        Trash Track - Admin Panel
      </h1>
      <p className="text-center">
        features:
        <br />
        Add new dustbin locations 
        <br />
        Get reported garbage locations
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
                Add New Dustbin
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
              <Link href="/report" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
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
                Garbage Reports
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
              <Link href="/admin/showDustLoc" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Bin Locations →
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
