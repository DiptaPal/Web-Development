import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/axios";

const deleteProduct = async(productId) => {
    const response = await api.delete(`/products/${productId}`);
    return response.data; 
}

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["my-products"]
            });
            queryClient.invalidateQueries({
                queryKey: ["all-products"]
            });
        }
    })
}