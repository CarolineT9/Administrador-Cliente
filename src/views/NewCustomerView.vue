<script setup>
import axios from 'axios';
import RouterLink from '@/components/RouterLink.vue';
import { useRoute, useRouter } from 'vue-router';
import Heading from '@/components/UI/Heading.vue';
import { FormKit } from '@formkit/vue';


const router = useRouter();
defineProps({

})

const handleSubmit = (data) =>{
    axios.post('http://localhost:4000/customers', data)
    .then(response =>{
        //redirect
        router.push({name: 'home'})
    } )
    .catch(error => console.log(error))
};



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
            @submit="handleSubmit"
          
            submit-label="Add Customer"
            >
                <FormKit type="text" label="First name" name="first_name" placeholder="Customer's first name" validation="required"
                    validation-visibility="live" />
                <FormKit type="text" label="Last name" name="last_name" placeholder="Customer's last name" validation="required"
                    validation-visibility="live" />
                <FormKit type="email" label="E-mail" name="email" placeholder="customer@email.com" validation="required|email"
                    validation-visibility="live" />
                <FormKit type="text" label="Phone" name="phone" placeholder=" phone: XXX-XXX-XXXX"
                    validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                    :validation-messages="{ matches: 'Please, enter a valid phone number. ' }" />
                    <FormKit type="text" label="Work location" name="work-location" placeholder="Customer's work location" 
                     />
                    <FormKit type="text" label="Position" name="position" placeholder="Customers's position" 
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