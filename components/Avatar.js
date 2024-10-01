// next image
import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={"/logo-data-xplore.png"} width={437} height={478} alt="" className="translate-z- w-full h-full "/>
  </div>;
};

export default Avatar;
