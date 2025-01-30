<script setup>
import RouterLink from '@/components/RouterLink.vue';
import Heading from '@/components/UI/Heading.vue';
import { FormKit } from '@formkit/vue';

</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink to="home">Back</RouterLink>                                                                    
        </div>
        <Heading>Account</Heading>
    </div>
    <div class="mx-auto mt-10 bg-white shadow">
        <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit type="form">
            <FormKit type="text" 
            label="Name"
            placeholder="Client's name"
            prefix-icon="add"
            help="Enter the client's name you wish to register."
            validation="required"
            validation-visibility="live"
            
            />
        </FormKit>
    </div>
    </div>

</template>

<style setup></style>