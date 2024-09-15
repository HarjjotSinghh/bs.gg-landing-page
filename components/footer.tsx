import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground text-center pt-12 pb-24 flex flex-col items-center lg:px-8 px-4">
      BSGG Labs N.V. is authorized by the Government of Curacao as ar Information Provider legally authorized to conduct
      online e-gaming operations from Curacao under Licence No 365/JAZ Sub-license GLH-OCCHKTW0709112022.
      <span>
        All Rights Reserved.{' '}
        <Link href="https://betswap.gg" className="underline">
          https://betswap.gg
        </Link>{' '}
        is a website operated by BSGG Labs N.V., a company incorporated under the laws Of Curacao, having a registered
        office at
      </span>
      Zuikertuintjeweg Z/N, Willemstad, Curacao. Registration number: 159732
    </footer>
  );
}
