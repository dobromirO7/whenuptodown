import { Link } from 'react-router-dom'
import { getViewPrimerRoute } from '../../lib/routes'
import { trpc } from '../../lib/trpc'

export const AllPrimeryPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getPrimery.useQuery()

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h1>All Primery</h1>
      {data.primery.map((primer) => (
        <div key={primer.nick}>
          <h2>
            {' '}
            <Link to={getViewPrimerRoute({ primerNick: primer.nick })}>{primer.name}</Link>
          </h2>
          <p>{primer.description}</p>
        </div>
      ))}
    </div>
  )
}
