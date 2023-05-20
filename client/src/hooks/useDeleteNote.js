import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => apiClient.delete(`/tasks/${id}`),

    onMutate: (id) => {
      // take backup
      const previousNotes = queryClient.getQueryData(["notes"]);

      // delete note from cache data
      queryClient.setQueryData(["notes"], (notes) =>
        notes.filter((n) => n._id !== id)
      );

      return { previousNotes };
    },

    onError: (error, id, context) => {
      if (!context) return;

      queryClient.setQueryData(["notes"], context.previousNotes);
    },
  });
};

export default useDeleteNote;
