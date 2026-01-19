"use client";
import { useSearchParams, useRouter } from 'next/navigation';
import { sampleTeachers, saveOrder, getCurrentUser } from '../../../lib/data';
import { useState, useEffect } from 'react';

export default function OrderPage() {
  const params = useSearchParams();
  const router = useRouter();
  const teacherId = params.get('teacherId');
  const teacher = sampleTeachers.find(t=>t.id===teacherId) || sampleTeachers[0];

  const [method, setMethod] = useState('online');
  const [date, setDate] = useState(Object.keys(teacher.availability)[0] || '');
  const [time, setTime] = useState(teacher.availability[date] ? teacher.availability[date][0] : '');
  const [duration, setDuration] = useState(1);

  useEffect(()=> {
    if (date) setTime(teacher.availability[date] ? teacher.availability[date][0] : '');
  }, [date])

  function submit(e) {
    e.preventDefault();
    const currentUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('currentUser')) : null;
    if (!currentUser || currentUser.role !== 'parent') {
      alert('请先以家长身份登录');
      router.push('/');
      return;
    }
    const order = {
      id: 'o' + Date.now(),
      teacherId,
      parentId: currentUser.id,
      method,
      date,
      time,
      duration,
      amount: teacher.price * duration,
      status: 'pending_payment'
    };
    saveOrder(order);
    alert('订单已生成（模拟）。下一步：付款流程可对接 Stripe。');
    router.push('/parent/orders');
  }

  return (
    <div className="p-4 pb-24">
      <h1 className="text-xl font-bold mb-3">下单 - {teacher.name}</h1>
      <form onSubmit={submit} className="space-y-3">
        <div>
          <label className="small-text">补习方式</label>
          <select className="w-full p-2 border rounded" value={method} onChange={e=>setMethod(e.target.value)}>
            <option value="online">线上</option>
            <option value="offline">线下</option>
          </select>
        </div>
        <div>
          <label className="small-text">选择日期</label>
          <select className="w-full p-2 border rounded" value={date} onChange={e=>setDate(e.target.value)}>
            {Object.keys(teacher.availability).map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label className="small-text">开始时间</label>
          <select className="w-full p-2 border rounded" value={time} onChange={e=>setTime(e.target.value)}>
            {(teacher.availability[date]||[]).map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="small-text">时长（小时）</label>
          <input type="number" min="1" className="w-full p-2 border rounded" value={duration} onChange={e=>setDuration(Number(e.target.value))} />
        </div>
        <div>
          <div className="small-text">金额: RM{teacher.price} x {duration} = RM{teacher.price*duration}</div>
        </div>
        <button className="w-full py-2 bg-indigo-600 text-white rounded">生成订单（模拟）</button>
      </form>
    </div>
  )
}
