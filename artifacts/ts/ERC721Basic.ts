export const ERC721Basic = 
{
  "contractName": "ERC721Basic",
  "abi": [
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\n/**\n * @title ERC721 Non-Fungible Token Standard basic interface\n * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Basic {\n  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);\n  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);\n  event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);  \n\n  function balanceOf(address _owner) public view returns (uint256 _balance);\n  function ownerOf(uint256 _tokenId) public view returns (address _owner);\n  function exists(uint256 _tokenId) public view returns (bool _exists);\n  \n  function approve(address _to, uint256 _tokenId) public;\n  function getApproved(uint256 _tokenId) public view returns (address _operator);\n  \n  function setApprovalForAll(address _operator, bool _approved) public;\n  function isApprovedForAll(address _owner, address _operator) public view returns (bool);\n\n  function transferFrom(address _from, address _to, uint256 _tokenId) public;\n  function safeTransferFrom(address _from, address _to, uint256 _tokenId) public;  \n  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes _data) public;\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
    "exportedSymbols": {
      "ERC721Basic": [
        14858
      ]
    },
    "id": 14859,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14753,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:47"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 14858,
        "linearizedBaseContracts": [
          14858
        ],
        "name": "ERC721Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "id": 14761,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 14760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14755,
                  "indexed": true,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 14761,
                  "src": "208:21:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14754,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:7:47",
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
                  "id": 14757,
                  "indexed": true,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14761,
                  "src": "231:19:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14756,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "231:7:47",
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
                  "id": 14759,
                  "indexed": false,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14761,
                  "src": "252:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:62:47"
            },
            "src": "193:77:47"
          },
          {
            "anonymous": false,
            "id": 14769,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 14768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14763,
                  "indexed": true,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14769,
                  "src": "288:22:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14762,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:47",
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
                  "id": 14765,
                  "indexed": true,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 14769,
                  "src": "312:25:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14764,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:7:47",
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
                  "id": 14767,
                  "indexed": false,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14769,
                  "src": "339:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14766,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:69:47"
            },
            "src": "273:84:47"
          },
          {
            "anonymous": false,
            "id": 14777,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 14776,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14771,
                  "indexed": true,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14777,
                  "src": "381:22:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14770,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "381:7:47",
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
                  "id": 14773,
                  "indexed": true,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 14777,
                  "src": "405:25:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14772,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "405:7:47",
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
                  "id": 14775,
                  "indexed": false,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 14777,
                  "src": "432:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14774,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "380:67:47"
            },
            "src": "360:88:47"
          },
          {
            "body": null,
            "id": 14784,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14780,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14779,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14784,
                  "src": "473:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14778,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:16:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14782,
                  "name": "_balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 14784,
                  "src": "510:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14781,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "509:18:47"
            },
            "scope": 14858,
            "src": "454:74:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14791,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14787,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14786,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14791,
                  "src": "548:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14785,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "547:18:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14790,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14789,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14791,
                  "src": "587:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14788,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "587:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "586:16:47"
            },
            "scope": 14858,
            "src": "531:72:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14798,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "exists",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14793,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14798,
                  "src": "622:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14792,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "622:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "621:18:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14797,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14796,
                  "name": "_exists",
                  "nodeType": "VariableDeclaration",
                  "scope": 14798,
                  "src": "661:12:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14795,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "661:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "660:14:47"
            },
            "scope": 14858,
            "src": "606:69:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14805,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14803,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14800,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14805,
                  "src": "698:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14799,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "698:7:47",
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
                  "id": 14802,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14805,
                  "src": "711:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14801,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "711:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "697:31:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14804,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "735:0:47"
            },
            "scope": 14858,
            "src": "681:55:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14812,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14808,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14807,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14812,
                  "src": "760:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14806,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "760:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "759:18:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14810,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 14812,
                  "src": "799:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14809,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "799:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "798:19:47"
            },
            "scope": 14858,
            "src": "739:79:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14819,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14817,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14814,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 14819,
                  "src": "851:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14813,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "851:7:47",
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
                  "id": 14816,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 14819,
                  "src": "870:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14815,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "850:35:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14818,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "892:0:47"
            },
            "scope": 14858,
            "src": "824:69:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14828,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14821,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14828,
                  "src": "922:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14820,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "922:7:47",
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
                  "id": 14823,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 14828,
                  "src": "938:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14822,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "938:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "921:35:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14826,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14828,
                  "src": "978:4:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14825,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "977:6:47"
            },
            "scope": 14858,
            "src": "896:88:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14837,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14830,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 14837,
                  "src": "1010:13:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14829,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1010:7:47",
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
                  "id": 14832,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14837,
                  "src": "1025:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14831,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1025:7:47",
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
                  "id": 14834,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14837,
                  "src": "1038:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14833,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1038:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1009:46:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14836,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1062:0:47"
            },
            "scope": 14858,
            "src": "988:75:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14846,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14839,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 14846,
                  "src": "1092:13:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14838,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1092:7:47",
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
                  "id": 14841,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14846,
                  "src": "1107:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14840,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1107:7:47",
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
                  "id": 14843,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14846,
                  "src": "1120:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14842,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1091:46:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14845,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1144:0:47"
            },
            "scope": 14858,
            "src": "1066:79:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14857,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14848,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 14857,
                  "src": "1176:13:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14847,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1176:7:47",
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
                  "id": 14850,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14857,
                  "src": "1191:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14849,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1191:7:47",
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
                  "id": 14852,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14857,
                  "src": "1204:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14851,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14854,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 14857,
                  "src": "1222:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes memory"
                  },
                  "typeName": {
                    "id": 14853,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:5:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1175:59:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14856,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1241:0:47"
            },
            "scope": 14858,
            "src": "1150:92:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 14859,
        "src": "168:1076:47"
      }
    ],
    "src": "0:1245:47"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
    "exportedSymbols": {
      "ERC721Basic": [
        14858
      ]
    },
    "id": 14859,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 14753,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:47"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 14858,
        "linearizedBaseContracts": [
          14858
        ],
        "name": "ERC721Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "id": 14761,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 14760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14755,
                  "indexed": true,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 14761,
                  "src": "208:21:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14754,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:7:47",
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
                  "id": 14757,
                  "indexed": true,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14761,
                  "src": "231:19:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14756,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "231:7:47",
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
                  "id": 14759,
                  "indexed": false,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14761,
                  "src": "252:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:62:47"
            },
            "src": "193:77:47"
          },
          {
            "anonymous": false,
            "id": 14769,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 14768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14763,
                  "indexed": true,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14769,
                  "src": "288:22:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14762,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:47",
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
                  "id": 14765,
                  "indexed": true,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 14769,
                  "src": "312:25:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14764,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:7:47",
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
                  "id": 14767,
                  "indexed": false,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14769,
                  "src": "339:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14766,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:69:47"
            },
            "src": "273:84:47"
          },
          {
            "anonymous": false,
            "id": 14777,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 14776,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14771,
                  "indexed": true,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14777,
                  "src": "381:22:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14770,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "381:7:47",
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
                  "id": 14773,
                  "indexed": true,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 14777,
                  "src": "405:25:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14772,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "405:7:47",
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
                  "id": 14775,
                  "indexed": false,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 14777,
                  "src": "432:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14774,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "380:67:47"
            },
            "src": "360:88:47"
          },
          {
            "body": null,
            "id": 14784,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14780,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14779,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14784,
                  "src": "473:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14778,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:16:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14782,
                  "name": "_balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 14784,
                  "src": "510:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14781,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "509:18:47"
            },
            "scope": 14858,
            "src": "454:74:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14791,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14787,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14786,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14791,
                  "src": "548:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14785,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "547:18:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14790,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14789,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14791,
                  "src": "587:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14788,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "587:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "586:16:47"
            },
            "scope": 14858,
            "src": "531:72:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14798,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "exists",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14793,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14798,
                  "src": "622:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14792,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "622:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "621:18:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14797,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14796,
                  "name": "_exists",
                  "nodeType": "VariableDeclaration",
                  "scope": 14798,
                  "src": "661:12:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14795,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "661:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "660:14:47"
            },
            "scope": 14858,
            "src": "606:69:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14805,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14803,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14800,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14805,
                  "src": "698:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14799,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "698:7:47",
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
                  "id": 14802,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14805,
                  "src": "711:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14801,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "711:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "697:31:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14804,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "735:0:47"
            },
            "scope": 14858,
            "src": "681:55:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14812,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14808,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14807,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14812,
                  "src": "760:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14806,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "760:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "759:18:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14811,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14810,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 14812,
                  "src": "799:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14809,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "799:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "798:19:47"
            },
            "scope": 14858,
            "src": "739:79:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14819,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14817,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14814,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 14819,
                  "src": "851:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14813,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "851:7:47",
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
                  "id": 14816,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 14819,
                  "src": "870:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14815,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "850:35:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14818,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "892:0:47"
            },
            "scope": 14858,
            "src": "824:69:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14828,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14821,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 14828,
                  "src": "922:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14820,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "922:7:47",
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
                  "id": 14823,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 14828,
                  "src": "938:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14822,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "938:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "921:35:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14826,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 14828,
                  "src": "978:4:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14825,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "977:6:47"
            },
            "scope": 14858,
            "src": "896:88:47",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14837,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14835,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14830,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 14837,
                  "src": "1010:13:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14829,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1010:7:47",
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
                  "id": 14832,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14837,
                  "src": "1025:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14831,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1025:7:47",
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
                  "id": 14834,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14837,
                  "src": "1038:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14833,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1038:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1009:46:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14836,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1062:0:47"
            },
            "scope": 14858,
            "src": "988:75:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14846,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14839,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 14846,
                  "src": "1092:13:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14838,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1092:7:47",
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
                  "id": 14841,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14846,
                  "src": "1107:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14840,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1107:7:47",
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
                  "id": 14843,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14846,
                  "src": "1120:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14842,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1091:46:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14845,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1144:0:47"
            },
            "scope": 14858,
            "src": "1066:79:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 14857,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 14855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14848,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 14857,
                  "src": "1176:13:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14847,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1176:7:47",
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
                  "id": 14850,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 14857,
                  "src": "1191:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 14849,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1191:7:47",
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
                  "id": 14852,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 14857,
                  "src": "1204:16:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14851,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14854,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 14857,
                  "src": "1222:11:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes memory"
                  },
                  "typeName": {
                    "id": 14853,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:5:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1175:59:47"
            },
            "payable": false,
            "returnParameters": {
              "id": 14856,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1241:0:47"
            },
            "scope": 14858,
            "src": "1150:92:47",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 14859,
        "src": "168:1076:47"
      }
    ],
    "src": "0:1245:47"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-02-04T00:08:26.036Z",
  "devdoc": {
    "methods": {},
    "title": "ERC721 Non-Fungible Token Standard basic interface"
  },
  "userdoc": {
    "methods": {}
  }
}