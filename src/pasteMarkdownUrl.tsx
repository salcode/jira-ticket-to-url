import { Clipboard, closeMainWindow, LaunchProps, PopToRootType } from "@raycast/api";

import ticketToUrl from "./utils/ticketToUrl";

type JiraTicketArgs = {
  jiraTicket: string;
};

export default async function Command(props: LaunchProps<{ arguments: JiraTicketArgs }>) {
  const {
    arguments: { jiraTicket },
  } = props;
  const url = ticketToUrl(jiraTicket);

  await Clipboard.paste(`[${jiraTicket}](${url})`);

  closeMainWindow({ popToRootType: PopToRootType.Immediate });
}
