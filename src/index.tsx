import {
    Clipboard,
    closeMainWindow,
    PopToRootType,
} from "@raycast/api";

import TicketInputForm from './components/TicketInputForm';
import ticketToUrl from './utils/ticketToUrl';

type Values = {
  jiraTicket: string;
};

export default function Command() {

  async function handleSubmit({jiraTicket}: Values) {
    const url = ticketToUrl(jiraTicket);

    // Copy and paste URL.
    await Clipboard.copy(url, { concealed: true });
    await Clipboard.paste(url);

    // Return to root window.
    closeMainWindow({ popToRootType: PopToRootType.Immediate });
  }

  return (
    <TicketInputForm handleSubmit={handleSubmit} />
  );
}
