export const ERC721 = 
{
  "contractName": "ERC721",
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC721Basic.sol\";\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Enumerable is ERC721Basic {\n  function totalSupply() public view returns (uint256);\n  function tokenOfOwnerByIndex(address _owner, uint256 _index) public view returns (uint256 _tokenId);\n  function tokenByIndex(uint256 _index) public view returns (uint256);\n}\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Metadata is ERC721Basic {\n  function name() public view returns (string _name);\n  function symbol() public view returns (string _symbol);\n  function tokenURI(uint256 _tokenId) public view returns (string);\n}\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, full implementation interface\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721 is ERC721Basic, ERC721Enumerable, ERC721Metadata {\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
    "exportedSymbols": {
      "ERC721": [
        14751
      ],
      "ERC721Enumerable": [
        14724
      ],
      "ERC721Metadata": [
        14744
      ]
    },
    "id": 14752,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14699,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:46"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
        "file": "./ERC721Basic.sol",
        "id": 14700,
        "nodeType": "ImportDirective",
        "scope": 14752,
        "sourceUnit": 14859,
        "src": "26:27:46",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14701,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14858,
              "src": "243:11:46",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$14858",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 14702,
            "nodeType": "InheritanceSpecifier",
            "src": "243:11:46"
          }
        ],
        "contractDependencies": [
          14858
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 14724,
        "linearizedBaseContracts": [
          14724,
          14858
        ],
        "name": "ERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "id": 14707,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14703,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "279:2:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 14706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14705,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "303:7:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14704,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "303:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "302:9:46"
            },
            "scope": 14724,
            "src": "259:53:46",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14716,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14709,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14716,
                  "src": "344:14:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14708,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "344:7:46",
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
                  "id": 14711,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 14716,
                  "src": "360:14:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14710,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "360:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "343:32:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 14715,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14714,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14716,
                  "src": "397:16:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14713,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "397:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "396:18:46"
            },
            "scope": 14724,
            "src": "315:100:46",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14723,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14719,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14718,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 14723,
                  "src": "440:14:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14717,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "439:16:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 14722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14721,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14723,
                  "src": "477:7:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14720,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "476:9:46"
            },
            "scope": 14724,
            "src": "418:68:46",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 14752,
        "src": "214:274:46"
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14725,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14858,
              "src": "673:11:46",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$14858",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 14726,
            "nodeType": "InheritanceSpecifier",
            "src": "673:11:46"
          }
        ],
        "contractDependencies": [
          14858
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 14744,
        "linearizedBaseContracts": [
          14744,
          14858
        ],
        "name": "ERC721Metadata",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "id": 14731,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14727,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "702:2:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 14730,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14729,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 14731,
                  "src": "726:12:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 14728,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "726:6:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "725:14:46"
            },
            "scope": 14744,
            "src": "689:51:46",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14736,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14732,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "758:2:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 14735,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14734,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 14736,
                  "src": "782:14:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 14733,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "782:6:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "781:16:46"
            },
            "scope": 14744,
            "src": "743:55:46",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14743,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14738,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14743,
                  "src": "819:16:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14737,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "819:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "818:18:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 14742,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14741,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14743,
                  "src": "858:6:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 14740,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "858:6:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "857:8:46"
            },
            "scope": 14744,
            "src": "801:65:46",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 14752,
        "src": "646:222:46"
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14745,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14858,
              "src": "1047:11:46",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$14858",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 14746,
            "nodeType": "InheritanceSpecifier",
            "src": "1047:11:46"
          },
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14747,
              "name": "ERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14724,
              "src": "1060:16:46",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Enumerable_$14724",
                "typeString": "contract ERC721Enumerable"
              }
            },
            "id": 14748,
            "nodeType": "InheritanceSpecifier",
            "src": "1060:16:46"
          },
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14749,
              "name": "ERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14744,
              "src": "1078:14:46",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Metadata_$14744",
                "typeString": "contract ERC721Metadata"
              }
            },
            "id": 14750,
            "nodeType": "InheritanceSpecifier",
            "src": "1078:14:46"
          }
        ],
        "contractDependencies": [
          14724,
          14744,
          14858
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, full implementation interface\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 14751,
        "linearizedBaseContracts": [
          14751,
          14744,
          14724,
          14858
        ],
        "name": "ERC721",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 14752,
        "src": "1028:68:46"
      }
    ],
    "src": "0:1097:46"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
    "exportedSymbols": {
      "ERC721": [
        14751
      ],
      "ERC721Enumerable": [
        14724
      ],
      "ERC721Metadata": [
        14744
      ]
    },
    "id": 14752,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14699,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:46"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
        "file": "./ERC721Basic.sol",
        "id": 14700,
        "nodeType": "ImportDirective",
        "scope": 14752,
        "sourceUnit": 14859,
        "src": "26:27:46",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14701,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14858,
              "src": "243:11:46",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$14858",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 14702,
            "nodeType": "InheritanceSpecifier",
            "src": "243:11:46"
          }
        ],
        "contractDependencies": [
          14858
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 14724,
        "linearizedBaseContracts": [
          14724,
          14858
        ],
        "name": "ERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "id": 14707,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14703,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "279:2:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 14706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14705,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "303:7:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14704,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "303:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "302:9:46"
            },
            "scope": 14724,
            "src": "259:53:46",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14716,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14712,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14709,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14716,
                  "src": "344:14:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14708,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "344:7:46",
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
                  "id": 14711,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 14716,
                  "src": "360:14:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14710,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "360:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "343:32:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 14715,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14714,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14716,
                  "src": "397:16:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14713,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "397:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "396:18:46"
            },
            "scope": 14724,
            "src": "315:100:46",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14723,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14719,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14718,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 14723,
                  "src": "440:14:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14717,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "439:16:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 14722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14721,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14723,
                  "src": "477:7:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14720,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "476:9:46"
            },
            "scope": 14724,
            "src": "418:68:46",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 14752,
        "src": "214:274:46"
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14725,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14858,
              "src": "673:11:46",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$14858",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 14726,
            "nodeType": "InheritanceSpecifier",
            "src": "673:11:46"
          }
        ],
        "contractDependencies": [
          14858
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 14744,
        "linearizedBaseContracts": [
          14744,
          14858
        ],
        "name": "ERC721Metadata",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "id": 14731,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14727,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "702:2:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 14730,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14729,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 14731,
                  "src": "726:12:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 14728,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "726:6:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "725:14:46"
            },
            "scope": 14744,
            "src": "689:51:46",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14736,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14732,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "758:2:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 14735,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14734,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 14736,
                  "src": "782:14:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 14733,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "782:6:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "781:16:46"
            },
            "scope": 14744,
            "src": "743:55:46",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14743,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14738,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14743,
                  "src": "819:16:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14737,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "819:7:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "818:18:46"
            },
            "payable": false,
            "returnParameters": {
              "id": 14742,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14741,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14743,
                  "src": "858:6:46",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string memory"
                  },
                  "typeName": {
                    "id": 14740,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "858:6:46",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "857:8:46"
            },
            "scope": 14744,
            "src": "801:65:46",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 14752,
        "src": "646:222:46"
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14745,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14858,
              "src": "1047:11:46",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$14858",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 14746,
            "nodeType": "InheritanceSpecifier",
            "src": "1047:11:46"
          },
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14747,
              "name": "ERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14724,
              "src": "1060:16:46",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Enumerable_$14724",
                "typeString": "contract ERC721Enumerable"
              }
            },
            "id": 14748,
            "nodeType": "InheritanceSpecifier",
            "src": "1060:16:46"
          },
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 14749,
              "name": "ERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14744,
              "src": "1078:14:46",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Metadata_$14744",
                "typeString": "contract ERC721Metadata"
              }
            },
            "id": 14750,
            "nodeType": "InheritanceSpecifier",
            "src": "1078:14:46"
          }
        ],
        "contractDependencies": [
          14724,
          14744,
          14858
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, full implementation interface\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 14751,
        "linearizedBaseContracts": [
          14751,
          14744,
          14724,
          14858
        ],
        "name": "ERC721",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 14752,
        "src": "1028:68:46"
      }
    ],
    "src": "0:1097:46"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-02-04T00:08:26.029Z",
  "devdoc": {
    "methods": {},
    "title": "ERC-721 Non-Fungible Token Standard, full implementation interface"
  },
  "userdoc": {
    "methods": {}
  }
}