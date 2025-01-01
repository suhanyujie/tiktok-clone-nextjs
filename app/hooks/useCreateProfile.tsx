import { database, ID } from "@/libs/AppWriteClient";

const useCreateProfile = async (
  userId: string,
  name: string,
  image: string,
  bio: string
) => {
  try {
    const response = await database.createDocument(
      String(process.env.NEXT_PUBLIC_DATABASE_ID),
      String(process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE),
      ID.unique(),
      {
        user_id: userId,
        name: name,
        image: image,
        bio: bio,
      }
    );
    const documents = response.documents;
    return {
      id: documents[0]?.$id,
      user_id: documents[0]?.user_id,
      name: documents[0]?.name,
      image: documents[0]?.image,
      bio: documents[0]?.bio,
    };
  } catch (error) {
    // biome-ignore lint/complexity/noUselessCatch: <explanation>
    throw error;
  }
};

export default useCreateProfile;
