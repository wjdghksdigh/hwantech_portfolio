import Image from 'next/image';


const HobbyTab = () => {
  return (
    <section className="text-gray-600 body-font min-h-screen lg:px-[200px]">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">여행(Travel)</h1>
            <div className="h-1 w-20 bg-baby-sky rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"> fdg</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/720x400"
                alt="content"
                width={720}
                height={400}
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/720x400"
                alt="content"
                width={720}
                height={400}
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/720x400"
                alt="content"
                width={720}
                height={400}
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default HobbyTab;