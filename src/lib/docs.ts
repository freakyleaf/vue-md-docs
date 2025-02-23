import { PATH_RELEASE_NOTES } from '@/lib/paths';

const NAME_API_REFERENCE = 'API Reference';
const NAME_GETTING_STARTED = 'Getting Started';
const NAME_RELEASE_NOTES = 'Release Notes';

const URL_API_REFERENCE = 'api-reference';
const URL_GETTING_STARTED = 'getting-started';
const URL_RELEASE_NOTES = PATH_RELEASE_NOTES;

export default [
  {
    /* eslint-disable sort-keys */
    version: '1.0.0',
    paths: [
      {
        name: NAME_API_REFERENCE,
        url: URL_API_REFERENCE,
      },
      {
        name: NAME_GETTING_STARTED,
        url: URL_GETTING_STARTED,
      },
      {
        name: NAME_RELEASE_NOTES,
        url: URL_RELEASE_NOTES,
      },
    ],
  },
  {
    /* eslint-disable sort-keys */
    version: '1.1.0',
    paths: [
      {
        name: NAME_API_REFERENCE,
        url: URL_API_REFERENCE,
      },
      {
        name: NAME_GETTING_STARTED,
        url: URL_GETTING_STARTED,
      },
      {
        name: NAME_RELEASE_NOTES,
        url: URL_RELEASE_NOTES,
      },
    ],
  },
];
