import Brand from '../brand'
import FacebookIcon from '../icons/Facebook'
import InstagramIcon from '../icons/Instagram'
import TwitterIcon from '../icons/Twitter'
import YoutubeIcon from '../icons/Youtube'
import Section from '../section'

export default function BannerFooter() {
  return (
    <Section>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-8 md:py-12">
        <div className="pb-10 sm:pb-0 mb-4 border-b sm:border-b-0 border-border-three sm:mb-0 col-span-2 lg:col-span-2">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-right max-w-[300px] mx-auto sm:mx-0 pb-6 sm:pb-5">
            <div className="w-[150px] md:w-[200px] text-center mb-4">
              <Brand />
            </div>
            <p className="text-center sm:text-left text-xs md:text-sm leading-5 md:leading-7 lg:text-[15px]">
              En Socoro Home, transformamos tu cocina en un espacio donde tus
              utensilios serán tus mejores cómplices.
            </p>
          </div>
          <ul className="flex flex-wrap justify-center sm:justify-start gap-x-6">
            <li className="transition hover:opacity-80">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/redqinc/"
              >
                <FacebookIcon />
              </a>
            </li>
            <li className="transition hover:opacity-80">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/redqinc"
              >
                <TwitterIcon />
              </a>
            </li>
            <li className="transition hover:opacity-80">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/redqinc/"
              >
                <InstagramIcon />
              </a>
            </li>
            <li className="transition hover:opacity-80">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw"
              >
                <YoutubeIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="pb-3.5 sm:pb-0">
          <h3 className="text-brand-dark text-base lg:text-[17px] lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
            About Us
          </h3>
          <ul className="flex flex-col space-y-2 md:space-y-3 text-xs md:text-sm lg:text-15px">
            <li className="flex items-baseline">
              <a
                className="transition-colors duration-200 hover:text-brand-dark"
                href="/en/about-us"
              >
                About us
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                className="transition-colors duration-200 hover:text-brand-dark"
                href="/en/contact-us"
              >
                Contact us
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                className="transition-colors duration-200 hover:text-brand-dark"
                href="/en/about-us"
              >
                About team
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                className="transition-colors duration-200 hover:text-brand-dark"
                href="/en/contact-us"
              >
                Customer Support
              </a>
            </li>
          </ul>
        </div>
        <div className="pb-3.5 sm:pb-0">
          <h3 className="text-brand-dark text-base lg:text-[17px] lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
            Our Information
          </h3>
          <ul className="flex flex-col space-y-2 md:space-y-3 text-xs md:text-sm lg:text-15px">
            <li className="flex items-baseline">
              <a
                className="transition-colors duration-200 hover:text-brand-dark"
                href="/en/privacy"
              >
                Privacy policy update
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                className="transition-colors duration-200 hover:text-brand-dark"
                href="/en/terms"
              >
                Terms &amp; conditions
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                className="transition-colors duration-200 hover:text-brand-dark"
                href="/en/privacy"
              >
                Return Policy
              </a>
            </li>
            <li className="flex items-baseline">
              <a
                className="transition-colors duration-200 hover:text-brand-dark"
                href="/en"
              >
                Site Map
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
