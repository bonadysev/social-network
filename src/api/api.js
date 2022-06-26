import * as axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f5850288-e724-4ece-b82a-4d60962d11a0"
    }
});

export const usersAPI = {
    getUsers(currentPage= 1 , pageSize = 10){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }
}

export const getUsers2 = (currentPage= 1 , pageSize = 10)=> {
    return  instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });
}
