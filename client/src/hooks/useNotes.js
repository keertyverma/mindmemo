import { useQuery } from "@tanstack/react-query";

import appWriteService from "../services/appwriteService";

const fetchNotes = () =>
  appWriteService.getNotes().then((res) =>
    res.documents?.map((n) => ({
      title: n.title,
      content: n.content,
      id: n.$id,
    }))
  );

const useNotes = () =>
  useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
    refetchOnWindowFocus: false,
  });

export default useNotes;
