import s from "./NewInfo.module.css";
import cn from "classnames";
import {
  SvgAAVE,
  SvgETH,
  SvgRETH,
  SvgSAVAX,
  SvgSAVAXToken,
  SvgSTETH,
  SvgUNI,
  SvgUSDC,
  SvgWBTC,
} from "assets/svg";

const NewInfo = () => {
  return (
    <div className={s.root}>
      <div className="opacity-100">
        <div className={s.marquee_container}>
          <div className={cn(s.marquee, "scroll")}>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgAAVE />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  AAVE
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $79.43
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +1.13%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgUNI />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  UNI
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $6.09
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +0.19%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgSAVAX />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  WAVAX
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $18.76
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +0.45%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgSAVAXToken />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  sAVAX
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $20.19
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +0.60%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgETH />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  WETH
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $2001.24
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +108.02%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgUSDC />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  USDC
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $1.00
                </span>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  0.00%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgUSDC />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  USDC.e
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $1.00
                </span>
                <span className="my-auto mx-0 text-sm text-[#fc0a54] mr-[8px]">
                  -0.00%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgWBTC />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  WBTC
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $30377.00
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +72.56%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgSTETH />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  stETH
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $1995.96
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +108.11%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgRETH />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  rETH
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $2139.83
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +124.67%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgAAVE />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  AAVE
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $79.43
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +1.13%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgUNI />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  UNI
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $6.09
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +0.19%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgSAVAX />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  WAVAX
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $18.76
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +0.45%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgSAVAXToken />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  sAVAX
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $20.19
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +0.60%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgETH />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  WETH
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $2001.24
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +108.02%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgUSDC />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  USDC
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $1.00
                </span>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  0.00%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgUSDC />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  USDC.e
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $1.00
                </span>
                <span className="my-auto mx-0 text-sm text-[#fc0a54] mr-[8px]">
                  -0.00%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgWBTC />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  WBTC
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $30377.00
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +72.56%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgSTETH />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  stETH
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $1995.96
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +108.11%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgRETH />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  rETH
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $2139.83
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +124.67%
                </span>
              </div>
            </div>
          </div>
          <div className={cn(s.marquee, "scroll")}>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgAAVE />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  AAVE
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $79.43
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +1.13%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgUNI />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  UNI
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $6.09
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +0.19%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgSAVAX />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  WAVAX
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $18.76
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +0.45%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgSAVAXToken />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  sAVAX
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $20.19
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +0.60%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgETH />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  WETH
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $2001.24
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +108.02%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgUSDC />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  USDC
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $1.00
                </span>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  0.00%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgUSDC />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  USDC.e
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $1.00
                </span>
                <span className="my-auto mx-0 text-sm text-[#fc0a54] mr-[8px]">
                  -0.00%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgWBTC />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  WBTC
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $30377.00
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +72.56%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgSTETH />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  stETH
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $1995.96
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +108.11%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgRETH />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  rETH
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $2139.83
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +124.67%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgAAVE />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  AAVE
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $79.43
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +1.13%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgUNI />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  UNI
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $6.09
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +0.19%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgSAVAX />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  WAVAX
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $18.76
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +0.45%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgSAVAXToken />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  sAVAX
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $20.19
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +0.60%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgETH />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  WETH
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $2001.24
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +108.02%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgUSDC />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  USDC
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $1.00
                </span>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  0.00%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgUSDC />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  USDC.e
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $1.00
                </span>
                <span className="my-auto mx-0 text-sm text-[#fc0a54] mr-[8px]">
                  -0.00%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgWBTC />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  WBTC
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $30377.00
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +72.56%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgSTETH />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  stETH
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $1995.96
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +108.11%
                </span>
              </div>
            </div>
            <div>
              <div className="flex h-fit w-fit px-[16px] py-0">
                <div className="flex w-[24px] h-[24px] mr-[8px]">
                  <SvgRETH />
                </div>
                <span className="my-auto mx-0 text-sm text-[#787883] mr-[8px]">
                  rETH
                </span>
                <span className="my-auto mx-0 text-sm text-[#fff] mr-[8px]">
                  $2139.83
                </span>
                <span className="my-auto mx-0 text-sm text-[#16ceb9] mr-[8px]">
                  +124.67%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInfo;
