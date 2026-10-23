import Image from "next/image";


export default function ClientLogos() {
  return (
    <ul className="grid grid-cols-3 place-items-center gap-x-8 gap-y-10">
      
      <li >
          <img
            src="/images/home/client-logo/logo-1.svg"
            className=" w-auto max-h-[32px] object-contain   "
          />
        </li>
          <li >
          <img
            src="/images/home/client-logo/logo-2.svg"
            className=" w-auto max-h-[42px] object-contain    "
          />
        </li>
          <li >
          <img
            src="/images/home/client-logo/logo-3.svg"
            className=" w-auto max-h-[44px] object-contain    "
          />
        </li>
        <li >
          <img
            src="/images/home/client-logo/logo-4.svg"
            className=" w-auto max-h-[34px] object-contain    "
          />
        </li>
         <li >
          <img
            src="/images/home/client-logo/logo-5.svg"
            className=" w-auto max-h-[43px] object-contain   "
          />
        </li>
          <li >
          <img
            src="/images/home/client-logo/logo-6.svg"
            className=" w-auto max-h-[44px] object-contain    "
          />
        </li>
         <li >
          <img
            src="/images/home/client-logo/logo-7.svg"
            className=" w-auto max-h-[44px] object-contain    "
          />
        </li>
          <li >
          <img
            src="/images/home/client-logo/logo-8.svg"
            className=" w-auto max-h-[48px] object-contain    "
          />
        </li>
          <li >
          <img
            src="/images/home/client-logo/logo-9.svg"
            className=" w-auto max-h-[56px] object-contain    "
          />
        </li>
    </ul>
  );
}
