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
    <div className="col-span-3 flex flex-col justify-center gap-4">
      {homepage && <CoinLink url={homepage} />}
      {blockchainSite && <CoinLink url={blockchainSite} />}
      {blockchainSite2 && <CoinLink url={blockchainSite2} />}
    </div>
  );
};

export default ExtraLinks;
