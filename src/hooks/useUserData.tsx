import { useState, useEffect } from "react";
import { Session } from "next-auth";
import jwtDecode from "jsonwebtoken";

interface UserProfileData {
  email: string;
  username: string;
  referralCode: string;
}

interface UserPointData {
  data: number;
}

export const useUserData = (session: Session | null) => {
  const [userData, setUserData] = useState<
    (UserProfileData & UserPointData) | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!session || !session.user.accessToken) {
        setError(new Error("No session or access token available"));
        setLoading(false);
        return;
      }

      try {
        // Decode the access token to get the user ID
        const decodedToken: any = jwtDecode.decode(session.user.accessToken);
        const userId = decodedToken.id;

        if (!userId) {
          throw new Error("User ID not found in token");
        }

        const [profileResponse, pointResponse] = await Promise.all([
          fetch(`/api/proxy/api/v1/user/profile/${userId}`, {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          }),
          fetch(`/api/proxy/api/v1/point/${userId}`, {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          }),
        ]);

        if (!profileResponse.ok || !pointResponse.ok) {
          throw new Error("Failed to fetch user data");
        }

        const profileData: { data: UserProfileData } =
          await profileResponse.json();
        const pointData: { data: UserPointData } = await pointResponse.json();

        setUserData({ ...profileData.data, ...pointData.data });
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [session]);

  return { userData, loading, error };
};
