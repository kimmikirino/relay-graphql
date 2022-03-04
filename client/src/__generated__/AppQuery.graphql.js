/**
 * @generated SignedSource<<ebb84cd5331a646002434cfec4ee750b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type AppQuery$variables = {||};
export type AppQuery$data = {|
  +hello: ?string,
|};
export type AppQuery = {|
  variables: AppQuery$variables,
  response: AppQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "hello",
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
    "cacheID": "26de248df3b95f11269a4b3b0440fc23",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  hello\n}\n"
  }
};
})();

(node/*: any*/).hash = "30f8771ea58e1f46084c990b282033e2";

module.exports = ((node/*: any*/)/*: Query<
  AppQuery$variables,
  AppQuery$data,
>*/);
