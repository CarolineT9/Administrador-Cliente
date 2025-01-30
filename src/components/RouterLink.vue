<script setup>
    const props = defineProps({
        to:{
            type: String,
            required: true
        }
    });
</script>
<template>
    <RouterLink :to="{name: to }" 
    class="block md:inline-block rounded bg-blue-600 py-2 px-3 text-white uppercase font-bold text-sm hover:bg-blue-500">
        <slot></slot>
    </RouterLink>

</template>

<style scoped></style>