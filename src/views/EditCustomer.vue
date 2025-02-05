<script setup>
import { onMounted, reactive } from 'vue';
import CustomerService from '@/services/CustomerService.js'
import RouterLink from '@/components/RouterLink.vue';
import { useRoute, useRouter } from 'vue-router';
import Heading from '@/components/UI/Heading.vue';
import { FormKit } from '@formkit/vue';

const route = useRoute();
const router = useRouter();
const {id} = route.params;

const formData = reactive ({
    // name:'',
    // first_name:'',
    // last_name:'',
    // email:'',
    // phone:'',
    // work_location:'',
    // position:''
})

onMounted(() =>{
    CustomerService.getCustomer(id)
    .then(({data}) => {
        Object.assign(formData, data)
        // formData.first_name = data.first_name
        // formData.last_name = data.last_name
        // formData.email = data.email
        // formData.phone = data.phone
        // formData.work_location = data.work_location
        // formData.position = data.position
    })
    .catch(error => console.log(error))
});
const handleSubmit = (data)=>{
    CustomerService.updateCustomer(id, data)
    .then(()=> router.push({name: 'home'}) )
    .catch((error)=> console.log(error))
};
</script>
<template>
    <div>
        
        <div>
            <div class="flex justify-end">
                <RouterLink to="home">Back</RouterLink>
            </div>
            <Heading>Edit Account</Heading>
        </div>
        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                
                <FormKit type="form"  submit-label="Add Customer" :value="formData" @submit="handleSubmit">
                    <FormKit type="text" label="First name" name="first_name" v-model="formData.first_name" placeholder="Customer's first name"
                        validation="required" validation-visibility="live"  />
                    <FormKit type="text" label="Last name" v-model="formData.last_name" name="last_name" placeholder="Customer's last name"
                        validation="required" validation-visibility="live" />
                    <FormKit type="email" label="E-mail" name="email" v-model="formData.email" placeholder="customer@email.com"
                        validation="required|email" validation-visibility="live" />
                    <FormKit type="text" label="Phone" name="phone" v-model="formData.phone" placeholder=" phone: XXX-XXX-XXXX"
                        validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                        :validation-messages="{ matches: 'Please, enter a valid phone number. ' }" />

                    <FormKit type="text" label="Work location" v-model="formData.work_location" name="work_location"
                        placeholder="Customer's work location" />
                    <FormKit type="text" label="Position" name="position" v-model="formData.position" placeholder="Customers's position" />

                </FormKit>
            </div>
        </div>
    </div>

</template>


<style></style>