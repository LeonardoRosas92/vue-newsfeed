<template>
  <div class="bg-gray-700 min-h-screen text-white">
    <HeaderNav />
    <SideBarNav/>
    <router-view />
  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
import SideBarNav from "./components/SidebarNav.vue"
export default {
  components: { HeaderNav , SideBarNav},
};
</script> 

<style>
.btn{
  @apply bg-green-600 duration-300 font-bold py-2 px-4 rounded-lg inline-block
}
.btn:hover{
  @apply bg-green-700
}
</style>