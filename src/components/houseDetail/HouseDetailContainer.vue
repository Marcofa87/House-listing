<template>
  <div class="house-detail-container">
    <!-- Render the HouseDetail component, passing the current house ID as a key -->
    <HouseDetail :key="String(route.params.id)" />
    <!-- Section for recommended listings -->
    <div class="recommended">
      <h2>Recommended for you</h2>
      <!-- Render the ListingCard component -->
      <ListingCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import HouseDetail from '@/components/houseDetail/HouseDetail.vue'
import ListingCard from '@/components/cardComponent/ListingCard.vue'

import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
h2 {
  margin-left: 20px;
}

@media (min-width: 1024px) {
  .house-detail-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
}
</style>
