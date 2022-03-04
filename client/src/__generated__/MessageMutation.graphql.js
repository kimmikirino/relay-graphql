/**
 * @generated SignedSource<<a24857ac4992b79e4fb46de3876b8286>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type MessageInput = {|
  content?: ?string,
  author?: ?string,
|};
export type MessageMutation$variables = {|
  id: string,
  input: MessageInput,
|};
export type MessageMutation$data = {|
  +updateMessage: ?{|
    +content: ?string,
  |},
|};
export type MessageMutation = {|
  variables: MessageMutation$variables,
  response: MessageMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  },
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Message",
        "kind": "LinkedField",
        "name": "updateMessage",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Message",
        "kind": "LinkedField",
        "name": "updateMessage",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d15cb4b8598eb32169e3c2a96f065f95",
    "id": null,
    "metadata": {},
    "name": "MessageMutation",
    "operationKind": "mutation",
    "text": "mutation MessageMutation(\n  $id: ID!\n  $input: MessageInput!\n) {\n  updateMessage(id: $id, input: $input) {\n    content\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "f8afbd46129219bdb16a4c7e29890f9d";

module.exports = ((node/*: any*/)/*: Mutation<
  MessageMutation$variables,
  MessageMutation$data,
>*/);
