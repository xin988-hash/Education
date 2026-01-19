import { useState, useEffect } from 'react';
import TeacherCard from '../../components/TeacherCard';
import { sampleTeachers } from '../../lib/data';
import BottomNav from '../../components/BottomNav';

export default function ParentHome() {
  const [q, setQ] = useState('');
  const [method, setMethod] = useState('all');
  const [subject, setSubject] = useState('');
  const [region, setRegion] = useState('');

  const [list, setList] = useState([]);

  useEffect(()=> {
    // 初始用样例数据
    setList(sampleTeachers);
  }, []);

  const filtered = list.filter(t => {
    if (q && !t.name.toLowerCase().includes(q.toLowerCase()) && !t.subjects.join(' ').toLowerCase().includes(q.toLowerCase())) return false;
    if (subject && !t.subjects.includes(subject)) return false;
    if (region && !t.regions.includes(region)) return false;
    if (method === 'online' && t.online === false) return false; // sample check
    return true;
  });

  return (
    <div className="p-4 pb-24">
      <div className="mb-3">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="搜索老师或科目" className="w-full p-2 border rounded" />
      </div>

      <div className="flex gap-2 mb-3">
        <select className="p-2 border rounded flex-1" value={subject} onChange={e=>setSubject(e.target.value)}>
          <option value="">全部科目</option>
          <option>Math</option>
          <option>English</option>
          <option>Physics</option>
        </select>
        <select className="p-2 border rounded flex-1" value={region} onChange={e=>setRegion(e.target.value)}>
          <option value="">全部地区</option>
          <option>Kuala Lumpur</option>
          <option>Petaling Jaya</option>
          <option>Penang</option>
        </select>
      </div>

      <div className="space-y-3">
        {filtered.map(t => <TeacherCard key={t.id} t={t} />)}
      </div>

      <BottomNav role="parent" />
    </div>
  )
}
