import axios from "axios";
const API_URL = "http://localhost:8080/caringbridge";

class ActivityService {
    getAllActivities() {
        return axios.get(API_URL + "/activities");
    }
    saveActivity(activity) {
        return axios.post(API_URL + "/activities", activity);
    }
}

export default new ActivityService
