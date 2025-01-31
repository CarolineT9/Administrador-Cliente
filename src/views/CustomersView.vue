<script setup>
import RouterLink from '@/components/RouterLink.vue';
import Heading from '@/components/UI/Heading.vue';
</script>
<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="new-customers">Register customer</RouterLink>
    </div>
    <Heading>Customers</Heading>
  </div>

</template>
<style scoped></style>