import { useState } from 'react';
import Image from 'next/image';

// Spinner
import { DotLoader } from 'react-spinners';


const HobbyTab = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section className="text-gray-600 body-font min-h-screen lg:px-[200px]">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">여행(Travel)</h1>
            <div className="h-1 w-20 bg-baby-sky rounded"></div>
          </div>
          <p className="lg:w-2/3 w-full leading-relaxed text-gray-500"> 
            저의 취미는 여행입니다. 평소 활발하고 어울리기를 좋아하는 성격으로 이곳저곳을 다니며 다양한 사람들을 만나고 느끼며, 경험을 하는 것을 좋아합니다. 그 경험을 토대로 소통하는 법을 배우고 많은 부분의 긍정적인 영향을 받고 있습니다.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="flex items-center justify-center mx-auto xl:w-1/3 md:w-1/2 p-4">
            <div className="p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/assets/images/hobbyTab_usa.png"
                alt="hobby"
                width={720}
                height={400}
              />
              <h2 className="flex items-center justify-center mx-auto text-lg text-gray-900 font-medium title-font mb-4">U.S.A</h2>
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto xl:w-1/3 md:w-1/2 p-4">
            <div className="p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/assets/images/hobbyTab_japan.jpg"
                alt="hobby"
                width={720}
                height={400}
              />
              <h2 className="flex items-center justify-center mx-auto text-lg text-gray-900 font-medium title-font mb-4">Japan</h2>
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto xl:w-1/3 md:w-1/2 p-4">
            <div className="p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/assets/images/hobbyTab_bangkok.jpg"
                alt="hobby"
                width={720}
                height={400}
              />
              <h2 className="flex items-center justify-center mx-auto text-lg text-gray-900 font-medium title-font mb-4">Bangkok</h2>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default HobbyTab;