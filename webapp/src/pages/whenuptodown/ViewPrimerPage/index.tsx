import { format } from 'date-fns/format'
import { useParams } from 'react-router-dom'
import { LinkButton } from '../../../components/Button'
import { Segment } from '../../../components/Segment'
import { getEditPrimerRoute, type ViewPrimerRouteParams } from '../../../lib/routes'
import { trpc } from '../../../lib/trpc'
import css from './index.module.scss'

export const ViewPrimerPage = () => {
  const { primerNick } = useParams() as ViewPrimerRouteParams

  const getPrimerResult = trpc.getPrimer.useQuery({
    primerNick,
  })
  const getMeResult = trpc.getMe.useQuery()

  if (getPrimerResult.isLoading || getPrimerResult.isFetching || getMeResult.isLoading || getMeResult.isFetching) {
    return <span>Loading...</span>
  }

  if (getPrimerResult.isError) {
    return <span>Error: {getPrimerResult.error.message}</span>
  }

  if (getMeResult.isError) {
    return <span>Error: {getMeResult.error.message}</span>
  }

  if (!getPrimerResult.data.primer) {
    return <span>Primer not found</span>
  }

  const primer = getPrimerResult.data.primer
  const me = getMeResult.data.me

  return (
    <Segment title={primer.name} description={primer.description}>
      <div className={css.createdAt}>Created At: {format(primer.createdAt, 'yyyy-MM-dd')}</div>
      <div className={css.author}>Author: {primer.author.nick}</div>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: primer.text }} />
      {me?.id === primer.authorId && (
        <div className={css.editButton}>
          <LinkButton to={getEditPrimerRoute({ primerNick: primer.nick })}>Edit Primer</LinkButton>
        </div>
      )}
    </Segment>
  )
}
