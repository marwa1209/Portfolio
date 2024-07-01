/** @format */
import Image from "next/image";

interface IProps {}

const Logo = ({}: IProps) => {
  return (
    <>
      <a href="/">
        <Image src="/logo.svg" alt="logo" width={160} height={40} />
      </a>
    </>
  );
}
export default Logo;