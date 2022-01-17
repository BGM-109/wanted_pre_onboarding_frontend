import NavBrand from './components/NavBrand'
import NavMenu from './components/NavMenu'
import NavAccount from './components/NavAccount'
import ImageSlider from './components/ImageSlider'

const heroImages = [
  {"imageUrl" : 'images/hero_1.jpg', "title": "마케팅 주니어를 찾습니다", "subTitle": "1월 17일(월) 설명회 신청하기"},
  {"imageUrl" : 'images/hero_2.jpg', "title": "개발자 되고싶은 분들!?", "subTitle": "프론트엔드 무료 교육과정 참여하기"},
  {"imageUrl" : 'images/hero_3.jpg', "title": "성장하는 개발자가 되려면?", "subTitle": "OOO 검색하지 말 것!"},
  {"imageUrl" : 'images/hero_4.jpg', "title": "해, 커리어 EP 02 공개", "subTitle": "마지막 관문 2라운드의 승자는?"},
  {"imageUrl" : 'images/hero_5.jpg', "title": "개발자 성장 비결 공개!", "subTitle": "Velog, 글 쓰는 개발자들의 이야기"},
  {"imageUrl" : 'images/hero_6.jpg', "title": "성과를 내는 마케팅", "subTitle": "실제 사례를 공개합니다!"},
  {"imageUrl" : 'images/hero_7.jpg', "title": "2022년 달라지는 노동법령", "subTitle": "노무관리 쟁점 한 눈에 파악하기"},
  {"imageUrl" : 'images/hero_8.jpg', "title": "UX 디자이너의 커리어 설계", "subTitle": "브랜드 가치를 더하는 디자인"},
  {"imageUrl" : 'images/hero_9.jpg', "title": "성과를 내는 마케팅", "subTitle": "실제 사례를 공개합니다!"},
];


function App() {
  return (
    <div className="w-full h-screen">
      <div className="w-full border-b-[1px]" id="header">
        <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-between">
          <NavBrand />
          <NavMenu />
          <NavAccount />
        </div>
      </div>
      <ImageSlider slides = {heroImages}/>

    </div>
  );
}

export default App;
