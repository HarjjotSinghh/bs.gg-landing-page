import LandingPage from "@/components/landing-page";
import { Metadata } from "next";

export default function Home() {
  return (
    <LandingPage />
  );
}

export const metadata: Metadata = {
  title: 'BS.GG',
  description: 'BS.GG Landing Page',
};
