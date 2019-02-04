export const DeprecatedERC721 = 
{
  "contractName": "DeprecatedERC721",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "_name",
          "type": "string"
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
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "_operator",
          "type": "address"
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "_tokenId",
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "exists",
      "outputs": [
        {
          "name": "_exists",
          "type": "bool"
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
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
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
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "_owner",
          "type": "address"
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
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "_balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "_symbol",
          "type": "string"
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
          "name": "_operator",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
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
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "takeOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "tokensOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC721.sol\";\n\n/**\n * @title ERC-721 methods shipped in OpenZeppelin v1.7.0, removed in the latest version of the standard\n * @dev Only use this interface for compatibility with previously deployed contracts\n * @dev Use ERC721 for interacting with new contracts which are standard-compliant\n */\ncontract DeprecatedERC721 is ERC721 {\n  function takeOwnership(uint256 _tokenId) public;\n  function transfer(address _to, uint256 _tokenId) public;\n  function tokensOf(address _owner) public view returns (uint256[]);\n}\n\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/DeprecatedERC721.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/DeprecatedERC721.sol",
    "exportedSymbols": {
      "DeprecatedERC721": [
        14697
      ]
    },
    "id": 14698,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14673,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:45"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 14674,
        "nodeType": "ImportDirective",
        "scope": 14698,
        "sourceUnit": 14752,
        "src": "26:22:45",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14675,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14751,
              "src": "359:6:45",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$14751",
                "typeString": "contract ERC721"
              }
            },
            "id": 14676,
            "nodeType": "InheritanceSpecifier",
            "src": "359:6:45"
          }
        ],
        "contractDependencies": [
          14724,
          14744,
          14751,
          14858
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 methods shipped in OpenZeppelin v1.7.0, removed in the latest version of the standard\n@dev Only use this interface for compatibility with previously deployed contracts\n@dev Use ERC721 for interacting with new contracts which are standard-compliant",
        "fullyImplemented": false,
        "id": 14697,
        "linearizedBaseContracts": [
          14697,
          14751,
          14744,
          14724,
          14858
        ],
        "name": "DeprecatedERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "id": 14681,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "takeOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14678,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14681,
                  "src": "393:16:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "392:18:45"
            },
            "payable": false,
            "returnParameters": {
              "id": 14680,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "417:0:45"
            },
            "scope": 14697,
            "src": "370:48:45",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14688,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14686,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14683,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14688,
                  "src": "439:11:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14682,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "439:7:45",
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
                  "id": 14685,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14688,
                  "src": "452:16:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14684,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "452:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "438:31:45"
            },
            "payable": false,
            "returnParameters": {
              "id": 14687,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "476:0:45"
            },
            "scope": 14697,
            "src": "421:56:45",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14696,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokensOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14691,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14690,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14696,
                  "src": "498:14:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14689,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "498:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "497:16:45"
            },
            "payable": false,
            "returnParameters": {
              "id": 14695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14694,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14696,
                  "src": "535:9:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 14692,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "535:7:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 14693,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "535:9:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "534:11:45"
            },
            "scope": 14697,
            "src": "480:66:45",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 14698,
        "src": "330:218:45"
      }
    ],
    "src": "0:550:45"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/DeprecatedERC721.sol",
    "exportedSymbols": {
      "DeprecatedERC721": [
        14697
      ]
    },
    "id": 14698,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14673,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:45"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 14674,
        "nodeType": "ImportDirective",
        "scope": 14698,
        "sourceUnit": 14752,
        "src": "26:22:45",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14675,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14751,
              "src": "359:6:45",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$14751",
                "typeString": "contract ERC721"
              }
            },
            "id": 14676,
            "nodeType": "InheritanceSpecifier",
            "src": "359:6:45"
          }
        ],
        "contractDependencies": [
          14724,
          14744,
          14751,
          14858
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 methods shipped in OpenZeppelin v1.7.0, removed in the latest version of the standard\n@dev Only use this interface for compatibility with previously deployed contracts\n@dev Use ERC721 for interacting with new contracts which are standard-compliant",
        "fullyImplemented": false,
        "id": 14697,
        "linearizedBaseContracts": [
          14697,
          14751,
          14744,
          14724,
          14858
        ],
        "name": "DeprecatedERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "id": 14681,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "takeOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14678,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14681,
                  "src": "393:16:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "392:18:45"
            },
            "payable": false,
            "returnParameters": {
              "id": 14680,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "417:0:45"
            },
            "scope": 14697,
            "src": "370:48:45",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14688,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14686,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14683,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14688,
                  "src": "439:11:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14682,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "439:7:45",
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
                  "id": 14685,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14688,
                  "src": "452:16:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14684,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "452:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "438:31:45"
            },
            "payable": false,
            "returnParameters": {
              "id": 14687,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "476:0:45"
            },
            "scope": 14697,
            "src": "421:56:45",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14696,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokensOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14691,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14690,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14696,
                  "src": "498:14:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14689,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "498:7:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "497:16:45"
            },
            "payable": false,
            "returnParameters": {
              "id": 14695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14694,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14696,
                  "src": "535:9:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 14692,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "535:7:45",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 14693,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "535:9:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "534:11:45"
            },
            "scope": 14697,
            "src": "480:66:45",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 14698,
        "src": "330:218:45"
      }
    ],
    "src": "0:550:45"
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
    "title": "ERC-721 methods shipped in OpenZeppelin v1.7.0, removed in the latest version of the standard"
  },
  "userdoc": {
    "methods": {}
  }
}