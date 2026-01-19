"use client";
import { useState, useEffect } from 'react';

export default function TeacherProfile() {
  const [accepting, setAccepting] = useState(true);
  const [subjects, setSubjects] = useState('');
  const [price, setPrice] = useState(80);
  useEffect(()=> {
    // load from localStorage later
  }, []);
  function save() {
    alert('保存成功（模拟）。真实项目要写入后端。');
  }
  return (
    <div className="p-4 pb-24">
      <h1 className="text-xl font-bold mb-3">我的资料</h1>
      <div className="card space-y-3">
        <div>
          <label className="small-text">接单开关</label>
          <div>
            <label className="mr-3"><input type="checkbox" checked={accepting} onChange={e=>setAccepting(e.target.checked)} /> 接单</label>
          </div>
        </div>
        <div>
          <label className="small-text">科目（逗号分隔）</label>
          <input className="w-full p-2 border rounded" value={subjects} onChange={e=>setSubjects(e.target.value)} placeholder="Math, English" />
        </div>
        <div>
          <label className="small-text">价格 (RM/小时)</label>
          <input type="number" className="w-full p-2 border rounded" value={price} onChange={e=>setPrice(Number(e.target.value))} />
        </div>
        <button onClick={save} className="w-full py-2 bg-indigo-600 text-white rounded">保存</button>
        <button className="w-full py-2 bg-gray-300 rounded">联系我们</button>
        <button className="w-full py-2 bg-red-500 text-white rounded">注销账号</button>
      </div>
    </div>
  )
}
