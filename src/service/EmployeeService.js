import axios from "axios";

const EMPLOYEE_API_SAVE_URL = "http://localhost:8080/api/v1/employee";
const EMPLOYEE_API_GET_URL = "http://localhost:8080/api/v1/employee";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_SAVE_URL, employee);
  }

  getEmployee() {
    return axios.get(EMPLOYEE_API_GET_URL);
  }
}

export default new EmployeeService();
