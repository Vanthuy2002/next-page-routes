import fs from 'node:fs'
import path from 'node:path'

const targetStore = path.resolve('resources/feedback.json')

function getDataFromStore() {
  const read = fs.readFileSync(targetStore, { encoding: 'utf-8' })
  const contentInFile = JSON.parse(read)
  return contentInFile
}

export default async function handleFeedBack(req, res) {
  if (req.method === 'POST') {
    const { email, feedback } = req.body

    const newFeedback = {
      id: Date.now(),
      email,
      feedback
    }
    const contentInFile = getDataFromStore()
    contentInFile.push(newFeedback)

    fs.writeFile(
      targetStore,
      JSON.stringify(contentInFile),
      {
        encoding: 'utf-8'
      },
      (err) => {
        if (err) return err.message
      }
    )
    res.status(201).json({ message: 'Create feedback sucessfully' })
  } else {
    const data = getDataFromStore()
    res.status(200).json(data)
  }
}
