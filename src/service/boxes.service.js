import http from "../http";
class BoxDataService {
  getAll() {
    return http.get("/boxes");
  }
  create(data) {
    return http.post("/boxes", data);
  }

}
export default new BoxDataService();