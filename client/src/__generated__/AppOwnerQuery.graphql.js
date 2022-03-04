/**
 * @generated SignedSource<<1c0db332fa1c451cf30830f3eef738cb>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type AppOwnerQuery$variables = {||};
export type AppOwnerQuery$data = {|
  +getDogOwner: ?{|
    +owner: ?{|
      +id: string,
      +name: string,
      +dog: ?{|
        +id: string,
        +name: string,
        +toy: {|
          +id: string,
          +type: string,
        |},
      |},
    |},
  |},
|};
export type AppOwnerQuery = {|
  variables: AppOwnerQuery$variables,
  response: AppOwnerQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "2352126c40305c0c8e9e"
      }
    ],
    "concreteType": "Owner",
    "kind": "LinkedField",
    "name": "getDogOwner",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "owner",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Dog",
            "kind": "LinkedField",
            "name": "dog",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Toy",
                "kind": "LinkedField",
                "name": "toy",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "getDogOwner(id:\"2352126c40305c0c8e9e\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppOwnerQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppOwnerQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "bc6ca6a9af3b2e40c0480e4eea75130c",
    "id": null,
    "metadata": {},
    "name": "AppOwnerQuery",
    "operationKind": "query",
    "text": "query AppOwnerQuery {\n  getDogOwner(id: \"2352126c40305c0c8e9e\") {\n    owner {\n      id\n      name\n      dog {\n        id\n        name\n        toy {\n          id\n          type\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "fc2b706fe00d89bc848cae66fc0f164f";

module.exports = ((node/*: any*/)/*: Query<
  AppOwnerQuery$variables,
  AppOwnerQuery$data,
>*/);
