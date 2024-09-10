import Link from 'next/link';
import { SpotBlur } from './ui/spot-blur';
import Image from 'next/image';

const VPNs = [
  {
    link: 'https://protonvpn.com/download-windows',
    logo: '/vpns/proton.svg',
  },
  {
    link: 'https://www.rynvpn.com',
    logo: 'https://www.rynvpn.com/assets/images/ryn-vpn-logo.png',
  },
  {
    link: 'https://windscribe.com/download',
    logo: '/vpns/windscribe.png',
  },
  {
    link: 'https://tunnelbear.com/download',
    logo: '/vpns/tunnelbear.png',
  },
  {
    link: 'https://zoogvpn.com/download',
    logo: '/vpns/zoogvpn.png',
  },
];

const cryptoCurrenciesLogos = [
  '/changelly.png',
  '/coin.png',
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
    icon: '/coin.png',
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
        <img
          draggable={false}
          src="/hero.png"
          draggable={false}
          className="select-none size-full md:min-h-fit min-h-[500px] object-cover object-right"
          alt="BS.GG Hero"
          width={1280}
          height={720}
        />
        <div className="absolute inset-0 size-full flex flex-col justify-center md:items-end items-center md:-left-24 -left-0 top-0">
          <div className="flex flex-col gap-0">
            <h3 className="text-white lg:text-2xl md:text-xl text-lg font-antonio font-bold italic uppercase">
              180% Welcome Bonus
            </h3>
            <h1 className="text-white lg:text-7xl md:text-6xl text-4xl font-antonio font-extrabold">20000 USDT</h1>
            <h4 className="text-white lg:text-lg md:text-base text-sm font-antonio font-thin mt-2">
              Bet, Play & Win from Anywhere -{' '}
              <span className="text-primary font-bold">Even if You&apos;re restricted!</span>
            </h4>
            <button className="bg-[linear-gradient(-140deg,_rgba(252,216,4,1)_0%,_rgba(9,9,121,0)_30%,_rgba(137,118,59,0)_70%,_rgba(252,216,4,1)_100%)] bg-[size:110%_110%] bg-center text-primary rounded-lg w-fit  uppercase font-extrabold p-0.5 flex items-center justify-center mt-4 lg:text-sm text-xs">
              <span className="bg-background/90 rounded-lg size-full px-16 py-2">PLAY NOW</span>
            </button>
          </div>
        </div>
      </section>
      <section className="relative max-w-[1280px] mx-auto py-24 lg:px-8 px-6">
        <div className="flex md:flex-row flex-col items-start gap-8 justify-between mb-16">
          <h1 className="text-foreground lg:text-5xl md:text-4xl text-3xl font-extrabold">
            Can&apos;t Register?
            <br />
            Try Using A VPN
          </h1>
          <div className="h-[80px] max-w-[2px] flex-1 bg-primary md:block hidden" />
          <h4 className="text-foreground lg:text-xl md:text-lg text-base">
            <span className="font-extrabold italic text-primary">Don’t have a VPN? No Problem.</span>
            <br /> We have picked some great Free VPN Options for you.
          </h4>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-8">
          {VPNs.map((VPN, i) => {
            return (
              <Link
                href={VPN.link}
                key={i}
                target="_blank"
                className="flex flex-col md:items-end items-start justify-end gap-4"
              >
                <img draggable={false} src={VPN.logo} width={400} height={200} className="rounded-lg h-12 w-auto"></img>
                <span className="text-primary text-sm uppercase underline w-full md:text-right text-left">
                  Download Now
                </span>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="relative max-w-[1280px] mx-auto py-24 lg:px-8 px-6 flex md:flex-row flex-col items-start justify-between gap-16 overflow-visible">
        <SpotBlur
          className="opacity-70 md:top-0 -top-24 right-12 scale-[125%] -z-[0]"
          intensity={3}
          color="hsl(var(--primary))"
        />
        <SpotBlur className="opacity-70 md:top-72 top-96 left-0 -z-[0]" intensity={3} color="hsl(var(--primary))" />
        <div className="flex flex-col items-start justify-start gap-8 z-10">
          <h2 className="text-foreground lg:text-3xl text-2xl font-extrabold">
            Turn on your VPN before you
            <br className="md:block hidden" /> register in Betswap.gg
          </h2>
          <button className="bg-[linear-gradient(-160deg,hsl(var(--primary))_0%,hsl(var(--background))_90%)] text-background rounded-lg px-16 py-3 uppercase font-[1000]">
            PLAY NOW
          </button>
        </div>
        <Image draggable={false} src="/betswap-logo.png" width={400} className="z-10" height={400} alt="Register" />
      </section>
      <section className="relative max-w-[1280px] mx-auto py-24 lg:px-8 px-6 flex flex-col items-center justify-center gap-32">
        <h1 className="text-foreground lg:text-2xl md:text-xl text-lg font-extrabold tracking-[0.4em]">
          PLAY WITH CRYPTO CURRENCY
        </h1>
        <div className="flex items-center justify-center gap-7 flex-row flex-wrap">
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

      <section className="relative max-w-[1920px] mx-auto">
        <img
          draggable={false}
          src="/section.png"
          draggable={false}
          className="select-none size-full object-cover object-center"
          alt="BS.GG Hero"
          width={1280}
          height={720}
        />
      </section>
      <section className="relative max-w-[1280px] mx-auto py-48 lg:px-8 px-6 flex flex-row flex-wrap items-start justify-center gap-8">
        <SpotBlur className="top-64 -left-32 -z-[0] scale-150" intensity={3} color="#8435f1" />
        <SpotBlur className="md:top-[500px] top-[800px] right-10 -z-[0] scale-150" intensity={3} color="#8435f1" />
        {features.map((feature, i) => {
          return (
            <div key={i} className="relative">
              <Image
                draggable={false}
                src={'/card.svg'}
                alt="Card"
                width={360}
                height={360}
                className="opacity-30 backdrop-blur-3xl"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start gap-4 p-7">
                <h3 className="whitespace-pre-wrap text-foreground lg:text-2xl md:text-xl text-lg font-extrabold text-pretty">
                  {feature.title}
                </h3>
                <p className="text-foreground/80 lg:text-[20px] !leading-5 md:text-sm text-xs mt-1 h-full p-8 rounded-2xl bg-background border-primary/10 border">
                  {feature.description}
                </p>
              </div>
              <Image
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
      </section>
    </>
  );
}
