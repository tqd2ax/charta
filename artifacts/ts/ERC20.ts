export const ERC20 = 
{
  "contractName": "ERC20",
  "abi": [
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC20Basic.sol\";\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender) public view returns (uint256);\n  function transferFrom(address from, address to, uint256 value) public returns (bool);\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
      "exportedSymbols": {
        "ERC20": [
          2958
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 2917,
        "name": "PragmaDirective",
        "src": "0:24:12"
      },
      {
        "attributes": {
          "SourceUnit": 2991,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 2959,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2918,
        "name": "ImportDirective",
        "src": "26:26:12"
      },
      {
        "attributes": {
          "contractDependencies": [
            2990
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            2958,
            2990
          ],
          "name": "ERC20",
          "scope": 2959
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC20Basic",
                  "referencedDeclaration": 2990,
                  "type": "contract ERC20Basic"
                },
                "id": 2919,
                "name": "UserDefinedTypeName",
                "src": "162:10:12"
              }
            ],
            "id": 2920,
            "name": "InheritanceSpecifier",
            "src": "162:10:12"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "allowance",
              "payable": false,
              "scope": 2958,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "owner",
                      "scope": 2929,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2921,
                        "name": "ElementaryTypeName",
                        "src": "196:7:12"
                      }
                    ],
                    "id": 2922,
                    "name": "VariableDeclaration",
                    "src": "196:13:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 2929,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2923,
                        "name": "ElementaryTypeName",
                        "src": "211:7:12"
                      }
                    ],
                    "id": 2924,
                    "name": "VariableDeclaration",
                    "src": "211:15:12"
                  }
                ],
                "id": 2925,
                "name": "ParameterList",
                "src": "195:32:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2929,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 2926,
                        "name": "ElementaryTypeName",
                        "src": "249:7:12"
                      }
                    ],
                    "id": 2927,
                    "name": "VariableDeclaration",
                    "src": "249:7:12"
                  }
                ],
                "id": 2928,
                "name": "ParameterList",
                "src": "248:9:12"
              }
            ],
            "id": 2929,
            "name": "FunctionDefinition",
            "src": "177:81:12"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 2958,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "from",
                      "scope": 2940,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2930,
                        "name": "ElementaryTypeName",
                        "src": "283:7:12"
                      }
                    ],
                    "id": 2931,
                    "name": "VariableDeclaration",
                    "src": "283:12:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 2940,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2932,
                        "name": "ElementaryTypeName",
                        "src": "297:7:12"
                      }
                    ],
                    "id": 2933,
                    "name": "VariableDeclaration",
                    "src": "297:10:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 2940,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 2934,
                        "name": "ElementaryTypeName",
                        "src": "309:7:12"
                      }
                    ],
                    "id": 2935,
                    "name": "VariableDeclaration",
                    "src": "309:13:12"
                  }
                ],
                "id": 2936,
                "name": "ParameterList",
                "src": "282:41:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2940,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 2937,
                        "name": "ElementaryTypeName",
                        "src": "340:4:12"
                      }
                    ],
                    "id": 2938,
                    "name": "VariableDeclaration",
                    "src": "340:4:12"
                  }
                ],
                "id": 2939,
                "name": "ParameterList",
                "src": "339:6:12"
              }
            ],
            "id": 2940,
            "name": "FunctionDefinition",
            "src": "261:85:12"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 2958,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 2949,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2941,
                        "name": "ElementaryTypeName",
                        "src": "366:7:12"
                      }
                    ],
                    "id": 2942,
                    "name": "VariableDeclaration",
                    "src": "366:15:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 2949,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 2943,
                        "name": "ElementaryTypeName",
                        "src": "383:7:12"
                      }
                    ],
                    "id": 2944,
                    "name": "VariableDeclaration",
                    "src": "383:13:12"
                  }
                ],
                "id": 2945,
                "name": "ParameterList",
                "src": "365:32:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2949,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 2946,
                        "name": "ElementaryTypeName",
                        "src": "414:4:12"
                      }
                    ],
                    "id": 2947,
                    "name": "VariableDeclaration",
                    "src": "414:4:12"
                  }
                ],
                "id": 2948,
                "name": "ParameterList",
                "src": "413:6:12"
              }
            ],
            "id": 2949,
            "name": "FunctionDefinition",
            "src": "349:71:12"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "owner",
                      "scope": 2957,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2950,
                        "name": "ElementaryTypeName",
                        "src": "438:7:12"
                      }
                    ],
                    "id": 2951,
                    "name": "VariableDeclaration",
                    "src": "438:21:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 2957,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2952,
                        "name": "ElementaryTypeName",
                        "src": "461:7:12"
                      }
                    ],
                    "id": 2953,
                    "name": "VariableDeclaration",
                    "src": "461:23:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 2957,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 2954,
                        "name": "ElementaryTypeName",
                        "src": "486:7:12"
                      }
                    ],
                    "id": 2955,
                    "name": "VariableDeclaration",
                    "src": "486:13:12"
                  }
                ],
                "id": 2956,
                "name": "ParameterList",
                "src": "437:63:12"
              }
            ],
            "id": 2957,
            "name": "EventDefinition",
            "src": "423:78:12"
          }
        ],
        "id": 2958,
        "name": "ContractDefinition",
        "src": "144:359:12"
      }
    ],
    "id": 2959,
    "name": "SourceUnit",
    "src": "0:504:12"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-19T23:50:06.584Z"
}