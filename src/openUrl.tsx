import {
    closeMainWindow,
    open,
    PopToRootType,
} from "@raycast/api";

import TicketInputForm from './components/TicketInputForm';
import ticketToUrl from './utils/ticketToUrl';

type Values = {
  jiraTicket: string;
};

export default function Command() {

  async function handleSubmit(values: Values) {
    const url = ticketToUrl(values.jiraTicket);

    // Return to root window.
    closeMainWindow({ popToRootType: PopToRootType.Immediate });
    open(url);
  }

  return (
    <TicketInputForm handleSubmit={handleSubmit} />
  );
}
