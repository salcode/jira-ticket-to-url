import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  baseurl: string;
}

export default function ticketToUrl(ticket: string) {
  const { baseurl } = getPreferenceValues<Preferences>();
  return `${baseurl}browse/${ticket}`;
}
