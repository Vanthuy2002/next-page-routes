import fs from 'node:fs'
import path from 'node:path'

const targetStrore = path.resolve('resources/feedback.json')

export default async function handleFeedBack(req, res) {
  if (req.method === 'POST') {
    const { email, feedback } = req.body

    const newFeedback = {
      id: Date.now(),
      email,
      feedback
    }

    const read = fs.readFileSync(targetStrore, { encoding: 'utf-8' })
    const contentInFile = JSON.parse(read)
    contentInFile.push(newFeedback)

    fs.writeFile(targetStrore, contentInFile, {
      encoding: 'utf-8'
    })

    res.status(201).json({ message: 'Create feedback sucessfully' })
  }
}
