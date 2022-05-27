export async function fetchNFTGoData(url: string) {
  const res = await fetch(url, {
    headers: {
      "X-API-KEY": process.env.NFTGO_API_KEY,
      mode: "no-cors",
    },
  });

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const json = (await res.json()) as { message: string };
    throw new Error(json.message);
  }

  return res.json();
}
