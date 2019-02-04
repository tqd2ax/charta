export const TermsContract = 
{
  "contractName": "TermsContract",
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
      "type": "function"
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
      "type": "function"
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
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getValueRepaidToDate",
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
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\ninterface TermsContract {\n     /// When called, the registerTermStart function registers the fact that\n     ///    the debt agreement has begun.  This method is called as a hook by the\n     ///    DebtKernel when a debt order associated with `agreementId` is filled.\n     ///    Method is not required to make any sort of internal state change\n     ///    upon the debt agreement's start, but MUST return `true` in order to\n     ///    acknowledge receipt of the transaction.  If, for any reason, the\n     ///    debt agreement stored at `agreementId` is incompatible with this contract,\n     ///    MUST return `false`, which will cause the pertinent order fill to fail.\n     ///    If this method is called for a debt agreement whose term has already begun,\n     ///    must THROW.  Similarly, if this method is called by any contract other\n     ///    than the current DebtKernel, must THROW.\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  debtor address. The debtor in this particular issuance.\n     /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId,\n        address debtor\n    ) public returns (bool _success);\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    ) public returns (bool _success);\n\n     /// Returns the cumulative units-of-value expected to be repaid by a given block timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp of the block for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid by the time the given timestamp lapses.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    ) public view returns (uint256);\n\n     /// Returns the cumulative units-of-value repaid by the point at which this method is called.\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid up until now.\n    function getValueRepaidToDate(\n        bytes32 agreementId\n    ) public view returns (uint256);\n\n    /**\n     * A method that returns a Unix timestamp representing the end of the debt agreement's term.\n     * contract.\n     */\n    function getTermEndTimestamp(\n        bytes32 _agreementId\n    ) public view returns (uint);\n}\n",
  "sourcePath": "/Users/trqdinh/Development/loot/charta/contracts/TermsContract.sol",
  "ast": {
    "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/TermsContract.sol",
    "exportedSymbols": {
      "TermsContract": [
        4765
      ]
    },
    "id": 4766,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4717,
        "literals": [
          "solidity",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:11"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 4765,
        "linearizedBaseContracts": [
          4765
        ],
        "name": "TermsContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "id": 4726,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerTermStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4719,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4726,
                  "src": "1794:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4718,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1794:7:11",
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
                  "id": 4721,
                  "name": "debtor",
                  "nodeType": "VariableDeclaration",
                  "scope": 4726,
                  "src": "1823:14:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4720,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1823:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1784:59:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4724,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 4726,
                  "src": "1860:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4723,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1860:4:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1859:15:11"
            },
            "scope": 4765,
            "src": "1758:117:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 4741,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerRepayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4728,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4741,
                  "src": "2622:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4727,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2622:7:11",
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
                  "id": 4730,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 4741,
                  "src": "2651:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4729,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2651:7:11",
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
                  "id": 4732,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 4741,
                  "src": "2674:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4731,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2674:7:11",
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
                  "id": 4734,
                  "name": "unitsOfRepayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 4741,
                  "src": "2703:24:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4733,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2703:7:11",
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
                  "id": 4736,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 4741,
                  "src": "2737:20:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4735,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2737:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2612:151:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4740,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4739,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 4741,
                  "src": "2780:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4738,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2780:4:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2779:15:11"
            },
            "scope": 4765,
            "src": "2586:209:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 4750,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRepaymentValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4746,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4743,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4750,
                  "src": "3475:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4742,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3475:7:11",
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
                  "id": 4745,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 4750,
                  "src": "3504:17:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4744,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3504:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3465:62:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4749,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4748,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4750,
                  "src": "3549:7:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4747,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3549:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3548:9:11"
            },
            "scope": 4765,
            "src": "3431:127:11",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 4757,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getValueRepaidToDate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4753,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4752,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4757,
                  "src": "3895:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4751,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3895:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3885:35:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4755,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4757,
                  "src": "3942:7:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4754,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3942:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3941:9:11"
            },
            "scope": 4765,
            "src": "3856:95:11",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 4764,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTermEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4759,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4764,
                  "src": "4125:20:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4758,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4125:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4115:36:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4762,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4764,
                  "src": "4173:4:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4761,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4173:4:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4172:6:11"
            },
            "scope": 4765,
            "src": "4087:92:11",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4766,
        "src": "610:3571:11"
      }
    ],
    "src": "584:3598:11"
  },
  "legacyAST": {
    "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/TermsContract.sol",
    "exportedSymbols": {
      "TermsContract": [
        4765
      ]
    },
    "id": 4766,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4717,
        "literals": [
          "solidity",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:11"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 4765,
        "linearizedBaseContracts": [
          4765
        ],
        "name": "TermsContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "id": 4726,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerTermStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4719,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4726,
                  "src": "1794:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4718,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1794:7:11",
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
                  "id": 4721,
                  "name": "debtor",
                  "nodeType": "VariableDeclaration",
                  "scope": 4726,
                  "src": "1823:14:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4720,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1823:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1784:59:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4724,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 4726,
                  "src": "1860:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4723,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1860:4:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1859:15:11"
            },
            "scope": 4765,
            "src": "1758:117:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 4741,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerRepayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4728,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4741,
                  "src": "2622:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4727,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2622:7:11",
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
                  "id": 4730,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 4741,
                  "src": "2651:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4729,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2651:7:11",
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
                  "id": 4732,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 4741,
                  "src": "2674:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4731,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2674:7:11",
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
                  "id": 4734,
                  "name": "unitsOfRepayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 4741,
                  "src": "2703:24:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4733,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2703:7:11",
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
                  "id": 4736,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 4741,
                  "src": "2737:20:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4735,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2737:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2612:151:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4740,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4739,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 4741,
                  "src": "2780:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4738,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2780:4:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2779:15:11"
            },
            "scope": 4765,
            "src": "2586:209:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 4750,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRepaymentValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4746,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4743,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4750,
                  "src": "3475:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4742,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3475:7:11",
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
                  "id": 4745,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 4750,
                  "src": "3504:17:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4744,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3504:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3465:62:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4749,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4748,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4750,
                  "src": "3549:7:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4747,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3549:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3548:9:11"
            },
            "scope": 4765,
            "src": "3431:127:11",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 4757,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getValueRepaidToDate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4753,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4752,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4757,
                  "src": "3895:19:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4751,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3895:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3885:35:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4755,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4757,
                  "src": "3942:7:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4754,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3942:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3941:9:11"
            },
            "scope": 4765,
            "src": "3856:95:11",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "id": 4764,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTermEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4759,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4764,
                  "src": "4125:20:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4758,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4125:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4115:36:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4762,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4764,
                  "src": "4173:4:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4761,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4173:4:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4172:6:11"
            },
            "scope": 4765,
            "src": "4087:92:11",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4766,
        "src": "610:3571:11"
      }
    ],
    "src": "584:3598:11"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-02-04T00:08:26.027Z",
  "devdoc": {
    "methods": {
      "getExpectedRepaymentValue(bytes32,uint256)": {
        "params": {
          "agreementId": "bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.",
          "timestamp": "uint. The timestamp of the block for which repayment expectation is being queried."
        },
        "return": "uint256 The cumulative units-of-value expected to be repaid by the time the given timestamp lapses."
      },
      "getValueRepaidToDate(bytes32)": {
        "params": {
          "agreementId": "bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains."
        },
        "return": "uint256 The cumulative units-of-value repaid up until now."
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
          "agreementId": "bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.",
          "debtor": "address. The debtor in this particular issuance."
        },
        "return": "_success bool. Acknowledgment of whether"
      }
    }
  },
  "userdoc": {
    "methods": {
      "getExpectedRepaymentValue(bytes32,uint256)": {
        "notice": "Returns the cumulative units-of-value expected to be repaid by a given block timestamp.  Note this is not a constant function -- this value can vary on basis of any number of  conditions (e.g. interest rates can be renegotiated if repayments are delinquent)."
      },
      "getTermEndTimestamp(bytes32)": {
        "notice": "A method that returns a Unix timestamp representing the end of the debt agreement's term. contract."
      },
      "getValueRepaidToDate(bytes32)": {
        "notice": "Returns the cumulative units-of-value repaid by the point at which this method is called."
      },
      "registerRepayment(bytes32,address,address,uint256,address)": {
        "notice": "When called, the registerRepayment function records the debtor's  repayment, as well as any auxiliary metadata needed by the contract  to determine ex post facto the value repaid (e.g. current USD  exchange rate)"
      },
      "registerTermStart(bytes32,address)": {
        "notice": "When called, the registerTermStart function registers the fact that    the debt agreement has begun.  This method is called as a hook by the    DebtKernel when a debt order associated with `agreementId` is filled.    Method is not required to make any sort of internal state change    upon the debt agreement's start, but MUST return `true` in order to    acknowledge receipt of the transaction.  If, for any reason, the    debt agreement stored at `agreementId` is incompatible with this contract,    MUST return `false`, which will cause the pertinent order fill to fail.    If this method is called for a debt agreement whose term has already begun,    must THROW.  Similarly, if this method is called by any contract other    than the current DebtKernel, must THROW."
      }
    }
  }
}