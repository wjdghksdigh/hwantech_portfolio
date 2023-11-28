
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