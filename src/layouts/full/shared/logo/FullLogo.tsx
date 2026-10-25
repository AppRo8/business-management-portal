import { Link } from "react-router";
import Logo from "src/assets/images/logos/apprologo.png";
import Logowhite from "src/assets/images/logos/darkapprologo.png";

const FullLogo = () => {
  return (
    <Link to={'/'} className="max-w-[40px] block lg:max-w-[120px] overflow-hidden">
      {/* Dark Logo   */}
      <img
        src={Logo}
        alt='AppRo8'
        width={120}
        height={60}
        className='block dark:hidden max-w-[120px] rtl:scale-x-[-1]'
      />
      {/* Light Logo  */}
      <img
        src={Logowhite}
        alt='AppRo8'
        width={120}
        height={60}
        className='hidden dark:block max-w-[120px] rtl:scale-x-[-1]'
      />
    </Link>

  );
};

export default FullLogo;
