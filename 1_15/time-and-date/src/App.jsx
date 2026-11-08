import { useEffect, useState } from 'react'

const helsinkiTimeZone = 'Europe/Helsinki'

function getHelsinkiDateTime() {
  return new Intl.DateTimeFormat('en-FI', {
    timeZone: helsinkiTimeZone,
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(new Date())
}

function App() {
  const [dateTime, setDateTime] = useState(getHelsinkiDateTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(getHelsinkiDateTime())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <main>
      <h1>Current time in Helsinki, Finland</h1>
      <p>{dateTime}</p>
    </main>
  )
}

export default App
