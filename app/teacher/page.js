"use client";
import { getOrders } from '../../lib/data';
import { useEffect, useState } from 'react';
import BottomNav from '../../components/BottomNav';

export default function TeacherHome() {
  const [orders, setOrders] = useState([]);
  useEffect(()=> {
    setOrders(getOrders().filter(o => o.teacherId)); // 示例：真实要根据 teacherId 筛
  }, []);
  return (
    <div className="p-4 pb-24">
      <h1 className="text-xl font-bold mb-3">待完成订单</h1>
      <div className="space-y-3">
        {orders.length===0 && <div className="small-text">暂无待完成订单</div>}
        {orders.map(o => (
          <div className="card" key={o.id}>
            <div>订单 #{o.id}</div>
            <div className="small-text">学生: {o.parentId}</div>
            <div className="small-text">时间: {o.date} {o.time}</div>
            <div className="small-text">方式: {o.method}</div>
          </div>
        ))}
      </div>

      <BottomNav role="teacher" />
    </div>
  )
}
