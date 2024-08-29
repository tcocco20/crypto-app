import Image from "next/image";
import ActionButtons from "./ActionButtons";

const HeaderActions = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <div>
        <Image
          src="/images/mobile-logo.png"
          alt="Logo"
          width={36}
          height={20}
        />
      </div>
      <ActionButtons />
    </div>
  );
};

export default HeaderActions;
