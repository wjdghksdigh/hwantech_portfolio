import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font min-h-screen lg:px-[200px] lg:py-[150px]">
      <div className="container px-5 py-2 mx-auto flex flex-wrap ">
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/assets/images/gallery03.jpg"
                width={500}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/assets/images/gallery02.jpg"
                width={501}
                height={301}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/assets/images/gallery01.png" 
                width={600}
                height={360}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="/assets/images/gallery06.jpg"
                width={601}
                height={361}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/assets/images/gallery04.jpg"
                width={502}
                height={302}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="/assets/images/gallery05.jpg"
                width={503}
                height={303}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
