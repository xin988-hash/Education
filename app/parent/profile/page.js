"use client";
import { getCurrentUser } from '../../../lib/data';
import { useEffect, useState } from 'react';

export default function ParentProfile() {
  const [user, setUser] = useState(null);
  useEffect(()=> {
    setUser(getCurrentUser());
  }, []);
  if (!user) return <div className="p-4">请先登录</div>;
  return (
    <div className="p-4 pb-24">
      <h1 className="text-xl font-bold mb-3">我的资料</h1>
      <div className="card">
        <div>姓名: {user.name}</div>
        <div>邮箱: {user.email}</div>
        <div>手机号: {user.phone}</div>
      </div>
    </div>
  )
}
