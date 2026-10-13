import Image from "next/image";


export default function ClientLogos() {
  return (
    <ul className="grid grid-cols-3 place-items-center gap-x-8 gap-y-10">
      
      <li >
          <img
            src="/images/clientele/logo/5.svg"
            className=" w-auto max-h-[32px] object-contain   "
          />
        </li>
          <li >
          <img
            src="/images/clientele/logo/24.svg"
            className=" w-auto max-h-[42px] object-contain    "
          />
        </li>
          <li >
          <img
            src="/images/clientele/logo/23.svg"
            className=" w-auto max-h-[44px] object-contain    "
          />
        </li>
        <li >
          <img
            src="/images/clientele/logo/21.svg"
            className=" w-auto max-h-[34px] object-contain    "
          />
        </li>
         <li >
          <img
            src="/images/clientele/logo/16.svg"
            className=" w-auto max-h-[43px] object-contain   "
          />
        </li>
          <li >
          <img
            src="/images/clientele/logo/22.svg"
            className=" w-auto max-h-[44px] object-contain    "
          />
        </li>
         <li >
          <img
            src="/images/clientele/logo/4.svg"
            className=" w-auto max-h-[44px] object-contain    "
          />
        </li>
          <li >
          <img
            src="/images/clientele/logo/9.svg"
            className=" w-auto max-h-[48px] object-contain    "
          />
        </li>
          <li >
          <img
            src="/images/clientele/logo/27.svg"
            className=" w-auto max-h-[56px] object-contain    "
          />
        </li>
    </ul>
  );
}
