// lib/data.js
export const sampleTeachers = [
  {
    id: 't1',
    name: '张老师',
    avatar: '/icon-192.png',
    rating: 4.8,
    price: 80,
    subjects: ['Math', 'Physics'],
    regions: ['Kuala Lumpur', 'Petaling Jaya'],
    reviews: [
      { user: 'Parent A', comment: '耐心、讲解清楚', rating: 5 },
      { user: 'Parent B', comment: '成绩进步很多', rating: 4.5 }
    ],
    orders: 120,
    accepting: true,
    availability: { // 简单的示例时间段
      '2026-01-20': ['09:00', '10:00', '14:00'],
      '2026-01-21': ['10:00', '15:00']
    }
  },
  {
    id: 't2',
    name: 'Lim Teacher',
    avatar: '/icon-192.png',
    rating: 4.5,
    price: 70,
    subjects: ['English'],
    regions: ['Penang'],
    reviews: [{ user: 'Parent C', comment: '方法好', rating: 4 }],
    orders: 80,
    accepting: false,
    availability: {}
  }
]

// localStorage helpers
export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem('currentUser'));
  } catch (e) { return null; }
}
export function setCurrentUser(u) {
  localStorage.setItem('currentUser', JSON.stringify(u));
}
export function getOrders() {
  try { return JSON.parse(localStorage.getItem('orders') || '[]'); }
  catch (e) { return []; }
}
export function saveOrder(o) {
  const all = getOrders();
  all.push(o);
  localStorage.setItem('orders', JSON.stringify(all));
}
