import Link from 'next/link';
import { SpotBlur } from './ui/spot-blur';
import Image from 'next/image';
import ShimmerButton from './magicui/shimmer-button';

const VPNs = [
  {
    link: 'https://d3bb1aqiojzds7.cloudfront.net/',
    logo: 'https://www.rynvpn.com/assets/images/ryn-vpn-logo.png',
  },
  {
    link: 'https://protonvpn.com/download-windows',
    logo: '/vpns/proton.svg',
  },
  {
    link: 'https://windscribe.com/download',
    logo: '/vpns/windscribe.png',
  },
];

const cryptoCurrenciesLogos = [
  '/changelly.png',
  'https://i.ibb.co/vvp6Vs4/Coin.png',
  '/bitcoin.png',
  '/polygon.png',
  '/eth.png',
  '/tether.png',
];

const features = [
  {
    title: 'Trust\nNo One',
    description:
      'Connect your wallet and play with our Web 3.0 smart contract your winnings are already waiting for you to withdraw. No middlemen, no delays, just pure, transparent gameplay.',
    icon: '/web3.svg',
  },
  {
    title: 'Not Crypto Savvy?\nNo Problem!',
    description:
      'Sign up with your email and play just like a regular crypto casino. Instant withdrawals, lightning-fast support—your crypto, your way, with the speed and ease you deserve.',
    icon: 'https://i.ibb.co/vvp6Vs4/Coin.png',
  },
  {
    title: 'USA Players\nWelcome',
    description:
      'Bet with confidence in a secure, fair, and fully licensed platform. Enjoy fast payouts, exclusive promotions, and 24/7 support tailored for US players. Your game, your rules—bet with the best.',
    icon: '/usa.svg',
  },
];

export default function LandingPage() {
  return (
    <>
      <section className="relative max-w-[1920px] mx-auto">
        <Image
          src="/hero.png"
          draggable={false}
          className="select-none size-full md:min-h-fit min-h-[500px] object-cover object-right md:block hidden"
          alt="BS.GG Hero"
          width={1280}
          height={720}
        />
        <Image
          src="/hero-mobile.jpeg"
          draggable={false}
          className="select-none size-full object-cover object-center md:hidden block"
          alt="BS.GG Hero"
          width={1280}
          height={720}
        />
        <div className="absolute inset-0 w-full h-full bg-black md:[mask-image:linear-gradient(to_right,transparent_30%,black_90%)]  [mask-image:linear-gradient(to_top,transparent_30%,black_90%)]"></div>
        <div className="absolute inset-0 w-full flex flex-col md:justify-center justify-start md:items-end md:pt-0 pt-8 items-center md:-left-24 -left-0 top-0">
          <div className="flex flex-col gap-1 md:text-left text-center">
            <span className="md:text-xl text-lg text-white font-antonio uppercase [text-shadow:_0px_0px_20px_rgba(0,0,0,0.9)]">
              Bet Big With
            </span>
            <div className="relative">
              <Image
                src="/betswap-logo.png"
                className="md:mx-0 mx-auto pt-2 pb-4 !z-10 brightness-[2000] contrast-[2000] grayscale"
                width={200}
                height={200}
                alt="BetSwap"
              />
              <div className="absolute inset-0 size-20 md:mx-0 mx-auto -top-0 bg-black/20 blur-2xl rounded-full"></div>
            </div>
            <h3 className="text-white lg:text-xl md:text-lg text-base font-antonio font-[700] uppercase [text-shadow:_0px_0px_20px_rgba(0,0,0,0.9)]">
              Claim your 180% Welcome Bonus
            </h3>
            <h1 className="text-white lg:text-7xl md:text-6xl text-4xl font-antonio font-[800] [text-shadow:_0_0px_20px_rgba(0,0,0,0.9)]">
              UPTO 20,000 USDT
            </h1>
            <h4 className="text-white lg:text-lg md:text-base text-sm font-antonio font-thin mt-2 [text-shadow:_0px_0px_20px_rgba(0,0,0,0.9)]">
              Bet, Play & Win from Anywhere -{' '}
              <span className="text-primary font-[700]">Even if You&apos;re restricted!</span>
            </h4>
            <Link href="https://d3bb1aqiojzds7.cloudfront.net/" target="_blank">
              <ShimmerButton
                className="shadow-2xl w-fit md:mx-0 mx-auto mt-4"
                background="#fcd804"
                color="#000"
                shimmerSize="0.15rem"
                shimmerColor="#000"
              >
                <span className="whitespace-pre-wrap text-center text-xl font-[800] leading-none tracking-tight text-black dark:from-white dark:to-primary lg:text-2xl px-4">
                  INSTALL VPN
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative max-w-[1280px] mx-auto py-16 lg:px-8 px-4">
        <div className="flex md:flex-row flex-col items-center gap-8 justify-center mb-16">
          <h1 className="text-foreground md:text-left text-center w-full lg:text-3xl md:text-2xl text-xl text-pretty font-[800]">
            Having trouble registering?
            <br />
            Try installing and using a VPN
          </h1>
          <div className="h-[80px] max-w-[2px] flex-1 bg-primary md:block hidden" />
          <h4 className="text-foreground lg:text-xl md:text-lg text-base md:text-left w-full text-center">
            <span className="font-[800] text-primary">Don’t have a VPN? No Worries!</span>
            <br /> Here are some great free VPN options we&apos;ve selected for you.
          </h4>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-8">
          {VPNs.map((VPN, i) => {
            return (
              <Link
                href={VPN.link}
                key={i}
                target="_blank"
                className="flex flex-col md:items-center items-center justify-center gap-4"
              >
                <img draggable={false} src={VPN.logo} width={400} height={200} className="rounded-lg h-12 w-auto"></img>
                <span className="text-primary text-sm uppercase underline w-full text-center">Download Now</span>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 md:text-left text-left flex flex-col items-start justify-start gap-4">
          <p className="md:text-lg text-base font-[700] mb-4 text-pretty inline-flex items-center gap-3">
            <img
              src="https://i.ibb.co/BKK1bc6/Screenshot-2024-09-15-162019.png"
              alt="VPN-Friendly"
              width={32}
              height={32}
              className="rounded-full"
            ></img>{' '}
            <span>
              <strong className="text-primary">VPN</strong>: Friendly with Lightning-Fast Crypto Withdrawals
            </span>
          </p>
          <p className="md:text-lg text-base font-[700] mb-4 text-pretty inline-flex items-center gap-3">
            <img
              src="https://i.ibb.co/GMh3y97/image.png"
              width={32}
              height={32}
              className="rounded-full"
              alt="Trusted"
            ></img>{' '}
            <span>
              <strong className="text-primary">Trusted</strong>: By Web 3.0 influencers & Non-Custodial Deposits for
              Crypto Experts
            </span>
          </p>
          <p className="md:text-lg text-base font-medium mb-4 text-pretty inline-flex items-center gap-3">
            <img
              src="https://i.ibb.co/8ccCjxW/image.png"
              alt="VPN-Friendly"
              width={32}
              height={32}
              className="rounded-full"
            ></img>{' '}
            <span>
              <strong className="text-primary">Sportsbook</strong>: Boosted Odds, Parlay, & Fancy Bets
            </span>
          </p>
          <p className="md:text-lg text-base font-medium mb-4 text-pretty inline-flex items-center gap-3">
            <img
              src="https://i.ibb.co/w4CPSGC/image.png"
              alt="VPN-Friendly"
              width={32}
              height={32}
              className="rounded-full"
            ></img>{' '}
            <span>
              <strong className="text-primary">Casino</strong>: Free Spins & Hot Slot Offers
            </span>
          </p>
          <p className="md:text-lg text-base font-medium mb-6 text-pretty inline-flex items-center gap-3">
            <img
              src="https://i.ibb.co/NsgR1xp/image.png"
              alt="VPN-Friendly"
              width={32}
              height={32}
              className="rounded-full"
            ></img>{' '}
            <span>
              <strong className="text-primary">Live Casino</strong>: Play with Top Game Providers
            </span>
          </p>

          <p className="md:text-3xl text-2xl font-[700] md:mb-8 mb-4 font-antonio text-pretty md:text-left text-center w-full">
            Ready to win big?
            <br /> Bet now!
          </p>
          <Link href="https://betswap.gg/?stag=114409" className="w-full" target="_blank">
            <ShimmerButton
              className="shadow-2xl md:mx-0 mx-auto"
              background="#fcd804"
              color="#000"
              shimmerSize="0.15rem"
              shimmerColor="#000"
            >
              <span className="whitespace-pre-wrap text-center text-xl font-[800] leading-none tracking-tight text-black dark:from-white dark:to-primary lg:text-2xl px-8 md:mx-0 mx-auto">
                PLAY NOW
              </span>
            </ShimmerButton>
          </Link>
        </div>
      </section>
      <section className="relative max-w-[1280px] mx-auto py-16 lg:px-8 px-6 flex md:flex-row flex-col items-start justify-between gap-16 overflow-visible">
        <SpotBlur
          className="opacity-70 md:top-0 -top-4 right-12 scale-[125%] -z-[0]"
          intensity={3}
          color="hsl(var(--primary))"
        />
        <SpotBlur className="opacity-70 md:top-72 top-96 left-0 -z-[0]" intensity={3} color="hsl(var(--primary))" />
        <div className="flex flex-col md:items-start w-full md:justify-start justify-center items-center gap-8 z-10">
          <h2 className="text-foreground lg:text-3xl text-2xl font-[800] md:text-left text-center">
            Turn on your VPN before you
            <br className="md:block hidden" /> register in Betswap.gg
          </h2>
          <p className=" md:text-base text-sm text-pretty md:text-left text-center md:max-w-[550px]">
            By using a VPN, you can securely access websites from anywhere by changing your location, even if the site
            is restricted in your region.
            <br />
            <br /> If you&apos;re facing issues accessing Betswap.gg, feel free to reach out to us through the live chat
            on this page.
          </p>
          <Link target="_blank" href={'https://betswap.gg/?stag=114409'}>
            <ShimmerButton
              className="shadow-2xl"
              background="#fcd804"
              color="#000"
              shimmerSize="0.15rem"
              shimmerColor="#000"
            >
              <span className="whitespace-pre-wrap text-center text-xl leading-none tracking-tight text-black dark:from-white dark:to-primary lg:text-2xl px-8 font-[800]">
                REGISTER NOW
              </span>
            </ShimmerButton>
          </Link>
        </div>
        <Image
          draggable={false}
          src="/betswap-logo.png"
          width={400}
          className="z-10 md:block hidden"
          height={400}
          alt="Register"
        />
      </section>
      <section className="relative max-w-[1280px] mx-auto py-16 lg:px-8 px-6 flex flex-col items-center justify-center gap-16">
        <h1 className="text-foreground lg:text-2xl md:text-xl text-lg font-[800] tracking-[0.4em] md:text-left text-center">
          PLAY WITH CRYPTO CURRENCY
        </h1>
        <div className="flex items-center justify-center gap-8 md:flex-row md:flex-wrap flex-col">
          {cryptoCurrenciesLogos.map((logo, i) => {
            return (
              <img
                draggable={false}
                src={logo}
                width={200}
                height={200}
                alt="Register"
                className="h-11 w-auto"
                key={i}
              />
            );
          })}
        </div>
      </section>

      <section className="relative max-w-[1920px] mx-auto overflow-x-clip overflow-y-visible mt-32">
        <img
          draggable={false}
          src="/section.png"
          className="select-none size-full md:scale-100 scale-[200%] object-cover object-center"
          alt="BS.GG Section"
          width={1280}
          height={720}
        />
      </section>
      <section className="relative max-w-[1280px] mx-auto pb-16 pt-48 lg:px-8 px-6 flex flex-row flex-wrap items-start justify-center gap-8">
        <SpotBlur className="top-64 -left-32 -z-[0] scale-150" intensity={3} color="#8435f1" />
        <SpotBlur className="md:top-[500px] top-[800px] right-10 -z-[0] scale-150" intensity={3} color="#8435f1" />
        <div className="flex flex-row flex-wrap gap-16 items-start justify-start">
          {features.map((feature, i) => {
            return (
              <div key={i} className="relative">
                <Image
                  draggable={false}
                  src={'/card.svg'}
                  alt="Card"
                  width={360}
                  height={360}
                  className="opacity-50 backdrop-blur-3xl"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-start gap-4 p-7">
                  <h3 className="whitespace-pre-wrap text-foreground lg:text-xl md:text-lg text-base font-[800] text-pretty">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/80 lg:text-[20px] md:leading-5 leading-4 !text-sm mt-1 h-full md:p-8 p-4 rounded-2xl bg-background border-primary/10 border">
                    {feature.description}
                  </p>
                </div>
                <img
                  draggable={false}
                  src={feature.icon}
                  alt="Icon"
                  width={80}
                  height={80}
                  className="rounded-full size-20
                 object-cover absolute inset-0 right-2 -top-6 ml-auto"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
