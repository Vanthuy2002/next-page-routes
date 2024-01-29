import Metadata from '@/components/metadata'
import { getAllFeeback, postFeedback } from '@/utils/api-actions'
import { useRef } from 'react'

export default function Homepage({ feedbackDt }) {
  const feedbackRef = useRef('')
  const emailRef = useRef('')

  const onSubmitHandle = async (e) => {
    e.preventDefault()
    const payload = {
      email: emailRef.current.value,
      feedback: feedbackRef.current.value
    }

    const result = await postFeedback(payload)
    console.log(result)
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

      <ul>
        {feedbackDt.length > 0 ? (
          feedbackDt.map((fb) => (
            <li key={fb.id}>
              <p>{fb.email}</p>
              <p>{fb.feedback}</p>
            </li>
          ))
        ) : (
          <p>No feedback to display</p>
        )}
      </ul>
    </main>
  )
}

export async function getServerSideProps() {
  const data = await getAllFeeback()
  return {
    props: {
      feedbackDt: data
    }
  }
}
