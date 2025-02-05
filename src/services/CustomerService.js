import api from "@/api/axios";

export default {
    getCustomers(){
        return api.get('customers')
    },
    addCustomer(data){
        return api.post('customers', data)
    },
    getCustomer(id){
        return api.get('customers/' + id)
    },
    updateCustomer(id, data){
        return api.patch('customers/' + id, data)
    },
    updateCustomerStatus(id, data){
        return api.patch('customers/' + id, data)
    },
    deleteCustomer(id){
        return api.delete('customers/' +  id)
    }
}