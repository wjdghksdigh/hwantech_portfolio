import Image from 'next/image';

// Component
import Animation from "./amination";

export default function Introduce() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          style={{ maxWidth: '300px', maxHeight: '300px' }}
          src="/assets/images/profil_my.png" 
          alt="Profile Image"
          width={300}
          height={300}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            안녕하세요, 프론트엔드 개발자 김정환입니다.
          </h1>
          <p className="mb-8 leading-relaxed">
            컴퓨터 소프트웨어 공학과를 진학하여, 저에게 맞는 분야가 무엇일지 고민하였습니다. 평소 사이트의 UI/UX의 흥미를 느끼고 왜 이 배너는 이 위치에 있을지 궁금해 하던 저를 발견해 프론트엔드 분야에 빠져들었고 이젠 풀스택을 도전하는 개발자가 되려고 합니다. 잘 부탁드립니다.
          </p>
        </div>
        <Animation />
      </div>
    </section>
  );
}
