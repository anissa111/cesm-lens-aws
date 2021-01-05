import React from 'react'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Learn More/Contact Us</FooterLinkTitle>
              <FooterLink href="https://github.com/NCAR/cesm-lens-aws">
                GitHub Repo
              </FooterLink>
              <FooterLink href="https://ncar.ucar.edu/">NCAR</FooterLink>
              <FooterLink href="http://www.cesm.ucar.edu/projects/community-projects/LENS/">
                CESM LENS
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Open Data on AWS</FooterLinkTitle>
              <FooterLink href="http://aws.amazon.com/opendata/public-datasets">
                AWS Public Datasets
              </FooterLink>
              <FooterLink href="https://registry.opendata.aws/ncar-cesm-lens/">
                Dataset Entry{' '}
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
