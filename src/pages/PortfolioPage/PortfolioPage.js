import s from "./PortfolioPage.module.css";
import NewInfo from "components/NewInfo";
import { useState } from "react";
import cn from "classnames";

function PortfolioPage() {
  const [activityShow, setActivityShow] = useState(false);
  const [sortShow, setSortShow] = useState(false);

  const onActivity = () => {
    setActivityShow(!activityShow);
    setSortShow(false);
  };

  const onSort = () => {
    setSortShow(!sortShow);
    setActivityShow(false);
  };
  return (
    <div className={s.root}>
      <NewInfo />
      <div className={s.container}>
        <div className={s.contentWrapper}>
          <div className={s.content}>
            <span className="text-xl mt-[48px]">PORTFOLIO SUMMARY</span>
            <div className={s.balances}>
              <div className={s.balancesMain}>
                <div className="w-full p-[16px]">
                  <span className="font-inter-sans text-sm text-[#b6b6b5]">
                    Balances
                  </span>
                  <div className="flex items-center flex-wrap">
                    <div className="flex items-center">
                      <span className="leading-[48px] text-4xl opacity-[0.16]">
                        ---
                      </span>
                      <span className="ml-[16px] text-[16px] text-[#ffffff66]"></span>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[12px] tracking-[1.5px] cursor-pointer text-[#ffffff66] mr-[24px]">
                        1W
                      </span>
                      <span className="text-[12px] tracking-[1.5px] cursor-pointer text-[#ffffff] mr-[24px]">
                        1M
                      </span>
                      <span className="text-[12px] tracking-[1.5px] cursor-pointer text-[#ffffff66]">
                        ALL
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-full h-[224px] border-t border-t-[#1c1c22] items-center justify-center">
                  <span className="text-[#16ceb9] font-inter-sans text-lg cursor-pointer">
                    Connect your wallet
                  </span>
                </div>
              </div>
              <div className={s.balancesFooter}>
                <div className="w-1/3 p-[16px] flex flex-wrap">
                  <span className="w-full font-inter-sans text-sm text-[#b6b6b5]">
                    Yield Earned
                  </span>
                  <div className="flex items-center">
                    <span className="leading-[24px] text-[#ffffff66]">---</span>
                    <span className="ml-[16px] text-[16px] text-[#ffffff66]"></span>
                  </div>
                </div>
                <div className="w-1/3 p-[16px] flex flex-wrap border-l border-l-[#1c1c22]">
                  <span className="w-full font-inter-sans text-sm text-[#b6b6b5]">
                    ROI
                  </span>
                  <div className="flex items-center">
                    <span className="leading-[24px] text-[#ffffff66]">---</span>
                    <span className="ml-[16px] text-[16px] text-[#ffffff66]"></span>
                  </div>
                </div>
                <div className="w-1/3 p-[16px] flex flex-wrap border-l border-l-[#1c1c22]">
                  <span className="w-full font-inter-sans text-sm text-[#fc0a54]">
                    $RBN Balance
                  </span>
                  <div className="flex items-center">
                    <span className="leading-[24px] text-[#ffffff66]">---</span>
                    <span className="ml-[16px] text-[16px] text-[#ffffff66]"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[64px] flex flex-wrap w-full">
              <span className="text-xl leading-[24px] mr-[16px] w-full uppercase">
                Positions
              </span>
              <span className="text-lg leading-[24px] mt-[24px] text-[#b6b6b5]">
                ---
              </span>
            </div>
            <div className="mt-[64px] flex flex-wrap flex-1 mb-12">
              <div className="mb-6 w-full items-center flex-wrap flex">
                <span className="text-xl leading-[24px] mr-[24px] uppercase">
                  TRANSACTION HISTORY
                </span>
                <div className="relative">
                  <div className={s.selectWrapper} onClick={onActivity}>
                    <span className="text-base text-[#b6b6b5]">
                      ALL ACTIVITY
                      <i
                        className={cn(
                          "fas fa-chevron-down",
                          s.downArrow,
                          activityShow && s.active
                        )}
                      ></i>
                    </span>
                  </div>
                  <div
                    className={cn(s.activityContent, activityShow && s.active)}
                  >
                    <div className="px-[4px] py-[8px] cursor-pointer text-[#ffffffa4] hover:text-white">
                      ALL ACTIVITY
                    </div>
                    <div className="px-[4px] py-[8px] cursor-pointer text-[#ffffffa4] hover:text-white">
                      DEPOSIT
                    </div>
                    <div className="px-[4px] py-[8px] cursor-pointer text-[#ffffffa4] hover:text-white">
                      WITHDRAW
                    </div>
                    <div className="px-[4px] py-[8px] cursor-pointer text-[#ffffffa4] hover:text-white">
                      INSTANT WITHDRAW
                    </div>
                    <div className="px-[4px] py-[8px] cursor-pointer text-[#ffffffa4] hover:text-white">
                      MIGRATE
                    </div>
                    <div className="px-[4px] py-[8px] cursor-pointer text-[#ffffffa4] hover:text-white">
                      STAKE
                    </div>
                    <div className="px-[4px] py-[8px] cursor-pointer text-[#ffffffa4] hover:text-white">
                      UNSTAKE
                    </div>
                    <div className="px-[4px] py-[8px] cursor-pointer text-[#ffffffa4] hover:text-white">
                      TRANSFER
                    </div>
                    <div className="px-[4px] py-[8px] cursor-pointer text-[#ffffffa4] hover:text-white">
                      RECEIVE
                    </div>
                  </div>
                </div>
                <div className="relative ml-4">
                  <div className={s.selectWrapper} onClick={onSort}>
                    <span className="text-base text-[#b6b6b5]">
                      LATEST FIRST
                      <i
                        className={cn(
                          "fas fa-chevron-down",
                          s.downArrow,
                          sortShow && s.active
                        )}
                      ></i>
                    </span>
                  </div>
                  <div className={cn(s.sortContent, sortShow && s.active)}>
                    <div className="px-[4px] py-[8px] cursor-pointer text-[#ffffffa4] hover:text-white">
                      LATEST FIRST
                    </div>
                    <div className="px-[4px] py-[8px] cursor-pointer text-[#ffffffa4] hover:text-white">
                      OLDEST FIRST
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <span className="text-lg leading-[24px] text-[#b6b6b5]">
                  ---
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
