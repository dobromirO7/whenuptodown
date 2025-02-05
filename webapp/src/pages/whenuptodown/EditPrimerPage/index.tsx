import type { TrpcRouterOutput } from '@whenuptodown/backend/src/router'
import { zUpdatePrimerTrpcInput } from '@whenuptodown/backend/src/router/updatePrimer/input'
import { useFormik } from 'formik'
import { withZodSchema } from 'formik-validator-zod'
import pick from 'lodash/pick'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Alert } from '../../../components/Alert'
import { Button } from '../../../components/Button'
import { FormItems } from '../../../components/FormItems'
import { Input } from '../../../components/Input'
import { Segment } from '../../../components/Segment'
import { Textarea } from '../../../components/Textarea'
import { type EditPrimerRouteParams, getViewPrimerRoute } from '../../../lib/routes'
import { trpc } from '../../../lib/trpc'

const EditPrimerComponent = ({ primer }: { primer: NonNullable<TrpcRouterOutput['getPrimer']['primer']> }) => {
  const navigate = useNavigate()
  const [submittingError, setSubmittingError] = useState<string | null>(null)
  const updatePrimer = trpc.updatePrimer.useMutation()
  const formik = useFormik({
    initialValues: pick(primer, ['name', 'nick', 'description', 'text']),
    validate: withZodSchema(zUpdatePrimerTrpcInput.omit({ primerId: true })),
    onSubmit: async (values) => {
      try {
        setSubmittingError(null)
        await updatePrimer.mutateAsync({ primerId: primer.id, ...values })
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        navigate(getViewPrimerRoute({ primerNick: values.nick }))
      } catch (err: any) {
        setSubmittingError(err.message)
      }
    },
  })

  return (
    <Segment title={`Edit Primer: ${primer.nick}`}>
      <form onSubmit={formik.handleSubmit}>
        <FormItems>
          <Input label="Name" name="name" formik={formik} />
          <Input label="Nick" name="nick" formik={formik} />
          <Input label="Description" name="description" maxWidth={500} formik={formik} />
          <Textarea label="Text" name="text" formik={formik} />
          {!formik.isValid && !!formik.submitCount && <Alert color="red">Some fields are invalid</Alert>}
          {submittingError && <Alert color="red">{submittingError}</Alert>}
          <Button loading={formik.isSubmitting}>Update Primer</Button>
        </FormItems>
      </form>
    </Segment>
  )
}

export const EditPrimerPage = () => {
  const { primerNick } = useParams() as EditPrimerRouteParams

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

  if (!me) {
    return <span>Only for authorized</span>
  }

  if (me.id !== primer.authorId) {
    return <span>An primer can only be edited by the author</span>
  }

  return <EditPrimerComponent primer={primer} />
}
