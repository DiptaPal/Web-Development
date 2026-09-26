import api from "../api/axios";
import { useMutation } from "@tanstack/react-query";

const createUser = async(userData) => {
    const response = await api.post("/users", userData);

    return response.data;
}

export const useCreateUser = () => {
    return useMutation({
        mutationFn: createUser
    })
}