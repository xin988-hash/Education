"use client";
import { getOrders } from '../../../lib/data';
import { useEffect, useState } from 'react';

export default function Schedule() {
  const [orders, setOrders] = useState([]);
  useEffect(()=> {
    setOrders(getOrders().filter(o=>o.teacherId));
  }, []);
  return (
    <div className="p-4 pb-24">
      <h1 className="text-xl font-bold mb-3">时间表</h1>
      {orders.length===0 && <div className="small-text">暂无安排</div>}
      <ul className="space-y-2">
        {orders.map(o => (
          <li key={o.id} className="card">
            <div>{o.date}</div>
            <div className="small-text">{o.time} - {o.duration}h</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
