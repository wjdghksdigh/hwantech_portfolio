import Link from 'next/link';

// jsons
import lottieJson from '../public/assets/animation/404.json'

//library
import Lottie from 'react-lottie-player';

export default function PageNotFound() {
  const animationData = lottieJson;

  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font position:relative z-20">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Link href="/">
         <div>
             <h1 className='flex items-center justify-center text-lg text-gray-500 font-semibold'> 페이지를 찾을 수 없습니다.</h1>
           <Lottie
             loop
             animationData={lottieJson}
             play
             style={{width: 300, height: 300}}
           />
         </div>
       </Link>
      </div>
    </section>
  );
}
