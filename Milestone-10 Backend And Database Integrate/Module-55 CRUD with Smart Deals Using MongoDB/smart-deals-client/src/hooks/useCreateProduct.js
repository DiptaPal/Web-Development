import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/axios";

const createProduct = async(product) => {
    const response = await api.post("/product", product);
    return response.data;
}

export const useCreateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryFn: ["all-products"]
            });
            
        }
    })
}