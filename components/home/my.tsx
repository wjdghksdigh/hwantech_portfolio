import Animation from "./amination"

export default function My() {
    return(
            <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요, 프론트엔드 개발자 김정환입니다.</h1>
            <p className="mb-8 leading-relaxed">
                저는 수학 문제 푸는 것을 좋아해서 수학과 전공을 선택하였습니다. 복수전공을 시작하면서 수학과 비슷한 매력을 가진 코딩에 흥미가 생겼고, 마크업 언어에 대한 호기심에 혼자서 관련 영상과 서적을 찾아 이것저것 시도해보면서 자연스럽게 프론트엔드 개발자를 꿈꾸게 되었습니다. 프론트엔드 개발자가 되고 싶습니다.
            </p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">프로젝트 보러가기</button>
            </div>
            </div>

    )
}