import {createClient} from '@sanity/client'

/**
 * Shared Sanity client used across the app.
 * Make sure these env vars are set:
 * - VITE_SANITY_PROJECT_ID
 * - VITE_SANITY_DATASET
 * - VITE_SANITY_API_VERSION (e.g. 2025-01-01)
 */
export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2025-01-01',
  useCdn: true, // ok for public, read-only data
})
