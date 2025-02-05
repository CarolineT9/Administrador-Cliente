import api from "@/api/axios";

export default {
    getCustomers(){
        return api.get('customers')
    },
    addCustomer(data){
        return api.post('customers', data)
    }
}