import {
    Action,
    ActionPanel,
    Clipboard,
    closeMainWindow,
    Form,
    open,
    PopToRootType,
    showToast,
} from "@raycast/api";

type Values = {
  textfield: string;
};

export default function Command() {
  async function handleSubmit(values: Values) {
    console.log(values);
    const url = `https://webdevstudios.atlassian.net/browse/${values['jira-ticket']}`;

    // Copy and paste URL.
    // await Clipboard.copy(url, { concealed: true });
    // await Clipboard.paste(url);

    // Return to root window.
    closeMainWindow({ popToRootType: PopToRootType.Immediate });
    open(url);
    showToast({ title: "Submitted form", message: "See logs for submitted values" });
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
      <Form.TextField id="jira-ticket" title="Jira Ticket" placeholder="e.g. SF-8088" />
    </Form>
  );
}
