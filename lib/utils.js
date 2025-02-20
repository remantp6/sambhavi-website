import { Dancing_Script, Merriweather, Montserrat, Raleway } from "next/font/google";

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
});
export const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  style: ["italic"],
  subsets: ["latin"],
});
export const raleway = Raleway({ 
    subsets: ['latin'] 
});
export const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})
