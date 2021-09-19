import http from '../components/common/http-common';

class TutorialDataService{
    getAll(){
        return http.get("/tutorials")
    }

    get(id){
        return http.get(`/tutorial/${id}`)
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
    create(user){
        return http.post("/user/register", user)
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
   
}
export default new TutorialDataService ()