import React, { useState } from "react";

const CompareTable = () => {
  const compareList = [
    { pros: "週末約人一起出去拍照", cons: "週末約人去電影院看電影" },
    { pros: "過程中有很多互動的機會", cons: "看電影沒辦法有太多互動" },
    { pros: "在美景下幫對方拍出網美照", cons: "在電影院把對方拍成肥短矮" },
    { pros: "一起晚餐結束一天", cons: "一起晚餐結束一天" },
    { pros: "約時間一起挑照片", cons: "聊天聊乾了不知道聊啥" },
    { pros: "修出美美的照片, 對方好感度大增", cons: "照三餐問候, 好感度下降" },
    { pros: "計畫下一次出遊", cons: "想不到下一次要約哪" },
  ];

  return (
    <div className="relative flex items-center justify-center p-8 md:p-0">
      <div className="lg:no-scrollbar overflow-horizontal my-10 md:my-[100px] pb-4">
        <div className="table min-w-[480px] md:min-w-[640px] text-sm">
          <div className="table-header-group">
            <div className="table-row">
              <div className="h5 table-cell-border-b w-1/2 text-black">
                擅長攝影的人
              </div>
              <div className="h5 table-cell-border-b text-black">
                <div className="flex items-center">不懂攝影的人</div>
              </div>
            </div>
          </div>
          {compareList.map((item, i) => {
            return (
              <div className="table-row-group" key={i}>
                <div className="table-row">
                  <div className="table-cell-border-b">
                    <div className="table-cell-v-center ">
                      <div className="table-cell-text-basic">{item.pros}</div>
                    </div>
                  </div>
                  <div className="table-cell-border-b">
                    <div className="table-cell-v-center ">
                      <div className="table-cell-text-basic">{item.cons} </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompareTable;
