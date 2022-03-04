/**
 * @generated SignedSource<<e4467ded16dedc2b9673289cd5ca269e>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type AdoptDogMutation$variables = {||};
export type AdoptDogMutation$data = {|
  +adoptDog: ?{|
    +owner: ?{|
      +id: string,
      +name: string,
      +dog: ?{|
        +name: string,
        +toy: {|
          +type: string,
        |},
      |},
    |},
  |},
|};
export type AdoptDogMutation = {|
  variables: AdoptDogMutation$variables,
  response: AdoptDogMutation$data,
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AdoptDogMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Owner",
        "kind": "LinkedField",
        "name": "adoptDog",
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
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Toy",
                    "kind": "LinkedField",
                    "name": "toy",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/)
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
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AdoptDogMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Owner",
        "kind": "LinkedField",
        "name": "adoptDog",
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
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Toy",
                    "kind": "LinkedField",
                    "name": "toy",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v0/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bbb0e80dd9a2ce3da057651a3c77f3c6",
    "id": null,
    "metadata": {},
    "name": "AdoptDogMutation",
    "operationKind": "mutation",
    "text": "mutation AdoptDogMutation {\n  adoptDog {\n    owner {\n      id\n      name\n      dog {\n        name\n        toy {\n          type\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "e9967eb7fdf3d0fbed7af9e7b3cdef83";

module.exports = ((node/*: any*/)/*: Mutation<
  AdoptDogMutation$variables,
  AdoptDogMutation$data,
>*/);
