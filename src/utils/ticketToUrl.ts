import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  baseurl: string;
}

export default function ticketToUrl(ticket) {
  const { baseurl } = getPreferenceValues<Preferences>();
  return `${baseurl}browse/${ticket}`;
}
