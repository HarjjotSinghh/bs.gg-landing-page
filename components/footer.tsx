import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background text-foreground text-center py-12 flex flex-col items-center">
      BSGG Labs N.V. is authorized by the Government of Curacao as ar Information Provider legally authorized to conduct
      online e-gaming operations from Curacao under
      <br />
      Licence No 365/JAZ Sub-license GLH-OCCHKTW0709112022.
      <br />
      <span>
        All Rights Reserved.{' '}
        <Link href="https://betswap.gg" className="underline">
          https://betswap.gg
        </Link>{' '}
        is a website operated by BSGG Labs N.V., a company incorporated under the laws Of Curacao, having a registered
        office at
      </span>
      Zuikertuintjeweg Z/N, Willemstad, Curacao. Registration number: 159732
      <Image src="/footer.png" className="object-cover mt-8" alt="Curacao" width={100} height={100} />
    </footer>
  );
}
