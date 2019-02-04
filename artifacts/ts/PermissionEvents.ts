export const PermissionEvents = 
{
  "contractName": "PermissionEvents",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "Authorized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "AuthorizationRevoked",
      "type": "event"
    }
  ],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058205b94f2112315f69a864ff3f16dab16019346d1b66d973a1d499a29a53bbfa9760029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058205b94f2112315f69a864ff3f16dab16019346d1b66d973a1d499a29a53bbfa9760029",
  "sourceMap": "979:175:17:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "979:175:17:-;;;;;",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\n/**\n *  Note(kayvon): these events are emitted by our PermissionsLib, but all contracts that\n *  depend on the library must also define the events in order for web3 clients to pick them up.\n *  This topic is discussed in greater detail here (under the section \"Events and Libraries\"):\n *  https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736\n */\ncontract PermissionEvents {\n    event Authorized(address indexed agent, string callingContext);\n    event AuthorizationRevoked(address indexed agent, string callingContext);\n}\n\n\nlibrary PermissionsLib {\n\n    // TODO(kayvon): remove these events and inherit from PermissionEvents when libraries are\n    // capable of inheritance.\n    // See relevant github issue here: https://github.com/ethereum/solidity/issues/891\n    event Authorized(address indexed agent, string callingContext);\n    event AuthorizationRevoked(address indexed agent, string callingContext);\n\n    struct Permissions {\n        mapping (address => bool) authorized;\n        mapping (address => uint) agentToIndex; // ensures O(1) look-up\n        address[] authorizedAgents;\n    }\n\n    function authorize(\n        Permissions storage self,\n        address agent,\n        string callingContext\n    )\n        internal\n    {\n        require(isNotAuthorized(self, agent));\n\n        self.authorized[agent] = true;\n        self.authorizedAgents.push(agent);\n        self.agentToIndex[agent] = self.authorizedAgents.length - 1;\n        Authorized(agent, callingContext);\n    }\n\n    function revokeAuthorization(\n        Permissions storage self,\n        address agent,\n        string callingContext\n    )\n        internal\n    {\n        /* We only want to do work in the case where the agent whose\n        authorization is being revoked had authorization permissions in the\n        first place. */\n        require(isAuthorized(self, agent));\n\n        uint indexOfAgentToRevoke = self.agentToIndex[agent];\n        uint indexOfAgentToMove = self.authorizedAgents.length - 1;\n        address agentToMove = self.authorizedAgents[indexOfAgentToMove];\n\n        // Revoke the agent's authorization.\n        delete self.authorized[agent];\n\n        // Remove the agent from our collection of authorized agents.\n        self.authorizedAgents[indexOfAgentToRevoke] = agentToMove;\n\n        // Update our indices to reflect the above changes.\n        self.agentToIndex[agentToMove] = indexOfAgentToRevoke;\n        delete self.agentToIndex[agent];\n\n        // Clean up memory that's no longer being used.\n        delete self.authorizedAgents[indexOfAgentToMove];\n        self.authorizedAgents.length -= 1;\n\n        AuthorizationRevoked(agent, callingContext);\n    }\n\n    function isAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return self.authorized[agent];\n    }\n\n    function isNotAuthorized(Permissions storage self, address agent)\n        internal\n        view\n        returns (bool)\n    {\n        return !isAuthorized(self, agent);\n    }\n\n    function getAuthorizedAgents(Permissions storage self)\n        internal\n        view\n        returns (address[])\n    {\n        return self.authorizedAgents;\n    }\n}\n",
  "sourcePath": "/Users/trqdinh/Development/loot/charta/contracts/libraries/PermissionsLib.sol",
  "ast": {
    "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/libraries/PermissionsLib.sol",
    "exportedSymbols": {
      "PermissionEvents": [
        6075
      ],
      "PermissionsLib": [
        6279
      ]
    },
    "id": 6280,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6062,
        "literals": [
          "solidity",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:17"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": " Note(kayvon): these events are emitted by our PermissionsLib, but all contracts that\n depend on the library must also define the events in order for web3 clients to pick them up.\n This topic is discussed in greater detail here (under the section \"Events and Libraries\"):\n https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736",
        "fullyImplemented": true,
        "id": 6075,
        "linearizedBaseContracts": [
          6075
        ],
        "name": "PermissionEvents",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "id": 6068,
            "name": "Authorized",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6067,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6064,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6068,
                  "src": "1028:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6063,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1028:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6066,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 6068,
                  "src": "1051:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 6065,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1051:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1027:46:17"
            },
            "src": "1011:63:17"
          },
          {
            "anonymous": false,
            "id": 6074,
            "name": "AuthorizationRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6073,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6070,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6074,
                  "src": "1106:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6069,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1106:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6072,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 6074,
                  "src": "1129:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 6071,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1129:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1105:46:17"
            },
            "src": "1079:73:17"
          }
        ],
        "scope": 6280,
        "src": "979:175:17"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": null,
        "fullyImplemented": true,
        "id": 6279,
        "linearizedBaseContracts": [
          6279
        ],
        "name": "PermissionsLib",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "id": 6081,
            "name": "Authorized",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6080,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6077,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6081,
                  "src": "1416:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6076,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1416:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6079,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 6081,
                  "src": "1439:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 6078,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1439:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1415:46:17"
            },
            "src": "1399:63:17"
          },
          {
            "anonymous": false,
            "id": 6087,
            "name": "AuthorizationRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6086,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6083,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6087,
                  "src": "1494:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6082,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1494:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6085,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 6087,
                  "src": "1517:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 6084,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1517:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1493:46:17"
            },
            "src": "1467:73:17"
          },
          {
            "canonicalName": "PermissionsLib.Permissions",
            "id": 6099,
            "members": [
              {
                "constant": false,
                "id": 6091,
                "name": "authorized",
                "nodeType": "VariableDeclaration",
                "scope": 6099,
                "src": "1575:36:17",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "typeName": {
                  "id": 6090,
                  "keyType": {
                    "id": 6088,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1584:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1575:25:17",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "valueType": {
                    "id": 6089,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1595:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 6095,
                "name": "agentToIndex",
                "nodeType": "VariableDeclaration",
                "scope": 6099,
                "src": "1621:38:17",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "typeName": {
                  "id": 6094,
                  "keyType": {
                    "id": 6092,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1630:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1621:25:17",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 6093,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1641:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 6098,
                "name": "authorizedAgents",
                "nodeType": "VariableDeclaration",
                "scope": 6099,
                "src": "1693:26:17",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[] storage pointer"
                },
                "typeName": {
                  "baseType": {
                    "id": 6096,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1693:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 6097,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "1693:9:17",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                    "typeString": "address[] storage pointer"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Permissions",
            "nodeType": "StructDefinition",
            "scope": 6279,
            "src": "1546:180:17",
            "visibility": "public"
          },
          {
            "body": {
              "id": 6148,
              "nodeType": "Block",
              "src": "1866:249:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 6110,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6101,
                            "src": "1900:4:17",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6111,
                            "name": "agent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6103,
                            "src": "1906:5:17",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 6109,
                          "name": "isNotAuthorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6266,
                          "src": "1884:15:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 6112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1884:28:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 6108,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15844,
                      "src": "1876:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 6113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1876:37:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6114,
                  "nodeType": "ExpressionStatement",
                  "src": "1876:37:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6115,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6101,
                          "src": "1924:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6118,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6091,
                        "src": "1924:15:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 6119,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6117,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6103,
                        "src": "1940:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1924:22:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 6120,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1949:4:17",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1924:29:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6122,
                  "nodeType": "ExpressionStatement",
                  "src": "1924:29:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6128,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6103,
                        "src": "1990:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6123,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6101,
                          "src": "1963:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6126,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6098,
                        "src": "1963:21:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 6127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1963:26:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) returns (uint256)"
                      }
                    },
                    "id": 6129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1963:33:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6130,
                  "nodeType": "ExpressionStatement",
                  "src": "1963:33:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6131,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6101,
                          "src": "2006:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6134,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "agentToIndex",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6095,
                        "src": "2006:17:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 6135,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6133,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6103,
                        "src": "2024:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2006:24:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 6140,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 6136,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6101,
                            "src": "2033:4:17",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                          },
                          "id": 6137,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "authorizedAgents",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6098,
                          "src": "2033:21:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[] storage ref"
                          }
                        },
                        "id": 6138,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2033:28:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 6139,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2064:1:17",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2033:32:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2006:59:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6142,
                  "nodeType": "ExpressionStatement",
                  "src": "2006:59:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6144,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6103,
                        "src": "2086:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 6145,
                        "name": "callingContext",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6105,
                        "src": "2093:14:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 6143,
                      "name": "Authorized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6081,
                      "src": "2075:10:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 6146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2075:33:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6147,
                  "nodeType": "ExpressionStatement",
                  "src": "2075:33:17"
                }
              ]
            },
            "id": 6149,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "authorize",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6101,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 6149,
                  "src": "1760:24:17",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions storage pointer"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 6100,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 6099,
                    "src": "1760:11:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6103,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6149,
                  "src": "1794:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1794:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6105,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 6149,
                  "src": "1817:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 6104,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1817:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1750:94:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 6107,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1866:0:17"
            },
            "scope": 6279,
            "src": "1732:383:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6234,
              "nodeType": "Block",
              "src": "2265:1024:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 6160,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6151,
                            "src": "2465:4:17",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6161,
                            "name": "agent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6153,
                            "src": "2471:5:17",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 6159,
                          "name": "isAuthorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6250,
                          "src": "2452:12:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 6162,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2452:25:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 6158,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15844,
                      "src": "2444:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 6163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2444:34:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6164,
                  "nodeType": "ExpressionStatement",
                  "src": "2444:34:17"
                },
                {
                  "assignments": [
                    6166
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6166,
                      "name": "indexOfAgentToRevoke",
                      "nodeType": "VariableDeclaration",
                      "scope": 6235,
                      "src": "2489:25:17",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6165,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2489:4:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 6171,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 6167,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6151,
                        "src": "2517:4:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                          "typeString": "struct PermissionsLib.Permissions storage pointer"
                        }
                      },
                      "id": 6168,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "agentToIndex",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6095,
                      "src": "2517:17:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 6170,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6169,
                      "name": "agent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6153,
                      "src": "2535:5:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2517:24:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2489:52:17"
                },
                {
                  "assignments": [
                    6173
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6173,
                      "name": "indexOfAgentToMove",
                      "nodeType": "VariableDeclaration",
                      "scope": 6235,
                      "src": "2551:23:17",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6172,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2551:4:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 6179,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6174,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "2577:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6175,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6098,
                        "src": "2577:21:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 6176,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2577:28:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 6177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2608:1:17",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2577:32:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2551:58:17"
                },
                {
                  "assignments": [
                    6181
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6181,
                      "name": "agentToMove",
                      "nodeType": "VariableDeclaration",
                      "scope": 6235,
                      "src": "2619:19:17",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 6180,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2619:7:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 6186,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 6182,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6151,
                        "src": "2641:4:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                          "typeString": "struct PermissionsLib.Permissions storage pointer"
                        }
                      },
                      "id": 6183,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6098,
                      "src": "2641:21:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "id": 6185,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6184,
                      "name": "indexOfAgentToMove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6173,
                      "src": "2663:18:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2641:41:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2619:63:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "2738:29:17",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6187,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "2745:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6188,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6091,
                        "src": "2745:15:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 6190,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6189,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6153,
                        "src": "2761:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2745:22:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6192,
                  "nodeType": "ExpressionStatement",
                  "src": "2738:29:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6193,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "2848:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6196,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6098,
                        "src": "2848:21:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 6197,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6195,
                        "name": "indexOfAgentToRevoke",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6166,
                        "src": "2870:20:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2848:43:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6198,
                      "name": "agentToMove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6181,
                      "src": "2894:11:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2848:57:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 6200,
                  "nodeType": "ExpressionStatement",
                  "src": "2848:57:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6201,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "2976:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6204,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "agentToIndex",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6095,
                        "src": "2976:17:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 6205,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6203,
                        "name": "agentToMove",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6181,
                        "src": "2994:11:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2976:30:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6206,
                      "name": "indexOfAgentToRevoke",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6166,
                      "src": "3009:20:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2976:53:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6208,
                  "nodeType": "ExpressionStatement",
                  "src": "2976:53:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3039:31:17",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6209,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "3046:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6210,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "agentToIndex",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6095,
                        "src": "3046:17:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 6212,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6211,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6153,
                        "src": "3064:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3046:24:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6214,
                  "nodeType": "ExpressionStatement",
                  "src": "3039:31:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3137:48:17",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6215,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "3144:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6216,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6098,
                        "src": "3144:21:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 6218,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6217,
                        "name": "indexOfAgentToMove",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6173,
                        "src": "3166:18:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3144:41:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6220,
                  "nodeType": "ExpressionStatement",
                  "src": "3137:48:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6227,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6221,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "3195:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6224,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6098,
                        "src": "3195:21:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 6225,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3195:28:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 6226,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3227:1:17",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "3195:33:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6228,
                  "nodeType": "ExpressionStatement",
                  "src": "3195:33:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6230,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6153,
                        "src": "3260:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 6231,
                        "name": "callingContext",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6155,
                        "src": "3267:14:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 6229,
                      "name": "AuthorizationRevoked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6087,
                      "src": "3239:20:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 6232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3239:43:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6233,
                  "nodeType": "ExpressionStatement",
                  "src": "3239:43:17"
                }
              ]
            },
            "id": 6235,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revokeAuthorization",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6151,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 6235,
                  "src": "2159:24:17",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions storage pointer"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 6150,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 6099,
                    "src": "2159:11:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6153,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6235,
                  "src": "2193:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6152,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2193:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6155,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 6235,
                  "src": "2216:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 6154,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2216:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2149:94:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 6157,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2265:0:17"
            },
            "scope": 6279,
            "src": "2121:1168:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6249,
              "nodeType": "Block",
              "src": "3415:46:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 6244,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6237,
                        "src": "3432:4:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                          "typeString": "struct PermissionsLib.Permissions storage pointer"
                        }
                      },
                      "id": 6245,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6091,
                      "src": "3432:15:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 6247,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6246,
                      "name": "agent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6239,
                      "src": "3448:5:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3432:22:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 6243,
                  "id": 6248,
                  "nodeType": "Return",
                  "src": "3425:29:17"
                }
              ]
            },
            "id": 6250,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isAuthorized",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6237,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 6250,
                  "src": "3317:24:17",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions storage pointer"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 6236,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 6099,
                    "src": "3317:11:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6239,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6250,
                  "src": "3343:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6238,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3343:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3316:41:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 6243,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6242,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6250,
                  "src": "3405:4:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6241,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3405:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3404:6:17"
            },
            "scope": 6279,
            "src": "3295:166:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6265,
              "nodeType": "Block",
              "src": "3590:50:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6263,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3607:26:17",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 6260,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6252,
                          "src": "3621:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 6261,
                          "name": "agent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6254,
                          "src": "3627:5:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 6259,
                        "name": "isAuthorized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6250,
                        "src": "3608:12:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                        }
                      },
                      "id": 6262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3608:25:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 6258,
                  "id": 6264,
                  "nodeType": "Return",
                  "src": "3600:33:17"
                }
              ]
            },
            "id": 6266,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isNotAuthorized",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6252,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 6266,
                  "src": "3492:24:17",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions storage pointer"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 6251,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 6099,
                    "src": "3492:11:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6254,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6266,
                  "src": "3518:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6253,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3518:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3491:41:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 6258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6257,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6266,
                  "src": "3580:4:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6256,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3580:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3579:6:17"
            },
            "scope": 6279,
            "src": "3467:173:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6277,
              "nodeType": "Block",
              "src": "3763:45:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 6274,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6268,
                      "src": "3780:4:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                        "typeString": "struct PermissionsLib.Permissions storage pointer"
                      }
                    },
                    "id": 6275,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "authorizedAgents",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 6098,
                    "src": "3780:21:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 6273,
                  "id": 6276,
                  "nodeType": "Return",
                  "src": "3773:28:17"
                }
              ]
            },
            "id": 6278,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6268,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 6278,
                  "src": "3675:24:17",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions storage pointer"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 6267,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 6099,
                    "src": "3675:11:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3674:26:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 6273,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6272,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6278,
                  "src": "3748:9:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 6270,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3748:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 6271,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3748:9:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3747:11:17"
            },
            "scope": 6279,
            "src": "3646:162:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 6280,
        "src": "1157:2653:17"
      }
    ],
    "src": "584:3227:17"
  },
  "legacyAST": {
    "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/libraries/PermissionsLib.sol",
    "exportedSymbols": {
      "PermissionEvents": [
        6075
      ],
      "PermissionsLib": [
        6279
      ]
    },
    "id": 6280,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6062,
        "literals": [
          "solidity",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:17"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": " Note(kayvon): these events are emitted by our PermissionsLib, but all contracts that\n depend on the library must also define the events in order for web3 clients to pick them up.\n This topic is discussed in greater detail here (under the section \"Events and Libraries\"):\n https://blog.aragon.one/library-driven-development-in-solidity-2bebcaf88736",
        "fullyImplemented": true,
        "id": 6075,
        "linearizedBaseContracts": [
          6075
        ],
        "name": "PermissionEvents",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "id": 6068,
            "name": "Authorized",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6067,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6064,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6068,
                  "src": "1028:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6063,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1028:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6066,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 6068,
                  "src": "1051:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 6065,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1051:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1027:46:17"
            },
            "src": "1011:63:17"
          },
          {
            "anonymous": false,
            "id": 6074,
            "name": "AuthorizationRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6073,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6070,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6074,
                  "src": "1106:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6069,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1106:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6072,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 6074,
                  "src": "1129:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 6071,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1129:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1105:46:17"
            },
            "src": "1079:73:17"
          }
        ],
        "scope": 6280,
        "src": "979:175:17"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": null,
        "fullyImplemented": true,
        "id": 6279,
        "linearizedBaseContracts": [
          6279
        ],
        "name": "PermissionsLib",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "id": 6081,
            "name": "Authorized",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6080,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6077,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6081,
                  "src": "1416:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6076,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1416:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6079,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 6081,
                  "src": "1439:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 6078,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1439:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1415:46:17"
            },
            "src": "1399:63:17"
          },
          {
            "anonymous": false,
            "id": 6087,
            "name": "AuthorizationRevoked",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6086,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6083,
                  "indexed": true,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6087,
                  "src": "1494:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6082,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1494:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6085,
                  "indexed": false,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 6087,
                  "src": "1517:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 6084,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1517:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1493:46:17"
            },
            "src": "1467:73:17"
          },
          {
            "canonicalName": "PermissionsLib.Permissions",
            "id": 6099,
            "members": [
              {
                "constant": false,
                "id": 6091,
                "name": "authorized",
                "nodeType": "VariableDeclaration",
                "scope": 6099,
                "src": "1575:36:17",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "typeName": {
                  "id": 6090,
                  "keyType": {
                    "id": 6088,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1584:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1575:25:17",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                    "typeString": "mapping(address => bool)"
                  },
                  "valueType": {
                    "id": 6089,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1595:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 6095,
                "name": "agentToIndex",
                "nodeType": "VariableDeclaration",
                "scope": 6099,
                "src": "1621:38:17",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "typeName": {
                  "id": 6094,
                  "keyType": {
                    "id": 6092,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1630:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "1621:25:17",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 6093,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1641:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 6098,
                "name": "authorizedAgents",
                "nodeType": "VariableDeclaration",
                "scope": 6099,
                "src": "1693:26:17",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                  "typeString": "address[] storage pointer"
                },
                "typeName": {
                  "baseType": {
                    "id": 6096,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1693:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 6097,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "1693:9:17",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                    "typeString": "address[] storage pointer"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Permissions",
            "nodeType": "StructDefinition",
            "scope": 6279,
            "src": "1546:180:17",
            "visibility": "public"
          },
          {
            "body": {
              "id": 6148,
              "nodeType": "Block",
              "src": "1866:249:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 6110,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6101,
                            "src": "1900:4:17",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6111,
                            "name": "agent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6103,
                            "src": "1906:5:17",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 6109,
                          "name": "isNotAuthorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6266,
                          "src": "1884:15:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 6112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1884:28:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 6108,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15844,
                      "src": "1876:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 6113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1876:37:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6114,
                  "nodeType": "ExpressionStatement",
                  "src": "1876:37:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6121,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6115,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6101,
                          "src": "1924:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6118,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6091,
                        "src": "1924:15:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 6119,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6117,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6103,
                        "src": "1940:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1924:22:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 6120,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1949:4:17",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1924:29:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6122,
                  "nodeType": "ExpressionStatement",
                  "src": "1924:29:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6128,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6103,
                        "src": "1990:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6123,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6101,
                          "src": "1963:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6126,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6098,
                        "src": "1963:21:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 6127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1963:26:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) returns (uint256)"
                      }
                    },
                    "id": 6129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1963:33:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6130,
                  "nodeType": "ExpressionStatement",
                  "src": "1963:33:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6131,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6101,
                          "src": "2006:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6134,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "agentToIndex",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6095,
                        "src": "2006:17:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 6135,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6133,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6103,
                        "src": "2024:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2006:24:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 6140,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 6136,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6101,
                            "src": "2033:4:17",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                          },
                          "id": 6137,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "authorizedAgents",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6098,
                          "src": "2033:21:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[] storage ref"
                          }
                        },
                        "id": 6138,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2033:28:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 6139,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2064:1:17",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2033:32:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2006:59:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6142,
                  "nodeType": "ExpressionStatement",
                  "src": "2006:59:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6144,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6103,
                        "src": "2086:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 6145,
                        "name": "callingContext",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6105,
                        "src": "2093:14:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 6143,
                      "name": "Authorized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6081,
                      "src": "2075:10:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 6146,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2075:33:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6147,
                  "nodeType": "ExpressionStatement",
                  "src": "2075:33:17"
                }
              ]
            },
            "id": 6149,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "authorize",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6106,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6101,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 6149,
                  "src": "1760:24:17",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions storage pointer"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 6100,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 6099,
                    "src": "1760:11:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6103,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6149,
                  "src": "1794:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6102,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1794:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6105,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 6149,
                  "src": "1817:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 6104,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1817:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1750:94:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 6107,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1866:0:17"
            },
            "scope": 6279,
            "src": "1732:383:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6234,
              "nodeType": "Block",
              "src": "2265:1024:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 6160,
                            "name": "self",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6151,
                            "src": "2465:4:17",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 6161,
                            "name": "agent",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6153,
                            "src": "2471:5:17",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                              "typeString": "struct PermissionsLib.Permissions storage pointer"
                            },
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 6159,
                          "name": "isAuthorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6250,
                          "src": "2452:12:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 6162,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2452:25:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 6158,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15844,
                      "src": "2444:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 6163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2444:34:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6164,
                  "nodeType": "ExpressionStatement",
                  "src": "2444:34:17"
                },
                {
                  "assignments": [
                    6166
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6166,
                      "name": "indexOfAgentToRevoke",
                      "nodeType": "VariableDeclaration",
                      "scope": 6235,
                      "src": "2489:25:17",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6165,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2489:4:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 6171,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 6167,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6151,
                        "src": "2517:4:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                          "typeString": "struct PermissionsLib.Permissions storage pointer"
                        }
                      },
                      "id": 6168,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "agentToIndex",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6095,
                      "src": "2517:17:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 6170,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6169,
                      "name": "agent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6153,
                      "src": "2535:5:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2517:24:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2489:52:17"
                },
                {
                  "assignments": [
                    6173
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6173,
                      "name": "indexOfAgentToMove",
                      "nodeType": "VariableDeclaration",
                      "scope": 6235,
                      "src": "2551:23:17",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6172,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2551:4:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 6179,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6174,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "2577:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6175,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6098,
                        "src": "2577:21:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 6176,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2577:28:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 6177,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2608:1:17",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2577:32:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2551:58:17"
                },
                {
                  "assignments": [
                    6181
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6181,
                      "name": "agentToMove",
                      "nodeType": "VariableDeclaration",
                      "scope": 6235,
                      "src": "2619:19:17",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 6180,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "2619:7:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 6186,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 6182,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6151,
                        "src": "2641:4:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                          "typeString": "struct PermissionsLib.Permissions storage pointer"
                        }
                      },
                      "id": 6183,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6098,
                      "src": "2641:21:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "id": 6185,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6184,
                      "name": "indexOfAgentToMove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6173,
                      "src": "2663:18:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2641:41:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2619:63:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "2738:29:17",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6187,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "2745:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6188,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorized",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6091,
                        "src": "2745:15:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 6190,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6189,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6153,
                        "src": "2761:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2745:22:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6192,
                  "nodeType": "ExpressionStatement",
                  "src": "2738:29:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6193,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "2848:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6196,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6098,
                        "src": "2848:21:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 6197,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6195,
                        "name": "indexOfAgentToRevoke",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6166,
                        "src": "2870:20:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2848:43:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6198,
                      "name": "agentToMove",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6181,
                      "src": "2894:11:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2848:57:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 6200,
                  "nodeType": "ExpressionStatement",
                  "src": "2848:57:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6201,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "2976:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6204,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "agentToIndex",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6095,
                        "src": "2976:17:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 6205,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6203,
                        "name": "agentToMove",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6181,
                        "src": "2994:11:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2976:30:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6206,
                      "name": "indexOfAgentToRevoke",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6166,
                      "src": "3009:20:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2976:53:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6208,
                  "nodeType": "ExpressionStatement",
                  "src": "2976:53:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3039:31:17",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6209,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "3046:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6210,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "agentToIndex",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6095,
                        "src": "3046:17:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 6212,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6211,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6153,
                        "src": "3064:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3046:24:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6214,
                  "nodeType": "ExpressionStatement",
                  "src": "3039:31:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3137:48:17",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6215,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "3144:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6216,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6098,
                        "src": "3144:21:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 6218,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6217,
                        "name": "indexOfAgentToMove",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6173,
                        "src": "3166:18:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3144:41:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6220,
                  "nodeType": "ExpressionStatement",
                  "src": "3137:48:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6227,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 6221,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6151,
                          "src": "3195:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        "id": 6224,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "authorizedAgents",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6098,
                        "src": "3195:21:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 6225,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3195:28:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 6226,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3227:1:17",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "3195:33:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6228,
                  "nodeType": "ExpressionStatement",
                  "src": "3195:33:17"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6230,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6153,
                        "src": "3260:5:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 6231,
                        "name": "callingContext",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6155,
                        "src": "3267:14:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 6229,
                      "name": "AuthorizationRevoked",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6087,
                      "src": "3239:20:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 6232,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3239:43:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6233,
                  "nodeType": "ExpressionStatement",
                  "src": "3239:43:17"
                }
              ]
            },
            "id": 6235,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revokeAuthorization",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6156,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6151,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 6235,
                  "src": "2159:24:17",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions storage pointer"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 6150,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 6099,
                    "src": "2159:11:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6153,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6235,
                  "src": "2193:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6152,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2193:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6155,
                  "name": "callingContext",
                  "nodeType": "VariableDeclaration",
                  "scope": 6235,
                  "src": "2216:21:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 6154,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2216:6:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2149:94:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 6157,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2265:0:17"
            },
            "scope": 6279,
            "src": "2121:1168:17",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6249,
              "nodeType": "Block",
              "src": "3415:46:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 6244,
                        "name": "self",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6237,
                        "src": "3432:4:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                          "typeString": "struct PermissionsLib.Permissions storage pointer"
                        }
                      },
                      "id": 6245,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6091,
                      "src": "3432:15:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 6247,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6246,
                      "name": "agent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6239,
                      "src": "3448:5:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3432:22:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 6243,
                  "id": 6248,
                  "nodeType": "Return",
                  "src": "3425:29:17"
                }
              ]
            },
            "id": 6250,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isAuthorized",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6240,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6237,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 6250,
                  "src": "3317:24:17",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions storage pointer"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 6236,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 6099,
                    "src": "3317:11:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6239,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6250,
                  "src": "3343:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6238,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3343:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3316:41:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 6243,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6242,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6250,
                  "src": "3405:4:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6241,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3405:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3404:6:17"
            },
            "scope": 6279,
            "src": "3295:166:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6265,
              "nodeType": "Block",
              "src": "3590:50:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6263,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3607:26:17",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 6260,
                          "name": "self",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6252,
                          "src": "3621:4:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 6261,
                          "name": "agent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6254,
                          "src": "3627:5:17",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                            "typeString": "struct PermissionsLib.Permissions storage pointer"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 6259,
                        "name": "isAuthorized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6250,
                        "src": "3608:12:17",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                        }
                      },
                      "id": 6262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3608:25:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 6258,
                  "id": 6264,
                  "nodeType": "Return",
                  "src": "3600:33:17"
                }
              ]
            },
            "id": 6266,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isNotAuthorized",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6252,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 6266,
                  "src": "3492:24:17",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions storage pointer"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 6251,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 6099,
                    "src": "3492:11:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6254,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 6266,
                  "src": "3518:13:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6253,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3518:7:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3491:41:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 6258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6257,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6266,
                  "src": "3580:4:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6256,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3580:4:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3579:6:17"
            },
            "scope": 6279,
            "src": "3467:173:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6277,
              "nodeType": "Block",
              "src": "3763:45:17",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 6274,
                      "name": "self",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6268,
                      "src": "3780:4:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                        "typeString": "struct PermissionsLib.Permissions storage pointer"
                      }
                    },
                    "id": 6275,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "authorizedAgents",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 6098,
                    "src": "3780:21:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 6273,
                  "id": 6276,
                  "nodeType": "Return",
                  "src": "3773:28:17"
                }
              ]
            },
            "id": 6278,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6268,
                  "name": "self",
                  "nodeType": "VariableDeclaration",
                  "scope": 6278,
                  "src": "3675:24:17",
                  "stateVariable": false,
                  "storageLocation": "storage",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                    "typeString": "struct PermissionsLib.Permissions storage pointer"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 6267,
                    "name": "Permissions",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 6099,
                    "src": "3675:11:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                      "typeString": "struct PermissionsLib.Permissions storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3674:26:17"
            },
            "payable": false,
            "returnParameters": {
              "id": 6273,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6272,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6278,
                  "src": "3748:9:17",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 6270,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3748:7:17",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 6271,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3748:9:17",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3747:11:17"
            },
            "scope": 6279,
            "src": "3646:162:17",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 6280,
        "src": "1157:2653:17"
      }
    ],
    "src": "584:3227:17"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-02-04T00:08:26.066Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}