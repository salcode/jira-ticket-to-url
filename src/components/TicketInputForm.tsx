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
      <Form.Description text="This form showcases all available form elements." />
      <Form.TextField id="jiraTicket" title="Jira Ticket" placeholder="e.g. SF-8088" defaultValue="WENG-70" />
    </Form>
  );
}
