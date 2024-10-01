// links
import Link from "next/link";

// icons 
import {RiGithubLine,  RiTwitterXLine} from "react-icons/ri";


const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    

    

    <Link href={"https://x.com/Nisamov_"} className="hover:text-secondary transition-all duration-300 text-2xl">
      <RiTwitterXLine/>
    </Link>

    <Link href={"https://github.com/Nisamov"} className="hover:text-secondary transition-all duration-300 text-2xl">
      <RiGithubLine/>
    </Link>
    
    
  </div>;
};

export default Socials;
