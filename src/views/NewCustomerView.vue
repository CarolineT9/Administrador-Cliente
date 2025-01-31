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
            <FormKit type="form"
            
            :actions="false"
            >
                <FormKit type="text" label="First name" placeholder="Customer's first name" validation="required"
                    validation-visibility="live" />
                <FormKit type="text" label="Last name" placeholder="Customer's last name" validation="required"
                    validation-visibility="live" />
                <FormKit type="email" label="E-mail" placeholder="customer@email.com" validation="required|email"
                    validation-visibility="live" />
                <FormKit type="text" label="Phone" placeholder=" phone: XXX-XXX-XXXX"
                    validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                    :validation-messages="{ matches: 'Please, enter a valid phone number. ' }" />
                    <FormKit type="text" label="Work location" placeholder="Customer's work location" 
                     />
                    <FormKit type="text" label="Position" placeholder="Customers's position" 
                    />
                    <FormKit type="submit" label="Add Customers" 
                     />
            </FormKit>
        </div>
    </div>

</template>

<style scoped>
.formkit-wrapper {
    max-width: 100%;
}
</style>