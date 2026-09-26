import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/axios";

const updateStatus = async ({ bidId, status }) => {

    const response = await api.patch(`/bids/${bidId}`, {
        status
    });

    return response.data;
};

export const useUpdateStatus = () => {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateStatus,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["my-bids"]
            });

            queryClient.invalidateQueries({
                queryKey: ["product-bids"]
            });
            
            queryClient.invalidateQueries({
                 queryKey: ["product"]
            })
        }
    });
};