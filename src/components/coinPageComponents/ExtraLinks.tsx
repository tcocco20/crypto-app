import React from "react";
import CoinLink from "./CoinLink";

interface ExtraLinksProps {
  homepage: string;
  blockchainSite: string;
  blockchainSite2: string;
}

const ExtraLinks = ({
  homepage,
  blockchainSite,
  blockchainSite2,
}: ExtraLinksProps) => {
  return (
    <div className="col-span-3 flex flex-col justify-start md:gap-2 lg:gap-3 xl:gap-4 pt-1 md:pt-2 lg:pt-3 xl:pt-4">
      {homepage && <CoinLink url={homepage} />}
      {blockchainSite && <CoinLink url={blockchainSite} />}
      {blockchainSite2 && <CoinLink url={blockchainSite2} />}
    </div>
  );
};

export default ExtraLinks;
