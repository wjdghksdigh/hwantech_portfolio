

//======================= header ========================================

// header scroll 한수
export const handleScroll = (prevScrollPos: number, setIsHeaderVisible: Function, setPrevScrollPos: Function) => {
  const currentScrollPos = (window as any).pageYOffset || document.documentElement.scrollTop;
  const isScrollingUp = prevScrollPos > currentScrollPos;

  setIsHeaderVisible(isScrollingUp || currentScrollPos < 10);
  setPrevScrollPos(currentScrollPos);
};


//======================= about ========================================

// 내 github link 이동 이벤트 함수
export const handleGithubClick = () => {
  const githubUrl = 'https://github.com/wjdghksdigh';
  window.open(githubUrl, '_blank');
};

// 내 Tistory link 이동 이벤트 함수
export const handleTistoryClick = () => {
  const githubUrl = 'https://hwantech.tistory.com/';
  window.open(githubUrl, '_blank');
};

// 내 Notion link 이동 이벤트 함수
export const handleNotionClick = () => {
  const githubUrl = 'https://www.notion.so/ca63671babaf4ebc8223aec6eabc85c0';
  window.open(githubUrl, '_blank');
};



//======================= project ========================================

// github link 이동 이벤트 함수
export const handleGithubLinkClick = (githubUrl: string) => {
  window.open(githubUrl, '_blank');
};

// youtube link 이동 이벤트 함수
export const handleYoutubeLinkClick = (youtubeUrl: string) => {
  window.open(youtubeUrl, '_blank');
};

// release address link 이동 이벤트 함수
export const handleAddressLinkClick = (address: string) => {
  window.open(address, '_blank');
};