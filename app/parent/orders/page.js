"use client";
import { getOrders } from '../../../lib/data';
import { useEffect, useState } from 'react';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  useEffect(()=> {
    setOrders(getOrders());
  }, []);
  return (
    <div className="p-4 pb-24">
      <h1 className="text-xl font-bold mb-3">我的订单</h1>
      {orders.length===0 && <div className="small-text">暂无订单</div>}
      <div className="space-y-3">
        {orders.map(o => (
          <div className="card" key={o.id}>
            <div className="flex justify-between">
              <div>订单 #{o.id}</div>
              <div className="small-text">{o.status}</div>
            </div>
            <div className="small-text">老师: {o.teacherId}</div>
            <div className="small-text">日期: {o.date} {o.time}</div>
            <div className="small-text">时长: {o.duration}h</div>
            <div className="small-text">金额: RM{o.amount}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
