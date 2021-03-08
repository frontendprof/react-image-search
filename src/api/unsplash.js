
import axios from "axios";

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:"Client-ID XU0ihcAzOcuIKMSsRMTpc9jtL-ZR32IVZmmukzIRj0k"
    }
});