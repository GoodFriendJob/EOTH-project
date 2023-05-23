import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.root}>
      <div className="w-full md:w-1/4 text-center flex flex-col justify-center">
        <div className="text-[14px] text-white uppercase">About</div>
        <a
          href="https://docs.ribbon.finance/faq"
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center my-[20px] mx-[20px] no-underline"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              FAQ
            </span>
          </div>
        </a>
        <a
          href="https://www.research.ribbon.finance"
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center my-[20px] mx-[20px] no-underline"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              BLOG
            </span>
          </div>
        </a>
        <a
          href="https://docs.ribbon.finance"
          className="flex justify-center my-[20px] mx-[20px] no-underline"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              DOCS
            </span>
          </div>
        </a>
        <a
          className="flex justify-center my-[20px] mx-[20px] no-underline"
          href="/terms"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              TERMS
            </span>
          </div>
        </a>
        <a
          className="flex justify-center my-[20px] mx-[20px] no-underline"
          href="/policy"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              POLICY
            </span>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/4 text-center flex flex-col justify-center">
        <div className="text-[14px] text-white uppercase">COMMUNITY</div>
        <a
          href="https://github.com/ribbon-finance"
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center my-[20px] mx-[20px] no-underline"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              GITHUB
            </span>
          </div>
        </a>
        <a
          href="https://discord.com/invite/ribbon-finance"
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center my-[20px] mx-[20px] no-underline"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              DISCORD
            </span>
          </div>
        </a>
        <a
          href="https://twitter.com/ribbonfinance"
          className="flex justify-center my-[20px] mx-[20px] no-underline"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              TWITTER
            </span>
          </div>
        </a>
        <a
          className="flex justify-center my-[20px] mx-[20px] no-underline"
          href="https://vote.ribbon.finance"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              GOVERNANCE PORTAL
            </span>
          </div>
        </a>
        <a
          className="flex justify-center my-[20px] mx-[20px] no-underline"
          href="https://snapshot.org/#/rbn.eth"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              SNAPSHOT
            </span>
          </div>
        </a>
        <a
          className="flex justify-center my-[20px] mx-[20px] no-underline"
          href="https://snapshot.org/#/rbn.eth"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              MEDIA KIT
            </span>
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/4 text-center flex flex-col justify-center">
        <div className="text-[14px] text-white uppercase">DATA</div>
        <a
          href="https://docs.ribbon.finance/faq"
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center my-[20px] mx-[20px] no-underline"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              COINGECKO
            </span>
          </div>
        </a>
        <a
          href="https://www.research.ribbon.finance"
          target="_blank"
          rel="noreferrer noopener"
          className="flex justify-center my-[20px] mx-[20px] no-underline"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              TOKEN TERMINAL
            </span>
          </div>
        </a>
        <a
          href="https://docs.ribbon.finance"
          className="flex justify-center my-[20px] mx-[20px] no-underline"
        >
          <div className="w-fit opacity-[0.48] hover:opacity-100 text-center">
            <span className="text-[12px] leading-[20px] uppercase text-white">
              DEFI LLAMA
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
