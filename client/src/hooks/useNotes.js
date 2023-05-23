import { useQuery } from "@tanstack/react-query";

import databaseService from "../services/databaseService";

const fetchNotes = () =>
  databaseService.getNotes().then((res) =>
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
