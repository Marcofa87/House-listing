import { defineStore } from 'pinia'

import type { House } from '@/types'

const HOUSE_LISTING_API_KEY = 'FPNh7v3pOKHkqtEJ2IB1o8zjLWyAmrxg'

export const useHouseListingStore = defineStore('houseListingStore', {
  state: () => ({
    houses: [] as House[],
    loading: false,
    error: null as string | null
  }),
  getters: {},
  actions: {
    async fetchHouses() {
      this.loading = true

      const myHeaders = new Headers()
      myHeaders.append('X-Api-Key', HOUSE_LISTING_API_KEY)

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
      }

      try {
        const response = await fetch('https://api.intern.d-tt.nl/api/houses', requestOptions)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const res = await response.json()
        console.log(res)

        this.houses = res
      } catch (error) {
        console.log('error', error)
        this.error = error instanceof Error ? error.message : String(error)
      } finally {
        this.loading = false
      }
    }
  }
})
