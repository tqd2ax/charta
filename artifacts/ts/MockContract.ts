export const MockContract = 
{
  "contractName": "MockContract",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        },
        {
          "name": "returnValue",
          "type": "bytes32"
        }
      ],
      "name": "mockReturnValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        }
      ],
      "name": "getMockReturnValue",
      "outputs": [
        {
          "name": "_mockReturnValue",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "reset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\ncontract MockContract {\n    bytes32 internal constant DEFAULT_SIGNATURE_ARGS = bytes32(0);\n\n    // We use bytes32 as our generic base type from and to which we cast all other types\n    mapping (string => bytes32[]) internal functionCallSignatures;\n    mapping (string => mapping (bytes32 => bytes32)) internal mockedReturnValue;\n    mapping (string => mapping (bytes32 => bool)) internal functionCalls;\n\n    function mockReturnValue(\n        string functionName,\n        bytes32 argsSignature,\n        bytes32 returnValue\n    ) public {\n        functionCallSignatures[functionName].push(argsSignature);\n        mockedReturnValue[functionName][argsSignature] = returnValue;\n    }\n\n    function getMockReturnValue(string functionName, bytes32 argsSignature)\n        public\n        view\n        returns (bytes32 _mockReturnValue)\n    {\n        return mockedReturnValue[functionName][argsSignature];\n    }\n\n    function reset() public {\n        for (uint i = 0; i < 10; i++) {\n            string memory functionName = getFunctionList()[i];\n\n            if (bytes(functionName).length != 0) {\n                for (uint j = 0; j < functionCallSignatures[functionName].length; j++) {\n                    bytes32 callSignature = functionCallSignatures[functionName][j];\n                    delete functionCalls[functionName][callSignature];\n                    delete mockedReturnValue[functionName][callSignature];\n                }\n\n                delete functionCallSignatures[functionName];\n            }\n        }\n    }\n\n    function functionCalledWithArgs(string functionName, bytes32 args)\n        internal\n    {\n        functionCalls[functionName][args] = true;\n        functionCallSignatures[functionName].push(args);\n    }\n\n    function wasFunctionCalledWithArgs(string functionName, bytes32 args)\n        internal\n        view\n        returns (bool wasCalled)\n    {\n        return functionCalls[functionName][args];\n    }\n\n    function getFunctionList() internal returns (string[10] functionNames);\n}\n",
  "sourcePath": "/Users/trqdinh/Development/loot/charta/contracts/test/mocks/MockContract.sol",
  "ast": {
    "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/test/mocks/MockContract.sol",
    "exportedSymbols": {
      "MockContract": [
        10700
      ]
    },
    "id": 10701,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10517,
        "literals": [
          "solidity",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:23"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 10700,
        "linearizedBaseContracts": [
          10700
        ],
        "name": "MockContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 10522,
            "name": "DEFAULT_SIGNATURE_ARGS",
            "nodeType": "VariableDeclaration",
            "scope": 10700,
            "src": "638:61:23",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 10518,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "638:7:23",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "30",
                  "id": 10520,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "697:1:23",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  },
                  "value": "0"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  }
                ],
                "id": 10519,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "689:7:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_bytes32_$",
                  "typeString": "type(bytes32)"
                },
                "typeName": "bytes32"
              },
              "id": 10521,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "689:10:23",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10527,
            "name": "functionCallSignatures",
            "nodeType": "VariableDeclaration",
            "scope": 10700,
            "src": "795:61:23",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
              "typeString": "mapping(string memory => bytes32[] storage ref)"
            },
            "typeName": {
              "id": 10526,
              "keyType": {
                "id": 10523,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "804:6:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string storage pointer"
                }
              },
              "nodeType": "Mapping",
              "src": "795:29:23",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                "typeString": "mapping(string memory => bytes32[] storage ref)"
              },
              "valueType": {
                "baseType": {
                  "id": 10524,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "814:7:23",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "id": 10525,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "814:9:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[] storage pointer"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10533,
            "name": "mockedReturnValue",
            "nodeType": "VariableDeclaration",
            "scope": 10700,
            "src": "862:75:23",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
              "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
            },
            "typeName": {
              "id": 10532,
              "keyType": {
                "id": 10528,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "871:6:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string storage pointer"
                }
              },
              "nodeType": "Mapping",
              "src": "862:48:23",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
              },
              "valueType": {
                "id": 10531,
                "keyType": {
                  "id": 10529,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "890:7:23",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "881:28:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                  "typeString": "mapping(bytes32 => bytes32)"
                },
                "valueType": {
                  "id": 10530,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "901:7:23",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10539,
            "name": "functionCalls",
            "nodeType": "VariableDeclaration",
            "scope": 10700,
            "src": "943:68:23",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
              "typeString": "mapping(string memory => mapping(bytes32 => bool))"
            },
            "typeName": {
              "id": 10538,
              "keyType": {
                "id": 10534,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "952:6:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string storage pointer"
                }
              },
              "nodeType": "Mapping",
              "src": "943:45:23",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                "typeString": "mapping(string memory => mapping(bytes32 => bool))"
              },
              "valueType": {
                "id": 10537,
                "keyType": {
                  "id": 10535,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "971:7:23",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "962:25:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                  "typeString": "mapping(bytes32 => bool)"
                },
                "valueType": {
                  "id": 10536,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "982:4:23",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 10563,
              "nodeType": "Block",
              "src": "1145:143:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10552,
                        "name": "argsSignature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10543,
                        "src": "1197:13:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10548,
                          "name": "functionCallSignatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10527,
                          "src": "1155:22:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                          }
                        },
                        "id": 10550,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 10549,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10541,
                          "src": "1178:12:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1155:36:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 10551,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1155:41:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) returns (uint256)"
                      }
                    },
                    "id": 10553,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1155:56:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10554,
                  "nodeType": "ExpressionStatement",
                  "src": "1155:56:23"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10561,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10555,
                          "name": "mockedReturnValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10533,
                          "src": "1221:17:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                            "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                          }
                        },
                        "id": 10558,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 10556,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10541,
                          "src": "1239:12:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1221:31:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                          "typeString": "mapping(bytes32 => bytes32)"
                        }
                      },
                      "id": 10559,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10557,
                        "name": "argsSignature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10543,
                        "src": "1253:13:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1221:46:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10560,
                      "name": "returnValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10545,
                      "src": "1270:11:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1221:60:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 10562,
                  "nodeType": "ExpressionStatement",
                  "src": "1221:60:23"
                }
              ]
            },
            "id": 10564,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mockReturnValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10546,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10541,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 10564,
                  "src": "1052:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 10540,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1052:6:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10543,
                  "name": "argsSignature",
                  "nodeType": "VariableDeclaration",
                  "scope": 10564,
                  "src": "1081:21:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10542,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1081:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10545,
                  "name": "returnValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 10564,
                  "src": "1112:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10544,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1112:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1042:95:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 10547,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1145:0:23"
            },
            "scope": 10700,
            "src": "1018:270:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10579,
              "nodeType": "Block",
              "src": "1441:70:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10573,
                        "name": "mockedReturnValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10533,
                        "src": "1458:17:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                          "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                        }
                      },
                      "id": 10575,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10574,
                        "name": "functionName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10566,
                        "src": "1476:12:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1458:31:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                        "typeString": "mapping(bytes32 => bytes32)"
                      }
                    },
                    "id": 10577,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 10576,
                      "name": "argsSignature",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10568,
                      "src": "1490:13:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1458:46:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 10572,
                  "id": 10578,
                  "nodeType": "Return",
                  "src": "1451:53:23"
                }
              ]
            },
            "id": 10580,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMockReturnValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10569,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10566,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 10580,
                  "src": "1322:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 10565,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1322:6:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10568,
                  "name": "argsSignature",
                  "nodeType": "VariableDeclaration",
                  "scope": 10580,
                  "src": "1343:21:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10567,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1343:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1321:44:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 10572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10571,
                  "name": "_mockReturnValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 10580,
                  "src": "1411:24:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10570,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1411:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1410:26:23"
            },
            "scope": 10700,
            "src": "1294:217:23",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10652,
              "nodeType": "Block",
              "src": "1541:586:23",
              "statements": [
                {
                  "body": {
                    "id": 10650,
                    "nodeType": "Block",
                    "src": "1581:540:23",
                    "statements": [
                      {
                        "assignments": [
                          10594
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 10594,
                            "name": "functionName",
                            "nodeType": "VariableDeclaration",
                            "scope": 10653,
                            "src": "1595:26:23",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            "typeName": {
                              "id": 10593,
                              "name": "string",
                              "nodeType": "ElementaryTypeName",
                              "src": "1595:6:23",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string storage pointer"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 10599,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 10595,
                              "name": "getFunctionList",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10699,
                              "src": "1624:15:23",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_array$_t_string_memory_$10_memory_ptr_$",
                                "typeString": "function () returns (string memory[10] memory)"
                              }
                            },
                            "id": 10596,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1624:17:23",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_string_memory_$10_memory_ptr",
                              "typeString": "string memory[10] memory"
                            }
                          },
                          "id": 10598,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 10597,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10584,
                            "src": "1642:1:23",
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
                          "src": "1624:20:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1595:49:23"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 10605,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 10601,
                                  "name": "functionName",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10594,
                                  "src": "1669:12:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                ],
                                "id": 10600,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1663:5:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": "bytes"
                              },
                              "id": 10602,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1663:19:23",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 10603,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1663:26:23",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 10604,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1693:1:23",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1663:31:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 10649,
                        "nodeType": "IfStatement",
                        "src": "1659:452:23",
                        "trueBody": {
                          "id": 10648,
                          "nodeType": "Block",
                          "src": "1696:415:23",
                          "statements": [
                            {
                              "body": {
                                "id": 10641,
                                "nodeType": "Block",
                                "src": "1785:250:23",
                                "statements": [
                                  {
                                    "assignments": [
                                      10620
                                    ],
                                    "declarations": [
                                      {
                                        "constant": false,
                                        "id": 10620,
                                        "name": "callSignature",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 10653,
                                        "src": "1807:21:23",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        "typeName": {
                                          "id": 10619,
                                          "name": "bytes32",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "1807:7:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                      }
                                    ],
                                    "id": 10626,
                                    "initialValue": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "id": 10621,
                                          "name": "functionCallSignatures",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10527,
                                          "src": "1831:22:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                                          }
                                        },
                                        "id": 10623,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 10622,
                                          "name": "functionName",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10594,
                                          "src": "1854:12:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "1831:36:23",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                          "typeString": "bytes32[] storage ref"
                                        }
                                      },
                                      "id": 10625,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 10624,
                                        "name": "j",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10607,
                                        "src": "1868:1:23",
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
                                      "src": "1831:39:23",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1807:63:23"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 10632,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "delete",
                                      "prefix": true,
                                      "src": "1892:49:23",
                                      "subExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 10627,
                                            "name": "functionCalls",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10539,
                                            "src": "1899:13:23",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                                              "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                                            }
                                          },
                                          "id": 10629,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 10628,
                                            "name": "functionName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10594,
                                            "src": "1913:12:23",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "IndexAccess",
                                          "src": "1899:27:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                            "typeString": "mapping(bytes32 => bool)"
                                          }
                                        },
                                        "id": 10631,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 10630,
                                          "name": "callSignature",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10620,
                                          "src": "1927:13:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "nodeType": "IndexAccess",
                                        "src": "1899:42:23",
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
                                    "id": 10633,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1892:49:23"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 10639,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "delete",
                                      "prefix": true,
                                      "src": "1963:53:23",
                                      "subExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 10634,
                                            "name": "mockedReturnValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10533,
                                            "src": "1970:17:23",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                              "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                                            }
                                          },
                                          "id": 10636,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 10635,
                                            "name": "functionName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10594,
                                            "src": "1988:12:23",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "IndexAccess",
                                          "src": "1970:31:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                            "typeString": "mapping(bytes32 => bytes32)"
                                          }
                                        },
                                        "id": 10638,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 10637,
                                          "name": "callSignature",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10620,
                                          "src": "2002:13:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "nodeType": "IndexAccess",
                                        "src": "1970:46:23",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 10640,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1963:53:23"
                                  }
                                ]
                              },
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 10615,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 10610,
                                  "name": "j",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10607,
                                  "src": "1731:1:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 10611,
                                      "name": "functionCallSignatures",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 10527,
                                      "src": "1735:22:23",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                        "typeString": "mapping(string memory => bytes32[] storage ref)"
                                      }
                                    },
                                    "id": 10613,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 10612,
                                      "name": "functionName",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 10594,
                                      "src": "1758:12:23",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "1735:36:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                      "typeString": "bytes32[] storage ref"
                                    }
                                  },
                                  "id": 10614,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "length",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1735:43:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1731:47:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 10642,
                              "initializationExpression": {
                                "assignments": [
                                  10607
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 10607,
                                    "name": "j",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10653,
                                    "src": "1719:6:23",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "typeName": {
                                      "id": 10606,
                                      "name": "uint",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1719:4:23",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 10609,
                                "initialValue": {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 10608,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1728:1:23",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "1719:10:23"
                              },
                              "loopExpression": {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 10617,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "++",
                                  "prefix": false,
                                  "src": "1780:3:23",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "id": 10616,
                                    "name": "j",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10607,
                                    "src": "1780:1:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 10618,
                                "nodeType": "ExpressionStatement",
                                "src": "1780:3:23"
                              },
                              "nodeType": "ForStatement",
                              "src": "1714:321:23"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 10646,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "delete",
                                "prefix": true,
                                "src": "2053:43:23",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 10643,
                                    "name": "functionCallSignatures",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10527,
                                    "src": "2060:22:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                      "typeString": "mapping(string memory => bytes32[] storage ref)"
                                    }
                                  },
                                  "id": 10645,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 10644,
                                    "name": "functionName",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10594,
                                    "src": "2083:12:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "2060:36:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                    "typeString": "bytes32[] storage ref"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 10647,
                              "nodeType": "ExpressionStatement",
                              "src": "2053:43:23"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 10587,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10584,
                      "src": "1568:1:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3130",
                      "id": 10588,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1572:2:23",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "src": "1568:6:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10651,
                  "initializationExpression": {
                    "assignments": [
                      10584
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 10584,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 10653,
                        "src": "1556:6:23",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 10583,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1556:4:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 10586,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 10585,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1565:1:23",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1556:10:23"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 10591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1576:3:23",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 10590,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10584,
                        "src": "1576:1:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 10592,
                    "nodeType": "ExpressionStatement",
                    "src": "1576:3:23"
                  },
                  "nodeType": "ForStatement",
                  "src": "1551:570:23"
                }
              ]
            },
            "id": 10653,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "reset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10581,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1531:2:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 10582,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1541:0:23"
            },
            "scope": 10700,
            "src": "1517:610:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10675,
              "nodeType": "Block",
              "src": "2221:114:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10666,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10660,
                          "name": "functionCalls",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10539,
                          "src": "2231:13:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                            "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                          }
                        },
                        "id": 10663,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 10661,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10655,
                          "src": "2245:12:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2231:27:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 10664,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10662,
                        "name": "args",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10657,
                        "src": "2259:4:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2231:33:23",
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
                      "id": 10665,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2267:4:23",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2231:40:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10667,
                  "nodeType": "ExpressionStatement",
                  "src": "2231:40:23"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10672,
                        "name": "args",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10657,
                        "src": "2323:4:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10668,
                          "name": "functionCallSignatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10527,
                          "src": "2281:22:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                          }
                        },
                        "id": 10670,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 10669,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10655,
                          "src": "2304:12:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2281:36:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 10671,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2281:41:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) returns (uint256)"
                      }
                    },
                    "id": 10673,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2281:47:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10674,
                  "nodeType": "ExpressionStatement",
                  "src": "2281:47:23"
                }
              ]
            },
            "id": 10676,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "functionCalledWithArgs",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10658,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10655,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 10676,
                  "src": "2165:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 10654,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2165:6:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10657,
                  "name": "args",
                  "nodeType": "VariableDeclaration",
                  "scope": 10676,
                  "src": "2186:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10656,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2186:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2164:35:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 10659,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2221:0:23"
            },
            "scope": 10700,
            "src": "2133:202:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 10691,
              "nodeType": "Block",
              "src": "2478:57:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10685,
                        "name": "functionCalls",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10539,
                        "src": "2495:13:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                          "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                        }
                      },
                      "id": 10687,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10686,
                        "name": "functionName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10678,
                        "src": "2509:12:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2495:27:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                        "typeString": "mapping(bytes32 => bool)"
                      }
                    },
                    "id": 10689,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 10688,
                      "name": "args",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10680,
                      "src": "2523:4:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2495:33:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 10684,
                  "id": 10690,
                  "nodeType": "Return",
                  "src": "2488:40:23"
                }
              ]
            },
            "id": 10692,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "wasFunctionCalledWithArgs",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10678,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 10692,
                  "src": "2376:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 10677,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2376:6:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10680,
                  "name": "args",
                  "nodeType": "VariableDeclaration",
                  "scope": 10692,
                  "src": "2397:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10679,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2397:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2375:35:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 10684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10683,
                  "name": "wasCalled",
                  "nodeType": "VariableDeclaration",
                  "scope": 10692,
                  "src": "2458:14:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10682,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2458:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2457:16:23"
            },
            "scope": 10700,
            "src": "2341:194:23",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": null,
            "id": 10699,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getFunctionList",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10693,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2565:2:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 10698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10697,
                  "name": "functionNames",
                  "nodeType": "VariableDeclaration",
                  "scope": 10699,
                  "src": "2586:24:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_$10_memory_ptr",
                    "typeString": "string memory[10] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 10694,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2586:6:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string storage pointer"
                      }
                    },
                    "id": 10696,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3130",
                      "id": 10695,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2593:2:23",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2586:10:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$10_storage_ptr",
                      "typeString": "string storage ref[10] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2585:26:23"
            },
            "scope": 10700,
            "src": "2541:71:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 10701,
        "src": "610:2004:23"
      }
    ],
    "src": "584:2031:23"
  },
  "legacyAST": {
    "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/test/mocks/MockContract.sol",
    "exportedSymbols": {
      "MockContract": [
        10700
      ]
    },
    "id": 10701,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10517,
        "literals": [
          "solidity",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:23"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 10700,
        "linearizedBaseContracts": [
          10700
        ],
        "name": "MockContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 10522,
            "name": "DEFAULT_SIGNATURE_ARGS",
            "nodeType": "VariableDeclaration",
            "scope": 10700,
            "src": "638:61:23",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 10518,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "638:7:23",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "30",
                  "id": 10520,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "697:1:23",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  },
                  "value": "0"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  }
                ],
                "id": 10519,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "689:7:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_bytes32_$",
                  "typeString": "type(bytes32)"
                },
                "typeName": "bytes32"
              },
              "id": 10521,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "689:10:23",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10527,
            "name": "functionCallSignatures",
            "nodeType": "VariableDeclaration",
            "scope": 10700,
            "src": "795:61:23",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
              "typeString": "mapping(string memory => bytes32[] storage ref)"
            },
            "typeName": {
              "id": 10526,
              "keyType": {
                "id": 10523,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "804:6:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string storage pointer"
                }
              },
              "nodeType": "Mapping",
              "src": "795:29:23",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                "typeString": "mapping(string memory => bytes32[] storage ref)"
              },
              "valueType": {
                "baseType": {
                  "id": 10524,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "814:7:23",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "id": 10525,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "814:9:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[] storage pointer"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10533,
            "name": "mockedReturnValue",
            "nodeType": "VariableDeclaration",
            "scope": 10700,
            "src": "862:75:23",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
              "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
            },
            "typeName": {
              "id": 10532,
              "keyType": {
                "id": 10528,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "871:6:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string storage pointer"
                }
              },
              "nodeType": "Mapping",
              "src": "862:48:23",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
              },
              "valueType": {
                "id": 10531,
                "keyType": {
                  "id": 10529,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "890:7:23",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "881:28:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                  "typeString": "mapping(bytes32 => bytes32)"
                },
                "valueType": {
                  "id": 10530,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "901:7:23",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10539,
            "name": "functionCalls",
            "nodeType": "VariableDeclaration",
            "scope": 10700,
            "src": "943:68:23",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
              "typeString": "mapping(string memory => mapping(bytes32 => bool))"
            },
            "typeName": {
              "id": 10538,
              "keyType": {
                "id": 10534,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "952:6:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string storage pointer"
                }
              },
              "nodeType": "Mapping",
              "src": "943:45:23",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                "typeString": "mapping(string memory => mapping(bytes32 => bool))"
              },
              "valueType": {
                "id": 10537,
                "keyType": {
                  "id": 10535,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "971:7:23",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "962:25:23",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                  "typeString": "mapping(bytes32 => bool)"
                },
                "valueType": {
                  "id": 10536,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "982:4:23",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 10563,
              "nodeType": "Block",
              "src": "1145:143:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10552,
                        "name": "argsSignature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10543,
                        "src": "1197:13:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10548,
                          "name": "functionCallSignatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10527,
                          "src": "1155:22:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                          }
                        },
                        "id": 10550,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 10549,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10541,
                          "src": "1178:12:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1155:36:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 10551,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1155:41:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) returns (uint256)"
                      }
                    },
                    "id": 10553,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1155:56:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10554,
                  "nodeType": "ExpressionStatement",
                  "src": "1155:56:23"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10561,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10555,
                          "name": "mockedReturnValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10533,
                          "src": "1221:17:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                            "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                          }
                        },
                        "id": 10558,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 10556,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10541,
                          "src": "1239:12:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1221:31:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                          "typeString": "mapping(bytes32 => bytes32)"
                        }
                      },
                      "id": 10559,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10557,
                        "name": "argsSignature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10543,
                        "src": "1253:13:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1221:46:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 10560,
                      "name": "returnValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10545,
                      "src": "1270:11:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1221:60:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 10562,
                  "nodeType": "ExpressionStatement",
                  "src": "1221:60:23"
                }
              ]
            },
            "id": 10564,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mockReturnValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10546,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10541,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 10564,
                  "src": "1052:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 10540,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1052:6:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10543,
                  "name": "argsSignature",
                  "nodeType": "VariableDeclaration",
                  "scope": 10564,
                  "src": "1081:21:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10542,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1081:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10545,
                  "name": "returnValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 10564,
                  "src": "1112:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10544,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1112:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1042:95:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 10547,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1145:0:23"
            },
            "scope": 10700,
            "src": "1018:270:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10579,
              "nodeType": "Block",
              "src": "1441:70:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10573,
                        "name": "mockedReturnValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10533,
                        "src": "1458:17:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                          "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                        }
                      },
                      "id": 10575,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10574,
                        "name": "functionName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10566,
                        "src": "1476:12:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1458:31:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                        "typeString": "mapping(bytes32 => bytes32)"
                      }
                    },
                    "id": 10577,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 10576,
                      "name": "argsSignature",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10568,
                      "src": "1490:13:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1458:46:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 10572,
                  "id": 10578,
                  "nodeType": "Return",
                  "src": "1451:53:23"
                }
              ]
            },
            "id": 10580,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMockReturnValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10569,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10566,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 10580,
                  "src": "1322:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 10565,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1322:6:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10568,
                  "name": "argsSignature",
                  "nodeType": "VariableDeclaration",
                  "scope": 10580,
                  "src": "1343:21:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10567,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1343:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1321:44:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 10572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10571,
                  "name": "_mockReturnValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 10580,
                  "src": "1411:24:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10570,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1411:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1410:26:23"
            },
            "scope": 10700,
            "src": "1294:217:23",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10652,
              "nodeType": "Block",
              "src": "1541:586:23",
              "statements": [
                {
                  "body": {
                    "id": 10650,
                    "nodeType": "Block",
                    "src": "1581:540:23",
                    "statements": [
                      {
                        "assignments": [
                          10594
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 10594,
                            "name": "functionName",
                            "nodeType": "VariableDeclaration",
                            "scope": 10653,
                            "src": "1595:26:23",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            "typeName": {
                              "id": 10593,
                              "name": "string",
                              "nodeType": "ElementaryTypeName",
                              "src": "1595:6:23",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string storage pointer"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 10599,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 10595,
                              "name": "getFunctionList",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10699,
                              "src": "1624:15:23",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_array$_t_string_memory_$10_memory_ptr_$",
                                "typeString": "function () returns (string memory[10] memory)"
                              }
                            },
                            "id": 10596,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1624:17:23",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_string_memory_$10_memory_ptr",
                              "typeString": "string memory[10] memory"
                            }
                          },
                          "id": 10598,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 10597,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10584,
                            "src": "1642:1:23",
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
                          "src": "1624:20:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1595:49:23"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 10605,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 10601,
                                  "name": "functionName",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10594,
                                  "src": "1669:12:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                ],
                                "id": 10600,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1663:5:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": "bytes"
                              },
                              "id": 10602,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1663:19:23",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 10603,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1663:26:23",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 10604,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1693:1:23",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1663:31:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 10649,
                        "nodeType": "IfStatement",
                        "src": "1659:452:23",
                        "trueBody": {
                          "id": 10648,
                          "nodeType": "Block",
                          "src": "1696:415:23",
                          "statements": [
                            {
                              "body": {
                                "id": 10641,
                                "nodeType": "Block",
                                "src": "1785:250:23",
                                "statements": [
                                  {
                                    "assignments": [
                                      10620
                                    ],
                                    "declarations": [
                                      {
                                        "constant": false,
                                        "id": 10620,
                                        "name": "callSignature",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 10653,
                                        "src": "1807:21:23",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        "typeName": {
                                          "id": 10619,
                                          "name": "bytes32",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "1807:7:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                      }
                                    ],
                                    "id": 10626,
                                    "initialValue": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "id": 10621,
                                          "name": "functionCallSignatures",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10527,
                                          "src": "1831:22:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                                          }
                                        },
                                        "id": 10623,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 10622,
                                          "name": "functionName",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10594,
                                          "src": "1854:12:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "1831:36:23",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                          "typeString": "bytes32[] storage ref"
                                        }
                                      },
                                      "id": 10625,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 10624,
                                        "name": "j",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10607,
                                        "src": "1868:1:23",
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
                                      "src": "1831:39:23",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1807:63:23"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 10632,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "delete",
                                      "prefix": true,
                                      "src": "1892:49:23",
                                      "subExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 10627,
                                            "name": "functionCalls",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10539,
                                            "src": "1899:13:23",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                                              "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                                            }
                                          },
                                          "id": 10629,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 10628,
                                            "name": "functionName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10594,
                                            "src": "1913:12:23",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "IndexAccess",
                                          "src": "1899:27:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                            "typeString": "mapping(bytes32 => bool)"
                                          }
                                        },
                                        "id": 10631,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 10630,
                                          "name": "callSignature",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10620,
                                          "src": "1927:13:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "nodeType": "IndexAccess",
                                        "src": "1899:42:23",
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
                                    "id": 10633,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1892:49:23"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 10639,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "delete",
                                      "prefix": true,
                                      "src": "1963:53:23",
                                      "subExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 10634,
                                            "name": "mockedReturnValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10533,
                                            "src": "1970:17:23",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                              "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                                            }
                                          },
                                          "id": 10636,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 10635,
                                            "name": "functionName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10594,
                                            "src": "1988:12:23",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "IndexAccess",
                                          "src": "1970:31:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                            "typeString": "mapping(bytes32 => bytes32)"
                                          }
                                        },
                                        "id": 10638,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 10637,
                                          "name": "callSignature",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 10620,
                                          "src": "2002:13:23",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "nodeType": "IndexAccess",
                                        "src": "1970:46:23",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 10640,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1963:53:23"
                                  }
                                ]
                              },
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 10615,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 10610,
                                  "name": "j",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 10607,
                                  "src": "1731:1:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 10611,
                                      "name": "functionCallSignatures",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 10527,
                                      "src": "1735:22:23",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                        "typeString": "mapping(string memory => bytes32[] storage ref)"
                                      }
                                    },
                                    "id": 10613,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 10612,
                                      "name": "functionName",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 10594,
                                      "src": "1758:12:23",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "1735:36:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                      "typeString": "bytes32[] storage ref"
                                    }
                                  },
                                  "id": 10614,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "length",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1735:43:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1731:47:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 10642,
                              "initializationExpression": {
                                "assignments": [
                                  10607
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 10607,
                                    "name": "j",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10653,
                                    "src": "1719:6:23",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "typeName": {
                                      "id": 10606,
                                      "name": "uint",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1719:4:23",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 10609,
                                "initialValue": {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 10608,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1728:1:23",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "1719:10:23"
                              },
                              "loopExpression": {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 10617,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "++",
                                  "prefix": false,
                                  "src": "1780:3:23",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "id": 10616,
                                    "name": "j",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10607,
                                    "src": "1780:1:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 10618,
                                "nodeType": "ExpressionStatement",
                                "src": "1780:3:23"
                              },
                              "nodeType": "ForStatement",
                              "src": "1714:321:23"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 10646,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "delete",
                                "prefix": true,
                                "src": "2053:43:23",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 10643,
                                    "name": "functionCallSignatures",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10527,
                                    "src": "2060:22:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                      "typeString": "mapping(string memory => bytes32[] storage ref)"
                                    }
                                  },
                                  "id": 10645,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 10644,
                                    "name": "functionName",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10594,
                                    "src": "2083:12:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "2060:36:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                    "typeString": "bytes32[] storage ref"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 10647,
                              "nodeType": "ExpressionStatement",
                              "src": "2053:43:23"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 10589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 10587,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10584,
                      "src": "1568:1:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3130",
                      "id": 10588,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1572:2:23",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "src": "1568:6:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10651,
                  "initializationExpression": {
                    "assignments": [
                      10584
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 10584,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 10653,
                        "src": "1556:6:23",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 10583,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1556:4:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 10586,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 10585,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1565:1:23",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1556:10:23"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 10591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1576:3:23",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 10590,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10584,
                        "src": "1576:1:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 10592,
                    "nodeType": "ExpressionStatement",
                    "src": "1576:3:23"
                  },
                  "nodeType": "ForStatement",
                  "src": "1551:570:23"
                }
              ]
            },
            "id": 10653,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "reset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10581,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1531:2:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 10582,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1541:0:23"
            },
            "scope": 10700,
            "src": "1517:610:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 10675,
              "nodeType": "Block",
              "src": "2221:114:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 10666,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10660,
                          "name": "functionCalls",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10539,
                          "src": "2231:13:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                            "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                          }
                        },
                        "id": 10663,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 10661,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10655,
                          "src": "2245:12:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2231:27:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 10664,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10662,
                        "name": "args",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10657,
                        "src": "2259:4:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2231:33:23",
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
                      "id": 10665,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2267:4:23",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2231:40:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10667,
                  "nodeType": "ExpressionStatement",
                  "src": "2231:40:23"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 10672,
                        "name": "args",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10657,
                        "src": "2323:4:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 10668,
                          "name": "functionCallSignatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10527,
                          "src": "2281:22:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                          }
                        },
                        "id": 10670,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 10669,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10655,
                          "src": "2304:12:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2281:36:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 10671,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2281:41:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) returns (uint256)"
                      }
                    },
                    "id": 10673,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2281:47:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10674,
                  "nodeType": "ExpressionStatement",
                  "src": "2281:47:23"
                }
              ]
            },
            "id": 10676,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "functionCalledWithArgs",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10658,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10655,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 10676,
                  "src": "2165:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 10654,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2165:6:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10657,
                  "name": "args",
                  "nodeType": "VariableDeclaration",
                  "scope": 10676,
                  "src": "2186:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10656,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2186:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2164:35:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 10659,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2221:0:23"
            },
            "scope": 10700,
            "src": "2133:202:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 10691,
              "nodeType": "Block",
              "src": "2478:57:23",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 10685,
                        "name": "functionCalls",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10539,
                        "src": "2495:13:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                          "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                        }
                      },
                      "id": 10687,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 10686,
                        "name": "functionName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10678,
                        "src": "2509:12:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2495:27:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                        "typeString": "mapping(bytes32 => bool)"
                      }
                    },
                    "id": 10689,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 10688,
                      "name": "args",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10680,
                      "src": "2523:4:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2495:33:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 10684,
                  "id": 10690,
                  "nodeType": "Return",
                  "src": "2488:40:23"
                }
              ]
            },
            "id": 10692,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "wasFunctionCalledWithArgs",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10678,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 10692,
                  "src": "2376:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 10677,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2376:6:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 10680,
                  "name": "args",
                  "nodeType": "VariableDeclaration",
                  "scope": 10692,
                  "src": "2397:12:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 10679,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2397:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2375:35:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 10684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10683,
                  "name": "wasCalled",
                  "nodeType": "VariableDeclaration",
                  "scope": 10692,
                  "src": "2458:14:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10682,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2458:4:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2457:16:23"
            },
            "scope": 10700,
            "src": "2341:194:23",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": null,
            "id": 10699,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getFunctionList",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10693,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2565:2:23"
            },
            "payable": false,
            "returnParameters": {
              "id": 10698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10697,
                  "name": "functionNames",
                  "nodeType": "VariableDeclaration",
                  "scope": 10699,
                  "src": "2586:24:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_$10_memory_ptr",
                    "typeString": "string memory[10] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 10694,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2586:6:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string storage pointer"
                      }
                    },
                    "id": 10696,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3130",
                      "id": 10695,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2593:2:23",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2586:10:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$10_storage_ptr",
                      "typeString": "string storage ref[10] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2585:26:23"
            },
            "scope": 10700,
            "src": "2541:71:23",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 10701,
        "src": "610:2004:23"
      }
    ],
    "src": "584:2031:23"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-02-04T00:08:26.061Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}