const constant = {
  appwrite: {
    endpoint: "https://cloud.appwrite.io/v1",
    projectID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collectionID: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
  },
};

export default constant;
