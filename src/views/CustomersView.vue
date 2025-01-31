<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'
import RouterLink from '@/components/RouterLink.vue';
import Heading from '@/components/UI/Heading.vue';


const customer =  ref([])
onMounted(() => {
  axios.get('http://localhost:4000/customers')
  .then(({data}) =>{
    customer.value = data
  })
  .catch(error => console.log('Data not found'))
});
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