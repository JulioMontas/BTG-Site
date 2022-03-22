import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"

const Footer = styled.div`
  background: #eef0f2;
  color: #333;
  padding: 2rem 1rem 2rem;
`
const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  "textLink address"
  "socialMedia socialMedia";
  row-gap: 3em;
  padding: 3em 0;
  align-items: center;
  @media (min-width: 992px) {
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-areas:
      "textLink address socialMedia";
    row-gap: 1em;
    padding: 3.5em 0px 3.5em;
  }
`
const TextLink = styled.address`
  grid-area: textLink;
  div {
    margin-bottom: 0.65em;
    span div span:first-child{
      margin-bottom: 0.65em;
    }
    :last-child{
      margin-bottom: 0;
    }
  }
  a{
    color: var(--primary-cta-color);
    transition: 0.3s;
    :hover{
      color: var(--primary-cta-color-hover);
    }
  }
  svg{
    margin-bottom: -6px;
    margin-right: 10px;
  }
`
const Address = styled.address`
  grid-area: address;
  font-size: 1.125em;
  div{
    display: inline-flex;
    flex-direction: column;
  }
  @media (min-width: 992px) {
    font-size: 1.1em;
  }
`
const SocialMedia = styled.address`
  grid-area: socialMedia;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  li{
    margin-right: 0.5em;
    :nth-child(1) a {
      padding-top: 14px;
      svg{
        transform: scale(0.7);
      }
    }
    :nth-child(2) a {
      padding-top: 17px;
      svg{
        transform: scale(0.7);
      }
    }
    :nth-child(3) a {
      padding-top: 13px;
      svg{
        transform: scale(0.7);
      }
    }
    :nth-child(4) a {
      padding-top: 17px;
    }
    a{
      display: block;
      background: var(--primary-cta-color);
      width: 60px;
      height: 60px;
      text-align: center;
      border-radius: 100px;
      transition: 0.3s;
      :hover{
        background: var(--primary-cta-color-hover);
      }
    }
  }
`
const Bottom = styled.div`
  display: flex;
  flex-direction: column-reverse;
  row-gap: 2em;
  div{
    text-align: left;
  }
  a{
    color: var(--primary-cta-color);
    fill: var(--primary-cta-color);
    transition: 0.3s;
    :hover{
      color: var(--primary-cta-color-hover);
      fill: var(--primary-cta-color-hover);
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    div{
      text-align: right;
    }
  }
`
const SvgColor = styled.path`
  color: var(--primary-cta-color);
  fill: var(--primary-cta-color);
  transition: 0.3s;
  :hover{
    color: var(--primary-cta-color-hover);
    fill: var(--primary-cta-color-hover);
  }
`

const SubFooter = () => (
  <Footer>
    <div className="container">

      <Top>
        <TextLink>
        <div>
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <SvgColor d="M27.9992 21.2147V25.2793C28.0007 25.6566 27.9233 26.0301 27.7718 26.3758C27.6203 26.7216 27.3982 27.0319 27.1196 27.287C26.841 27.5421 26.5121 27.7363 26.1539 27.8572C25.7958 27.9781 25.4162 28.023 25.0397 27.989C20.8623 27.536 16.8496 26.1114 13.324 23.8296C10.0439 21.7494 7.263 18.974 5.17871 15.7004C2.88441 12.1658 1.45663 8.14161 1.01102 3.95373C0.977094 3.57907 1.02171 3.20146 1.14202 2.84495C1.26234 2.48843 1.45571 2.16083 1.70984 1.88299C1.96397 1.60515 2.27328 1.38316 2.61808 1.23117C2.96288 1.07917 3.33561 1.00049 3.71255 1.00013H7.78521C8.44404 0.99366 9.08274 1.2265 9.58228 1.65525C10.0818 2.084 10.4081 2.67941 10.5003 3.3305C10.6722 4.63125 10.991 5.90843 11.4506 7.13766C11.6332 7.6226 11.6728 8.14963 11.5645 8.6563C11.4562 9.16297 11.2047 9.62805 10.8397 9.99642L9.11561 11.7171C11.0482 15.1091 13.8622 17.9176 17.2609 19.8463L18.985 18.1256C19.3541 17.7613 19.8201 17.5103 20.3278 17.4022C20.8355 17.2942 21.3635 17.3336 21.8494 17.5159C23.0811 17.9746 24.3608 18.2928 25.6642 18.4643C26.3236 18.5572 26.9259 18.8887 27.3564 19.3958C27.7869 19.9029 28.0157 20.5502 27.9992 21.2147Z" fill="#BCA360" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <a href="tel:5554280940">813-251-0777</a>
          </div>
           <div>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 11.9998V2.6665H24V11.9998" fill="white"/>
                <path d="M8 11.9998V2.6665H24V11.9998" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <SvgColor d="M7.99984 24H5.33317C4.62593 24 3.94765 23.719 3.44755 23.219C2.94746 22.7189 2.6665 22.0406 2.6665 21.3333V14.6667C2.6665 13.9594 2.94746 13.2811 3.44755 12.781C3.94765 12.281 4.62593 12 5.33317 12H26.6665C27.3737 12 28.052 12.281 28.5521 12.781C29.0522 13.2811 29.3332 13.9594 29.3332 14.6667V21.3333C29.3332 22.0406 29.0522 22.7189 28.5521 23.219C28.052 23.719 27.3737 24 26.6665 24H23.9998" fill="#BCA360"/>
                <path d="M7.99984 24H5.33317C4.62593 24 3.94765 23.719 3.44755 23.219C2.94746 22.7189 2.6665 22.0406 2.6665 21.3333V14.6667C2.6665 13.9594 2.94746 13.2811 3.44755 12.781C3.94765 12.281 4.62593 12 5.33317 12H26.6665C27.3737 12 28.052 12.281 28.5521 12.781C29.0522 13.2811 29.3332 13.9594 29.3332 14.6667V21.3333C29.3332 22.0406 29.0522 22.7189 28.5521 23.219C28.052 23.719 27.3737 24 26.6665 24H23.9998" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24 18.6665H8V29.3332H24V18.6665Z" fill="white" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <a href="tel:5554280940">813-251-0777</a>
            </div>
        </TextLink>

        <Address>
          <div>
            <span>505 S. Magnolia Avenue</span>
            <span>Tampa, Florida 33606</span>
          </div>
         </Address>

        <SocialMedia>
          <li>
            <a href="https://www.facebook.com/BarnesTrialGroup/">
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_967_2018)">
                  <g filter="url(#filter0_d_967_2018)">
                    <path d="M24.0402 3.08789H20.0369C18.2673 3.08789 16.5702 3.79085 15.3189 5.04213C14.0676 6.29341 13.3647 7.99051 13.3647 9.76009V13.7634H9.36133V19.1012H13.3647V29.7767H18.7024V19.1012H22.7057L24.0402 13.7634H18.7024V9.76009C18.7024 9.40618 18.843 9.06676 19.0933 8.8165C19.3435 8.56625 19.6829 8.42565 20.0369 8.42565H24.0402V3.08789Z" fill="white"/>
                    </g>
                    </g>
                    <defs>
                      <filter id="filter0_d_967_2018" x="5.36133" y="3.08789" width="22.6787" height="34.689" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_967_2018"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_967_2018" result="shape"/>
                      </filter>
                      <clipPath id="clip0_967_2018">
                        <rect width="32.0266" height="32.0266" fill="white" transform="translate(0.0200195 0.418945)"/>
                      </clipPath>
                    </defs>
                </svg>
             </a>
          </li>
          <li>
            <a href="https://twitter.com/BTGLaw">
            <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_967_2022)">
                    <path d="M34.1726 0.0236726C32.8948 0.925057 31.4799 1.61447 29.9825 2.06537C29.1788 1.14128 28.1107 0.486313 26.9227 0.189045C25.7346 -0.108223 24.4839 -0.0334473 23.3398 0.403259C22.1956 0.839965 21.2131 1.61753 20.5253 2.63079C19.8374 3.64405 19.4774 4.84412 19.4938 6.06869V7.40313C17.1487 7.46394 14.8249 6.94383 12.7295 5.88914C10.6341 4.83444 8.83203 3.27789 7.48382 1.35811C7.48382 1.35811 2.14606 13.3681 14.156 18.7058C11.4078 20.5713 8.1339 21.5067 4.81494 21.37C16.8249 28.0469 31.5038 21.3747 31.5038 6.02866C31.5025 5.65695 31.4668 5.28617 31.397 4.92107C32.7589 3.57795 33.72 1.88217 34.1726 0.0236726Z" fill="white"/>
              </g>
              <defs>
              <filter id="filter0_d_967_2022" x="0.814941" y="0.0102539" width="37.3579" height="31.9448" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_967_2022"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_967_2022" result="shape"/>
              </filter>
              </defs>
            </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/barnes-trial-group/">
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_967_2025)">
            <g filter="url(#filter0_d_967_2025)">
            <path d="M21.8929 11.0942C24.0164 11.0942 26.0529 11.9378 27.5544 13.4393C29.056 14.9409 29.8995 16.9774 29.8995 19.1009V28.442H24.5618V19.1009C24.5618 18.393 24.2806 17.7142 23.7801 17.2137C23.2795 16.7132 22.6007 16.432 21.8929 16.432C21.185 16.432 20.5062 16.7132 20.0057 17.2137C19.5052 17.7142 19.224 18.393 19.224 19.1009V28.442H13.8862V19.1009C13.8862 16.9774 14.7298 14.9409 16.2313 13.4393C17.7329 11.9378 19.7694 11.0942 21.8929 11.0942Z" fill="white"/>
            </g>
            <g filter="url(#filter1_d_967_2025)">
            <path d="M8.5487 12.4287H3.21094V28.442H8.5487V12.4287Z" fill="white"/>
            </g>
            <g filter="url(#filter2_d_967_2025)">
            <path d="M5.87982 8.42565C7.3538 8.42565 8.5487 7.23075 8.5487 5.75677C8.5487 4.28279 7.3538 3.08789 5.87982 3.08789C4.40584 3.08789 3.21094 4.28279 3.21094 5.75677C3.21094 7.23075 4.40584 8.42565 5.87982 8.42565Z" fill="white"/>
            </g>
            </g>
            <defs>
            <filter id="filter0_d_967_2025" x="9.88623" y="11.0942" width="24.0132" height="25.3477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_967_2025"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_967_2025" result="shape"/>
            </filter>
            <filter id="filter1_d_967_2025" x="-0.789062" y="12.4287" width="13.3379" height="24.0132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_967_2025"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_967_2025" result="shape"/>
            </filter>
            <filter id="filter2_d_967_2025" x="-0.789062" y="1.08789" width="13.3379" height="13.3379" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_967_2025"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_967_2025" result="shape"/>
            </filter>
            <clipPath id="clip0_967_2025">
            <rect width="32.0266" height="32.0266" fill="white" transform="translate(0.541992 0.418945)"/>
            </clipPath>
            </defs>
            </svg>
            </a>
          </li>
          <li>
            <a href="mailto:test@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="1x"/>
            </a>
          </li>
        </SocialMedia>
      </Top>

      <Bottom>
        <div>
          <p style={{fontSize:`1em`}}>
            © {new Date().getFullYear()}, Barnes Trial Group. All Rights Reserved. Attorney Advertising. Past results do not guarantee future outcome.
          </p>
          <AniLink paintDrip to="/terms-and-conditions" hex="#3d586b" style={{float:`left`}}>
            Terms & Conditions
          </AniLink>
        </div>

        <div>
          <p style={{fontSize:`1em`}}>How was your experience?</p>
          <a href="/contact">Give feedback about our website</a>
        </div>
      </Bottom>

    </div>
  </Footer>
)

export default SubFooter
