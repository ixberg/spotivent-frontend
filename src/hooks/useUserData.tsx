import { useState, useEffect } from "react";
import { Session } from "next-auth";

interface UserProfileResponse {
  statusCode: number;
  message: string;
  success: boolean;
  data: {
    id: number;
    avatar: string | null;
    email: string;
    role: string;
    username: string;
    referralCode: string;
  };
}

interface PointResponse {
  statusCode: number;
  message: string;
  success: boolean;
  data: number;
}

export const useUserData = (session: Session | null) => {
  const [userData, setUserData] = useState<
    (UserProfileResponse["data"] & { point: number }) | null
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
        const [profileResponse, pointResponse] = await Promise.all([
          fetch(`/api/proxy/api/v1/user/profile`, {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          }),
          fetch(`/api/proxy/api/v1/point`, {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          }),
        ]);

        if (!profileResponse.ok || !pointResponse.ok) {
          throw new Error("Failed to fetch user data");
        }

        const profileData: UserProfileResponse = await profileResponse.json();
        const pointData: PointResponse = await pointResponse.json();

        setUserData({ ...profileData.data, point: pointData.data });
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
