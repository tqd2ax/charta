"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebtRegistry = {
    "contractName": "DebtRegistry",
    "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "EDIT_CONTEXT",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x2be84c66"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x3f4ba83a"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "paused",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x5c975abb"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x8456cb59"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x8da5cb5b"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "INSERT_CONTEXT",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x8dadc81d"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xf2fde38b"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "agreementId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "name": "beneficiary",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "underwriter",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "underwriterRiskRating",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "termsContract",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "termsContractParameters",
                    "type": "bytes32"
                }
            ],
            "name": "LogInsertEntry",
            "type": "event",
            "signature": "0x10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "agreementId",
                    "type": "bytes32"
                },
                {
                    "indexed": true,
                    "name": "previousBeneficiary",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newBeneficiary",
                    "type": "address"
                }
            ],
            "name": "LogModifyEntryBeneficiary",
            "type": "event",
            "signature": "0x7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d8094"
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
            "name": "Authorized",
            "type": "event",
            "signature": "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5"
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
            "type": "event",
            "signature": "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "Pause",
            "type": "event",
            "signature": "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625"
        },
        {
            "anonymous": false,
            "inputs": [],
            "name": "Unpause",
            "type": "event",
            "signature": "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event",
            "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "doesEntryExist",
            "outputs": [
                {
                    "name": "exists",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x9758af1e"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_version",
                    "type": "address"
                },
                {
                    "name": "_beneficiary",
                    "type": "address"
                },
                {
                    "name": "_debtor",
                    "type": "address"
                },
                {
                    "name": "_underwriter",
                    "type": "address"
                },
                {
                    "name": "_underwriterRiskRating",
                    "type": "uint256"
                },
                {
                    "name": "_termsContract",
                    "type": "address"
                },
                {
                    "name": "_termsContractParameters",
                    "type": "bytes32"
                },
                {
                    "name": "_salt",
                    "type": "uint256"
                }
            ],
            "name": "insert",
            "outputs": [
                {
                    "name": "_agreementId",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xcf9df5eb"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                },
                {
                    "name": "newBeneficiary",
                    "type": "address"
                }
            ],
            "name": "modifyBeneficiary",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x5969549e"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "agent",
                    "type": "address"
                }
            ],
            "name": "addAuthorizedInsertAgent",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xad655998"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "agent",
                    "type": "address"
                }
            ],
            "name": "addAuthorizedEditAgent",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x42cc6b04"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "agent",
                    "type": "address"
                }
            ],
            "name": "revokeInsertAgentAuthorization",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0xc205e64c"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "agent",
                    "type": "address"
                }
            ],
            "name": "revokeEditAgentAuthorization",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x93299395"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "get",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x8eaa6ac0"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "getBeneficiary",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xba20dda4"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "getTermsContract",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xf6f494c9"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "getTermsContractParameters",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x314a522e"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "getTerms",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                },
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x6be39bda"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "getIssuanceBlockTimestamp",
            "outputs": [
                {
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xd69dbf63"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getAuthorizedInsertAgents",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x64a666f2"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getAuthorizedEditAgents",
            "outputs": [
                {
                    "name": "",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xf94df678"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "debtor",
                    "type": "address"
                }
            ],
            "name": "getDebtorsDebts",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x8ad1d846"
        }
    ],
    "bytecode": "0x606060405260008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506123298061006d6000396000f300606060405260043610610133576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632be84c6614610138578063314a522e146101c65780633f4ba83a1461020957806342cc6b041461021e5780635969549e146102575780635c975abb1461029d57806364a666f2146102ca5780636be39bda146103345780638456cb59146103aa5780638ad1d846146103bf5780638da5cb5b1461044d5780638dadc81d146104a25780638eaa6ac014610530578063932993951461064d5780639758af1e14610686578063ad655998146106c5578063ba20dda4146106fe578063c205e64c14610765578063cf9df5eb1461079e578063d69dbf631461088e578063f2fde38b146108c9578063f6f494c914610902578063f94df67814610969575b600080fd5b341561014357600080fd5b61014b6109d3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561018b578082015181840152602081019050610170565b50505050905090810190601f1680156101b85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101d157600080fd5b6101eb600480803560001916906020019091905050610a0c565b60405180826000191660001916815260200191505060405180910390f35b341561021457600080fd5b61021c610a4a565b005b341561022957600080fd5b610255600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b08565b005b341561026257600080fd5b61029b60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bb1565b005b34156102a857600080fd5b6102b0610d44565b604051808215151515815260200191505060405180910390f35b34156102d557600080fd5b6102dd610d57565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610320578082015181840152602081019050610305565b505050509050019250505060405180910390f35b341561033f57600080fd5b610359600480803560001916906020019091905050610d6e565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600019166000191681526020019250505060405180910390f35b34156103b557600080fd5b6103bd610dee565b005b34156103ca57600080fd5b6103f6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610eae565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561043957808201518184015260208101905061041e565b505050509050019250505060405180910390f35b341561045857600080fd5b610460610f4f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104ad57600080fd5b6104b5610f74565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f55780820151818401526020810190506104da565b50505050905090810190601f1680156105225780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561053b57600080fd5b610555600480803560001916906020019091905050610fad565b604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200197505050505050505060405180910390f35b341561065857600080fd5b610684600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061112a565b005b341561069157600080fd5b6106ab6004808035600019169060200190919050506111d3565b604051808215151515815260200191505060405180910390f35b34156106d057600080fd5b6106fc600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061124a565b005b341561070957600080fd5b6107236004808035600019169060200190919050506112f3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561077057600080fd5b61079c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611351565b005b34156107a957600080fd5b610870600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506113fa565b60405180826000191660001916815260200191505060405180910390f35b341561089957600080fd5b6108b3600480803560001916906020019091905050611835565b6040518082815260200191505060405180910390f35b34156108d457600080fd5b610900600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611873565b005b341561090d57600080fd5b6109276004808035600019169060200190919050506119c8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561097457600080fd5b61097c611a26565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156109bf5780820151818401526020810190506109a4565b505050509050019250505060405180910390f35b6040805190810160405280601281526020017f646562742d72656769737472792d65646974000000000000000000000000000081525081565b600081610a18816111d3565b1515610a2357600080fd5b60016000846000191660001916815260200190815260200160002060050154915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610aa557600080fd5b600060149054906101000a900460ff161515610ac057600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b6357600080fd5b610bae816040805190810160405280601281526020017f646562742d72656769737472792d6564697400000000000000000000000000008152506006611a3d9092919063ffffffff16565b50565b6000610bc7336006611c1990919063ffffffff16565b1515610bd257600080fd5b600060149054906101000a900460ff16151515610bee57600080fd5b82610bf8816111d3565b1515610c0357600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c4057600080fd5b60016000866000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692508360016000876000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1686600019167f7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d809460405160405180910390a45050505050565b600060149054906101000a900460ff1681565b610d5f61216e565b610d696003611c72565b905090565b60008082610d7b816111d3565b1515610d8657600080fd5b60016000856000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008660001916600019168152602001908152602001600020600501549250925050915091565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e4957600080fd5b600060149054906101000a900460ff16151515610e6557600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b610eb6612182565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610f4357602002820191906000526020600020905b81546000191681526020019060010190808311610f2b575b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040805190810160405280601481526020017f646562742d72656769737472792d696e7365727400000000000000000000000081525081565b600080600080600080600060016000896000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008a6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008b6000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008c6000191660001916815260200190815260200160002060030154600160008d6000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008e6000191660001916815260200190815260200160002060050154600160008f60001916600019168152602001908152602001600020600601549650965096509650965096509650919395979092949650565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561118557600080fd5b6111d0816040805190810160405280601281526020017f646562742d72656769737472792d6564697400000000000000000000000000008152506006611d0a9092919063ffffffff16565b50565b60008073ffffffffffffffffffffffffffffffffffffffff1660016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156112a557600080fd5b6112f0816040805190810160405280601481526020017f646562742d72656769737472792d696e736572740000000000000000000000008152506003611a3d9092919063ffffffff16565b50565b6000816112ff816111d3565b151561130a57600080fd5b60016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156113ac57600080fd5b6113f7816040805190810160405280601481526020017f646562742d72656769737472792d696e736572740000000000000000000000008152506003611d0a9092919063ffffffff16565b50565b6000611404612196565b600061141a336003611c1990919063ffffffff16565b151561142557600080fd5b600060149054906101000a900460ff1615151561144157600080fd5b89600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561147e57600080fd5b60e0604051908101604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018760001916815260200142815250925061151b838b87612000565b9150600073ffffffffffffffffffffffffffffffffffffffff1660016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561159657600080fd5b8260016000846000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005019060001916905560c08201518160060155905050600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806001018281611746919061222f565b916000526020600020900160008490919091509060001916905550826040015173ffffffffffffffffffffffffffffffffffffffff16836020015173ffffffffffffffffffffffffffffffffffffffff1683600019167f10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240866060015187608001518860a00151604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260001916600019168152602001935050505060405180910390a481935050505098975050505050505050565b600081611841816111d3565b151561184c57600080fd5b60016000846000191660001916815260200190815260200160002060060154915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156118ce57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561190a57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000816119d4816111d3565b15156119df57600080fd5b60016000846000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b611a2e61216e565b611a386006611c72565b905090565b611a478383612159565b1515611a5257600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018054806001018281611ac2919061225b565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015611bda578082015181840152602081019050611bbf565b50505050905090810190601f168015611c075780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611c7a61216e565b81600201805480602002602001604051908101604052809291908181526020018280548015611cfe57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611cb4575b50505050509050919050565b6000806000611d198686611c19565b1515611d2457600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515611d8657fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515611e1757fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515611efc57fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081611f449190612287565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015611fbe578082015181840152602081019050611fa3565b50505050905090810190601f168015611feb5780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b60008360000151838560400151866060015187608001518860a0015187604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018360001916600019168152602001828152602001975050505050505050604051809103902090509392505050565b60006121658383611c19565b15905092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008019168152602001600081525090565b8154818355818115116122565781836000526020600020918201910161225591906122b3565b5b505050565b8154818355818115116122825781836000526020600020918201910161228191906122d8565b5b505050565b8154818355818115116122ae578183600052602060002091820191016122ad91906122d8565b5b505050565b6122d591905b808211156122d15760008160009055506001016122b9565b5090565b90565b6122fa91905b808211156122f65760008160009055506001016122de565b5090565b905600a165627a7a7230582073cdf74b8413206431cf71913e8f737927e29cab11deda328a2489faaaee8dcf0029",
    "deployedBytecode": "0x606060405260043610610133576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632be84c6614610138578063314a522e146101c65780633f4ba83a1461020957806342cc6b041461021e5780635969549e146102575780635c975abb1461029d57806364a666f2146102ca5780636be39bda146103345780638456cb59146103aa5780638ad1d846146103bf5780638da5cb5b1461044d5780638dadc81d146104a25780638eaa6ac014610530578063932993951461064d5780639758af1e14610686578063ad655998146106c5578063ba20dda4146106fe578063c205e64c14610765578063cf9df5eb1461079e578063d69dbf631461088e578063f2fde38b146108c9578063f6f494c914610902578063f94df67814610969575b600080fd5b341561014357600080fd5b61014b6109d3565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561018b578082015181840152602081019050610170565b50505050905090810190601f1680156101b85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101d157600080fd5b6101eb600480803560001916906020019091905050610a0c565b60405180826000191660001916815260200191505060405180910390f35b341561021457600080fd5b61021c610a4a565b005b341561022957600080fd5b610255600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b08565b005b341561026257600080fd5b61029b60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610bb1565b005b34156102a857600080fd5b6102b0610d44565b604051808215151515815260200191505060405180910390f35b34156102d557600080fd5b6102dd610d57565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610320578082015181840152602081019050610305565b505050509050019250505060405180910390f35b341561033f57600080fd5b610359600480803560001916906020019091905050610d6e565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600019166000191681526020019250505060405180910390f35b34156103b557600080fd5b6103bd610dee565b005b34156103ca57600080fd5b6103f6600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610eae565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561043957808201518184015260208101905061041e565b505050509050019250505060405180910390f35b341561045857600080fd5b610460610f4f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104ad57600080fd5b6104b5610f74565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f55780820151818401526020810190506104da565b50505050905090810190601f1680156105225780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561053b57600080fd5b610555600480803560001916906020019091905050610fad565b604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200197505050505050505060405180910390f35b341561065857600080fd5b610684600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061112a565b005b341561069157600080fd5b6106ab6004808035600019169060200190919050506111d3565b604051808215151515815260200191505060405180910390f35b34156106d057600080fd5b6106fc600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061124a565b005b341561070957600080fd5b6107236004808035600019169060200190919050506112f3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561077057600080fd5b61079c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611351565b005b34156107a957600080fd5b610870600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506113fa565b60405180826000191660001916815260200191505060405180910390f35b341561089957600080fd5b6108b3600480803560001916906020019091905050611835565b6040518082815260200191505060405180910390f35b34156108d457600080fd5b610900600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611873565b005b341561090d57600080fd5b6109276004808035600019169060200190919050506119c8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561097457600080fd5b61097c611a26565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156109bf5780820151818401526020810190506109a4565b505050509050019250505060405180910390f35b6040805190810160405280601281526020017f646562742d72656769737472792d65646974000000000000000000000000000081525081565b600081610a18816111d3565b1515610a2357600080fd5b60016000846000191660001916815260200190815260200160002060050154915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610aa557600080fd5b600060149054906101000a900460ff161515610ac057600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610b6357600080fd5b610bae816040805190810160405280601281526020017f646562742d72656769737472792d6564697400000000000000000000000000008152506006611a3d9092919063ffffffff16565b50565b6000610bc7336006611c1990919063ffffffff16565b1515610bd257600080fd5b600060149054906101000a900460ff16151515610bee57600080fd5b82610bf8816111d3565b1515610c0357600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c4057600080fd5b60016000866000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692508360016000876000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1686600019167f7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d809460405160405180910390a45050505050565b600060149054906101000a900460ff1681565b610d5f61216e565b610d696003611c72565b905090565b60008082610d7b816111d3565b1515610d8657600080fd5b60016000856000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008660001916600019168152602001908152602001600020600501549250925050915091565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e4957600080fd5b600060149054906101000a900460ff16151515610e6557600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b610eb6612182565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610f4357602002820191906000526020600020905b81546000191681526020019060010190808311610f2b575b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040805190810160405280601481526020017f646562742d72656769737472792d696e7365727400000000000000000000000081525081565b600080600080600080600060016000896000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008a6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008b6000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008c6000191660001916815260200190815260200160002060030154600160008d6000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008e6000191660001916815260200190815260200160002060050154600160008f60001916600019168152602001908152602001600020600601549650965096509650965096509650919395979092949650565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561118557600080fd5b6111d0816040805190810160405280601281526020017f646562742d72656769737472792d6564697400000000000000000000000000008152506006611d0a9092919063ffffffff16565b50565b60008073ffffffffffffffffffffffffffffffffffffffff1660016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156112a557600080fd5b6112f0816040805190810160405280601481526020017f646562742d72656769737472792d696e736572740000000000000000000000008152506003611a3d9092919063ffffffff16565b50565b6000816112ff816111d3565b151561130a57600080fd5b60016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156113ac57600080fd5b6113f7816040805190810160405280601481526020017f646562742d72656769737472792d696e736572740000000000000000000000008152506003611d0a9092919063ffffffff16565b50565b6000611404612196565b600061141a336003611c1990919063ffffffff16565b151561142557600080fd5b600060149054906101000a900460ff1615151561144157600080fd5b89600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561147e57600080fd5b60e0604051908101604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018873ffffffffffffffffffffffffffffffffffffffff1681526020018760001916815260200142815250925061151b838b87612000565b9150600073ffffffffffffffffffffffffffffffffffffffff1660016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561159657600080fd5b8260016000846000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005019060001916905560c08201518160060155905050600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806001018281611746919061222f565b916000526020600020900160008490919091509060001916905550826040015173ffffffffffffffffffffffffffffffffffffffff16836020015173ffffffffffffffffffffffffffffffffffffffff1683600019167f10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240866060015187608001518860a00151604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260001916600019168152602001935050505060405180910390a481935050505098975050505050505050565b600081611841816111d3565b151561184c57600080fd5b60016000846000191660001916815260200190815260200160002060060154915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156118ce57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561190a57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000816119d4816111d3565b15156119df57600080fd5b60016000846000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b611a2e61216e565b611a386006611c72565b905090565b611a478383612159565b1515611a5257600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018054806001018281611ac2919061225b565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015611bda578082015181840152602081019050611bbf565b50505050905090810190601f168015611c075780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611c7a61216e565b81600201805480602002602001604051908101604052809291908181526020018280548015611cfe57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611cb4575b50505050509050919050565b6000806000611d198686611c19565b1515611d2457600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515611d8657fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515611e1757fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515611efc57fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081611f449190612287565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015611fbe578082015181840152602081019050611fa3565b50505050905090810190601f168015611feb5780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b60008360000151838560400151866060015187608001518860a0015187604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018360001916600019168152602001828152602001975050505050505050604051809103902090509392505050565b60006121658383611c19565b15905092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008019168152602001600081525090565b8154818355818115116122565781836000526020600020918201910161225591906122b3565b5b505050565b8154818355818115116122825781836000526020600020918201910161228191906122d8565b5b505050565b8154818355818115116122ae578183600052602060002091820191016122ad91906122d8565b5b505050565b6122d591905b808211156122d15760008160009055506001016122b9565b5090565b90565b6122fa91905b808211156122f65760008160009055506001016122de565b5090565b905600a165627a7a7230582073cdf74b8413206431cf71913e8f737927e29cab11deda328a2489faaaee8dcf0029",
    "sourceMap": "1124:8996:4:-;;;268:5:37;247:26;;;;;;;;;;;;;;;;;;;;509:10:39;501:5;;:18;;;;;;;;;;;;;;;;;;1124:8996:4;;;;;;",
    "deployedSourceMap": "1124:8996:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1975:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7833:221:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:37;;;;;;;;;;;;;;5634:152:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;4712:495;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;247:26:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8885:164:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;8179:284:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85:37;;;;;;;;;;;;;;9457:145:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;238:20:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1907:62:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6659:533:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6239:168;;;;;;;;;;;;;;;;;;;;;;;;;;;;3027:178;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5336:158;;;;;;;;;;;;;;;;;;;;;;;;;;;;7265:196;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5920:174;;;;;;;;;;;;;;;;;;;;;;;;;;;;3371:1170;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8565:226;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;7545:201:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9154:160;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;1975:58:4;;;;;;;;;;;;;;;;;;;;:::o;7833:221::-;7972:7;7942:11;2766:27;2781:11;2766:14;:27::i;:::-;2758:36;;;;;;;;8002:8;:21;8011:11;8002:21;;;;;;;;;;;;;;;;;:45;;;7995:52;;7833:221;;;;:::o;833:87:37:-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:37;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;5634:152:4:-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;5728:51:4;5759:5;5766:12;;;;;;;;;;;;;;;;;;5728:20;:30;;:51;;;;;:::i;:::-;5634:152;:::o;4712:495::-;4944:27;2632:45;2666:10;2632:20;:33;;:45;;;;:::i;:::-;2624:54;;;;;;;;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;4874:11:4;2766:27;2781:11;2766:14;:27::i;:::-;2758:36;;;;;;;;4914:14;2908:1;2885:25;;:11;:25;;;;2877:34;;;;;;;;4974:8;:21;4983:11;4974:21;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;4944:63;;5054:14;5018:8;:21;5027:11;5018:21;;;;;;;;;;;;;;;;;:33;;;:50;;;;;;;;;;;;;;;;;;5176:14;5079:121;;5143:19;5079:121;;5118:11;5079:121;;;;;;;;;;;;;2804:1;429::37;4712:495:4;;;:::o;247:26:37:-;;;;;;;;;;;;;:::o;8885:164:4:-;8966:9;;:::i;:::-;8998:44;:22;:42;:44::i;:::-;8991:51;;8885:164;:::o;8179:284::-;8299:7;8308;8270:11;2766:27;2781:11;2766:14;:27::i;:::-;2758:36;;;;;;;;8352:8;:21;8361:11;8352:21;;;;;;;;;;;;;;;;;:35;;;;;;;;;;;;8401:8;:21;8410:11;8401:21;;;;;;;;;;;;;;;;;:45;;;8331:125;;;;8179:284;;;;:::o;666:85:37:-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;9457:145:4:-;9542:9;;:::i;:::-;9574:13;:21;9588:6;9574:21;;;;;;;;;;;;;;;9567:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9457:145;;;:::o;238:20:39:-;;;;;;;;;;;;;:::o;1907:62:4:-;;;;;;;;;;;;;;;;;;;;:::o;6659:533::-;6737:7;6746;6755;6764:4;6770:7;6779;6788:4;6829:8;:21;6838:11;6829:21;;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;6872:8;:21;6881:11;6872:21;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;6919:8;:21;6928:11;6919:21;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;6966:8;:21;6975:11;6966:21;;;;;;;;;;;;;;;;;:43;;;7023:8;:21;7032:11;7023:21;;;;;;;;;;;;;;;;;:35;;;;;;;;;;;;7072:8;:21;7081:11;7072:21;;;;;;;;;;;;;;;;;:45;;;7131:8;:21;7140:11;7131:21;;;;;;;;;;;;;;;;;:44;;;6808:377;;;;;;;;;;;;;;6659:533;;;;;;;;;:::o;6239:168::-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;6339:61:4;6380:5;6387:12;;;;;;;;;;;;;;;;;;6339:20;:40;;:61;;;;;:::i;:::-;6239:168;:::o;3027:178::-;3117:11;3196:1;3151:47;;:8;:21;3160:11;3151:21;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;:47;;;;3144:54;;3027:178;;;:::o;5336:158::-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;5432:55:4;5465:5;5472:14;;;;;;;;;;;;;;;;;;5432:22;:32;;:55;;;;;:::i;:::-;5336:158;:::o;7265:196::-;7391:7;7362:11;2766:27;2781:11;2766:14;:27::i;:::-;2758:36;;;;;;;;7421:8;:21;7430:11;7421:21;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;7414:40;;7265:196;;;;:::o;5920:174::-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;6022:65:4;6065:5;6072:14;;;;;;;;;;;;;;;;;;6022:22;:42;;:65;;;;;:::i;:::-;5920:174;:::o;3371:1170::-;3761:20;3797:18;;:::i;:::-;4049:19;2510:47;2546:10;2510:22;:35;;:47;;;;:::i;:::-;2502:56;;;;;;;;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;3730:12:4;2908:1;2885:25;;:11;:25;;;;2877:34;;;;;;;;3818:220;;;;;;;;;3837:8;3818:220;;;;;;3859:12;3818:220;;;;;;3885:12;3818:220;;;;;;3911:22;3818:220;;;;3947:14;3818:220;;;;;;3975:24;3818:220;;;;;;;4013:15;3818:220;;;3797:241;;4071:38;4087:5;4094:7;4103:5;4071:15;:38::i;:::-;4049:60;;4173:1;4128:47;;:8;:21;4137:11;4128:21;;;;;;;;;;;;;;;;;:33;;;;;;;;;;;;:47;;;4120:56;;;;;;;;4211:5;4187:8;:21;4196:11;4187:21;;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4226:13;:22;4240:7;4226:22;;;;;;;;;;;;;;;:40;;;;;;;;;;;:::i;:::-;;;;;;;;;;4254:11;4226:40;;;;;;;;;;;;4361:5;:17;;;4277:228;;4330:5;:17;;;4277:228;;4305:11;4277:228;;;;4392:5;:27;;;4433:5;:19;;;4466:5;:29;;;4277:228;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4523:11;4516:18;;429:1:37;3371:1170:4;;;;;;;;;;;;:::o;8565:226::-;8703:14;8673:11;2766:27;2781:11;2766:14;:27::i;:::-;2758:36;;;;;;;;8740:8;:21;8749:11;8740:21;;;;;;;;;;;;;;;;;:44;;;8733:51;;8565:226;;;;:::o;832:169:39:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;7545:201:4:-;7674:7;7644:11;2766:27;2781:11;2766:14;:27::i;:::-;2758:36;;;;;;;;7704:8;:21;7713:11;7704:21;;;;;;;;;;;;;;;;;:35;;;;;;;;;;;;7697:42;;7545:201;;;;:::o;9154:160::-;9233:9;;:::i;:::-;9265:42;:20;:40;:42::i;:::-;9258:49;;9154:160;:::o;1732:383:17:-;1884:28;1900:4;1906:5;1884:15;:28::i;:::-;1876:37;;;;;;;;1949:4;1924;:15;;:22;1940:5;1924:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1963:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1990:5;1963:33;;;;;;;;;;;;;;;;;;;;;;;2064:1;2033:4;:21;;:28;;;;:32;2006:4;:17;;:24;2024:5;2006:24;;;;;;;;;;;;;;;:59;;;;2086:5;2075:33;;;2093:14;2075:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1732:383:17;;;:::o;3295:166::-;3405:4;3432;:15;;:22;3448:5;3432:22;;;;;;;;;;;;;;;;;;;;;;;;;3425:29;;3295:166;;;;:::o;3646:162::-;3748:9;;:::i;:::-;3780:4;:21;;3773:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3646:162;;;:::o;2121:1168::-;2489:25;2551:23;2619:19;2452:25;2465:4;2471:5;2452:12;:25::i;:::-;2444:34;;;;;;;;2517:4;:17;;:24;2535:5;2517:24;;;;;;;;;;;;;;;;2489:52;;2608:1;2577:4;:21;;:28;;;;:32;2551:58;;2641:4;:21;;2663:18;2641:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;2619:63;;2745:4;:15;;:22;2761:5;2745:22;;;;;;;;;;;;;;;;2738:29;;;;;;;;;;;2894:11;2848:4;:21;;2870:20;2848:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;3009:20;2976:4;:17;;:30;2994:11;2976:30;;;;;;;;;;;;;;;:53;;;;3046:4;:17;;:24;3064:5;3046:24;;;;;;;;;;;;;;;3039:31;;;3144:4;:21;;3166:18;3144:41;;;;;;;;;;;;;;;;;;;3137:48;;;;;;;;;;;3227:1;3195:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;3260:5;3239:43;;;3267:14;3239:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2121:1168:17;;;;;;:::o;9728:390:4:-;9842:7;9895:6;:14;;;9923:7;9944:6;:18;;;9976:6;:28;;;10018:6;:20;;;10052:6;:30;;;10096:5;9872:239;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9865:246;;9728:390;;;;;:::o;3467:173:17:-;3580:4;3608:25;3621:4;3627:5;3608:12;:25::i;:::-;3607:26;3600:33;;3467:173;;;;:::o;1124:8996:4:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport { PermissionsLib, PermissionEvents } from \"./libraries/PermissionsLib.sol\";\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\n\n\n/**\n * The DebtRegistry stores the parameters and beneficiaries of all debt agreements in\n * Dharma protocol.  It authorizes a limited number of agents to\n * perform mutations on it -- those agents can be changed at any\n * time by the contract's owner.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract DebtRegistry is Pausable, PermissionEvents {\n    using SafeMath for uint;\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    struct Entry {\n        address version;\n        address beneficiary;\n        address underwriter;\n        uint underwriterRiskRating;\n        address termsContract;\n        bytes32 termsContractParameters;\n        uint issuanceBlockTimestamp;\n    }\n\n    // Primary registry mapping agreement IDs to their corresponding entries\n    mapping (bytes32 => Entry) internal registry;\n\n    // Maps debtor addresses to a list of their debts' agreement IDs\n    mapping (address => bytes32[]) internal debtorToDebts;\n\n    PermissionsLib.Permissions internal entryInsertPermissions;\n    PermissionsLib.Permissions internal entryEditPermissions;\n\n    string public constant INSERT_CONTEXT = \"debt-registry-insert\";\n    string public constant EDIT_CONTEXT = \"debt-registry-edit\";\n\n    event LogInsertEntry(\n        bytes32 indexed agreementId,\n        address indexed beneficiary,\n        address indexed underwriter,\n        uint underwriterRiskRating,\n        address termsContract,\n        bytes32 termsContractParameters\n    );\n\n    event LogModifyEntryBeneficiary(\n        bytes32 indexed agreementId,\n        address indexed previousBeneficiary,\n        address indexed newBeneficiary\n    );\n\n    modifier onlyAuthorizedToInsert() {\n        require(entryInsertPermissions.isAuthorized(msg.sender));\n        _;\n    }\n\n    modifier onlyAuthorizedToEdit() {\n        require(entryEditPermissions.isAuthorized(msg.sender));\n        _;\n    }\n\n    modifier onlyExtantEntry(bytes32 agreementId) {\n        require(doesEntryExist(agreementId));\n        _;\n    }\n\n    modifier nonNullBeneficiary(address beneficiary) {\n        require(beneficiary != address(0));\n        _;\n    }\n\n    /* Ensures an entry with the specified agreement ID exists within the debt registry. */\n    function doesEntryExist(bytes32 agreementId)\n        public\n        view\n        returns (bool exists)\n    {\n        return registry[agreementId].beneficiary != address(0);\n    }\n\n    /**\n     * Inserts a new entry into the registry, if the entry is valid and sender is\n     * authorized to make 'insert' mutations to the registry.\n     */\n    function insert(\n        address _version,\n        address _beneficiary,\n        address _debtor,\n        address _underwriter,\n        uint _underwriterRiskRating,\n        address _termsContract,\n        bytes32 _termsContractParameters,\n        uint _salt\n    )\n        public\n        onlyAuthorizedToInsert\n        whenNotPaused\n        nonNullBeneficiary(_beneficiary)\n        returns (bytes32 _agreementId)\n    {\n        Entry memory entry = Entry(\n            _version,\n            _beneficiary,\n            _underwriter,\n            _underwriterRiskRating,\n            _termsContract,\n            _termsContractParameters,\n            block.timestamp\n        );\n\n        bytes32 agreementId = _getAgreementId(entry, _debtor, _salt);\n\n        require(registry[agreementId].beneficiary == address(0));\n\n        registry[agreementId] = entry;\n        debtorToDebts[_debtor].push(agreementId);\n\n        LogInsertEntry(\n            agreementId,\n            entry.beneficiary,\n            entry.underwriter,\n            entry.underwriterRiskRating,\n            entry.termsContract,\n            entry.termsContractParameters\n        );\n\n        return agreementId;\n    }\n\n    /**\n     * Modifies the beneficiary of a debt issuance, if the sender\n     * is authorized to make 'modifyBeneficiary' mutations to\n     * the registry.\n     */\n    function modifyBeneficiary(bytes32 agreementId, address newBeneficiary)\n        public\n        onlyAuthorizedToEdit\n        whenNotPaused\n        onlyExtantEntry(agreementId)\n        nonNullBeneficiary(newBeneficiary)\n    {\n        address previousBeneficiary = registry[agreementId].beneficiary;\n\n        registry[agreementId].beneficiary = newBeneficiary;\n\n        LogModifyEntryBeneficiary(\n            agreementId,\n            previousBeneficiary,\n            newBeneficiary\n        );\n    }\n\n    /**\n     * Adds an address to the list of agents authorized\n     * to make 'insert' mutations to the registry.\n     */\n    function addAuthorizedInsertAgent(address agent)\n        public\n        onlyOwner\n    {\n        entryInsertPermissions.authorize(agent, INSERT_CONTEXT);\n    }\n\n    /**\n     * Adds an address to the list of agents authorized\n     * to make 'modifyBeneficiary' mutations to the registry.\n     */\n    function addAuthorizedEditAgent(address agent)\n        public\n        onlyOwner\n    {\n        entryEditPermissions.authorize(agent, EDIT_CONTEXT);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized\n     * to make 'insert' mutations to the registry.\n     */\n    function revokeInsertAgentAuthorization(address agent)\n        public\n        onlyOwner\n    {\n        entryInsertPermissions.revokeAuthorization(agent, INSERT_CONTEXT);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized\n     * to make 'modifyBeneficiary' mutations to the registry.\n     */\n    function revokeEditAgentAuthorization(address agent)\n        public\n        onlyOwner\n    {\n        entryEditPermissions.revokeAuthorization(agent, EDIT_CONTEXT);\n    }\n\n    /**\n     * Returns the parameters of a debt issuance in the registry.\n     *\n     * TODO(kayvon): protect this function with our `onlyExtantEntry` modifier once the restriction\n     * on the size of the call stack has been addressed.\n     */\n    function get(bytes32 agreementId)\n        public\n        view\n        returns(address, address, address, uint, address, bytes32, uint)\n    {\n        return (\n            registry[agreementId].version,\n            registry[agreementId].beneficiary,\n            registry[agreementId].underwriter,\n            registry[agreementId].underwriterRiskRating,\n            registry[agreementId].termsContract,\n            registry[agreementId].termsContractParameters,\n            registry[agreementId].issuanceBlockTimestamp\n        );\n    }\n\n    /**\n     * Returns the beneficiary of a given issuance\n     */\n    function getBeneficiary(bytes32 agreementId)\n        public\n        view\n        onlyExtantEntry(agreementId)\n        returns(address)\n    {\n        return registry[agreementId].beneficiary;\n    }\n\n    /**\n     * Returns the terms contract address of a given issuance\n     */\n    function getTermsContract(bytes32 agreementId)\n        public\n        view\n        onlyExtantEntry(agreementId)\n        returns (address)\n    {\n        return registry[agreementId].termsContract;\n    }\n\n    /**\n     * Returns the terms contract parameters of a given issuance\n     */\n    function getTermsContractParameters(bytes32 agreementId)\n        public\n        view\n        onlyExtantEntry(agreementId)\n        returns (bytes32)\n    {\n        return registry[agreementId].termsContractParameters;\n    }\n\n    /**\n     * Returns a tuple of the terms contract and its associated parameters\n     * for a given issuance\n     */\n    function getTerms(bytes32 agreementId)\n        public\n        view\n        onlyExtantEntry(agreementId)\n        returns(address, bytes32)\n    {\n        return (\n            registry[agreementId].termsContract,\n            registry[agreementId].termsContractParameters\n        );\n    }\n\n    /**\n     * Returns the timestamp of the block at which a debt agreement was issued.\n     */\n    function getIssuanceBlockTimestamp(bytes32 agreementId)\n        public\n        view\n        onlyExtantEntry(agreementId)\n        returns (uint timestamp)\n    {\n        return registry[agreementId].issuanceBlockTimestamp;\n    }\n\n    /**\n     * Returns the list of agents authorized to make 'insert' mutations\n     */\n    function getAuthorizedInsertAgents()\n        public\n        view\n        returns(address[])\n    {\n        return entryInsertPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Returns the list of agents authorized to make 'modifyBeneficiary' mutations\n     */\n    function getAuthorizedEditAgents()\n        public\n        view\n        returns(address[])\n    {\n        return entryEditPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Returns the list of debt agreements a debtor is party to,\n     * with each debt agreement listed by agreement ID.\n     */\n    function getDebtorsDebts(address debtor)\n        public\n        view\n        returns(bytes32[])\n    {\n        return debtorToDebts[debtor];\n    }\n\n    /**\n     * Helper function for computing the hash of a given issuance,\n     * and, in turn, its agreementId\n     */\n    function _getAgreementId(Entry _entry, address _debtor, uint _salt)\n        internal\n        pure\n        returns(bytes32)\n    {\n        return keccak256(\n            _entry.version,\n            _debtor,\n            _entry.underwriter,\n            _entry.underwriterRiskRating,\n            _entry.termsContract,\n            _entry.termsContractParameters,\n            _salt\n        );\n    }\n}\n",
    "sourcePath": "/Users/trqdinh/Development/loot/charta/contracts/DebtRegistry.sol",
    "ast": {
        "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/DebtRegistry.sol",
        "exportedSymbols": {
            "DebtRegistry": [
                3166
            ]
        },
        "id": 3167,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2640,
                "literals": [
                    "solidity",
                    "0.4",
                    ".18"
                ],
                "nodeType": "PragmaDirective",
                "src": "584:23:4"
            },
            {
                "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/libraries/PermissionsLib.sol",
                "file": "./libraries/PermissionsLib.sol",
                "id": 2643,
                "nodeType": "ImportDirective",
                "scope": 3167,
                "sourceUnit": 6280,
                "src": "609:82:4",
                "symbolAliases": [
                    {
                        "foreign": 2641,
                        "local": null
                    },
                    {
                        "foreign": 2642,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
                "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
                "id": 2644,
                "nodeType": "ImportDirective",
                "scope": 3167,
                "sourceUnit": 14104,
                "src": "692:55:4",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                "id": 2645,
                "nodeType": "ImportDirective",
                "scope": 3167,
                "sourceUnit": 14006,
                "src": "748:60:4",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "baseContracts": [
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 2646,
                            "name": "Pausable",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 14005,
                            "src": "1149:8:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Pausable_$14005",
                                "typeString": "contract Pausable"
                            }
                        },
                        "id": 2647,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1149:8:4"
                    },
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 2648,
                            "name": "PermissionEvents",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6075,
                            "src": "1159:16:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_PermissionEvents_$6075",
                                "typeString": "contract PermissionEvents"
                            }
                        },
                        "id": 2649,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1159:16:4"
                    }
                ],
                "contractDependencies": [
                    6075,
                    14005,
                    14159
                ],
                "contractKind": "contract",
                "documentation": "The DebtRegistry stores the parameters and beneficiaries of all debt agreements in\nDharma protocol.  It authorizes a limited number of agents to\nperform mutations on it -- those agents can be changed at any\ntime by the contract's owner.\n * Author: Nadav Hollander -- Github: nadavhollander",
                "fullyImplemented": true,
                "id": 3166,
                "linearizedBaseContracts": [
                    3166,
                    6075,
                    14005,
                    14159
                ],
                "name": "DebtRegistry",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 2652,
                        "libraryName": {
                            "contractScope": null,
                            "id": 2650,
                            "name": "SafeMath",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 14103,
                            "src": "1188:8:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SafeMath_$14103",
                                "typeString": "library SafeMath"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "1182:24:4",
                        "typeName": {
                            "id": 2651,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "1201:4:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 2655,
                        "libraryName": {
                            "contractScope": null,
                            "id": 2653,
                            "name": "PermissionsLib",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6279,
                            "src": "1217:14:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_PermissionsLib_$6279",
                                "typeString": "library PermissionsLib"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "1211:52:4",
                        "typeName": {
                            "contractScope": null,
                            "id": 2654,
                            "name": "PermissionsLib.Permissions",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6099,
                            "src": "1236:26:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                                "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                        }
                    },
                    {
                        "canonicalName": "DebtRegistry.Entry",
                        "id": 2670,
                        "members": [
                            {
                                "constant": false,
                                "id": 2657,
                                "name": "version",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1292:15:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 2656,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1292:7:4",
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
                                "id": 2659,
                                "name": "beneficiary",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1317:19:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 2658,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1317:7:4",
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
                                "id": 2661,
                                "name": "underwriter",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1346:19:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 2660,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1346:7:4",
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
                                "id": 2663,
                                "name": "underwriterRiskRating",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1375:26:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2662,
                                    "name": "uint",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1375:4:4",
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
                                "id": 2665,
                                "name": "termsContract",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1411:21:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 2664,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1411:7:4",
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
                                "id": 2667,
                                "name": "termsContractParameters",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1442:31:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                },
                                "typeName": {
                                    "id": 2666,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1442:7:4",
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
                                "id": 2669,
                                "name": "issuanceBlockTimestamp",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1483:27:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2668,
                                    "name": "uint",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1483:4:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "Entry",
                        "nodeType": "StructDefinition",
                        "scope": 3166,
                        "src": "1269:248:4",
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 2674,
                        "name": "registry",
                        "nodeType": "VariableDeclaration",
                        "scope": 3166,
                        "src": "1600:44:4",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                        },
                        "typeName": {
                            "id": 2673,
                            "keyType": {
                                "id": 2671,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "1609:7:4",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1600:26:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                            },
                            "valueType": {
                                "contractScope": null,
                                "id": 2672,
                                "name": "Entry",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 2670,
                                "src": "1620:5:4",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Entry_$2670_storage_ptr",
                                    "typeString": "struct DebtRegistry.Entry storage pointer"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 2679,
                        "name": "debtorToDebts",
                        "nodeType": "VariableDeclaration",
                        "scope": 3166,
                        "src": "1720:53:4",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(address => bytes32[] storage ref)"
                        },
                        "typeName": {
                            "id": 2678,
                            "keyType": {
                                "id": 2675,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1729:7:4",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1720:30:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                                "typeString": "mapping(address => bytes32[] storage ref)"
                            },
                            "valueType": {
                                "baseType": {
                                    "id": 2676,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1740:7:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    }
                                },
                                "id": 2677,
                                "length": null,
                                "nodeType": "ArrayTypeName",
                                "src": "1740:9:4",
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
                        "id": 2681,
                        "name": "entryInsertPermissions",
                        "nodeType": "VariableDeclaration",
                        "scope": 3166,
                        "src": "1780:58:4",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                            "typeString": "struct PermissionsLib.Permissions storage ref"
                        },
                        "typeName": {
                            "contractScope": null,
                            "id": 2680,
                            "name": "PermissionsLib.Permissions",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6099,
                            "src": "1780:26:4",
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
                        "id": 2683,
                        "name": "entryEditPermissions",
                        "nodeType": "VariableDeclaration",
                        "scope": 3166,
                        "src": "1844:56:4",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                            "typeString": "struct PermissionsLib.Permissions storage ref"
                        },
                        "typeName": {
                            "contractScope": null,
                            "id": 2682,
                            "name": "PermissionsLib.Permissions",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6099,
                            "src": "1844:26:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                                "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "constant": true,
                        "id": 2686,
                        "name": "INSERT_CONTEXT",
                        "nodeType": "VariableDeclaration",
                        "scope": 3166,
                        "src": "1907:62:4",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                        },
                        "typeName": {
                            "id": 2684,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1907:6:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string storage pointer"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "hexValue": "646562742d72656769737472792d696e73657274",
                            "id": 2685,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1947:22:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_070669121e396f9a7366927a313b4766d8775dbd7f6f1e707698b395e46915a3",
                                "typeString": "literal_string \"debt-registry-insert\""
                            },
                            "value": "debt-registry-insert"
                        },
                        "visibility": "public"
                    },
                    {
                        "constant": true,
                        "id": 2689,
                        "name": "EDIT_CONTEXT",
                        "nodeType": "VariableDeclaration",
                        "scope": 3166,
                        "src": "1975:58:4",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                        },
                        "typeName": {
                            "id": 2687,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1975:6:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string storage pointer"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "hexValue": "646562742d72656769737472792d65646974",
                            "id": 2688,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2013:20:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_40740eaf4e844d453cdf99e6d6f768591bb64d5a2744d6ef3bc35dd397549aeb",
                                "typeString": "literal_string \"debt-registry-edit\""
                            },
                            "value": "debt-registry-edit"
                        },
                        "visibility": "public"
                    },
                    {
                        "anonymous": false,
                        "id": 2703,
                        "name": "LogInsertEntry",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 2702,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2691,
                                    "indexed": true,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2703,
                                    "src": "2070:27:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2690,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2070:7:4",
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
                                    "id": 2693,
                                    "indexed": true,
                                    "name": "beneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2703,
                                    "src": "2107:27:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2692,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2107:7:4",
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
                                    "id": 2695,
                                    "indexed": true,
                                    "name": "underwriter",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2703,
                                    "src": "2144:27:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2694,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2144:7:4",
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
                                    "id": 2697,
                                    "indexed": false,
                                    "name": "underwriterRiskRating",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2703,
                                    "src": "2181:26:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2696,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2181:4:4",
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
                                    "id": 2699,
                                    "indexed": false,
                                    "name": "termsContract",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2703,
                                    "src": "2217:21:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2698,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2217:7:4",
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
                                    "id": 2701,
                                    "indexed": false,
                                    "name": "termsContractParameters",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2703,
                                    "src": "2248:31:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2700,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2248:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2060:225:4"
                        },
                        "src": "2040:246:4"
                    },
                    {
                        "anonymous": false,
                        "id": 2711,
                        "name": "LogModifyEntryBeneficiary",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 2710,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2705,
                                    "indexed": true,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2711,
                                    "src": "2333:27:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2704,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2333:7:4",
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
                                    "id": 2707,
                                    "indexed": true,
                                    "name": "previousBeneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2711,
                                    "src": "2370:35:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2706,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2370:7:4",
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
                                    "id": 2709,
                                    "indexed": true,
                                    "name": "newBeneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2711,
                                    "src": "2415:30:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2708,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2415:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2323:128:4"
                        },
                        "src": "2292:160:4"
                    },
                    {
                        "body": {
                            "id": 2722,
                            "nodeType": "Block",
                            "src": "2492:84:4",
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
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 2716,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15841,
                                                            "src": "2546:3:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 2717,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "2546:10:4",
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
                                                        "id": 2714,
                                                        "name": "entryInsertPermissions",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2681,
                                                        "src": "2510:22:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                            "typeString": "struct PermissionsLib.Permissions storage ref"
                                                        }
                                                    },
                                                    "id": 2715,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "isAuthorized",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 6250,
                                                    "src": "2510:35:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 2718,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2510:47:4",
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
                                            "id": 2713,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "2502:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 2719,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2502:56:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2720,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2502:56:4"
                                },
                                {
                                    "id": 2721,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2568:1:4"
                                }
                            ]
                        },
                        "id": 2723,
                        "name": "onlyAuthorizedToInsert",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 2712,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2489:2:4"
                        },
                        "src": "2458:118:4",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2734,
                            "nodeType": "Block",
                            "src": "2614:82:4",
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
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 2728,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15841,
                                                            "src": "2666:3:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 2729,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "2666:10:4",
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
                                                        "id": 2726,
                                                        "name": "entryEditPermissions",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2683,
                                                        "src": "2632:20:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                            "typeString": "struct PermissionsLib.Permissions storage ref"
                                                        }
                                                    },
                                                    "id": 2727,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "isAuthorized",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 6250,
                                                    "src": "2632:33:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 2730,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2632:45:4",
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
                                            "id": 2725,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "2624:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 2731,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2624:54:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2732,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2624:54:4"
                                },
                                {
                                    "id": 2733,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2688:1:4"
                                }
                            ]
                        },
                        "id": 2735,
                        "name": "onlyAuthorizedToEdit",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 2724,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2611:2:4"
                        },
                        "src": "2582:114:4",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2746,
                            "nodeType": "Block",
                            "src": "2748:64:4",
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
                                                        "id": 2741,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2737,
                                                        "src": "2781:11:4",
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
                                                    "id": 2740,
                                                    "name": "doesEntryExist",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2778,
                                                    "src": "2766:14:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                                                        "typeString": "function (bytes32) view returns (bool)"
                                                    }
                                                },
                                                "id": 2742,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2766:27:4",
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
                                            "id": 2739,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "2758:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 2743,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2758:36:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2744,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2758:36:4"
                                },
                                {
                                    "id": 2745,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2804:1:4"
                                }
                            ]
                        },
                        "id": 2747,
                        "name": "onlyExtantEntry",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 2738,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2737,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2747,
                                    "src": "2727:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2736,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2727:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2726:21:4"
                        },
                        "src": "2702:110:4",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2760,
                            "nodeType": "Block",
                            "src": "2867:62:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 2756,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2752,
                                                    "name": "beneficiary",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2749,
                                                    "src": "2885:11:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 2754,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "2908:1:4",
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
                                                        "id": 2753,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "2900:7:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 2755,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2900:10:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "src": "2885:25:4",
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
                                            "id": 2751,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "2877:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 2757,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2877:34:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2758,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2877:34:4"
                                },
                                {
                                    "id": 2759,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2921:1:4"
                                }
                            ]
                        },
                        "id": 2761,
                        "name": "nonNullBeneficiary",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 2750,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2749,
                                    "name": "beneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2761,
                                    "src": "2846:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2748,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2846:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2845:21:4"
                        },
                        "src": "2818:111:4",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2777,
                            "nodeType": "Block",
                            "src": "3134:71:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 2775,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2768,
                                                    "name": "registry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2674,
                                                    "src": "3151:8:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                        "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                    }
                                                },
                                                "id": 2770,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2769,
                                                    "name": "agreementId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2763,
                                                    "src": "3160:11:4",
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
                                                "src": "3151:21:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                    "typeString": "struct DebtRegistry.Entry storage ref"
                                                }
                                            },
                                            "id": 2771,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "beneficiary",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2659,
                                            "src": "3151:33:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 2773,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3196:1:4",
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
                                                "id": 2772,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "3188:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": "address"
                                            },
                                            "id": 2774,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3188:10:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "3151:47:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 2767,
                                    "id": 2776,
                                    "nodeType": "Return",
                                    "src": "3144:54:4"
                                }
                            ]
                        },
                        "id": 2778,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "doesEntryExist",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2764,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2763,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2778,
                                    "src": "3051:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2762,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3051:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3050:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2767,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2766,
                                    "name": "exists",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2778,
                                    "src": "3117:11:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2765,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3117:4:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3116:13:4"
                        },
                        "scope": 3166,
                        "src": "3027:178:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2867,
                            "nodeType": "Block",
                            "src": "3787:754:4",
                            "statements": [
                                {
                                    "assignments": [
                                        2807
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2807,
                                            "name": "entry",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2868,
                                            "src": "3797:18:4",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                "typeString": "struct DebtRegistry.Entry memory"
                                            },
                                            "typeName": {
                                                "contractScope": null,
                                                "id": 2806,
                                                "name": "Entry",
                                                "nodeType": "UserDefinedTypeName",
                                                "referencedDeclaration": 2670,
                                                "src": "3797:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Entry_$2670_storage_ptr",
                                                    "typeString": "struct DebtRegistry.Entry storage pointer"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2818,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2809,
                                                "name": "_version",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2780,
                                                "src": "3837:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2810,
                                                "name": "_beneficiary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2782,
                                                "src": "3859:12:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2811,
                                                "name": "_underwriter",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2786,
                                                "src": "3885:12:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2812,
                                                "name": "_underwriterRiskRating",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2788,
                                                "src": "3911:22:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2813,
                                                "name": "_termsContract",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2790,
                                                "src": "3947:14:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2814,
                                                "name": "_termsContractParameters",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2792,
                                                "src": "3975:24:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2815,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15833,
                                                    "src": "4013:5:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 2816,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "timestamp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "4013:15:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
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
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 2808,
                                            "name": "Entry",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2670,
                                            "src": "3818:5:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_Entry_$2670_storage_ptr_$",
                                                "typeString": "type(struct DebtRegistry.Entry storage pointer)"
                                            }
                                        },
                                        "id": 2817,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3818:220:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Entry_$2670_memory",
                                            "typeString": "struct DebtRegistry.Entry memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3797:241:4"
                                },
                                {
                                    "assignments": [
                                        2820
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2820,
                                            "name": "agreementId",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2868,
                                            "src": "4049:19:4",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            },
                                            "typeName": {
                                                "id": 2819,
                                                "name": "bytes32",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4049:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2826,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2822,
                                                "name": "entry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2807,
                                                "src": "4087:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                    "typeString": "struct DebtRegistry.Entry memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2823,
                                                "name": "_debtor",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2784,
                                                "src": "4094:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2824,
                                                "name": "_salt",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2794,
                                                "src": "4103:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                    "typeString": "struct DebtRegistry.Entry memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 2821,
                                            "name": "_getAgreementId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3165,
                                            "src": "4071:15:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Entry_$2670_memory_ptr_$_t_address_$_t_uint256_$returns$_t_bytes32_$",
                                                "typeString": "function (struct DebtRegistry.Entry memory,address,uint256) pure returns (bytes32)"
                                            }
                                        },
                                        "id": 2825,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4071:38:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4049:60:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 2835,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2828,
                                                            "name": "registry",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2674,
                                                            "src": "4128:8:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                                "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                            }
                                                        },
                                                        "id": 2830,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2829,
                                                            "name": "agreementId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2820,
                                                            "src": "4137:11:4",
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
                                                        "src": "4128:21:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                            "typeString": "struct DebtRegistry.Entry storage ref"
                                                        }
                                                    },
                                                    "id": 2831,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "beneficiary",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 2659,
                                                    "src": "4128:33:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 2833,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "4173:1:4",
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
                                                        "id": 2832,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "4165:7:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 2834,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4165:10:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "src": "4128:47:4",
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
                                            "id": 2827,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "4120:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 2836,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4120:56:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2837,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4120:56:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2842,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 2838,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2674,
                                                "src": "4187:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                    "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                }
                                            },
                                            "id": 2840,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 2839,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2820,
                                                "src": "4196:11:4",
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
                                            "src": "4187:21:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                "typeString": "struct DebtRegistry.Entry storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 2841,
                                            "name": "entry",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2807,
                                            "src": "4211:5:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                "typeString": "struct DebtRegistry.Entry memory"
                                            }
                                        },
                                        "src": "4187:29:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                            "typeString": "struct DebtRegistry.Entry storage ref"
                                        }
                                    },
                                    "id": 2843,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4187:29:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2848,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2820,
                                                "src": "4254:11:4",
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
                                                    "id": 2844,
                                                    "name": "debtorToDebts",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2679,
                                                    "src": "4226:13:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                                                        "typeString": "mapping(address => bytes32[] storage ref)"
                                                    }
                                                },
                                                "id": 2846,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2845,
                                                    "name": "_debtor",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2784,
                                                    "src": "4240:7:4",
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
                                                "src": "4226:22:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                                    "typeString": "bytes32[] storage ref"
                                                }
                                            },
                                            "id": 2847,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "4226:27:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                                                "typeString": "function (bytes32) returns (uint256)"
                                            }
                                        },
                                        "id": 2849,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4226:40:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2850,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4226:40:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2852,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2820,
                                                "src": "4305:11:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2853,
                                                    "name": "entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2807,
                                                    "src": "4330:5:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 2854,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "beneficiary",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2659,
                                                "src": "4330:17:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2855,
                                                    "name": "entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2807,
                                                    "src": "4361:5:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 2856,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "underwriter",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2661,
                                                "src": "4361:17:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2857,
                                                    "name": "entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2807,
                                                    "src": "4392:5:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 2858,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "underwriterRiskRating",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2663,
                                                "src": "4392:27:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2859,
                                                    "name": "entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2807,
                                                    "src": "4433:5:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 2860,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContract",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2665,
                                                "src": "4433:19:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2861,
                                                    "name": "entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2807,
                                                    "src": "4466:5:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 2862,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContractParameters",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2667,
                                                "src": "4466:29:4",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            ],
                                            "id": 2851,
                                            "name": "LogInsertEntry",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2703,
                                            "src": "4277:14:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_bytes32_$returns$__$",
                                                "typeString": "function (bytes32,address,address,uint256,address,bytes32)"
                                            }
                                        },
                                        "id": 2863,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4277:228:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2864,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4277:228:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2865,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2820,
                                        "src": "4523:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 2805,
                                    "id": 2866,
                                    "nodeType": "Return",
                                    "src": "4516:18:4"
                                }
                            ]
                        },
                        "id": 2868,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 2797,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2796,
                                    "name": "onlyAuthorizedToInsert",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2723,
                                    "src": "3658:22:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3658:22:4"
                            },
                            {
                                "arguments": [],
                                "id": 2799,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2798,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "3689:13:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3689:13:4"
                            },
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 2801,
                                        "name": "_beneficiary",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2782,
                                        "src": "3730:12:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    }
                                ],
                                "id": 2802,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2800,
                                    "name": "nonNullBeneficiary",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2761,
                                    "src": "3711:18:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_address_$",
                                        "typeString": "modifier (address)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3711:32:4"
                            }
                        ],
                        "name": "insert",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2795,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2780,
                                    "name": "_version",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3396:16:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2779,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3396:7:4",
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
                                    "id": 2782,
                                    "name": "_beneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3422:20:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2781,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3422:7:4",
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
                                    "id": 2784,
                                    "name": "_debtor",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3452:15:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2783,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3452:7:4",
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
                                    "id": 2786,
                                    "name": "_underwriter",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3477:20:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2785,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3477:7:4",
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
                                    "id": 2788,
                                    "name": "_underwriterRiskRating",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3507:27:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2787,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3507:4:4",
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
                                    "id": 2790,
                                    "name": "_termsContract",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3544:22:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2789,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3544:7:4",
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
                                    "id": 2792,
                                    "name": "_termsContractParameters",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3576:32:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2791,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3576:7:4",
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
                                    "id": 2794,
                                    "name": "_salt",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3618:10:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2793,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3618:4:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3386:248:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2805,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2804,
                                    "name": "_agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3761:20:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2803,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3761:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3760:22:4"
                        },
                        "scope": 3166,
                        "src": "3371:1170:4",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2905,
                            "nodeType": "Block",
                            "src": "4934:273:4",
                            "statements": [
                                {
                                    "assignments": [
                                        2886
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2886,
                                            "name": "previousBeneficiary",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2906,
                                            "src": "4944:27:4",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 2885,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4944:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2891,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 2887,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2674,
                                                "src": "4974:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                    "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                }
                                            },
                                            "id": 2889,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 2888,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2870,
                                                "src": "4983:11:4",
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
                                            "src": "4974:21:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                "typeString": "struct DebtRegistry.Entry storage ref"
                                            }
                                        },
                                        "id": 2890,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "beneficiary",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 2659,
                                        "src": "4974:33:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4944:63:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2897,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2892,
                                                    "name": "registry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2674,
                                                    "src": "5018:8:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                        "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                    }
                                                },
                                                "id": 2894,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2893,
                                                    "name": "agreementId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2870,
                                                    "src": "5027:11:4",
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
                                                "src": "5018:21:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                    "typeString": "struct DebtRegistry.Entry storage ref"
                                                }
                                            },
                                            "id": 2895,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "beneficiary",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2659,
                                            "src": "5018:33:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 2896,
                                            "name": "newBeneficiary",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2872,
                                            "src": "5054:14:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "5018:50:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 2898,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5018:50:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2900,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2870,
                                                "src": "5118:11:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2901,
                                                "name": "previousBeneficiary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2886,
                                                "src": "5143:19:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2902,
                                                "name": "newBeneficiary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2872,
                                                "src": "5176:14:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 2899,
                                            "name": "LogModifyEntryBeneficiary",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2711,
                                            "src": "5079:25:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (bytes32,address,address)"
                                            }
                                        },
                                        "id": 2903,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5079:121:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2904,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5079:121:4"
                                }
                            ]
                        },
                        "id": 2906,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 2875,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2874,
                                    "name": "onlyAuthorizedToEdit",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2735,
                                    "src": "4807:20:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4807:20:4"
                            },
                            {
                                "arguments": [],
                                "id": 2877,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2876,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "4836:13:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4836:13:4"
                            },
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 2879,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2870,
                                        "src": "4874:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                ],
                                "id": 2880,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2878,
                                    "name": "onlyExtantEntry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2747,
                                    "src": "4858:15:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_bytes32_$",
                                        "typeString": "modifier (bytes32)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4858:28:4"
                            },
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 2882,
                                        "name": "newBeneficiary",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2872,
                                        "src": "4914:14:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    }
                                ],
                                "id": 2883,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2881,
                                    "name": "nonNullBeneficiary",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2761,
                                    "src": "4895:18:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_address_$",
                                        "typeString": "modifier (address)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4895:34:4"
                            }
                        ],
                        "name": "modifyBeneficiary",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2873,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2870,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2906,
                                    "src": "4739:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2869,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4739:7:4",
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
                                    "id": 2872,
                                    "name": "newBeneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2906,
                                    "src": "4760:22:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2871,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4760:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4738:45:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2884,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4934:0:4"
                        },
                        "scope": 3166,
                        "src": "4712:495:4",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2920,
                            "nodeType": "Block",
                            "src": "5422:72:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2916,
                                                "name": "agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2908,
                                                "src": "5465:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2917,
                                                "name": "INSERT_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2686,
                                                "src": "5472:14:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory",
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
                                                    "typeIdentifier": "t_string_memory",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2913,
                                                "name": "entryInsertPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2681,
                                                "src": "5432:22:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 2915,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "authorize",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6149,
                                            "src": "5432:32:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 2918,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5432:55:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2919,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5432:55:4"
                                }
                            ]
                        },
                        "id": 2921,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 2911,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2910,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "5408:9:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5408:9:4"
                            }
                        ],
                        "name": "addAuthorizedInsertAgent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2909,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2908,
                                    "name": "agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2921,
                                    "src": "5370:13:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2907,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5370:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5369:15:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2912,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5422:0:4"
                        },
                        "scope": 3166,
                        "src": "5336:158:4",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2935,
                            "nodeType": "Block",
                            "src": "5718:68:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2931,
                                                "name": "agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2923,
                                                "src": "5759:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2932,
                                                "name": "EDIT_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2689,
                                                "src": "5766:12:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory",
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
                                                    "typeIdentifier": "t_string_memory",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2928,
                                                "name": "entryEditPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2683,
                                                "src": "5728:20:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 2930,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "authorize",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6149,
                                            "src": "5728:30:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 2933,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5728:51:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2934,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5728:51:4"
                                }
                            ]
                        },
                        "id": 2936,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 2926,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2925,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "5704:9:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5704:9:4"
                            }
                        ],
                        "name": "addAuthorizedEditAgent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2924,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2923,
                                    "name": "agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2936,
                                    "src": "5666:13:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2922,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5666:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5665:15:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2927,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5718:0:4"
                        },
                        "scope": 3166,
                        "src": "5634:152:4",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2950,
                            "nodeType": "Block",
                            "src": "6012:82:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2946,
                                                "name": "agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2938,
                                                "src": "6065:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2947,
                                                "name": "INSERT_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2686,
                                                "src": "6072:14:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory",
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
                                                    "typeIdentifier": "t_string_memory",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2943,
                                                "name": "entryInsertPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2681,
                                                "src": "6022:22:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 2945,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "revokeAuthorization",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6235,
                                            "src": "6022:42:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 2948,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6022:65:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2949,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6022:65:4"
                                }
                            ]
                        },
                        "id": 2951,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 2941,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2940,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "5998:9:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5998:9:4"
                            }
                        ],
                        "name": "revokeInsertAgentAuthorization",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2939,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2938,
                                    "name": "agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2951,
                                    "src": "5960:13:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2937,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5960:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5959:15:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2942,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6012:0:4"
                        },
                        "scope": 3166,
                        "src": "5920:174:4",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2965,
                            "nodeType": "Block",
                            "src": "6329:78:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2961,
                                                "name": "agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2953,
                                                "src": "6380:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2962,
                                                "name": "EDIT_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2689,
                                                "src": "6387:12:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory",
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
                                                    "typeIdentifier": "t_string_memory",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2958,
                                                "name": "entryEditPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2683,
                                                "src": "6339:20:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 2960,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "revokeAuthorization",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6235,
                                            "src": "6339:40:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 2963,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6339:61:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2964,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6339:61:4"
                                }
                            ]
                        },
                        "id": 2966,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 2956,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2955,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "6315:9:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6315:9:4"
                            }
                        ],
                        "name": "revokeEditAgentAuthorization",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2954,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2953,
                                    "name": "agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2966,
                                    "src": "6277:13:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2952,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6277:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6276:15:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2957,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6329:0:4"
                        },
                        "scope": 3166,
                        "src": "6239:168:4",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3015,
                            "nodeType": "Block",
                            "src": "6798:394:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "components": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2985,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "6829:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 2987,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2986,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "6838:11:4",
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
                                                    "src": "6829:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 2988,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "version",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2657,
                                                "src": "6829:29:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2989,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "6872:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 2991,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2990,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "6881:11:4",
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
                                                    "src": "6872:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 2992,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "beneficiary",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2659,
                                                "src": "6872:33:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2993,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "6919:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 2995,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2994,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "6928:11:4",
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
                                                    "src": "6919:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 2996,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "underwriter",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2661,
                                                "src": "6919:33:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2997,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "6966:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 2999,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2998,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "6975:11:4",
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
                                                    "src": "6966:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 3000,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "underwriterRiskRating",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2663,
                                                "src": "6966:43:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3001,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "7023:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 3003,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3002,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "7032:11:4",
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
                                                    "src": "7023:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 3004,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContract",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2665,
                                                "src": "7023:35:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3005,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "7072:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 3007,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3006,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "7081:11:4",
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
                                                    "src": "7072:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 3008,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContractParameters",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2667,
                                                "src": "7072:45:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3009,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "7131:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 3011,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3010,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "7140:11:4",
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
                                                    "src": "7131:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 3012,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "issuanceBlockTimestamp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2669,
                                                "src": "7131:44:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 3013,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "6815:370:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_bytes32_$_t_uint256_$",
                                            "typeString": "tuple(address,address,address,uint256,address,bytes32,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 2984,
                                    "id": 3014,
                                    "nodeType": "Return",
                                    "src": "6808:377:4"
                                }
                            ]
                        },
                        "id": 3016,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "get",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2969,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2968,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6672:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2967,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6672:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6671:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2984,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2971,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6737:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2970,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6737:7:4",
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
                                    "id": 2973,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6746:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2972,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6746:7:4",
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
                                    "id": 2975,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6755:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2974,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6755:7:4",
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
                                    "id": 2977,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6764:4:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2976,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6764:4:4",
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
                                    "id": 2979,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6770:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2978,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6770:7:4",
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
                                    "id": 2981,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6779:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2980,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6779:7:4",
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
                                    "id": 2983,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6788:4:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2982,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6788:4:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6736:57:4"
                        },
                        "scope": 3166,
                        "src": "6659:533:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3031,
                            "nodeType": "Block",
                            "src": "7404:57:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 3026,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2674,
                                                "src": "7421:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                    "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                }
                                            },
                                            "id": 3028,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 3027,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3018,
                                                "src": "7430:11:4",
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
                                            "src": "7421:21:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                "typeString": "struct DebtRegistry.Entry storage ref"
                                            }
                                        },
                                        "id": 3029,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "beneficiary",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 2659,
                                        "src": "7421:33:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 3025,
                                    "id": 3030,
                                    "nodeType": "Return",
                                    "src": "7414:40:4"
                                }
                            ]
                        },
                        "id": 3032,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 3021,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3018,
                                        "src": "7362:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                ],
                                "id": 3022,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3020,
                                    "name": "onlyExtantEntry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2747,
                                    "src": "7346:15:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_bytes32_$",
                                        "typeString": "modifier (bytes32)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "7346:28:4"
                            }
                        ],
                        "name": "getBeneficiary",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3019,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3018,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3032,
                                    "src": "7289:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3017,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7289:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7288:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3025,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3024,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3032,
                                    "src": "7391:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3023,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7391:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7390:9:4"
                        },
                        "scope": 3166,
                        "src": "7265:196:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3047,
                            "nodeType": "Block",
                            "src": "7687:59:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 3042,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2674,
                                                "src": "7704:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                    "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                }
                                            },
                                            "id": 3044,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 3043,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3034,
                                                "src": "7713:11:4",
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
                                            "src": "7704:21:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                "typeString": "struct DebtRegistry.Entry storage ref"
                                            }
                                        },
                                        "id": 3045,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "termsContract",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 2665,
                                        "src": "7704:35:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 3041,
                                    "id": 3046,
                                    "nodeType": "Return",
                                    "src": "7697:42:4"
                                }
                            ]
                        },
                        "id": 3048,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 3037,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3034,
                                        "src": "7644:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                ],
                                "id": 3038,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3036,
                                    "name": "onlyExtantEntry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2747,
                                    "src": "7628:15:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_bytes32_$",
                                        "typeString": "modifier (bytes32)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "7628:28:4"
                            }
                        ],
                        "name": "getTermsContract",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3035,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3034,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3048,
                                    "src": "7571:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3033,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7571:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7570:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3041,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3040,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3048,
                                    "src": "7674:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3039,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7674:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7673:9:4"
                        },
                        "scope": 3166,
                        "src": "7545:201:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3063,
                            "nodeType": "Block",
                            "src": "7985:69:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 3058,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2674,
                                                "src": "8002:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                    "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                }
                                            },
                                            "id": 3060,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 3059,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3050,
                                                "src": "8011:11:4",
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
                                            "src": "8002:21:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                "typeString": "struct DebtRegistry.Entry storage ref"
                                            }
                                        },
                                        "id": 3061,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "termsContractParameters",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 2667,
                                        "src": "8002:45:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 3057,
                                    "id": 3062,
                                    "nodeType": "Return",
                                    "src": "7995:52:4"
                                }
                            ]
                        },
                        "id": 3064,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 3053,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3050,
                                        "src": "7942:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                ],
                                "id": 3054,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3052,
                                    "name": "onlyExtantEntry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2747,
                                    "src": "7926:15:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_bytes32_$",
                                        "typeString": "modifier (bytes32)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "7926:28:4"
                            }
                        ],
                        "name": "getTermsContractParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3051,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3050,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3064,
                                    "src": "7869:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3049,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7869:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7868:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3057,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3056,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3064,
                                    "src": "7972:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3055,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7972:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7971:9:4"
                        },
                        "scope": 3166,
                        "src": "7833:221:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3086,
                            "nodeType": "Block",
                            "src": "8321:142:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "components": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3076,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "8352:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 3078,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3077,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3066,
                                                        "src": "8361:11:4",
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
                                                    "src": "8352:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 3079,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContract",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2665,
                                                "src": "8352:35:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3080,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "8401:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 3082,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3081,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3066,
                                                        "src": "8410:11:4",
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
                                                    "src": "8401:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 3083,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContractParameters",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2667,
                                                "src": "8401:45:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            }
                                        ],
                                        "id": 3084,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "8338:118:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_address_$_t_bytes32_$",
                                            "typeString": "tuple(address,bytes32)"
                                        }
                                    },
                                    "functionReturnParameters": 3075,
                                    "id": 3085,
                                    "nodeType": "Return",
                                    "src": "8331:125:4"
                                }
                            ]
                        },
                        "id": 3087,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 3069,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3066,
                                        "src": "8270:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                ],
                                "id": 3070,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3068,
                                    "name": "onlyExtantEntry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2747,
                                    "src": "8254:15:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_bytes32_$",
                                        "typeString": "modifier (bytes32)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "8254:28:4"
                            }
                        ],
                        "name": "getTerms",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3067,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3066,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3087,
                                    "src": "8197:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3065,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8197:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8196:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3075,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3072,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3087,
                                    "src": "8299:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3071,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8299:7:4",
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
                                    "id": 3074,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3087,
                                    "src": "8308:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3073,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8308:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8298:18:4"
                        },
                        "scope": 3166,
                        "src": "8179:284:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3102,
                            "nodeType": "Block",
                            "src": "8723:68:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 3097,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2674,
                                                "src": "8740:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                    "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                }
                                            },
                                            "id": 3099,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 3098,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3089,
                                                "src": "8749:11:4",
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
                                            "src": "8740:21:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                "typeString": "struct DebtRegistry.Entry storage ref"
                                            }
                                        },
                                        "id": 3100,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "issuanceBlockTimestamp",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 2669,
                                        "src": "8740:44:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 3096,
                                    "id": 3101,
                                    "nodeType": "Return",
                                    "src": "8733:51:4"
                                }
                            ]
                        },
                        "id": 3103,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 3092,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3089,
                                        "src": "8673:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                ],
                                "id": 3093,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3091,
                                    "name": "onlyExtantEntry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2747,
                                    "src": "8657:15:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_bytes32_$",
                                        "typeString": "modifier (bytes32)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "8657:28:4"
                            }
                        ],
                        "name": "getIssuanceBlockTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3090,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3089,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3103,
                                    "src": "8600:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3088,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8600:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8599:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3096,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3095,
                                    "name": "timestamp",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3103,
                                    "src": "8703:14:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3094,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8703:4:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8702:16:4"
                        },
                        "scope": 3166,
                        "src": "8565:226:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3113,
                            "nodeType": "Block",
                            "src": "8981:68:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3109,
                                                "name": "entryInsertPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2681,
                                                "src": "8998:22:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3110,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getAuthorizedAgents",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6278,
                                            "src": "8998:42:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                                            }
                                        },
                                        "id": 3111,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8998:44:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 3108,
                                    "id": 3112,
                                    "nodeType": "Return",
                                    "src": "8991:51:4"
                                }
                            ]
                        },
                        "id": 3114,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "getAuthorizedInsertAgents",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3104,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8919:2:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3108,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3107,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3114,
                                    "src": "8966:9:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[] memory"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 3105,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8966:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 3106,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "8966:9:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[] storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8965:11:4"
                        },
                        "scope": 3166,
                        "src": "8885:164:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3124,
                            "nodeType": "Block",
                            "src": "9248:66:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3120,
                                                "name": "entryEditPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2683,
                                                "src": "9265:20:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3121,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getAuthorizedAgents",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6278,
                                            "src": "9265:40:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                                            }
                                        },
                                        "id": 3122,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9265:42:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 3119,
                                    "id": 3123,
                                    "nodeType": "Return",
                                    "src": "9258:49:4"
                                }
                            ]
                        },
                        "id": 3125,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "getAuthorizedEditAgents",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3115,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9186:2:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3119,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3118,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3125,
                                    "src": "9233:9:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[] memory"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 3116,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "9233:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 3117,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "9233:9:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[] storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9232:11:4"
                        },
                        "scope": 3166,
                        "src": "9154:160:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3137,
                            "nodeType": "Block",
                            "src": "9557:45:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 3133,
                                            "name": "debtorToDebts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2679,
                                            "src": "9574:13:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                                                "typeString": "mapping(address => bytes32[] storage ref)"
                                            }
                                        },
                                        "id": 3135,
                                        "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 3134,
                                            "name": "debtor",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3127,
                                            "src": "9588:6:4",
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
                                        "src": "9574:21:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                            "typeString": "bytes32[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 3132,
                                    "id": 3136,
                                    "nodeType": "Return",
                                    "src": "9567:28:4"
                                }
                            ]
                        },
                        "id": 3138,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "getDebtorsDebts",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3128,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3127,
                                    "name": "debtor",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3138,
                                    "src": "9482:14:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3126,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9482:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9481:16:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3132,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3131,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3138,
                                    "src": "9542:9:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 3129,
                                            "name": "bytes32",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "9542:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 3130,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "9542:9:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                                            "typeString": "bytes32[] storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9541:11:4"
                        },
                        "scope": 3166,
                        "src": "9457:145:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3164,
                            "nodeType": "Block",
                            "src": "9855:263:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 3150,
                                                    "name": "_entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3140,
                                                    "src": "9895:6:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 3151,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "version",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2657,
                                                "src": "9895:14:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3152,
                                                "name": "_debtor",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3142,
                                                "src": "9923:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 3153,
                                                    "name": "_entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3140,
                                                    "src": "9944:6:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 3154,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "underwriter",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2661,
                                                "src": "9944:18:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 3155,
                                                    "name": "_entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3140,
                                                    "src": "9976:6:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 3156,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "underwriterRiskRating",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2663,
                                                "src": "9976:28:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 3157,
                                                    "name": "_entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3140,
                                                    "src": "10018:6:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 3158,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContract",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2665,
                                                "src": "10018:20:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 3159,
                                                    "name": "_entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3140,
                                                    "src": "10052:6:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 3160,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContractParameters",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2667,
                                                "src": "10052:30:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3161,
                                                "name": "_salt",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3144,
                                                "src": "10096:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
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
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 3149,
                                            "name": "keccak256",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15835,
                                            "src": "9872:9:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                                "typeString": "function () pure returns (bytes32)"
                                            }
                                        },
                                        "id": 3162,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9872:239:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 3148,
                                    "id": 3163,
                                    "nodeType": "Return",
                                    "src": "9865:246:4"
                                }
                            ]
                        },
                        "id": 3165,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "_getAgreementId",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3145,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3140,
                                    "name": "_entry",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3165,
                                    "src": "9753:12:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                        "typeString": "struct DebtRegistry.Entry memory"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 3139,
                                        "name": "Entry",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2670,
                                        "src": "9753:5:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Entry_$2670_storage_ptr",
                                            "typeString": "struct DebtRegistry.Entry storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 3142,
                                    "name": "_debtor",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3165,
                                    "src": "9767:15:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3141,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9767:7:4",
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
                                    "id": 3144,
                                    "name": "_salt",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3165,
                                    "src": "9784:10:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3143,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9784:4:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9752:43:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3148,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3147,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3165,
                                    "src": "9842:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3146,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9842:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9841:9:4"
                        },
                        "scope": 3166,
                        "src": "9728:390:4",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "internal"
                    }
                ],
                "scope": 3167,
                "src": "1124:8996:4"
            }
        ],
        "src": "584:9537:4"
    },
    "legacyAST": {
        "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/DebtRegistry.sol",
        "exportedSymbols": {
            "DebtRegistry": [
                3166
            ]
        },
        "id": 3167,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 2640,
                "literals": [
                    "solidity",
                    "0.4",
                    ".18"
                ],
                "nodeType": "PragmaDirective",
                "src": "584:23:4"
            },
            {
                "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/libraries/PermissionsLib.sol",
                "file": "./libraries/PermissionsLib.sol",
                "id": 2643,
                "nodeType": "ImportDirective",
                "scope": 3167,
                "sourceUnit": 6280,
                "src": "609:82:4",
                "symbolAliases": [
                    {
                        "foreign": 2641,
                        "local": null
                    },
                    {
                        "foreign": 2642,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
                "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
                "id": 2644,
                "nodeType": "ImportDirective",
                "scope": 3167,
                "sourceUnit": 14104,
                "src": "692:55:4",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                "id": 2645,
                "nodeType": "ImportDirective",
                "scope": 3167,
                "sourceUnit": 14006,
                "src": "748:60:4",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "baseContracts": [
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 2646,
                            "name": "Pausable",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 14005,
                            "src": "1149:8:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Pausable_$14005",
                                "typeString": "contract Pausable"
                            }
                        },
                        "id": 2647,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1149:8:4"
                    },
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 2648,
                            "name": "PermissionEvents",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6075,
                            "src": "1159:16:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_PermissionEvents_$6075",
                                "typeString": "contract PermissionEvents"
                            }
                        },
                        "id": 2649,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1159:16:4"
                    }
                ],
                "contractDependencies": [
                    6075,
                    14005,
                    14159
                ],
                "contractKind": "contract",
                "documentation": "The DebtRegistry stores the parameters and beneficiaries of all debt agreements in\nDharma protocol.  It authorizes a limited number of agents to\nperform mutations on it -- those agents can be changed at any\ntime by the contract's owner.\n * Author: Nadav Hollander -- Github: nadavhollander",
                "fullyImplemented": true,
                "id": 3166,
                "linearizedBaseContracts": [
                    3166,
                    6075,
                    14005,
                    14159
                ],
                "name": "DebtRegistry",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 2652,
                        "libraryName": {
                            "contractScope": null,
                            "id": 2650,
                            "name": "SafeMath",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 14103,
                            "src": "1188:8:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SafeMath_$14103",
                                "typeString": "library SafeMath"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "1182:24:4",
                        "typeName": {
                            "id": 2651,
                            "name": "uint",
                            "nodeType": "ElementaryTypeName",
                            "src": "1201:4:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        }
                    },
                    {
                        "id": 2655,
                        "libraryName": {
                            "contractScope": null,
                            "id": 2653,
                            "name": "PermissionsLib",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6279,
                            "src": "1217:14:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_PermissionsLib_$6279",
                                "typeString": "library PermissionsLib"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "1211:52:4",
                        "typeName": {
                            "contractScope": null,
                            "id": 2654,
                            "name": "PermissionsLib.Permissions",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6099,
                            "src": "1236:26:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                                "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                        }
                    },
                    {
                        "canonicalName": "DebtRegistry.Entry",
                        "id": 2670,
                        "members": [
                            {
                                "constant": false,
                                "id": 2657,
                                "name": "version",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1292:15:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 2656,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1292:7:4",
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
                                "id": 2659,
                                "name": "beneficiary",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1317:19:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 2658,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1317:7:4",
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
                                "id": 2661,
                                "name": "underwriter",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1346:19:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 2660,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1346:7:4",
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
                                "id": 2663,
                                "name": "underwriterRiskRating",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1375:26:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2662,
                                    "name": "uint",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1375:4:4",
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
                                "id": 2665,
                                "name": "termsContract",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1411:21:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 2664,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1411:7:4",
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
                                "id": 2667,
                                "name": "termsContractParameters",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1442:31:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                },
                                "typeName": {
                                    "id": 2666,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1442:7:4",
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
                                "id": 2669,
                                "name": "issuanceBlockTimestamp",
                                "nodeType": "VariableDeclaration",
                                "scope": 2670,
                                "src": "1483:27:4",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 2668,
                                    "name": "uint",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1483:4:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "value": null,
                                "visibility": "internal"
                            }
                        ],
                        "name": "Entry",
                        "nodeType": "StructDefinition",
                        "scope": 3166,
                        "src": "1269:248:4",
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 2674,
                        "name": "registry",
                        "nodeType": "VariableDeclaration",
                        "scope": 3166,
                        "src": "1600:44:4",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                        },
                        "typeName": {
                            "id": 2673,
                            "keyType": {
                                "id": 2671,
                                "name": "bytes32",
                                "nodeType": "ElementaryTypeName",
                                "src": "1609:7:4",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_bytes32",
                                    "typeString": "bytes32"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1600:26:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                            },
                            "valueType": {
                                "contractScope": null,
                                "id": 2672,
                                "name": "Entry",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 2670,
                                "src": "1620:5:4",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Entry_$2670_storage_ptr",
                                    "typeString": "struct DebtRegistry.Entry storage pointer"
                                }
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "constant": false,
                        "id": 2679,
                        "name": "debtorToDebts",
                        "nodeType": "VariableDeclaration",
                        "scope": 3166,
                        "src": "1720:53:4",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(address => bytes32[] storage ref)"
                        },
                        "typeName": {
                            "id": 2678,
                            "keyType": {
                                "id": 2675,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1729:7:4",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1720:30:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                                "typeString": "mapping(address => bytes32[] storage ref)"
                            },
                            "valueType": {
                                "baseType": {
                                    "id": 2676,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1740:7:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    }
                                },
                                "id": 2677,
                                "length": null,
                                "nodeType": "ArrayTypeName",
                                "src": "1740:9:4",
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
                        "id": 2681,
                        "name": "entryInsertPermissions",
                        "nodeType": "VariableDeclaration",
                        "scope": 3166,
                        "src": "1780:58:4",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                            "typeString": "struct PermissionsLib.Permissions storage ref"
                        },
                        "typeName": {
                            "contractScope": null,
                            "id": 2680,
                            "name": "PermissionsLib.Permissions",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6099,
                            "src": "1780:26:4",
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
                        "id": 2683,
                        "name": "entryEditPermissions",
                        "nodeType": "VariableDeclaration",
                        "scope": 3166,
                        "src": "1844:56:4",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                            "typeString": "struct PermissionsLib.Permissions storage ref"
                        },
                        "typeName": {
                            "contractScope": null,
                            "id": 2682,
                            "name": "PermissionsLib.Permissions",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6099,
                            "src": "1844:26:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                                "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "constant": true,
                        "id": 2686,
                        "name": "INSERT_CONTEXT",
                        "nodeType": "VariableDeclaration",
                        "scope": 3166,
                        "src": "1907:62:4",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                        },
                        "typeName": {
                            "id": 2684,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1907:6:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string storage pointer"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "hexValue": "646562742d72656769737472792d696e73657274",
                            "id": 2685,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1947:22:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_070669121e396f9a7366927a313b4766d8775dbd7f6f1e707698b395e46915a3",
                                "typeString": "literal_string \"debt-registry-insert\""
                            },
                            "value": "debt-registry-insert"
                        },
                        "visibility": "public"
                    },
                    {
                        "constant": true,
                        "id": 2689,
                        "name": "EDIT_CONTEXT",
                        "nodeType": "VariableDeclaration",
                        "scope": 3166,
                        "src": "1975:58:4",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                        },
                        "typeName": {
                            "id": 2687,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1975:6:4",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string storage pointer"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "hexValue": "646562742d72656769737472792d65646974",
                            "id": 2688,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2013:20:4",
                            "subdenomination": null,
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_40740eaf4e844d453cdf99e6d6f768591bb64d5a2744d6ef3bc35dd397549aeb",
                                "typeString": "literal_string \"debt-registry-edit\""
                            },
                            "value": "debt-registry-edit"
                        },
                        "visibility": "public"
                    },
                    {
                        "anonymous": false,
                        "id": 2703,
                        "name": "LogInsertEntry",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 2702,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2691,
                                    "indexed": true,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2703,
                                    "src": "2070:27:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2690,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2070:7:4",
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
                                    "id": 2693,
                                    "indexed": true,
                                    "name": "beneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2703,
                                    "src": "2107:27:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2692,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2107:7:4",
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
                                    "id": 2695,
                                    "indexed": true,
                                    "name": "underwriter",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2703,
                                    "src": "2144:27:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2694,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2144:7:4",
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
                                    "id": 2697,
                                    "indexed": false,
                                    "name": "underwriterRiskRating",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2703,
                                    "src": "2181:26:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2696,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2181:4:4",
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
                                    "id": 2699,
                                    "indexed": false,
                                    "name": "termsContract",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2703,
                                    "src": "2217:21:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2698,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2217:7:4",
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
                                    "id": 2701,
                                    "indexed": false,
                                    "name": "termsContractParameters",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2703,
                                    "src": "2248:31:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2700,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2248:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2060:225:4"
                        },
                        "src": "2040:246:4"
                    },
                    {
                        "anonymous": false,
                        "id": 2711,
                        "name": "LogModifyEntryBeneficiary",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 2710,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2705,
                                    "indexed": true,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2711,
                                    "src": "2333:27:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2704,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2333:7:4",
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
                                    "id": 2707,
                                    "indexed": true,
                                    "name": "previousBeneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2711,
                                    "src": "2370:35:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2706,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2370:7:4",
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
                                    "id": 2709,
                                    "indexed": true,
                                    "name": "newBeneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2711,
                                    "src": "2415:30:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2708,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2415:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2323:128:4"
                        },
                        "src": "2292:160:4"
                    },
                    {
                        "body": {
                            "id": 2722,
                            "nodeType": "Block",
                            "src": "2492:84:4",
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
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 2716,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15841,
                                                            "src": "2546:3:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 2717,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "2546:10:4",
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
                                                        "id": 2714,
                                                        "name": "entryInsertPermissions",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2681,
                                                        "src": "2510:22:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                            "typeString": "struct PermissionsLib.Permissions storage ref"
                                                        }
                                                    },
                                                    "id": 2715,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "isAuthorized",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 6250,
                                                    "src": "2510:35:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 2718,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2510:47:4",
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
                                            "id": 2713,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "2502:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 2719,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2502:56:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2720,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2502:56:4"
                                },
                                {
                                    "id": 2721,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2568:1:4"
                                }
                            ]
                        },
                        "id": 2723,
                        "name": "onlyAuthorizedToInsert",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 2712,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2489:2:4"
                        },
                        "src": "2458:118:4",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2734,
                            "nodeType": "Block",
                            "src": "2614:82:4",
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
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 2728,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15841,
                                                            "src": "2666:3:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 2729,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "2666:10:4",
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
                                                        "id": 2726,
                                                        "name": "entryEditPermissions",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2683,
                                                        "src": "2632:20:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                            "typeString": "struct PermissionsLib.Permissions storage ref"
                                                        }
                                                    },
                                                    "id": 2727,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "isAuthorized",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 6250,
                                                    "src": "2632:33:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 2730,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2632:45:4",
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
                                            "id": 2725,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "2624:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 2731,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2624:54:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2732,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2624:54:4"
                                },
                                {
                                    "id": 2733,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2688:1:4"
                                }
                            ]
                        },
                        "id": 2735,
                        "name": "onlyAuthorizedToEdit",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 2724,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2611:2:4"
                        },
                        "src": "2582:114:4",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2746,
                            "nodeType": "Block",
                            "src": "2748:64:4",
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
                                                        "id": 2741,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2737,
                                                        "src": "2781:11:4",
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
                                                    "id": 2740,
                                                    "name": "doesEntryExist",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2778,
                                                    "src": "2766:14:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_bytes32_$returns$_t_bool_$",
                                                        "typeString": "function (bytes32) view returns (bool)"
                                                    }
                                                },
                                                "id": 2742,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2766:27:4",
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
                                            "id": 2739,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "2758:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 2743,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2758:36:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2744,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2758:36:4"
                                },
                                {
                                    "id": 2745,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2804:1:4"
                                }
                            ]
                        },
                        "id": 2747,
                        "name": "onlyExtantEntry",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 2738,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2737,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2747,
                                    "src": "2727:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2736,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2727:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2726:21:4"
                        },
                        "src": "2702:110:4",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2760,
                            "nodeType": "Block",
                            "src": "2867:62:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 2756,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2752,
                                                    "name": "beneficiary",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2749,
                                                    "src": "2885:11:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 2754,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "2908:1:4",
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
                                                        "id": 2753,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "2900:7:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 2755,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "2900:10:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "src": "2885:25:4",
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
                                            "id": 2751,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "2877:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 2757,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2877:34:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2758,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2877:34:4"
                                },
                                {
                                    "id": 2759,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "2921:1:4"
                                }
                            ]
                        },
                        "id": 2761,
                        "name": "nonNullBeneficiary",
                        "nodeType": "ModifierDefinition",
                        "parameters": {
                            "id": 2750,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2749,
                                    "name": "beneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2761,
                                    "src": "2846:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2748,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2846:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2845:21:4"
                        },
                        "src": "2818:111:4",
                        "visibility": "internal"
                    },
                    {
                        "body": {
                            "id": 2777,
                            "nodeType": "Block",
                            "src": "3134:71:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 2775,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2768,
                                                    "name": "registry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2674,
                                                    "src": "3151:8:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                        "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                    }
                                                },
                                                "id": 2770,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2769,
                                                    "name": "agreementId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2763,
                                                    "src": "3160:11:4",
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
                                                "src": "3151:21:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                    "typeString": "struct DebtRegistry.Entry storage ref"
                                                }
                                            },
                                            "id": 2771,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "beneficiary",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2659,
                                            "src": "3151:33:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 2773,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3196:1:4",
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
                                                "id": 2772,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "3188:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_address_$",
                                                    "typeString": "type(address)"
                                                },
                                                "typeName": "address"
                                            },
                                            "id": 2774,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3188:10:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "3151:47:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 2767,
                                    "id": 2776,
                                    "nodeType": "Return",
                                    "src": "3144:54:4"
                                }
                            ]
                        },
                        "id": 2778,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "doesEntryExist",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2764,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2763,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2778,
                                    "src": "3051:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2762,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3051:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3050:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2767,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2766,
                                    "name": "exists",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2778,
                                    "src": "3117:11:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 2765,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3117:4:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3116:13:4"
                        },
                        "scope": 3166,
                        "src": "3027:178:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2867,
                            "nodeType": "Block",
                            "src": "3787:754:4",
                            "statements": [
                                {
                                    "assignments": [
                                        2807
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2807,
                                            "name": "entry",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2868,
                                            "src": "3797:18:4",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                "typeString": "struct DebtRegistry.Entry memory"
                                            },
                                            "typeName": {
                                                "contractScope": null,
                                                "id": 2806,
                                                "name": "Entry",
                                                "nodeType": "UserDefinedTypeName",
                                                "referencedDeclaration": 2670,
                                                "src": "3797:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Entry_$2670_storage_ptr",
                                                    "typeString": "struct DebtRegistry.Entry storage pointer"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2818,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2809,
                                                "name": "_version",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2780,
                                                "src": "3837:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2810,
                                                "name": "_beneficiary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2782,
                                                "src": "3859:12:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2811,
                                                "name": "_underwriter",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2786,
                                                "src": "3885:12:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2812,
                                                "name": "_underwriterRiskRating",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2788,
                                                "src": "3911:22:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2813,
                                                "name": "_termsContract",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2790,
                                                "src": "3947:14:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2814,
                                                "name": "_termsContractParameters",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2792,
                                                "src": "3975:24:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2815,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15833,
                                                    "src": "4013:5:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 2816,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "timestamp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "4013:15:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
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
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 2808,
                                            "name": "Entry",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2670,
                                            "src": "3818:5:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_struct$_Entry_$2670_storage_ptr_$",
                                                "typeString": "type(struct DebtRegistry.Entry storage pointer)"
                                            }
                                        },
                                        "id": 2817,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "structConstructorCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3818:220:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Entry_$2670_memory",
                                            "typeString": "struct DebtRegistry.Entry memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3797:241:4"
                                },
                                {
                                    "assignments": [
                                        2820
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2820,
                                            "name": "agreementId",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2868,
                                            "src": "4049:19:4",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            },
                                            "typeName": {
                                                "id": 2819,
                                                "name": "bytes32",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4049:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2826,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2822,
                                                "name": "entry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2807,
                                                "src": "4087:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                    "typeString": "struct DebtRegistry.Entry memory"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2823,
                                                "name": "_debtor",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2784,
                                                "src": "4094:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2824,
                                                "name": "_salt",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2794,
                                                "src": "4103:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                    "typeString": "struct DebtRegistry.Entry memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 2821,
                                            "name": "_getAgreementId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3165,
                                            "src": "4071:15:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_struct$_Entry_$2670_memory_ptr_$_t_address_$_t_uint256_$returns$_t_bytes32_$",
                                                "typeString": "function (struct DebtRegistry.Entry memory,address,uint256) pure returns (bytes32)"
                                            }
                                        },
                                        "id": 2825,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4071:38:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4049:60:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                "id": 2835,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "expression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2828,
                                                            "name": "registry",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2674,
                                                            "src": "4128:8:4",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                                "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                            }
                                                        },
                                                        "id": 2830,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 2829,
                                                            "name": "agreementId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 2820,
                                                            "src": "4137:11:4",
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
                                                        "src": "4128:21:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                            "typeString": "struct DebtRegistry.Entry storage ref"
                                                        }
                                                    },
                                                    "id": 2831,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "beneficiary",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 2659,
                                                    "src": "4128:33:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "==",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "hexValue": "30",
                                                            "id": 2833,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "4173:1:4",
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
                                                        "id": 2832,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "4165:7:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_address_$",
                                                            "typeString": "type(address)"
                                                        },
                                                        "typeName": "address"
                                                    },
                                                    "id": 2834,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "4165:10:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "src": "4128:47:4",
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
                                            "id": 2827,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "4120:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 2836,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4120:56:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2837,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4120:56:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2842,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 2838,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2674,
                                                "src": "4187:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                    "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                }
                                            },
                                            "id": 2840,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 2839,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2820,
                                                "src": "4196:11:4",
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
                                            "src": "4187:21:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                "typeString": "struct DebtRegistry.Entry storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 2841,
                                            "name": "entry",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2807,
                                            "src": "4211:5:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                "typeString": "struct DebtRegistry.Entry memory"
                                            }
                                        },
                                        "src": "4187:29:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                            "typeString": "struct DebtRegistry.Entry storage ref"
                                        }
                                    },
                                    "id": 2843,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4187:29:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2848,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2820,
                                                "src": "4254:11:4",
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
                                                    "id": 2844,
                                                    "name": "debtorToDebts",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2679,
                                                    "src": "4226:13:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                                                        "typeString": "mapping(address => bytes32[] storage ref)"
                                                    }
                                                },
                                                "id": 2846,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2845,
                                                    "name": "_debtor",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2784,
                                                    "src": "4240:7:4",
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
                                                "src": "4226:22:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                                    "typeString": "bytes32[] storage ref"
                                                }
                                            },
                                            "id": 2847,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": null,
                                            "src": "4226:27:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                                                "typeString": "function (bytes32) returns (uint256)"
                                            }
                                        },
                                        "id": 2849,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4226:40:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 2850,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4226:40:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2852,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2820,
                                                "src": "4305:11:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2853,
                                                    "name": "entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2807,
                                                    "src": "4330:5:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 2854,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "beneficiary",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2659,
                                                "src": "4330:17:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2855,
                                                    "name": "entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2807,
                                                    "src": "4361:5:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 2856,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "underwriter",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2661,
                                                "src": "4361:17:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2857,
                                                    "name": "entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2807,
                                                    "src": "4392:5:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 2858,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "underwriterRiskRating",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2663,
                                                "src": "4392:27:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2859,
                                                    "name": "entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2807,
                                                    "src": "4433:5:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 2860,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContract",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2665,
                                                "src": "4433:19:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 2861,
                                                    "name": "entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2807,
                                                    "src": "4466:5:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 2862,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContractParameters",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2667,
                                                "src": "4466:29:4",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            ],
                                            "id": 2851,
                                            "name": "LogInsertEntry",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2703,
                                            "src": "4277:14:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_bytes32_$returns$__$",
                                                "typeString": "function (bytes32,address,address,uint256,address,bytes32)"
                                            }
                                        },
                                        "id": 2863,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4277:228:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2864,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4277:228:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2865,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2820,
                                        "src": "4523:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 2805,
                                    "id": 2866,
                                    "nodeType": "Return",
                                    "src": "4516:18:4"
                                }
                            ]
                        },
                        "id": 2868,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 2797,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2796,
                                    "name": "onlyAuthorizedToInsert",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2723,
                                    "src": "3658:22:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3658:22:4"
                            },
                            {
                                "arguments": [],
                                "id": 2799,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2798,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "3689:13:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3689:13:4"
                            },
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 2801,
                                        "name": "_beneficiary",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2782,
                                        "src": "3730:12:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    }
                                ],
                                "id": 2802,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2800,
                                    "name": "nonNullBeneficiary",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2761,
                                    "src": "3711:18:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_address_$",
                                        "typeString": "modifier (address)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3711:32:4"
                            }
                        ],
                        "name": "insert",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2795,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2780,
                                    "name": "_version",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3396:16:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2779,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3396:7:4",
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
                                    "id": 2782,
                                    "name": "_beneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3422:20:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2781,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3422:7:4",
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
                                    "id": 2784,
                                    "name": "_debtor",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3452:15:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2783,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3452:7:4",
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
                                    "id": 2786,
                                    "name": "_underwriter",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3477:20:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2785,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3477:7:4",
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
                                    "id": 2788,
                                    "name": "_underwriterRiskRating",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3507:27:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2787,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3507:4:4",
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
                                    "id": 2790,
                                    "name": "_termsContract",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3544:22:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2789,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3544:7:4",
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
                                    "id": 2792,
                                    "name": "_termsContractParameters",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3576:32:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2791,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3576:7:4",
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
                                    "id": 2794,
                                    "name": "_salt",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3618:10:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2793,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3618:4:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3386:248:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2805,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2804,
                                    "name": "_agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2868,
                                    "src": "3761:20:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2803,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3761:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3760:22:4"
                        },
                        "scope": 3166,
                        "src": "3371:1170:4",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2905,
                            "nodeType": "Block",
                            "src": "4934:273:4",
                            "statements": [
                                {
                                    "assignments": [
                                        2886
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 2886,
                                            "name": "previousBeneficiary",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 2906,
                                            "src": "4944:27:4",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "typeName": {
                                                "id": 2885,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4944:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 2891,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 2887,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2674,
                                                "src": "4974:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                    "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                }
                                            },
                                            "id": 2889,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 2888,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2870,
                                                "src": "4983:11:4",
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
                                            "src": "4974:21:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                "typeString": "struct DebtRegistry.Entry storage ref"
                                            }
                                        },
                                        "id": 2890,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "beneficiary",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 2659,
                                        "src": "4974:33:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4944:63:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 2897,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "expression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2892,
                                                    "name": "registry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2674,
                                                    "src": "5018:8:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                        "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                    }
                                                },
                                                "id": 2894,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 2893,
                                                    "name": "agreementId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 2870,
                                                    "src": "5027:11:4",
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
                                                "src": "5018:21:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                    "typeString": "struct DebtRegistry.Entry storage ref"
                                                }
                                            },
                                            "id": 2895,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberName": "beneficiary",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2659,
                                            "src": "5018:33:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 2896,
                                            "name": "newBeneficiary",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2872,
                                            "src": "5054:14:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "5018:50:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 2898,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5018:50:4"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2900,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2870,
                                                "src": "5118:11:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2901,
                                                "name": "previousBeneficiary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2886,
                                                "src": "5143:19:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2902,
                                                "name": "newBeneficiary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2872,
                                                "src": "5176:14:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 2899,
                                            "name": "LogModifyEntryBeneficiary",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2711,
                                            "src": "5079:25:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (bytes32,address,address)"
                                            }
                                        },
                                        "id": 2903,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5079:121:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2904,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5079:121:4"
                                }
                            ]
                        },
                        "id": 2906,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 2875,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2874,
                                    "name": "onlyAuthorizedToEdit",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2735,
                                    "src": "4807:20:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4807:20:4"
                            },
                            {
                                "arguments": [],
                                "id": 2877,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2876,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "4836:13:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4836:13:4"
                            },
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 2879,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2870,
                                        "src": "4874:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                ],
                                "id": 2880,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2878,
                                    "name": "onlyExtantEntry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2747,
                                    "src": "4858:15:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_bytes32_$",
                                        "typeString": "modifier (bytes32)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4858:28:4"
                            },
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 2882,
                                        "name": "newBeneficiary",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 2872,
                                        "src": "4914:14:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    }
                                ],
                                "id": 2883,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2881,
                                    "name": "nonNullBeneficiary",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2761,
                                    "src": "4895:18:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_address_$",
                                        "typeString": "modifier (address)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4895:34:4"
                            }
                        ],
                        "name": "modifyBeneficiary",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2873,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2870,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2906,
                                    "src": "4739:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2869,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4739:7:4",
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
                                    "id": 2872,
                                    "name": "newBeneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2906,
                                    "src": "4760:22:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2871,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4760:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4738:45:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2884,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4934:0:4"
                        },
                        "scope": 3166,
                        "src": "4712:495:4",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2920,
                            "nodeType": "Block",
                            "src": "5422:72:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2916,
                                                "name": "agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2908,
                                                "src": "5465:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2917,
                                                "name": "INSERT_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2686,
                                                "src": "5472:14:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory",
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
                                                    "typeIdentifier": "t_string_memory",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2913,
                                                "name": "entryInsertPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2681,
                                                "src": "5432:22:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 2915,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "authorize",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6149,
                                            "src": "5432:32:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 2918,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5432:55:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2919,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5432:55:4"
                                }
                            ]
                        },
                        "id": 2921,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 2911,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2910,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "5408:9:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5408:9:4"
                            }
                        ],
                        "name": "addAuthorizedInsertAgent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2909,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2908,
                                    "name": "agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2921,
                                    "src": "5370:13:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2907,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5370:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5369:15:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2912,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5422:0:4"
                        },
                        "scope": 3166,
                        "src": "5336:158:4",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2935,
                            "nodeType": "Block",
                            "src": "5718:68:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2931,
                                                "name": "agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2923,
                                                "src": "5759:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2932,
                                                "name": "EDIT_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2689,
                                                "src": "5766:12:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory",
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
                                                    "typeIdentifier": "t_string_memory",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2928,
                                                "name": "entryEditPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2683,
                                                "src": "5728:20:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 2930,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "authorize",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6149,
                                            "src": "5728:30:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 2933,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5728:51:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2934,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5728:51:4"
                                }
                            ]
                        },
                        "id": 2936,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 2926,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2925,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "5704:9:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5704:9:4"
                            }
                        ],
                        "name": "addAuthorizedEditAgent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2924,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2923,
                                    "name": "agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2936,
                                    "src": "5666:13:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2922,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5666:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5665:15:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2927,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5718:0:4"
                        },
                        "scope": 3166,
                        "src": "5634:152:4",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2950,
                            "nodeType": "Block",
                            "src": "6012:82:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2946,
                                                "name": "agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2938,
                                                "src": "6065:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2947,
                                                "name": "INSERT_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2686,
                                                "src": "6072:14:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory",
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
                                                    "typeIdentifier": "t_string_memory",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2943,
                                                "name": "entryInsertPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2681,
                                                "src": "6022:22:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 2945,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "revokeAuthorization",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6235,
                                            "src": "6022:42:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 2948,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6022:65:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2949,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6022:65:4"
                                }
                            ]
                        },
                        "id": 2951,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 2941,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2940,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "5998:9:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5998:9:4"
                            }
                        ],
                        "name": "revokeInsertAgentAuthorization",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2939,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2938,
                                    "name": "agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2951,
                                    "src": "5960:13:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2937,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5960:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5959:15:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2942,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6012:0:4"
                        },
                        "scope": 3166,
                        "src": "5920:174:4",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 2965,
                            "nodeType": "Block",
                            "src": "6329:78:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 2961,
                                                "name": "agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2953,
                                                "src": "6380:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 2962,
                                                "name": "EDIT_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2689,
                                                "src": "6387:12:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory",
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
                                                    "typeIdentifier": "t_string_memory",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 2958,
                                                "name": "entryEditPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2683,
                                                "src": "6339:20:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 2960,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "revokeAuthorization",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6235,
                                            "src": "6339:40:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 2963,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6339:61:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 2964,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6339:61:4"
                                }
                            ]
                        },
                        "id": 2966,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 2956,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 2955,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "6315:9:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6315:9:4"
                            }
                        ],
                        "name": "revokeEditAgentAuthorization",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2954,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2953,
                                    "name": "agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 2966,
                                    "src": "6277:13:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2952,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6277:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6276:15:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2957,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6329:0:4"
                        },
                        "scope": 3166,
                        "src": "6239:168:4",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3015,
                            "nodeType": "Block",
                            "src": "6798:394:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "components": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2985,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "6829:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 2987,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2986,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "6838:11:4",
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
                                                    "src": "6829:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 2988,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "version",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2657,
                                                "src": "6829:29:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2989,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "6872:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 2991,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2990,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "6881:11:4",
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
                                                    "src": "6872:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 2992,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "beneficiary",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2659,
                                                "src": "6872:33:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2993,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "6919:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 2995,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2994,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "6928:11:4",
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
                                                    "src": "6919:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 2996,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "underwriter",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2661,
                                                "src": "6919:33:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2997,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "6966:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 2999,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 2998,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "6975:11:4",
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
                                                    "src": "6966:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 3000,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "underwriterRiskRating",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2663,
                                                "src": "6966:43:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3001,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "7023:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 3003,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3002,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "7032:11:4",
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
                                                    "src": "7023:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 3004,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContract",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2665,
                                                "src": "7023:35:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3005,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "7072:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 3007,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3006,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "7081:11:4",
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
                                                    "src": "7072:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 3008,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContractParameters",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2667,
                                                "src": "7072:45:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3009,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "7131:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 3011,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3010,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2968,
                                                        "src": "7140:11:4",
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
                                                    "src": "7131:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 3012,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "issuanceBlockTimestamp",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2669,
                                                "src": "7131:44:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "id": 3013,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "6815:370:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_bytes32_$_t_uint256_$",
                                            "typeString": "tuple(address,address,address,uint256,address,bytes32,uint256)"
                                        }
                                    },
                                    "functionReturnParameters": 2984,
                                    "id": 3014,
                                    "nodeType": "Return",
                                    "src": "6808:377:4"
                                }
                            ]
                        },
                        "id": 3016,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "get",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 2969,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2968,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6672:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2967,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6672:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6671:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 2984,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 2971,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6737:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2970,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6737:7:4",
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
                                    "id": 2973,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6746:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2972,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6746:7:4",
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
                                    "id": 2975,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6755:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2974,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6755:7:4",
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
                                    "id": 2977,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6764:4:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2976,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6764:4:4",
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
                                    "id": 2979,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6770:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 2978,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6770:7:4",
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
                                    "id": 2981,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6779:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 2980,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6779:7:4",
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
                                    "id": 2983,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3016,
                                    "src": "6788:4:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 2982,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6788:4:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6736:57:4"
                        },
                        "scope": 3166,
                        "src": "6659:533:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3031,
                            "nodeType": "Block",
                            "src": "7404:57:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 3026,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2674,
                                                "src": "7421:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                    "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                }
                                            },
                                            "id": 3028,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 3027,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3018,
                                                "src": "7430:11:4",
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
                                            "src": "7421:21:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                "typeString": "struct DebtRegistry.Entry storage ref"
                                            }
                                        },
                                        "id": 3029,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "beneficiary",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 2659,
                                        "src": "7421:33:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 3025,
                                    "id": 3030,
                                    "nodeType": "Return",
                                    "src": "7414:40:4"
                                }
                            ]
                        },
                        "id": 3032,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 3021,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3018,
                                        "src": "7362:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                ],
                                "id": 3022,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3020,
                                    "name": "onlyExtantEntry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2747,
                                    "src": "7346:15:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_bytes32_$",
                                        "typeString": "modifier (bytes32)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "7346:28:4"
                            }
                        ],
                        "name": "getBeneficiary",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3019,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3018,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3032,
                                    "src": "7289:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3017,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7289:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7288:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3025,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3024,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3032,
                                    "src": "7391:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3023,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7391:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7390:9:4"
                        },
                        "scope": 3166,
                        "src": "7265:196:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3047,
                            "nodeType": "Block",
                            "src": "7687:59:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 3042,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2674,
                                                "src": "7704:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                    "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                }
                                            },
                                            "id": 3044,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 3043,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3034,
                                                "src": "7713:11:4",
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
                                            "src": "7704:21:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                "typeString": "struct DebtRegistry.Entry storage ref"
                                            }
                                        },
                                        "id": 3045,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "termsContract",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 2665,
                                        "src": "7704:35:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 3041,
                                    "id": 3046,
                                    "nodeType": "Return",
                                    "src": "7697:42:4"
                                }
                            ]
                        },
                        "id": 3048,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 3037,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3034,
                                        "src": "7644:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                ],
                                "id": 3038,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3036,
                                    "name": "onlyExtantEntry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2747,
                                    "src": "7628:15:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_bytes32_$",
                                        "typeString": "modifier (bytes32)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "7628:28:4"
                            }
                        ],
                        "name": "getTermsContract",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3035,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3034,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3048,
                                    "src": "7571:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3033,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7571:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7570:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3041,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3040,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3048,
                                    "src": "7674:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3039,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7674:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7673:9:4"
                        },
                        "scope": 3166,
                        "src": "7545:201:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3063,
                            "nodeType": "Block",
                            "src": "7985:69:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 3058,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2674,
                                                "src": "8002:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                    "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                }
                                            },
                                            "id": 3060,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 3059,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3050,
                                                "src": "8011:11:4",
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
                                            "src": "8002:21:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                "typeString": "struct DebtRegistry.Entry storage ref"
                                            }
                                        },
                                        "id": 3061,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "termsContractParameters",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 2667,
                                        "src": "8002:45:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 3057,
                                    "id": 3062,
                                    "nodeType": "Return",
                                    "src": "7995:52:4"
                                }
                            ]
                        },
                        "id": 3064,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 3053,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3050,
                                        "src": "7942:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                ],
                                "id": 3054,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3052,
                                    "name": "onlyExtantEntry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2747,
                                    "src": "7926:15:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_bytes32_$",
                                        "typeString": "modifier (bytes32)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "7926:28:4"
                            }
                        ],
                        "name": "getTermsContractParameters",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3051,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3050,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3064,
                                    "src": "7869:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3049,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7869:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7868:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3057,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3056,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3064,
                                    "src": "7972:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3055,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7972:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7971:9:4"
                        },
                        "scope": 3166,
                        "src": "7833:221:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3086,
                            "nodeType": "Block",
                            "src": "8321:142:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "components": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3076,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "8352:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 3078,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3077,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3066,
                                                        "src": "8361:11:4",
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
                                                    "src": "8352:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 3079,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContract",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2665,
                                                "src": "8352:35:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3080,
                                                        "name": "registry",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 2674,
                                                        "src": "8401:8:4",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                            "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                        }
                                                    },
                                                    "id": 3082,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 3081,
                                                        "name": "agreementId",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3066,
                                                        "src": "8410:11:4",
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
                                                    "src": "8401:21:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                        "typeString": "struct DebtRegistry.Entry storage ref"
                                                    }
                                                },
                                                "id": 3083,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContractParameters",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2667,
                                                "src": "8401:45:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            }
                                        ],
                                        "id": 3084,
                                        "isConstant": false,
                                        "isInlineArray": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "TupleExpression",
                                        "src": "8338:118:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_address_$_t_bytes32_$",
                                            "typeString": "tuple(address,bytes32)"
                                        }
                                    },
                                    "functionReturnParameters": 3075,
                                    "id": 3085,
                                    "nodeType": "Return",
                                    "src": "8331:125:4"
                                }
                            ]
                        },
                        "id": 3087,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 3069,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3066,
                                        "src": "8270:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                ],
                                "id": 3070,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3068,
                                    "name": "onlyExtantEntry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2747,
                                    "src": "8254:15:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_bytes32_$",
                                        "typeString": "modifier (bytes32)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "8254:28:4"
                            }
                        ],
                        "name": "getTerms",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3067,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3066,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3087,
                                    "src": "8197:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3065,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8197:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8196:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3075,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3072,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3087,
                                    "src": "8299:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3071,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8299:7:4",
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
                                    "id": 3074,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3087,
                                    "src": "8308:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3073,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8308:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8298:18:4"
                        },
                        "scope": 3166,
                        "src": "8179:284:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3102,
                            "nodeType": "Block",
                            "src": "8723:68:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "expression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "id": 3097,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2674,
                                                "src": "8740:8:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_Entry_$2670_storage_$",
                                                    "typeString": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                                                }
                                            },
                                            "id": 3099,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 3098,
                                                "name": "agreementId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3089,
                                                "src": "8749:11:4",
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
                                            "src": "8740:21:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Entry_$2670_storage",
                                                "typeString": "struct DebtRegistry.Entry storage ref"
                                            }
                                        },
                                        "id": 3100,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberName": "issuanceBlockTimestamp",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 2669,
                                        "src": "8740:44:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 3096,
                                    "id": 3101,
                                    "nodeType": "Return",
                                    "src": "8733:51:4"
                                }
                            ]
                        },
                        "id": 3103,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "id": 3092,
                                        "name": "agreementId",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 3089,
                                        "src": "8673:11:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                ],
                                "id": 3093,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3091,
                                    "name": "onlyExtantEntry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 2747,
                                    "src": "8657:15:4",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$_t_bytes32_$",
                                        "typeString": "modifier (bytes32)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "8657:28:4"
                            }
                        ],
                        "name": "getIssuanceBlockTimestamp",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3090,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3089,
                                    "name": "agreementId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3103,
                                    "src": "8600:19:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3088,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8600:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8599:21:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3096,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3095,
                                    "name": "timestamp",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3103,
                                    "src": "8703:14:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3094,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8703:4:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8702:16:4"
                        },
                        "scope": 3166,
                        "src": "8565:226:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3113,
                            "nodeType": "Block",
                            "src": "8981:68:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3109,
                                                "name": "entryInsertPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2681,
                                                "src": "8998:22:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3110,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getAuthorizedAgents",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6278,
                                            "src": "8998:42:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                                            }
                                        },
                                        "id": 3111,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8998:44:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 3108,
                                    "id": 3112,
                                    "nodeType": "Return",
                                    "src": "8991:51:4"
                                }
                            ]
                        },
                        "id": 3114,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "getAuthorizedInsertAgents",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3104,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "8919:2:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3108,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3107,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3114,
                                    "src": "8966:9:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[] memory"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 3105,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8966:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 3106,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "8966:9:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[] storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8965:11:4"
                        },
                        "scope": 3166,
                        "src": "8885:164:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3124,
                            "nodeType": "Block",
                            "src": "9248:66:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3120,
                                                "name": "entryEditPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 2683,
                                                "src": "9265:20:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3121,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getAuthorizedAgents",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6278,
                                            "src": "9265:40:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                                            }
                                        },
                                        "id": 3122,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9265:42:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 3119,
                                    "id": 3123,
                                    "nodeType": "Return",
                                    "src": "9258:49:4"
                                }
                            ]
                        },
                        "id": 3125,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "getAuthorizedEditAgents",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3115,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "9186:2:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3119,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3118,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3125,
                                    "src": "9233:9:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[] memory"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 3116,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "9233:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 3117,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "9233:9:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[] storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9232:11:4"
                        },
                        "scope": 3166,
                        "src": "9154:160:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3137,
                            "nodeType": "Block",
                            "src": "9557:45:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 3133,
                                            "name": "debtorToDebts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 2679,
                                            "src": "9574:13:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_bytes32_$dyn_storage_$",
                                                "typeString": "mapping(address => bytes32[] storage ref)"
                                            }
                                        },
                                        "id": 3135,
                                        "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 3134,
                                            "name": "debtor",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3127,
                                            "src": "9588:6:4",
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
                                        "src": "9574:21:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                            "typeString": "bytes32[] storage ref"
                                        }
                                    },
                                    "functionReturnParameters": 3132,
                                    "id": 3136,
                                    "nodeType": "Return",
                                    "src": "9567:28:4"
                                }
                            ]
                        },
                        "id": 3138,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "getDebtorsDebts",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3128,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3127,
                                    "name": "debtor",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3138,
                                    "src": "9482:14:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3126,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9482:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9481:16:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3132,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3131,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3138,
                                    "src": "9542:9:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                                        "typeString": "bytes32[] memory"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 3129,
                                            "name": "bytes32",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "9542:7:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 3130,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "9542:9:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                                            "typeString": "bytes32[] storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9541:11:4"
                        },
                        "scope": 3166,
                        "src": "9457:145:4",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3164,
                            "nodeType": "Block",
                            "src": "9855:263:4",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 3150,
                                                    "name": "_entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3140,
                                                    "src": "9895:6:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 3151,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "version",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2657,
                                                "src": "9895:14:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3152,
                                                "name": "_debtor",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3142,
                                                "src": "9923:7:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 3153,
                                                    "name": "_entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3140,
                                                    "src": "9944:6:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 3154,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "underwriter",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2661,
                                                "src": "9944:18:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 3155,
                                                    "name": "_entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3140,
                                                    "src": "9976:6:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 3156,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "underwriterRiskRating",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2663,
                                                "src": "9976:28:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 3157,
                                                    "name": "_entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3140,
                                                    "src": "10018:6:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 3158,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContract",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2665,
                                                "src": "10018:20:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 3159,
                                                    "name": "_entry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3140,
                                                    "src": "10052:6:4",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                                        "typeString": "struct DebtRegistry.Entry memory"
                                                    }
                                                },
                                                "id": 3160,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "termsContractParameters",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 2667,
                                                "src": "10052:30:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3161,
                                                "name": "_salt",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3144,
                                                "src": "10096:5:4",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
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
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 3149,
                                            "name": "keccak256",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15835,
                                            "src": "9872:9:4",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                                "typeString": "function () pure returns (bytes32)"
                                            }
                                        },
                                        "id": 3162,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9872:239:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 3148,
                                    "id": 3163,
                                    "nodeType": "Return",
                                    "src": "9865:246:4"
                                }
                            ]
                        },
                        "id": 3165,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "_getAgreementId",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3145,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3140,
                                    "name": "_entry",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3165,
                                    "src": "9753:12:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Entry_$2670_memory_ptr",
                                        "typeString": "struct DebtRegistry.Entry memory"
                                    },
                                    "typeName": {
                                        "contractScope": null,
                                        "id": 3139,
                                        "name": "Entry",
                                        "nodeType": "UserDefinedTypeName",
                                        "referencedDeclaration": 2670,
                                        "src": "9753:5:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Entry_$2670_storage_ptr",
                                            "typeString": "struct DebtRegistry.Entry storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 3142,
                                    "name": "_debtor",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3165,
                                    "src": "9767:15:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3141,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9767:7:4",
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
                                    "id": 3144,
                                    "name": "_salt",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3165,
                                    "src": "9784:10:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3143,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9784:4:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9752:43:4"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3148,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3147,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3165,
                                    "src": "9842:7:4",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3146,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9842:7:4",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9841:9:4"
                        },
                        "scope": 3166,
                        "src": "9728:390:4",
                        "stateMutability": "pure",
                        "superFunction": null,
                        "visibility": "internal"
                    }
                ],
                "scope": 3167,
                "src": "1124:8996:4"
            }
        ],
        "src": "584:9537:4"
    },
    "compiler": {
        "name": "solc",
        "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
    },
    "networks": {
        "42": {
            "events": {
                "0x10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agreementId",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "name": "beneficiary",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "underwriter",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "underwriterRiskRating",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "termsContract",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "termsContractParameters",
                            "type": "bytes32"
                        }
                    ],
                    "name": "LogInsertEntry",
                    "type": "event",
                    "signature": "0x10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240"
                },
                "0x7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d8094": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agreementId",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "name": "previousBeneficiary",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "newBeneficiary",
                            "type": "address"
                        }
                    ],
                    "name": "LogModifyEntryBeneficiary",
                    "type": "event",
                    "signature": "0x7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d8094"
                },
                "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
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
                    "type": "event",
                    "signature": "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5"
                },
                "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
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
                    "type": "event",
                    "signature": "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c"
                },
                "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Pause",
                    "type": "event",
                    "signature": "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625"
                },
                "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Unpause",
                    "type": "event",
                    "signature": "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33"
                },
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event",
                    "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                }
            },
            "links": {},
            "address": "0xd1Afa0368d4720D08Fd8aaBcfC5b580B552558D8",
            "transactionHash": "0x2cd043d015e971379901737d9e3fb909afbb844924133b0a95281b52598b2c0b"
        },
        "70": {
            "events": {
                "0x10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agreementId",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "name": "beneficiary",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "underwriter",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "underwriterRiskRating",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "termsContract",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "termsContractParameters",
                            "type": "bytes32"
                        }
                    ],
                    "name": "LogInsertEntry",
                    "type": "event",
                    "signature": "0x10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240"
                },
                "0x7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d8094": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "agreementId",
                            "type": "bytes32"
                        },
                        {
                            "indexed": true,
                            "name": "previousBeneficiary",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "newBeneficiary",
                            "type": "address"
                        }
                    ],
                    "name": "LogModifyEntryBeneficiary",
                    "type": "event",
                    "signature": "0x7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d8094"
                },
                "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
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
                    "type": "event",
                    "signature": "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5"
                },
                "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
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
                    "type": "event",
                    "signature": "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c"
                },
                "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Pause",
                    "type": "event",
                    "signature": "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625"
                },
                "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
                    "anonymous": false,
                    "inputs": [],
                    "name": "Unpause",
                    "type": "event",
                    "signature": "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33"
                },
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event",
                    "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
                }
            },
            "links": {},
            "address": "0x1e346ccF34431C09130e8D00b2A6141D35E6Ac84",
            "transactionHash": "0x463e1f22ae7346c3f09eee0511f2d79393ad55c1bebfcd8f334152a5f929a841"
        }
    },
    "schemaVersion": "3.0.1",
    "updatedAt": "2019-02-04T01:11:00.836Z",
    "devdoc": {
        "methods": {
            "pause()": {
                "details": "called by the owner to pause, triggers stopped state"
            },
            "transferOwnership(address)": {
                "details": "Allows the current owner to transfer control of the contract to a newOwner.",
                "params": {
                    "newOwner": "The address to transfer ownership to."
                }
            },
            "unpause()": {
                "details": "called by the owner to unpause, returns to normal state"
            }
        }
    },
    "userdoc": {
        "methods": {
            "addAuthorizedEditAgent(address)": {
                "notice": "Adds an address to the list of agents authorized to make 'modifyBeneficiary' mutations to the registry."
            },
            "addAuthorizedInsertAgent(address)": {
                "notice": "Adds an address to the list of agents authorized to make 'insert' mutations to the registry."
            },
            "get(bytes32)": {
                "notice": "Returns the parameters of a debt issuance in the registry.     * TODO(kayvon): protect this function with our `onlyExtantEntry` modifier once the restriction on the size of the call stack has been addressed."
            },
            "getAuthorizedEditAgents()": {
                "notice": "Returns the list of agents authorized to make 'modifyBeneficiary' mutations"
            },
            "getAuthorizedInsertAgents()": {
                "notice": "Returns the list of agents authorized to make 'insert' mutations"
            },
            "getBeneficiary(bytes32)": {
                "notice": "Returns the beneficiary of a given issuance"
            },
            "getDebtorsDebts(address)": {
                "notice": "Returns the list of debt agreements a debtor is party to, with each debt agreement listed by agreement ID."
            },
            "getIssuanceBlockTimestamp(bytes32)": {
                "notice": "Returns the timestamp of the block at which a debt agreement was issued."
            },
            "getTerms(bytes32)": {
                "notice": "Returns a tuple of the terms contract and its associated parameters for a given issuance"
            },
            "getTermsContract(bytes32)": {
                "notice": "Returns the terms contract address of a given issuance"
            },
            "getTermsContractParameters(bytes32)": {
                "notice": "Returns the terms contract parameters of a given issuance"
            },
            "insert(address,address,address,address,uint256,address,bytes32,uint256)": {
                "notice": "Inserts a new entry into the registry, if the entry is valid and sender is authorized to make 'insert' mutations to the registry."
            },
            "modifyBeneficiary(bytes32,address)": {
                "notice": "Modifies the beneficiary of a debt issuance, if the sender is authorized to make 'modifyBeneficiary' mutations to the registry."
            },
            "revokeEditAgentAuthorization(address)": {
                "notice": "Removes an address from the list of agents authorized to make 'modifyBeneficiary' mutations to the registry."
            },
            "revokeInsertAgentAuthorization(address)": {
                "notice": "Removes an address from the list of agents authorized to make 'insert' mutations to the registry."
            }
        }
    }
};
//# sourceMappingURL=DebtRegistry.js.map