import { ApiService } from "./api.service";

class BlogApiService {

    static getBlogList(){
        return ApiService.get('http://localhost:3000/sample-data/blog-list.json');
    }

}

export { BlogApiService };