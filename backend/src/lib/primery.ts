import _ from 'lodash'

export const primery = _.times(100, (i) => ({
  nick: `cool-primer-nick-${i}`,
  name: `Primer ${i}`,
  description: `Description of primer ${i}...`,
  text: _.times(100, (j) => `<p>Text paragrph ${j} of primer ${i}...</p>`).join(''),
}))
