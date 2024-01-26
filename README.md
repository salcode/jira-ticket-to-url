# Jira Ticket to URL

Convert a Jira ticket (e.g. SF-8088) into a URL (e.g. https://mycompany.atlassian.net/browse/SF-8088).

## Commands

### Jira Visit Ticket URL

Convert Jira Ticket to URL (e.g. `SF-8088`) to (e.g. `https://mycompany.atlassian.net/browse/SF-8088`) and open the URL with your default web browser

### Jira Markdown URL Paste

Convert Jira Ticket to URL (e.g. `SF-8088`) to (e.g. `[SF-8088](https://mycompany.atlassian.net/browse/SF-8088)`) and paste the URL in the current application

### Jira URL Paste

Convert Jira Ticket to URL (e.g. `SF-8088`) to (e.g. `https://mycompany.atlassian.net/browse/SF-8088`) and paste the URL in the current application

## How to Build

From the command line, run

```
npm install && npm run build
```

## How to Install the Extension

1. Use the Raycast command `Import Extension`
2. Navigate to this project folder
3. Click the `Open` button

## How to Configure the Extension

The first time you use one of the commands for this extension, you'll be prompted to enter your `Base URL for Jira links`.

This value will look something like

```
https://mycompany.atlassian.net/
```

Notes:

1. Include the trailing slash (i.e. `https://mycompany.atlassian.net/`, not `https://mycompany.atlassian.net`)
2. Do NOT include any extra part of the URL, e.g. do NOT include `browse/` as part of your URL.
