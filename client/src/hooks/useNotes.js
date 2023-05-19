import { useQuery } from "@tanstack/react-query";

import apiClient from "../services/api-client";

const fetchNotes = () => apiClient.get("/tasks").then((res) => res.data);

const useNotes = () =>
  useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });

export default useNotes;
