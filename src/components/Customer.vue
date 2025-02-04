<script setup>
defineProps({
    customer:{
      type:Object  
    }
    
})
</script>
<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ customer.first_name }} {{ customer.last_name }}</p>
            <p class="text-gray-500">{{ customer.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold"></p>
            <p class="text-gray-600">{{ customer.position }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">
            
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
         
        </td>
    </tr>
</template>