import express from "express"

const app = express()

const port = 3000

app.get("/message", (req, res) => {
  return res.status(200).json({
    message: "Hello, World!"
  })
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}...`)
})