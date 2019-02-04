export const ERC20Basic = 
{
  "contractName": "ERC20Basic",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title ERC20Basic\n * @dev Simpler version of ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/179\n */\ncontract ERC20Basic {\n  function totalSupply() public view returns (uint256);\n  function balanceOf(address who) public view returns (uint256);\n  function transfer(address to, uint256 value) public returns (bool);\n  event Transfer(address indexed from, address indexed to, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
    "exportedSymbols": {
      "ERC20Basic": [
        14330
      ]
    },
    "id": 14331,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14300,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:42"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC20Basic\n@dev Simpler version of ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/179",
        "fullyImplemented": false,
        "id": 14330,
        "linearizedBaseContracts": [
          14330
        ],
        "name": "ERC20Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "id": 14305,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14301,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "199:2:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 14304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14303,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14305,
                  "src": "223:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14302,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "222:9:42"
            },
            "scope": 14330,
            "src": "179:53:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14312,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14307,
                  "name": "who",
                  "nodeType": "VariableDeclaration",
                  "scope": 14312,
                  "src": "254:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14306,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "253:13:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 14311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14310,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14312,
                  "src": "288:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14309,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:9:42"
            },
            "scope": 14330,
            "src": "235:62:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14321,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14317,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14314,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14321,
                  "src": "318:10:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14313,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "318:7:42",
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
                  "id": 14316,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 14321,
                  "src": "330:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14315,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "317:27:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 14320,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14319,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14321,
                  "src": "361:4:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14318,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:6:42"
            },
            "scope": 14330,
            "src": "300:67:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "id": 14329,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 14328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14323,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 14329,
                  "src": "385:20:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14322,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:42",
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
                  "id": 14325,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14329,
                  "src": "407:18:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14324,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:42",
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
                  "id": 14327,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 14329,
                  "src": "427:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14326,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "384:57:42"
            },
            "src": "370:72:42"
          }
        ],
        "scope": 14331,
        "src": "155:289:42"
      }
    ],
    "src": "0:445:42"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
    "exportedSymbols": {
      "ERC20Basic": [
        14330
      ]
    },
    "id": 14331,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14300,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:42"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC20Basic\n@dev Simpler version of ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/179",
        "fullyImplemented": false,
        "id": 14330,
        "linearizedBaseContracts": [
          14330
        ],
        "name": "ERC20Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "id": 14305,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14301,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "199:2:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 14304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14303,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14305,
                  "src": "223:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14302,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "222:9:42"
            },
            "scope": 14330,
            "src": "179:53:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14312,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14307,
                  "name": "who",
                  "nodeType": "VariableDeclaration",
                  "scope": 14312,
                  "src": "254:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14306,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "253:13:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 14311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14310,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14312,
                  "src": "288:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14309,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:9:42"
            },
            "scope": 14330,
            "src": "235:62:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14321,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14317,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14314,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14321,
                  "src": "318:10:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14313,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "318:7:42",
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
                  "id": 14316,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 14321,
                  "src": "330:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14315,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "317:27:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 14320,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14319,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14321,
                  "src": "361:4:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14318,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:6:42"
            },
            "scope": 14330,
            "src": "300:67:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "id": 14329,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 14328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14323,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 14329,
                  "src": "385:20:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14322,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:42",
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
                  "id": 14325,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14329,
                  "src": "407:18:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14324,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:42",
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
                  "id": 14327,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 14329,
                  "src": "427:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14326,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "384:57:42"
            },
            "src": "370:72:42"
          }
        ],
        "scope": 14331,
        "src": "155:289:42"
      }
    ],
    "src": "0:445:42"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-02-04T00:08:26.022Z",
  "devdoc": {
    "methods": {},
    "title": "ERC20Basic"
  },
  "userdoc": {
    "methods": {}
  }
}