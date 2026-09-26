import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/axios";

const removeBid = async(bidId) => {
    const response = await api.delete(`/bids/${bidId}`);
    return response.data; 
}

export const useRemoveBid = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: removeBid,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["my-bids"]
            });
            queryClient.invalidateQueries({
                queryKey: ["product-bids"]
            });
        }
    })
}