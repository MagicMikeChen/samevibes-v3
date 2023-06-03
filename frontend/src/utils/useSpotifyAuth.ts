import React, { useState, useEffect } from "react";
import LoginApi from "../../pages/api/loginApi";
import { useRouter } from 'next/router';

export default function useSpotifyAuth(code='') {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresIn, setExpiresIn] = useState("");

  useEffect(() => {
    const spotifyLogin = async () => {
      try {
        if (code.length > 0) {
          const res = await LoginApi.spotifyLogin(code);
          setAccessToken(res.data.accessToken);
          setRefreshToken(res.data.refreshToken);
          setExpiresIn(res.data.expiresIn);
          router.push('/with-spotify'); 
        }
      } catch (err) {
        console.warn(err);
      }
    };
  
    spotifyLogin();
  }, [code]);

  return accessToken;
}
