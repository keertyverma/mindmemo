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
      // _id is added to identify and update this later with server data
      queryClient.setQueryData(["notes"], (notes) => [
        { ...newNote, _id: 0 },
        ...notes,
      ]);

      // return context object
      return { previousNotes };
    },

    onSuccess: (savedNote, newNote) => {
      // update data in cache with server data
      queryClient.setQueryData(["notes"], (notes) =>
        notes?.map((note) => (!note._id ? savedNote : note))
      );
    },

    onError: (error, newNote, context) => {
      if (!context) return;

      // revert back to previous data
      queryClient.setQueryData(["notes"], context.previousNotes);
    },
  });
};

export default useAddNote;
