import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/axios";

const updateProduct = async ({ productId, productData }) => {

    const response = await api.patch(`/products/${productId}`,
        productData
    );

    return response.data;
};

export const useUpdateProduct = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateProduct,

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