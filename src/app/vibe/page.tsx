"use client";
import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";

const clientId = "a1510deb8f2b41a8937c3a47e981797d";

export default function MiscPage() {
  useEffect(() => {
    async function authenticate() {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (!code) {
        redirectToAuthCodeFlow(clientId);
      } else {
        const accessToken = await getAccessToken(clientId, code);
        const topTracks = await fetchUserTopTracks(accessToken);
        let topTrackAnalytics = new Map<string, Object>();
        for (let i = 0; i < topTracks["items"].length; i++) {
          let trackAnalystics = await fetchTrackInformation(accessToken, topTracks["items"][i].id);
          console.log(topTracks["items"][i].name, trackAnalystics);
          topTrackAnalytics.set(topTracks["items"][i].name, trackAnalystics);
        }
        console.log(topTrackAnalytics.get("Sativa"));
      }
    }

    authenticate().catch(console.error);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={`fixed top-4 left-4 ${isOpen ? 'ml-64 md:ml-80 lg:ml-96' : 'ml-0'} p-4 bg-gradient-to-r from-sidebarNavigation to-sidebarButton text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300`}
        onClick={toggleSidebar}
      >
        {isOpen ? 'Uncover' : 'Discover'}
      </button>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="bg-mainbackground">

      </div>
    </div>
  );
}

async function redirectToAuthCodeFlow(clientId: string) {
  const verifier = generateCodeVerifier(128);
  const challenge = await generateCodeChallenge(verifier);

  localStorage.setItem("verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", "http://localhost:3000/vibe");
  params.append("scope", "user-read-private user-read-email user-library-read user-top-read");
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length: number) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier: string) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

async function getAccessToken(clientId: string, code: string): Promise<string> {
  const verifier = localStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "http://localhost:3000/vibe");
  params.append("code_verifier", verifier!);

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params
  });

  const { access_token } = await result.json();
  return access_token;
}

async function fetchUserTopArtists(token: string): Promise<any> {
  const result = await fetch("https://api.spotify.com/v1/me/top/artists?limit=20", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
}

async function fetchUserTopTracks(token: string): Promise<any> {
  const result = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=20", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
}

async function fetchTrackInformation(token: string, id: string): Promise<any> {
  const result = await fetch("https://api.spotify.com/v1/audio-analysis/" + id, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
}