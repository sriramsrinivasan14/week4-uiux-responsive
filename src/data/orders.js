
const img = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=180&h=220&q=80`
export const orders = [
  {
    id: '#SP-1048',
    date: '02 Oct 2026',
    total: 4298,
    status: 'Delivered',
    items: [
      { name: 'Urban Linen Overshirt', image: img('photo-1529139574466-a303027c1d8b') },
      { name: 'Everyday Runner 2.0', image: img('photo-1542291026-7eec264c27ff') }
    ]
  },
  {
    id: '#SP-1032',
    date: '25 Sep 2026',
    total: 3999,
    status: 'Shipped',
    items: [
      { name: 'Focus Wireless Headphones', image: img('photo-1505740420928-5e560c06d30e') }
    ]
  },
  {
    id: '#SP-1017',
    date: '14 Sep 2026',
    total: 2698,
    status: 'Processing',
    items: [
      { name: 'Canvas Mini Backpack', image: img('photo-1553062407-98eeb64c6a62') },
      { name: 'Relaxed Cotton Tee', image: img('photo-1521572163474-6864f9cf17ab') }
    ]
  }
]
