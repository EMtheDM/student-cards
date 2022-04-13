import axios from "axios";

const search = () => axios.get(`https://api.hatchways.io/assessment/students`);

export default search;
