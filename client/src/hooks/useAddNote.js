import { useMutation, useQueryClient } from "@tanstack/react-query";
import appWriteService from "../services/appwriteService";

const useAddNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // Add note using appwrite database service
    mutationFn: (newNote) =>
      appWriteService.createNote(newNote).then((res) => ({
        id: res.$id,
        title: res.title,
        content: res.content,
      })),

    onMutate: (newNote) => {
      // executed before mutationFn
      // data backup in case of failure
      const previousNotes = queryClient.getQueryData(["notes"]) || [];

      // update data in cache
      // id is added to identify and update this later with server data
      queryClient.setQueryData(["notes"], (notes) => [
        { ...newNote, id: 0 },
        ...notes,
      ]);

      // return context object
      return { previousNotes };
    },

    onSuccess: (savedNote, newNote) => {
      // update data in cache with server data
      queryClient.setQueryData(["notes"], (notes) =>
        notes?.map((note) => (!note.id ? savedNote : note))
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
