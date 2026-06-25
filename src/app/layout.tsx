import { ReactNode } from 'react';
import { Geist, Inter } from "next/font/google";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});


type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}

