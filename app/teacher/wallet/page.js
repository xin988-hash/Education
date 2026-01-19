"use client";
import { useState, useEffect } from 'react';
import { getOrders } from '../../../lib/data';

export default function Wallet() {
  const [balance, setBalance] = useState(0);
  const [records, setRecords] = useState([]);
  useEffect(()=> {
    const orders = getOrders().filter(o=>o.status==='completed');
    // 示例：把相关订单金额加起来
    setBalance(orders.reduce((s,o)=>s+ (o.amount*0.8), 0)); // 假设平台抽成 20%
    setRecords(orders.map(o=>({ id: o.id, amount: o.amount*0.8 })));
  }, []);
  return (
    <div className="p-4 pb-24">
      <h1 className="text-xl font-bold mb-3">钱包</h1>
      <div className="card">
        <div className="text-2xl font-bold">RM{balance}</div>
        <div className="small-text">可提现余额（模拟）</div>
      </div>
      <h2 className="mt-4 font-semibold">账单记录</h2>
      <div className="space-y-2 mt-2">
        {records.map(r => <div key={r.id} className="card">订单 {r.id} 收入 RM{r.amount}</div>)}
      </div>
    </div>
  )
}
