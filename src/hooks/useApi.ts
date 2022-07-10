import useSWR, { SWRConfiguration } from "swr";
import { apiParamEndpoint } from "@qazalin/utils";

/**
 * Re-usable SWR api implementation.
 *
 * @param The URL of API endpoint
 * @param Query params
 * @param fetcher OPTIONAL custom fetcher
 * @param config OPTIONAL configuration
 * @returns ResponseType
 */
export function useApi<ResponseType, ParamsType extends Record<string, string>>(
  url: string,
  params: ParamsType,
  fetcher?: (args: any) => any,
  config?: SWRConfiguration
): { loading: boolean; error: unknown; data: ResponseType } {
  let endpoint: string;
  if (url) endpoint = apiParamEndpoint(url, params);
  const { data, error } = useSWR<ResponseType, unknown>(
    () => endpoint,
    fetcher ? fetcher : basicFetcher,
    config ? config : null
  );

  return {
    loading: !error && !data,
    error,
    data,
  };
}

export async function basicFetcher(url: string) {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const json = (await res.json()) as { message: string };
    throw new Error(json.message);
  }

  return res.json();
}
