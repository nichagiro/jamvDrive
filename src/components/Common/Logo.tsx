import Image, { ImageProps } from "next/image";
import LogoImage from "@/images/logo/logoWhite.webp";

const Logo = (props: Omit<ImageProps, "src" | "alt" | "width" | "height">) => {
  return (
    <Image
      {...props}
      src={LogoImage.src}
      alt="logo jamv drive"
      width={LogoImage.width}
      height={LogoImage.height}
    />
  );
};

export default Logo;
