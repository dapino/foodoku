const contentful = require('contentful');

// TODO: move credentials out of this file
const client = contentful.createClient({
  space: 't3iqq8x3t5ts',
  accessToken:
    'f080ea823821efa5c70fe077224e988ab73093b96b6f909b5d5778ca1e999a87',
});

const getEntries = async (entry) => {
  const entries = await client.getEntries(entry);
  return entries;
};

export default getEntries;
