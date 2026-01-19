export default function RoleToggle({ role, setRole }) {
  return (
    <div className="flex gap-2 mb-3">
      <button className={`flex-1 p-2 rounded ${role==='parent'?'bg-indigo-600 text-white':'bg-white'}`} onClick={()=>setRole('parent')}>Parent</button>
      <button className={`flex-1 p-2 rounded ${role==='teacher'?'bg-indigo-600 text-white':'bg-white'}`} onClick={()=>setRole('teacher')}>Teacher</button>
    </div>
  )
}
