<script setup>
import { computed } from 'vue'
const props = defineProps({
    customer:{
      type:Object  
    }
    
})
defineEmits(['update-status', 'delete-customer'])
const nameCustomer = computed(()=>{
    return props.customer.first_name + " " + props.customer.last_name
})
const statusCustomer = computed(() => {
    return props.customer.status
});

</script>
<template>
   
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ nameCustomer }}</p>
            <p class="text-gray-500">{{ customer.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{customer.work_location}}</p>
            <p class="text-gray-600">{{ customer.position }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">
            <button class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 "
            :class="statusCustomer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' "
            @click="$event => $emit('update-status', {id: customer.id, status: customer.status})"
            >
                {{ statusCustomer ? 'Active' : 'Inactive' }}
            </button>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 "
        
        >
         
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
         <RouterLink :to="{name: 'edit-customer', params: {id: customer.id}}"
         class="text-indigo-600 hover:text-indigo-900 mr-5"
         >Edit</RouterLink>
         <button class="text-red-600 hover:text-red-900"
         @click="$event => $emit('delete-customer', customer.id)"
         >Delete</button>
        </td>
        
    </tr>
</template>