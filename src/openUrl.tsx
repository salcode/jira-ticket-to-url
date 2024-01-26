import { closeMainWindow, open, LaunchProps, PopToRootType } from "@raycast/api";

import ticketToUrl from "./utils/ticketToUrl";

type JiraTicketArgs = {
  jiraTicket: string;
};

export default async function Command(props: LaunchProps<{ arguments: JiraTicketArgs }>) {
  const {
    arguments: { jiraTicket },
  } = props;
  const url = ticketToUrl(jiraTicket);
  open(url);
  closeMainWindow({ popToRootType: PopToRootType.Immediate });
}
