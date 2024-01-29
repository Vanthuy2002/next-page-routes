import Metadata from '@/components/metadata'
import { useRef } from 'react'

export default function Homepage() {
  const feedbackRef = useRef('')
  const emailRef = useRef('')

  const onSubmitHandle = async (e) => {
    e.preventDefault()
    const payload = {
      email: emailRef.current.value,
      feedback: feedbackRef.current.value
    }

    await fetch('/api/feedback', {
      method: 'POST',
      body: payload,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  return (
    <main>
      <Metadata />
      <h1>Api lecture</h1>

      <form onSubmit={onSubmitHandle} autoComplete='off'>
        <div>
          <label htmlFor='email'>Your Email Address</label>
          <input ref={emailRef} style={{ display: 'block' }} id='email' />
        </div>
        <div>
          <label htmlFor='feedback'>Your Feedback</label>
          <textarea
            ref={feedbackRef}
            style={{ display: 'block' }}
            id='feedback'
            rows='5'
          ></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </main>
  )
}
