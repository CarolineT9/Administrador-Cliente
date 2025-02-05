<script setup>
import { onMounted, ref, computed } from 'vue';
import RouterLink from '@/components/RouterLink.vue';
import CustomerService from '@/services/CustomerService.js'


import Heading from '@/components/UI/Heading.vue';
import Customer from '@/components/Customer.vue';

const customers = ref([])
const isCustomer = computed(() => {
  return customers.value.length > 0
})

onMounted(() => {
  CustomerService.getCustomers()
    .then(({ data }) => customers.value = data)
    .catch(error => console.log('Data not found'))
});

const updatedStatus = ({id, status})=>{
    CustomerService.updateCustomerStatus(id, {status: !status})   
    .then(() =>{
      const i = customers.value.findIndex(customer => customer.id === id)
      customers.value[i].status = !status
    })
    .catch(error => console.log(error))
};

</script>
<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="new-customer">Register customer</RouterLink>
    </div>
    <Heading>Customers list</Heading>
    <div v-if="isCustomer" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Name</th>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Work Location</th>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Status</th>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <Customer v-for="customer in customers" :key="customer.id" 
              :customer="customer" @update-status="updatedStatus"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="text-center mt-10">There aren't customers</p>
    </div>
  </div>

</template>
<style scoped></style>