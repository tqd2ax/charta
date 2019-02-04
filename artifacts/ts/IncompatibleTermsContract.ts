export const IncompatibleTermsContract = 
{
  "contractName": "IncompatibleTermsContract",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "debtor",
          "type": "address"
        }
      ],
      "name": "registerTermStart",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x977a5e64"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "payer",
          "type": "address"
        },
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "unitsOfRepayment",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "registerRepayment",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x5f0280ba"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "getExpectedRepaymentValue",
      "outputs": [
        {
          "name": "_expectedRepaymentValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x99114d84"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getValueRepaidToDate",
      "outputs": [
        {
          "name": "_valueRepaid",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x03a896a1"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getTermEndTimestamp",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x2762dd8c"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6102938061001e6000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100725780632762dd8c146100ad5780635f0280ba146100e8578063977a5e641461018d57806399114d84146101eb575b600080fd5b341561007d57600080fd5b61009760048080356000191690602001909190505061022f565b6040518082815260200191505060405180910390f35b34156100b857600080fd5b6100d2600480803560001916906020019091905050610239565b6040518082815260200191505060405180910390f35b34156100f357600080fd5b61017360048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610243565b604051808215151515815260200191505060405180910390f35b341561019857600080fd5b6101d160048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610251565b604051808215151515815260200191505060405180910390f35b34156101f657600080fd5b61021960048080356000191690602001909190803590602001909190505061025c565b6040518082815260200191505060405180910390f35b6000809050919050565b6000809050919050565b600080905095945050505050565b600080905092915050565b6000809050929150505600a165627a7a72305820344469811a0842afab4dcab3dcb6656e9fb6db315cb3425e079912b13a198cf40029",
  "deployedBytecode": "0x60606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100725780632762dd8c146100ad5780635f0280ba146100e8578063977a5e641461018d57806399114d84146101eb575b600080fd5b341561007d57600080fd5b61009760048080356000191690602001909190505061022f565b6040518082815260200191505060405180910390f35b34156100b857600080fd5b6100d2600480803560001916906020019091905050610239565b6040518082815260200191505060405180910390f35b34156100f357600080fd5b61017360048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610243565b604051808215151515815260200191505060405180910390f35b341561019857600080fd5b6101d160048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610251565b604051808215151515815260200191505060405180910390f35b34156101f657600080fd5b61021960048080356000191690602001909190803590602001909190505061025c565b6040518082815260200191505060405180910390f35b6000809050919050565b6000809050919050565b600080905095945050505050565b600080905092915050565b6000809050929150505600a165627a7a72305820344469811a0842afab4dcab3dcb6656e9fb6db315cb3425e079912b13a198cf40029",
  "sourceMap": "867:3132:33:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "867:3132:33:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3876:121;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2377:258;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1500:166;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3244:201;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;3822:17;3862:1;3855:8;;3726:144;;;:::o;3876:121::-;3962:4;3989:1;3982:8;;3876:121;;;:::o;2377:258::-;2587:13;2623:5;2616:12;;2377:258;;;;;;;:::o;1500:166::-;1618:13;1654:5;1647:12;;1500:166;;;;:::o;3244:201::-;3386:28;3437:1;3430:8;;3244:201;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"../../TermsContract.sol\";\n\n\n/**\n * Contract created for testing purposes that will consistently reject\n * debt order fills that are mapped to it by returning `false` for\n * `registerTermStart`\n *\n * Author: Nadav Hollander Github: nadavhollander\n */\ncontract IncompatibleTermsContract is TermsContract {\n    /// When called, the registerTermStart function registers the fact that\n    ///    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    ///    doesn't rely on taking any sorts of actions when the loan term begins,\n    ///    we simply validate DebtKernel is the transaction sender, and return\n    ///    `true` if the debt agreement is associated with this terms contract.\n    /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n    /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId,\n        address debtor\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    )\n        public\n        view\n        returns (uint _expectedRepaymentValue)\n    {\n        return 0;\n    }\n\n     /// Returns the cumulative units-of-value repaid to date.\n     /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.\n    function getValueRepaidToDate(bytes32 agreementId)\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return 0;\n    }\n\n    function getTermEndTimestamp(\n        bytes32 _agreementId\n    ) public view returns (uint)\n    {\n        return 0;\n    }\n}\n",
  "sourcePath": "/Users/trqdinh/Development/loot/charta/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
  "ast": {
    "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
    "exportedSymbols": {
      "IncompatibleTermsContract": [
        12593
      ]
    },
    "id": 12594,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 12527,
        "literals": [
          "solidity",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:33"
      },
      {
        "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/TermsContract.sol",
        "file": "../../TermsContract.sol",
        "id": 12528,
        "nodeType": "ImportDirective",
        "scope": 12594,
        "sourceUnit": 4766,
        "src": "609:33:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 12529,
              "name": "TermsContract",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4765,
              "src": "905:13:33",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TermsContract_$4765",
                "typeString": "contract TermsContract"
              }
            },
            "id": 12530,
            "nodeType": "InheritanceSpecifier",
            "src": "905:13:33"
          }
        ],
        "contractDependencies": [
          4765
        ],
        "contractKind": "contract",
        "documentation": "Contract created for testing purposes that will consistently reject\ndebt order fills that are mapped to it by returning `false` for\n`registerTermStart`\n * Author: Nadav Hollander Github: nadavhollander",
        "fullyImplemented": true,
        "id": 12593,
        "linearizedBaseContracts": [
          12593,
          4765
        ],
        "name": "IncompatibleTermsContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 12541,
              "nodeType": "Block",
              "src": "1637:29:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 12539,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1654:5:33",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 12538,
                  "id": 12540,
                  "nodeType": "Return",
                  "src": "1647:12:33"
                }
              ]
            },
            "id": 12542,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerTermStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12535,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12532,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 12542,
                  "src": "1536:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12531,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1536:7:33",
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
                  "id": 12534,
                  "name": "debtor",
                  "nodeType": "VariableDeclaration",
                  "scope": 12542,
                  "src": "1565:14:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12533,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1565:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1526:59:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 12538,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12537,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 12542,
                  "src": "1618:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 12536,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1618:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1617:15:33"
            },
            "scope": 12593,
            "src": "1500:166:33",
            "stateMutability": "nonpayable",
            "superFunction": 4726,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12559,
              "nodeType": "Block",
              "src": "2606:29:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 12557,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2623:5:33",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 12556,
                  "id": 12558,
                  "nodeType": "Return",
                  "src": "2616:12:33"
                }
              ]
            },
            "id": 12560,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerRepayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12553,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12544,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 12560,
                  "src": "2413:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12543,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2413:7:33",
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
                  "id": 12546,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 12560,
                  "src": "2442:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12545,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2442:7:33",
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
                  "id": 12548,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 12560,
                  "src": "2465:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12547,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2465:7:33",
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
                  "id": 12550,
                  "name": "unitsOfRepayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 12560,
                  "src": "2494:24:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12549,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2494:7:33",
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
                  "id": 12552,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 12560,
                  "src": "2528:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12551,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2528:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2403:151:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 12556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12555,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 12560,
                  "src": "2587:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 12554,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2587:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2586:15:33"
            },
            "scope": 12593,
            "src": "2377:258:33",
            "stateMutability": "nonpayable",
            "superFunction": 4741,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12571,
              "nodeType": "Block",
              "src": "3420:25:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 12569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3437:1:33",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 12568,
                  "id": 12570,
                  "nodeType": "Return",
                  "src": "3430:8:33"
                }
              ]
            },
            "id": 12572,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRepaymentValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12562,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 12572,
                  "src": "3288:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12561,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3288:7:33",
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
                  "id": 12564,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 12572,
                  "src": "3317:17:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12563,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3317:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3278:62:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 12568,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12567,
                  "name": "_expectedRepaymentValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 12572,
                  "src": "3386:28:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12566,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3386:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3385:30:33"
            },
            "scope": 12593,
            "src": "3244:201:33",
            "stateMutability": "view",
            "superFunction": 4750,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12581,
              "nodeType": "Block",
              "src": "3845:25:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 12579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3862:1:33",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 12578,
                  "id": 12580,
                  "nodeType": "Return",
                  "src": "3855:8:33"
                }
              ]
            },
            "id": 12582,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getValueRepaidToDate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12575,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12574,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 12582,
                  "src": "3756:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12573,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3756:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3755:21:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 12578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12577,
                  "name": "_valueRepaid",
                  "nodeType": "VariableDeclaration",
                  "scope": 12582,
                  "src": "3822:17:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12576,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3822:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3821:19:33"
            },
            "scope": 12593,
            "src": "3726:144:33",
            "stateMutability": "view",
            "superFunction": 4757,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12591,
              "nodeType": "Block",
              "src": "3972:25:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 12589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3989:1:33",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 12588,
                  "id": 12590,
                  "nodeType": "Return",
                  "src": "3982:8:33"
                }
              ]
            },
            "id": 12592,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTermEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12584,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 12592,
                  "src": "3914:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12583,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3914:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3904:36:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 12588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12587,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 12592,
                  "src": "3962:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12586,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3962:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3961:6:33"
            },
            "scope": 12593,
            "src": "3876:121:33",
            "stateMutability": "view",
            "superFunction": 4764,
            "visibility": "public"
          }
        ],
        "scope": 12594,
        "src": "867:3132:33"
      }
    ],
    "src": "584:3416:33"
  },
  "legacyAST": {
    "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
    "exportedSymbols": {
      "IncompatibleTermsContract": [
        12593
      ]
    },
    "id": 12594,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 12527,
        "literals": [
          "solidity",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:33"
      },
      {
        "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/TermsContract.sol",
        "file": "../../TermsContract.sol",
        "id": 12528,
        "nodeType": "ImportDirective",
        "scope": 12594,
        "sourceUnit": 4766,
        "src": "609:33:33",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 12529,
              "name": "TermsContract",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4765,
              "src": "905:13:33",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TermsContract_$4765",
                "typeString": "contract TermsContract"
              }
            },
            "id": 12530,
            "nodeType": "InheritanceSpecifier",
            "src": "905:13:33"
          }
        ],
        "contractDependencies": [
          4765
        ],
        "contractKind": "contract",
        "documentation": "Contract created for testing purposes that will consistently reject\ndebt order fills that are mapped to it by returning `false` for\n`registerTermStart`\n * Author: Nadav Hollander Github: nadavhollander",
        "fullyImplemented": true,
        "id": 12593,
        "linearizedBaseContracts": [
          12593,
          4765
        ],
        "name": "IncompatibleTermsContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 12541,
              "nodeType": "Block",
              "src": "1637:29:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 12539,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1654:5:33",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 12538,
                  "id": 12540,
                  "nodeType": "Return",
                  "src": "1647:12:33"
                }
              ]
            },
            "id": 12542,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerTermStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12535,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12532,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 12542,
                  "src": "1536:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12531,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1536:7:33",
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
                  "id": 12534,
                  "name": "debtor",
                  "nodeType": "VariableDeclaration",
                  "scope": 12542,
                  "src": "1565:14:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12533,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1565:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1526:59:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 12538,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12537,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 12542,
                  "src": "1618:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 12536,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1618:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1617:15:33"
            },
            "scope": 12593,
            "src": "1500:166:33",
            "stateMutability": "nonpayable",
            "superFunction": 4726,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12559,
              "nodeType": "Block",
              "src": "2606:29:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 12557,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2623:5:33",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 12556,
                  "id": 12558,
                  "nodeType": "Return",
                  "src": "2616:12:33"
                }
              ]
            },
            "id": 12560,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerRepayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12553,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12544,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 12560,
                  "src": "2413:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12543,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2413:7:33",
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
                  "id": 12546,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 12560,
                  "src": "2442:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12545,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2442:7:33",
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
                  "id": 12548,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 12560,
                  "src": "2465:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12547,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2465:7:33",
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
                  "id": 12550,
                  "name": "unitsOfRepayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 12560,
                  "src": "2494:24:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12549,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2494:7:33",
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
                  "id": 12552,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 12560,
                  "src": "2528:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12551,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2528:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2403:151:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 12556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12555,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 12560,
                  "src": "2587:13:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 12554,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2587:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2586:15:33"
            },
            "scope": 12593,
            "src": "2377:258:33",
            "stateMutability": "nonpayable",
            "superFunction": 4741,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12571,
              "nodeType": "Block",
              "src": "3420:25:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 12569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3437:1:33",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 12568,
                  "id": 12570,
                  "nodeType": "Return",
                  "src": "3430:8:33"
                }
              ]
            },
            "id": 12572,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRepaymentValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12562,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 12572,
                  "src": "3288:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12561,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3288:7:33",
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
                  "id": 12564,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 12572,
                  "src": "3317:17:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12563,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3317:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3278:62:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 12568,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12567,
                  "name": "_expectedRepaymentValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 12572,
                  "src": "3386:28:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12566,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3386:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3385:30:33"
            },
            "scope": 12593,
            "src": "3244:201:33",
            "stateMutability": "view",
            "superFunction": 4750,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12581,
              "nodeType": "Block",
              "src": "3845:25:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 12579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3862:1:33",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 12578,
                  "id": 12580,
                  "nodeType": "Return",
                  "src": "3855:8:33"
                }
              ]
            },
            "id": 12582,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getValueRepaidToDate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12575,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12574,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 12582,
                  "src": "3756:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12573,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3756:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3755:21:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 12578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12577,
                  "name": "_valueRepaid",
                  "nodeType": "VariableDeclaration",
                  "scope": 12582,
                  "src": "3822:17:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12576,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3822:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3821:19:33"
            },
            "scope": 12593,
            "src": "3726:144:33",
            "stateMutability": "view",
            "superFunction": 4757,
            "visibility": "public"
          },
          {
            "body": {
              "id": 12591,
              "nodeType": "Block",
              "src": "3972:25:33",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 12589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3989:1:33",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 12588,
                  "id": 12590,
                  "nodeType": "Return",
                  "src": "3982:8:33"
                }
              ]
            },
            "id": 12592,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTermEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12584,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 12592,
                  "src": "3914:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 12583,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3914:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3904:36:33"
            },
            "payable": false,
            "returnParameters": {
              "id": 12588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12587,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 12592,
                  "src": "3962:4:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12586,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3962:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3961:6:33"
            },
            "scope": 12593,
            "src": "3876:121:33",
            "stateMutability": "view",
            "superFunction": 4764,
            "visibility": "public"
          }
        ],
        "scope": 12594,
        "src": "867:3132:33"
      }
    ],
    "src": "584:3416:33"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0xcff6c78e2c5a7602f1527ef4ed9ed7792f7c00b0",
      "transactionHash": "0xe176e91c0f6651f9eec5224da6265dcee7ba3a059c207dce2194dea5aaaa6a49"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0x1fE80190E82fA09ff5cA40df555B3A1D803c2C5a",
      "transactionHash": "0x86cedab812b76cb188e4dedeef0a0ae2381566ac103d6ba187f74d87ae85be2f"
    }
  },
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-02-04T01:09:13.161Z",
  "devdoc": {
    "methods": {
      "getExpectedRepaymentValue(bytes32,uint256)": {
        "params": {
          "agreementId": "bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.",
          "timestamp": "uint. The timestamp for which repayment expectation is being queried."
        },
        "return": "uint256 The cumulative units-of-value expected to be repaid given a block's timestamp."
      },
      "getValueRepaidToDate(bytes32)": {
        "params": {
          "agreementId": "bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains."
        },
        "return": "uint256 The cumulative units-of-value repaid by the specified block timestamp."
      },
      "registerRepayment(bytes32,address,address,uint256,address)": {
        "params": {
          "agreementId": "bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.",
          "beneficiary": "address. The address of the payment's beneficiary.",
          "payer": "address. The address of the payer.",
          "tokenAddress": "address. The address of the token with which the repayment transaction was executed.",
          "unitsOfRepayment": "uint. The units-of-value repaid in the transaction."
        }
      },
      "registerTermStart(bytes32,address)": {
        "params": {
          "agreementId": "bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains."
        },
        "return": "_success bool. Acknowledgment of whether"
      }
    }
  },
  "userdoc": {
    "methods": {
      "getExpectedRepaymentValue(bytes32,uint256)": {
        "notice": "Returns the cumulative units-of-value expected to be repaid given a block's timestamp.  Note this is not a constant function -- this value can vary on basis of any number of  conditions (e.g. interest rates can be renegotiated if repayments are delinquent)."
      },
      "getValueRepaidToDate(bytes32)": {
        "notice": "Returns the cumulative units-of-value repaid to date."
      },
      "registerRepayment(bytes32,address,address,uint256,address)": {
        "notice": "When called, the registerRepayment function records the debtor's  repayment, as well as any auxiliary metadata needed by the contract  to determine ex post facto the value repaid (e.g. current USD  exchange rate)"
      },
      "registerTermStart(bytes32,address)": {
        "notice": "When called, the registerTermStart function registers the fact that    the debt agreement has begun.  Given that the SimpleInterestTermsContract    doesn't rely on taking any sorts of actions when the loan term begins,    we simply validate DebtKernel is the transaction sender, and return    `true` if the debt agreement is associated with this terms contract."
      }
    }
  }
}
