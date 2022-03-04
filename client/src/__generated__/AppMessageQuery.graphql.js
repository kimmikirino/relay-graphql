/**
 * @generated SignedSource<<4f9905856845524b7a788cbfbd033860>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type AppMessageQuery$variables = {||};
export type AppMessageQuery$data = {|
  +getMessage: ?{|
    +id: string,
    +content: ?string,
  |},
|};
export type AppMessageQuery = {|
  variables: AppMessageQuery$variables,
  response: AppMessageQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "e184a26f83a3e70eccd2"
      }
    ],
    "concreteType": "Message",
    "kind": "LinkedField",
    "name": "getMessage",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "storageKey": "getMessage(id:\"e184a26f83a3e70eccd2\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppMessageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppMessageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "202516d5faf0e7b23c91f7ac9450dca8",
    "id": null,
    "metadata": {},
    "name": "AppMessageQuery",
    "operationKind": "query",
    "text": "query AppMessageQuery {\n  getMessage(id: \"e184a26f83a3e70eccd2\") {\n    id\n    content\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "8218009e0189cd38b9c45975782dcf9c";

module.exports = ((node/*: any*/)/*: Query<
  AppMessageQuery$variables,
  AppMessageQuery$data,
>*/);
