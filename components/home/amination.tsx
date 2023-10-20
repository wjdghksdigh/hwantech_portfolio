import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '../../public/assets/bottomArrowAni.json'

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 200, height: 200 }}
    />
  )
}