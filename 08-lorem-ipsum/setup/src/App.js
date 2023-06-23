import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (count > 8) {
      amount = 8
    }
    setText(data.slice(0, amount))
  }
  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsun</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs: </label>
        <input type='number' className="" id="amount" name="amount" value={count} onChange={(e) => setCount(e.target.value)} />
        <button className='btn'>Generate</button>
      </form>
      <article>
        {
          text.map((item,index) => {
            return <p key={index}>{item}</p>
          })
        }
      </article>
    </section>
  )
}

export default App;
