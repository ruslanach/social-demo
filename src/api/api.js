import axios from "axios";
export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "3f641036-720d-42da-9a54-7792235561e9"
    }
});
export const usersAPI = {
    getUsers (currentPage,pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

     deleteFollow (userId) {
        return instance.delete(`follow/`+userId).then(response => response.data);
    } ,
    postFollow  (userId){
        return instance.post(`follow/`+userId).then(response => response.data);
    }
}
export const authAPI = {
        getAuthMe () {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login (email,password,rememberMe) {

        return instance.post(`auth/login` ,{email,password,rememberMe}).then(response => response.data);
    },
    logout (email,password,rememberMe) {
        return instance.delete(`auth/login` ).then(response => response.data);
    } ,
}
export const profileAPI = {

    getProfile (userId){
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus (userId){
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    putStatus (status){
        return instance.put(`profile/status`,{status:status}).then(response => response.data);
    },
    savePhotoFromFile (photoFile){
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    .then(response => response.data);
    },
    saveProfile (userProfile) {
        return instance.put(`profile`, userProfile ).then(response => response.data);
    }
}
