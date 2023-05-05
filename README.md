<div align="center" style="margin-bottom: 20px;" >

<video loop autoPlay muted playsInline alt="Qwik Snippets" src="./public/video.mov" width="400" style="margin-bottom: 10px;" ></video>

# Qwik Snippets

Learn how to setup some cool snippets for Qwik in your VSCode Config

</div>

## 🔧 Config

1. Check `snippets.json` or access [this page](https://pastebin.com/r2pX5GCF).
2. Open the User Settings in VSCode (Preferences > Configure User Settings).
3. Choose to create a global configuration or do it in the .tsx files (`typescriptreact.json`)

At the end you should have something like this:

```json
{
  // Place your snippets for typescriptreact here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  // Example:
  // "Print to console": {
  // 	"prefix": "log",
  // 	"body": [
  // 		"console.log('$1');",
  // 		"$2"
  // 	],
  // 	"description": "Log output to console"
  // }
  "Qwik Component - No Props": {
    "prefix": ["component", "comp", "$", "qwik"],
    "body": [
      "import { component$ } from '@builder.io/qwik'",
      "",
      "export const ${1:${TM_FILENAME_BASE/(.*)/${1:/capitalize}/}} = component$(() => {",
      "  return <div>${1:${TM_FILENAME_BASE/(.*)/${1:/capitalize}/}}</div>",
      "})",
      ""
    ],
    "description": "Component Qwik - No Props"
  },
  "Qwik Component - With Props": {
    "prefix": ["component", "comp", "$", "qwik"],
    "body": [
      "import { component$ } from '@builder.io/qwik'",
      "",
      "interface ${TM_FILENAME_BASE}Props {",
      "  $1",
      "}",
      "export const ${2:${TM_FILENAME_BASE/(.*)/${1:/capitalize}/}} = component$<${TM_FILENAME_BASE}Props>(() => {",
      "  return <div>${2:${TM_FILENAME_BASE/(.*)/${1:/capitalize}/}}</div>",
      "})",
      ""
    ],
    "description": "Component Qwik - With Props"
  },
  "useSignal Snippet": {
    "prefix": ["signal", "qwik"],
    "body": ["const $1 = useSignal<$2>($3)"],
    "description": "useSignal snippet"
  },
  "useStore Snippet": {
    "prefix": ["store", "qwik"],
    "body": ["const $1 = useStore<$2>({$3: $4})"],
    "description": "useStore snippet"
  },
  "useTasks Snippet - Server": {
    "prefix": ["task", "qwik"],
    "body": [
      "useTask$(({ track }) => {",
      " track(() => 'ADD_WHAT_YOU_NEED_TO_WATCH');",
      " console.log('This is the action that will be triggered in the server on mounting and when the watched value changes')",
      "})",
      ""
    ],
    "description": "useTasks snippet"
  },
  "useVisibleTasks Snippet - Client": {
    "prefix": ["visible", "task", "qwik"],
    "body": [
      "useVisibleTask$(({ track }) => {",
      " track(() => 'ADD_WHAT_YOU_NEED_TO_WATCH');",
      " console.log('This is the action that will be triggered in the client on mounting and when the watched value changes')",
      "})",
      ""
    ],
    "description": "useVisibleTasks snippet"
  }
}
```

## 🔗 Deploy

TBD
