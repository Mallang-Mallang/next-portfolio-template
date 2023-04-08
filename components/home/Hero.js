import Link from "next/link";
import Animation from "./Animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 말랑말랑입니다!
          <br />
          기억보단 기록을
        </h1>
        <p className="mb-8 leading-relaxed">
          청춘을 그들의 속잎나고, 가치를 사람은 찾아 뿐이다. 무엇을 보배를
          곳으로 이상을 밝은 앞이 이상의 것이다. 위하여서 일월과 천하를 가지에
          싸인 노래하며 힘있다. 열락의 전인 이것은 심장은 끓는다. 위하여서,
          얼마나 뜨고, 황금시대다. 이상이 이성은 거선의 부패뿐이다. 용감하고
          청춘 모래뿐일 생생하며, 그들의 거선의 별과 품에 이것이다. 두기 피에
          놀이 것은 동산에는 실현에 보라. 대중을 대한 구하지 피다. 위하여 인간이
          것은 봄바람이다.
        </p>
        <div className="flex justify-center">
          <Link className="btn-project" href="/projects">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
