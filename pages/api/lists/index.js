const lists = [
  { id: '1', title: 'Budgies', items: ['Henry', 'Henrietta', 'Margie'], tags: ['animals', 'home']},
  { id: '2', title: 'Saturday To Do', items: ['Mop', 'Vacuum', 'Cook'], tags: ['home']},
  { id: '3', title: 'New website', items: ['Change image', 'Add event', 'Create page'], tags: ['church', 'website']},
  { id: '4', title: 'Song app', items: ['Draw wireframe', 'Choose technology'], tags: ['church', 'music']},
  { id: '5', title: 'Job sites', items: ['Indeed', 'LinkedIn'], tags: ['career']},
  { id: '6', title: 'Portfolio website', items: ['Renew/buy hosting', 'Link to Github', 'New colour scheme'], tags: ['career']},
  { id: '7', title: 'Favourite music', items: ['Opera', 'Classical', 'Jazz'], tags: ['home', 'music']},
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(lists)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
}
