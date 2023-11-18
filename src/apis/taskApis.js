import axios from "axios";


export const TaskAPIs = {
    getAllTasks: async (params)=>{
        const respone = await axios.get(`${process.env.REACT_APP_BR_URL}tasks`,{
            params: params,
        });
        return respone;
    },
    getTaskById: async (taskId)=> {
        const respone = await axios.get(
            `${process.env.REACT_APP_BR_URL}tasks/${taskId}`
        );
        return respone.data;
    },
    createTask: async (task)=>{
        return await axios.post(`${process.env.REACT_APP_BR_URL}tasks`, task);
    },
    updateTaskById: async(id, taskUpdate)=>{
        return await axios.patch(`${process.env.REACT_APP_BR_URL}tasks/${id}`, taskUpdate);
    },
    deleteTaskById: async (id)=>{
        return axios.delete(`${process.env.REACT_APP_BR_URL}tasks/${id}`);
    },
    searchTaskById: async (id)=>{
        return await axios.post(`${process.env.REACT_APP_BR_URL}tasks/${id}`);
    },
};
