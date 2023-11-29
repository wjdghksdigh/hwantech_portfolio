
const ExpreinceTab = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          {/* Education */}
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-baby-sky text-white relative z-10 title-font font-medium text-sm">1</div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-2 text-xl">Education</h2>
              <p className="text-xs leading-relaxed">2006.03 - 2011.02 세곡초등학교</p>
              <p className="text-xs leading-relaxed">2011.03 - 2013.02 오류중학교</p>
              <p className="text-xs leading-relaxed">2013.03 - 2015.02 신도림고등학교</p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          {/* zara */}
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-baby-sky text-white relative z-10 title-font font-medium text-sm">2</div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-2 text-xl">ZARA</h2>
              <p className="text-xs leading-relaxed">2018.06 - 2019.11 zara (CS 및 사회기초 지식 습득)</p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          {/* Code States */}
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-baby-sky text-white relative z-10 title-font font-medium text-sm">3</div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-2 text-xl">Code States</h2>
              <p className="text-xs leading-relaxed">2022.12 - 20123.05 코드스테이츠 수료 (프론트엔드 기초 지식과 프로젝트 습득)</p>
            </div>
          </div>
        </div>
        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          {/* dongyang */}
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-baby-sky text-white relative z-10 title-font font-medium text-sm">4</div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-2 text-xl">B.S. Dong Yang Univ.</h2>
              <p className="text-xs leading-relaxed">2015.03 - 2023.02 동양미래대학교 수료 (프로그래밍 기초 지식과 졸업작품 및 경진대회)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpreinceTab;