const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: '5mjqdq4a',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
})

export default client;