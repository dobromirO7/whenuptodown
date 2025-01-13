import { useParams } from 'react-router-dom'
import { type ViewPrimerRouteParams } from '../../../lib/routes'
import { trpc } from '../../../lib/trpc'

export const ViewPrimerPage = () => {
  const { primerNick } = useParams() as ViewPrimerRouteParams
  const { data, error, isLoading, isFetching, isError } = trpc.getPrimer.useQuery({
    primerNick,
  })

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if (!data.primer) {
    return <span>Primer not found</span>
  }

  return (
    <div>
      <h1>{data.primer.name}</h1>
      <p>{data.primer.description}</p>
      <div dangerouslySetInnerHTML={{ __html: data.primer.text }} />
    </div>
  )
}
