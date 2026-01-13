import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'e8oc3usd',
    dataset: 'production'
  },
  deployment: {
    appId: 'bl48dmg69vs3f4mwx52f3q9s',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
