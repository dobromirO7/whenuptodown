import { useParams } from 'react-router-dom'

export const ViewPrimerPage = () => {
  const { primerNick } = useParams() as { primerNick: string }
  return (
    <div>
      <h1>{primerNick}</h1>
      <p>Description of primer 1...</p>
      <div>
        <p>Text paragrph 1 of primer 1...</p>
        <p>Text paragrph 2 of primer 1...</p>
        <p>Text paragrph 3 of primer 1...</p>
      </div>
    </div>
  )
}
