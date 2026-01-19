import Link from 'next/link';
export default function BottomNav({ role='parent' }) {
  if (role === 'parent') {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white p-2 flex justify-around border-t">
        <Link href="/parent"><a>Home</a></Link>
        <Link href="/parent/orders"><a>Orders</a></Link>
        <Link href="/parent/profile"><a>My</a></Link>
      </div>
    )
  } else {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white p-2 flex justify-around border-t">
        <Link href="/teacher"><a>Home</a></Link>
        <Link href="/teacher/schedule"><a>Schedule</a></Link>
        <Link href="/teacher/wallet"><a>Wallet</a></Link>
        <Link href="/teacher/profile"><a>My</a></Link>
      </div>
    )
  }
}
