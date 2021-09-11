import http from '../components/common/http-common';

class TutorialDataService{
    getAll(){
        return http.get("/tutorials")
    }

    get(id){
        return http.get(`/tutorial/${id}`)
    }
    post(tutorial){
        return http.post("/tutorial/post", tutorial)
    }
    update(id, data){
        return http.put(`/tutorial/${id}`, data)
    }
    deleteOne(id){
        return http.delete(`/tutor/${id}`)
    }
    deleteAll(){
        return http.delete("/tutorial")
    }
    findByTitle(title){
        return http.get(`/tutorials?title=${title}`)
    }
    create(data){
        return http.post("/user/register", data)
    }
    login(user){
        return http.post("/user/login", user)
    }
    getProfile(){
        return http.get("/profile")
    }
    updateProfile(id, profileData){
        return http.put(`/profile/${id}`, profileData)
    }
    getCountries(){
        return http.get("/countries")
    }
}
export default new TutorialDataService ()