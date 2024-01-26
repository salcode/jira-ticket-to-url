import {
    Action,
    ActionPanel,
    Form,
} from "@raycast/api";

export default function TicketInputForm({handleSubmit}) {

  return (

    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.Description text="Please enter the Jira ticket ID (e.g. SF-8088)" />
      <Form.TextField id="jiraTicket" title="Jira Ticket" placeholder="SF-8088" defaultValue="WENG-70" />
    </Form>
  );
}
