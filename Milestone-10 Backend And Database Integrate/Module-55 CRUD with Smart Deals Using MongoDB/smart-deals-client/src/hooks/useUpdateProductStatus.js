import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/axios";

const updateProductStatus = async ({ productId, status }) => {

    const response = await api.patch(`/products-status/${productId}`, {
        status
    });

    return response.data;
};

export const useUpdateProductStatus = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProductStatus,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["my-products"]
            });

            queryClient.invalidateQueries({
                queryKey: ["all-products"]
            });

            queryClient.invalidateQueries({
                queryKey: ["product"]
            });
        }
    });
};