export const ERC20 = 
{
  "contractName": "ERC20",
  "abi": [
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
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
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
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
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
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC20Basic.sol\";\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender) public view returns (uint256);\n  function transferFrom(address from, address to, uint256 value) public returns (bool);\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        14298
      ]
    },
    "id": 14299,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14257,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:41"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 14258,
        "nodeType": "ImportDirective",
        "scope": 14299,
        "sourceUnit": 14331,
        "src": "26:26:41",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14259,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14330,
              "src": "162:10:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$14330",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 14260,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:41"
          }
        ],
        "contractDependencies": [
          14330
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 14298,
        "linearizedBaseContracts": [
          14298,
          14330
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "id": 14269,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14265,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14262,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14269,
                  "src": "196:13:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14261,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:41",
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
                  "id": 14264,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 14269,
                  "src": "211:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14263,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 14268,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14267,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14269,
                  "src": "249:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14266,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "249:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "248:9:41"
            },
            "scope": 14298,
            "src": "177:81:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14280,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14271,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 14280,
                  "src": "283:12:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14270,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:41",
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
                  "id": 14273,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14280,
                  "src": "297:10:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14272,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:41",
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
                  "id": 14275,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 14280,
                  "src": "309:13:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14274,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:41:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 14279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14278,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14280,
                  "src": "340:4:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14277,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:4:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:6:41"
            },
            "scope": 14298,
            "src": "261:85:41",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14289,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14285,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14282,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 14289,
                  "src": "366:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14281,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:41",
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
                  "id": 14284,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 14289,
                  "src": "383:13:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14283,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "365:32:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 14288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14287,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14289,
                  "src": "414:4:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14286,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "414:4:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "413:6:41"
            },
            "scope": 14298,
            "src": "349:71:41",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "id": 14297,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 14296,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14291,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14297,
                  "src": "438:21:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14290,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:41",
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
                  "id": 14293,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 14297,
                  "src": "461:23:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14292,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:41",
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
                  "id": 14295,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 14297,
                  "src": "486:13:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14294,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "486:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "437:63:41"
            },
            "src": "423:78:41"
          }
        ],
        "scope": 14299,
        "src": "144:359:41"
      }
    ],
    "src": "0:504:41"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        14298
      ]
    },
    "id": 14299,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14257,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:41"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 14258,
        "nodeType": "ImportDirective",
        "scope": 14299,
        "sourceUnit": 14331,
        "src": "26:26:41",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14259,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14330,
              "src": "162:10:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$14330",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 14260,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:41"
          }
        ],
        "contractDependencies": [
          14330
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 14298,
        "linearizedBaseContracts": [
          14298,
          14330
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "id": 14269,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14265,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14262,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14269,
                  "src": "196:13:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14261,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:41",
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
                  "id": 14264,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 14269,
                  "src": "211:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14263,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 14268,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14267,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14269,
                  "src": "249:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14266,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "249:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "248:9:41"
            },
            "scope": 14298,
            "src": "177:81:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14280,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14271,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 14280,
                  "src": "283:12:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14270,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:41",
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
                  "id": 14273,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14280,
                  "src": "297:10:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14272,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:41",
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
                  "id": 14275,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 14280,
                  "src": "309:13:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14274,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:41:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 14279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14278,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14280,
                  "src": "340:4:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14277,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:4:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:6:41"
            },
            "scope": 14298,
            "src": "261:85:41",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14289,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14285,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14282,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 14289,
                  "src": "366:15:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14281,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:41",
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
                  "id": 14284,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 14289,
                  "src": "383:13:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14283,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "365:32:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 14288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14287,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14289,
                  "src": "414:4:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14286,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "414:4:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "413:6:41"
            },
            "scope": 14298,
            "src": "349:71:41",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "id": 14297,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 14296,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14291,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14297,
                  "src": "438:21:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14290,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:41",
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
                  "id": 14293,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 14297,
                  "src": "461:23:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14292,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:41",
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
                  "id": 14295,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 14297,
                  "src": "486:13:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14294,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "486:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "437:63:41"
            },
            "src": "423:78:41"
          }
        ],
        "scope": 14299,
        "src": "144:359:41"
      }
    ],
    "src": "0:504:41"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-02-04T00:08:26.023Z",
  "devdoc": {
    "methods": {},
    "title": "ERC20 interface"
  },
  "userdoc": {
    "methods": {}
  }
}