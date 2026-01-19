import Link from 'next/link';

export default function TeacherCard({ t }) {
  return (
    <Link href={`/parent/teacher/${t.id}`}>
      <a className="flex items-center gap-3 p-3 bg-white rounded shadow">
        <img src={t.avatar} className="w-14 h-14 rounded-full" />
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="font-semibold">{t.name}</div>
            <div className="text-indigo-600">RM{t.price}/h</div>
          </div>
          <div className="small-text">评分: {t.rating} · 接单: {t.orders}</div>
          <div className="small-text">科目: {t.subjects.join(', ')}</div>
        </div>
      </a>
    </Link>
  )
}
