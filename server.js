const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())

const data = [
  {
    nama: 'Web Design',
    harga: 1000000,
    image: 'https://picsum.photos/200/300'
  },
  {
    nama: 'Python Data Analyst',
    harga: 2000000,
    image: 'https://picsum.photos/200/300'
  },
  {
    nama: 'Ardunio',
    harga: 500000,
    image: 'https://picsum.photos/200/300'
  },
]

app.get('/api/course', (req, res) => {
  res.status(200).json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})