import Link from 'next/link';

export default function Footer() {
  return (
    <div className="text-gray-600 body-font bg-white border-gray-400 shadow-topx">
        <div className="container bg-white px-6 py-5 mx-auto md:justify-end justify-center flex items-center sm:flex-row flex-col">
          <div className="flex title-font font-medium items-center justify-center text-gray-900">
            <Link href="/"><span className="ml-3 text-xl">hwantech</span></Link>
          </div>
        </div>
    </div>
  )
}
