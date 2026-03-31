import { NextResponse } from 'next/server';

export async function GET() {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const YOUTUBE_PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID;

  if (!YOUTUBE_API_KEY || !YOUTUBE_PLAYLIST_ID) {
    return NextResponse.json(
      { error: 'Missing YouTube API Key or Playlist ID' },
      { status: 500 }
    );
  }

  const endpoint = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${YOUTUBE_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`;

  try {
    const youtubeRes = await fetch(endpoint, { cache: 'no-store' });
    const data = await youtubeRes.json();

    if (!youtubeRes.ok) {
      console.error('YouTube API Error:', data);
      return NextResponse.json(
        { error: 'Failed to fetch from YouTube API' },
        { status: youtubeRes.status }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching featured videos:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
