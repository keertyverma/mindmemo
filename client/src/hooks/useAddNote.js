import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useAddNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newNote) =>
      apiClient.post("/tasks", newNote).then((res) => res.data),

    onMutate: (newNote) => {
      // executed before mutationFn
      // data backup in case of failure
      const previousNotes = queryClient.getQueryData(["notes"]) || [];

      // update data in cache
      queryClient.setQueryData(["notes"], (notes) => [newNote, ...notes]);

      // return context object
      return { previousNotes };
    },

    onSuccess: (savedNote, newNote) => {
      // update data in cache with server data
      queryClient.setQueryData(["notes"], (notes) =>
        notes?.map((note) => (note === newNote ? savedNote : note))
      );
    },

    onError: (error, newNote, context) => {
      if (!context) return;

      console.log("request failed...");
      // revert back to previous data
      queryClient.setQueryData(["notes"], context.previousNotes);
    },
  });
};

export default useAddNote;
