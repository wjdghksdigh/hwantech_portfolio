import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className=" body-font shadow-topx">
         <div className="container px-6 py-5 mx-auto md:justify-end justify-center flex items-center sm:flex-row flex-col">
           <div className="flex title-font font-medium items-center justify-center">
             <Link href="/"><span className="ml-3 text-xl">hwantech</span></Link>
            </div>
         </div>
      </div>
    </footer>
  )
}
