import { useMutation, useQueryClient } from "@tanstack/react-query";
import { use } from 'react';
import api from "../api/axios";
import { AuthContext } from './../contexts/AuthContext/AuthContext';


const createBid = async(bidData) => {
    const response = await api.post("/bids", bidData);
    return response.data;
}


export const useCreateBid = () => {
    const queryClient = useQueryClient();
    const {user} = use(AuthContext);

    return useMutation({
        mutationFn: createBid,
        onSuccess: (_, bidData) => {
        queryClient.invalidateQueries({
            queryKey: ["product-bids", bidData.product_id]
        });

        queryClient.invalidateQueries({
            queryKey: ["my-bids", user?.email]
        });
    }
    })
}