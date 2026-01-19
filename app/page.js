import dynamic from 'next/dynamic'
import AuthForm from '../components/AuthForm'

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-3">请选择语言 / 注册或登录</h1>
      <div className="flex gap-2 mb-4">
        <button className="flex-1 p-2 bg-indigo-600 text-white rounded">中文</button>
        <button className="flex-1 p-2 bg-white rounded">English</button>
        <button className="flex-1 p-2 bg-white rounded">Bahasa</button>
      </div>

      <AuthForm roleDefault="parent" />
    </div>
  )
}
