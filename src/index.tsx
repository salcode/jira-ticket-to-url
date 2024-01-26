import {
    Action,
    ActionPanel,
    Clipboard,
    closeMainWindow,
    Form,
    open,
    PopToRootType,
} from "@raycast/api";

import ticketToUrl from './utils/ticketToUrl';

type Values = {
  textfield: string;
};

export default function Command() {

  async function handleSubmit(values: Values) {
    const url = ticketToUrl(values['jiraTicket']);

    // Copy and paste URL.
    // await Clipboard.copy(url, { concealed: true });
    // await Clipboard.paste(url);

    // Return to root window.
    closeMainWindow({ popToRootType: PopToRootType.Immediate });
    open(url);
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.Description text="This form showcases all available form elements." />
      <Form.TextField id="jiraTicket" title="Jira Ticket" placeholder="e.g. SF-8088" defaultValue="WENG-70" />
    </Form>
  );
}
