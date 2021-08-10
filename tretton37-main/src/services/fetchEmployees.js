import axios from "axios";

const fetchEmployees = async (name = "", office = "", sort = "ASC") => {
  let local_URL = "http://localhost:5000";
  let remote_URL = "https://ninja-scrapper-tretton37.herokuapp.com";
  let users;
  await axios
    .get(`${remote_URL}/employees`, {
      params: {
        name: name,
        office: office,
        sort: sort,
      },
    })
    .then((res) => {
      users = res.data;
    });
  return users;
};
export default fetchEmployees;
