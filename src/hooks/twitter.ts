import { UserTweets } from "@qazalin/types";
import useSWR from "swr";
import { useApi } from "./useApi";

function twitterFetcher(url: string) {
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`,
    },
  }).then((res) => res.json());
}
export async function useTweets() {
  const { loading, error, data } = useApi<UserTweets, Record<string, string>>(
    "https://api.twitter.com/2/users/${process.env.NEXT_PUBLIC_TWITTER_ID}/tweets",
    {
      "tweets.fields": "attachments,created_at",
      "media.fields": "preview_image_url,url",
      expansions: "attachments.media_keys",
    },
    twitterFetcher
  );
}
