import {createClient, type ClientConfig} from '@sanity/client';

const config: ClientConfig = {
    projectId: 'ydlg9ib1',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2025-01-20',
}

export const sanityClient = createClient(config);

