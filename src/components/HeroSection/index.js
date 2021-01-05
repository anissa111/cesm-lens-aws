import React from 'react'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
} from './HeroElements'
import Video from '../../Videos/Planet Earth Revolving.mp4'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Community Earth System Model Large Ensemble (CESM LENS) Data Sets on
          AWS
        </HeroH1>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
