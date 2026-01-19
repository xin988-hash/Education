"use client";
import { sampleTeachers } from '../../../../lib/data';
import { useRouter, useParams } from 'next/navigation';

export default function TeacherDetail() {
  const router = useRouter();
  const { id } = router.query;
  const teacher = sampleTeachers.find(t => t.id === id) || sampleTeachers[0];

  if (!teacher) return <div>Loading...</div>;

  return (
    <div className="p-4 pb-24">
      <div className="card">
        <div className="flex items-center gap-3">
          <img src={teacher.avatar} className="w-20 h-20 rounded-full" />
          <div>
            <div className="font-bold text-lg">{teacher.name}</div>
            <div className="small-text">评分: {teacher.rating} · 接单: {teacher.orders}</div>
            <div className="small-text">地区: {teacher.regions.join(', ')}</div>
          </div>
        </div>
        <div className="mt-3">
          <div className="font-semibold">科目</div>
          <div>{teacher.subjects.join(', ')}</div>
        </div>
        <div className="mt-3">
          <div className="font-semibold">学生评价</div>
          <ul className="list-disc list-inside">
            {teacher.reviews.map((r, i)=> <li key={i}>{r.user}: {r.comment}</li>)}
          </ul>
        </div>
      </div>

      <button className="w-full mt-4 py-2 bg-green-600 text-white rounded" onClick={()=>{
        // 跳转到下单页并带上 teacher id（用 query）
        router.push(`/parent/order?teacherId=${teacher.id}`);
      }}>下单</button>
    </div>
  )
}
