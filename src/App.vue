<template>
  <div>
    <!-- Mobile Header -->
    <header class="header mobile-header">
      <nav>
        <ul>
          <!-- Home Link -->
          <li :class="{ active: isActive('/') }">
            <RouterLink to="/">
              <img :src="isActive('/') ? homeActiveIcon : homeIcon" alt="HomePage" />
            </RouterLink>
          </li>
          <!-- About Link -->
          <li :class="{ active: isActive('/about') }">
            <RouterLink to="/about">
              <img :src="isActive('/about') ? infoActiveIcon : infoIcon" alt="InfoPage" />
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Desktop Header -->
    <header class="header desktop-header">
      <nav>
        <ul>
          <!-- Logo -->
          <li>
            <img :src="dttLogo" alt="Logo" />
          </li>
          <!-- Houses Link -->
          <li :class="{ active: isActive('/') }">
            <RouterLink to="/" :class="{ active: isActive('/') }"> Houses </RouterLink>
          </li>
          <!-- About Link -->
          <li :class="{ active: isActive('/about') }">
            <RouterLink to="/about" :class="{ active: isActive('/about') }"> About </RouterLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Router View: Displays the matched component for the current route -->
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useRoute, RouterLink, RouterView } from 'vue-router'
// Importing icons and logo assets
import homeIcon from '@/assets/ic_mobile_navigarion_home@3x.png'
import homeActiveIcon from '@/assets/ic_mobile_navigarion_home_active@3x.png'
import infoIcon from '@/assets/ic_mobile_navigarion_info@3x.png'
import infoActiveIcon from '@/assets/ic_mobile_navigarion_info_active@3x.png'
import dttLogo from '@/assets/img_logo_dtt@3x.png'

// Use Vue Router to get the current route
const route = useRoute()

// Function to determine if the current route matches a given path
const isActive = (path: string) => {
  return route.path === path
}
</script>

<style scoped>
/* General Header Styles */
.header {
  width: 100%;
  background: #ffffff;
  z-index: 1000; /* Ensure it is above other content */
}

nav {
  margin: 0 auto;
  height: 60px;
  width: 80%;
}

ul {
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 50px;
  width: 50px;
}

/* Mobile header styles */
.mobile-header {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background-color: #ffffff;
}

/* Desktop header styles */
.desktop-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: none;
  justify-content: center;
  padding: 20px 0;
  background-color: #ffffff;
}

/* Styles for screens 1024px and wider (desktop) */
@media screen and (min-width: 1024px) {
  .mobile-header {
    display: none;
  }
  .desktop-header {
    display: flex;
  }

  /* Adjust spacing for desktop */
  .header {
    height: 80px;
  }

  ul {
    justify-content: flex-start;
    gap: 40px;
  }

  ul li {
    width: auto;
  }

  ul img {
    width: 110px;
  }

  .desktop-header a {
    color: gray;
    text-decoration: none;
  }

  .desktop-header a.active {
    color: black;
    font-weight: bold;
  }
}

/* Ensure content is not hidden behind the headers */
body {
  padding-bottom: 60px;
  padding-top: 80px;
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  body {
    padding-bottom: 70px;
  }
}
</style>
