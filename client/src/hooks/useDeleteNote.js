import { useMutation, useQueryClient } from "@tanstack/react-query";
import databaseService from "../services/databaseService";

const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // Delete note using appwrite database service
    mutationFn: (id) => databaseService.deleteNoteById(id),

    onMutate: (id) => {
      // take backup
      const previousNotes = queryClient.getQueryData(["notes"]);

      // delete note from cache data
      queryClient.setQueryData(["notes"], (notes) =>
        notes.filter((n) => n.id !== id)
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
