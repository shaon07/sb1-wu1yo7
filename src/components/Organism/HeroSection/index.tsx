import { BadgeDollarSign, ChevronDown, Eye, Mouse, Users } from "lucide-react";
import Button from "../../Atoms/Button";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-4 md:px-4 relative flex items-center">
      <div className="hidden relative lg:flex w-[8rem] justify-end">
        <div className="block rounded-full border border-red-400 p-4 bg-[#F8717129] relative w-[60px] h-[60px] animate-ping">
          <div className="absolute inset-0 bg-transparent z-0 rounded-full scale-[1.5] border border-dashed border-[#ef444573]"></div>
          <div className="absolute inset-0 bg-transparent z-0 rounded-full scale-[2] border border-dashed border-[#ef444573]"></div>
          <div className="absolute inset-0 bg-transparent z-0 rounded-full scale-[2.5] border border-dashed border-[#ef444573] animate-spin"></div>
          <Users className="h-6 w-6 text-white" />
        </div>
      </div>

      <div className="mx-auto text-center fade-in">
        <h1 className="flex flex-col text-5xl md:text-7xl font-bold mb-6 px-2 md:px-0">
          <span className="block">From Concept to Code</span>
          <span className="block text-red-500 mt-2">We Make IT Happen</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          We Help Brands And B2B Enterprises Build Amazing <br />
          Websites That Convert Their Visitors To Paying Customers.
        </p>

        <Button className="rounded-full btn-shadow">Let's have a call</Button>

        <div className="w-full flex flex-col items-center justify-center mt-12 animate-bounce">
          <Mouse />
          <hr className="w-[1px] h-[8rem] bg-white mt-1" />
          <ChevronDown size={22} className="-mt-3" />
        </div>
      </div>

      <div className="hidden relative lg:flex w-[8rem] justify-start">
        <div className="block rounded-full border border-red-400 p-4 bg-[#F8717129] relative w-[60px] h-[60px] ">
          <div className="absolute inset-0 bg-transparent z-0 rounded-full scale-[1.5] border border-dashed border-[#ef444573]"></div>
          <div className="absolute inset-0 bg-transparent z-0 rounded-full scale-[2] border border-dashed border-[#ef444573]"></div>
          <div className="absolute inset-0 bg-transparent z-0 rounded-full scale-[2.5] border border-dashed border-[#ef444573] animate-spin"></div>
          <Eye className="h-6 w-6 text-white" />
        </div>

        <div className="hidden lg:block rounded-full border border-red-400 bg-[#F8717129] relative w-[20px] h-[20px]">
          <Eye className="h-[18px] w-[18px] text-white" />
        </div>
        <div className="hidden lg:block rounded-full border border-red-400 bg-[#F8717129] relative w-[20px] h-[20px] -left-4 top-6">
          <BadgeDollarSign className="h-[18px] w-[18px] text-white" />
        </div>
      </div>
    </section>
  );
}
