import { useState } from 'react';
import CountryCodeSelect from './CountryCodeSelect';
import { setCurrentUser } from '../lib/data';

export default function AuthForm({ roleDefault='parent' }) {
  const [role, setRole] = useState(roleDefault);
  const [email, setEmail] = useState('');
  const [cc, setCc] = useState('+60');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  function submit(e) {
    e.preventDefault();
    // 简单模拟登录/注册
    const user = {
      id: 'u' + Date.now(),
      name: name || (role==='parent' ? 'Parent' : 'Teacher'),
      role,
      email,
      phone: cc + phone,
      status: role === 'teacher' ? 'pending' : 'approved' // 老师需审核
    };
    setCurrentUser(user);
    // 跳转（在客户端里）
    if (typeof window !== 'undefined') {
      if (role==='parent') window.location.href = '/parent';
      else window.location.href = '/teacher';
    }
  }

  return (
    <form className="bg-white p-4 rounded shadow space-y-3" onSubmit={submit}>
      <input className="w-full p-2 border rounded" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} />
      <input className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <div className="flex">
        <CountryCodeSelect value={cc} onChange={setCc} />
        <input className="flex-1 p-2 border rounded-r" placeholder="Phone number" value={phone} onChange={e=>setPhone(e.target.value)} />
      </div>
      <div className="small-text">
        <label><input type="checkbox" required /> 我已同意 Terms & Privacy</label>
      </div>
      <button className="w-full py-2 bg-indigo-600 text-white rounded">继续</button>
      <div className="small-text text-center">当前角色：{role}</div>
      <div className="flex gap-2">
        <button type="button" onClick={()=>setRole('parent')} className={`flex-1 p-2 rounded ${role==='parent'?'bg-indigo-600 text-white':'bg-white'}`}>Parent</button>
        <button type="button" onClick={()=>setRole('teacher')} className={`flex-1 p-2 rounded ${role==='teacher'?'bg-indigo-600 text-white':'bg-white'}`}>Teacher</button>
      </div>
    </form>
  )
}
