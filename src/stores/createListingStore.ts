// stores/apartmentStore.ts
import { defineStore } from 'pinia'
import type { Apartment } from '../types'

export const useApartmentStore = defineStore('apartment', {
  state: () => ({
    apartments: [] as Apartment[]
  }),
  actions: {
    async fetchApartments() {
      try {
        const response = await fetch('https://api.intern.d-tt.nl/api/houses', {
          headers: {
            'X-Api-Key': 'FPNh7v3pOKHkqtEJ2IB1o8zjLWyAmrxg'
          }
        })
        const data = await response.json()
        this.apartments = data
      } catch (error) {
        console.log('error', error)
      }
    },
    async createApartment(newApartment: Apartment) {
      const myHeaders = new Headers()
      myHeaders.append('X-Api-Key', 'FPNh7v3pOKHkqtEJ2IB1o8zjLWyAmrxg')

      const formdata = new FormData()
      formdata.append('price', newApartment.price.toString())
      formdata.append('bedrooms', newApartment.bedrooms.toString())
      formdata.append('bathrooms', newApartment.bathrooms.toString())
      formdata.append('size', newApartment.size.toString())
      formdata.append('streetName', newApartment.streetName)
      formdata.append('houseNumber', newApartment.houseNumber)
      if (newApartment.numberAddition)
        formdata.append('numberAddition', newApartment.numberAddition)
      formdata.append('zip', newApartment.zip)
      formdata.append('city', newApartment.city)
      formdata.append('constructionYear', newApartment.constructionYear.toString())
      formdata.append('hasGarage', newApartment.hasGarage.toString())
      formdata.append('description', newApartment.description)

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      }

      try {
        const response = await fetch('https://api.intern.d-tt.nl/api/houses', requestOptions)
        const result = await response.json()
        this.apartments.push(result)
      } catch (error) {
        console.log('error', error)
      }
    }
  }
})