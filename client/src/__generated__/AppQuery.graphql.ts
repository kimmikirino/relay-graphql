/**
 * @generated SignedSource<<16af935806eeafa4845e9a51961f09bd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppQuery$variables = {};
export type AppQuery$data = {
  readonly viewer: {
    readonly hello: string | null;
  } | null;
};
export type AppQuery = {
  variables: AppQuery$variables;
  response: AppQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Hello",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hello",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "691937560da5e20392c4f4c8f1583d33",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  viewer {\n    hello\n  }\n}\n"
  }
};
})();

(node as any).hash = "18aad97ec69c0e5cdd6acf7f889f2dec";

export default node;
