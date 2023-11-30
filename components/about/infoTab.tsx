import Image from 'next/image';

// jsons
import lottieJson from '../../public/assets/animation/infoAni.json'

//library
import Lottie from 'react-lottie-player';

// icons
import { CiLink } from "react-icons/ci";

// handler
import { handleGithubClick, handleTistoryClick, handleNotionClick } from '@/utils/handler';

const InfoTab = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto flex flex-col items-center">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden flex items-center justify-center">
            {/* 상단 로티애니메이션 */}
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: 200, height: 200, color: 'text-white' }}
            />
          </div>
          {/* 왼쪽 내용 */}
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <Image
                className="object-cover object-center rounded"
                style={{ maxWidth: '300px', maxHeight: '300px' }}
                src="/assets/images/resume_pic.jpg" 
                alt="Profile Image"
                width={100}
                height={100}
              />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">김정환</h2>
                <div className="w-12 h-1 bg-baby-sky rounded mt-2 mb-4"></div>
                <p className="text-base">반응형 웹 프론트엔드 개발자</p>
              </div>
            </div>
            {/* 오른쪽 내용 */}
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-sm mb-2">생년월일: 96.12.02</p>
              <p className="leading-relaxed text-sm mb-2">주소: 경기도 광주시</p>
              <p className="leading-relaxed text-sm mb-4">이메일: wjdghksdigh12@gmail.com</p>
              <p className="leading-relaxed text-sm ">Next.js, typesScript, React 기반의 프론트엔드 개발자를 희망하는 김정환입니다.</p>
              <p className="leading-relaxed text-sm mb-4">Github를 활용하여 팀개발을 진행하고, 꾸준히 블로깅하여 공부하고있습니다.</p>

              <button
                className="text-gray-400 text-sm flex items-center justify-center gap-2 hover:text-baby-sky"
                onClick={handleGithubClick}
              >
                <CiLink />
                GitHub
              </button>
              <button
                className="text-gray-400 text-sm flex items-center justify-center gap-2 hover:text-baby-sky"
                onClick={handleTistoryClick}
              >
                <CiLink />
                Tistory
              </button>
              <button
                className="text-gray-400 text-sm flex items-center justify-center gap-2 hover:text-baby-sky"
                onClick={handleNotionClick}
              >
                <CiLink />
                Notion
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoTab;