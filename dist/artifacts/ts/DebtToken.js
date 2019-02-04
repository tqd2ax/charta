"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebtToken = {
    "contractName": "DebtToken",
    "abi": [
        {
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x06fdde03"
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
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x081812fc"
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
            "type": "function",
            "signature": "0x18160ddd"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "CREATION_CONTEXT",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x1fe23d7f"
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
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x2f745c59"
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
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "exists",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x4f558e79"
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
            "type": "function",
            "signature": "0x4f6ccce7"
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
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x6352211e"
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
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x70a08231"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "registry",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x7b103999"
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
            "name": "symbol",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x95d89b41"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "URI_CONTEXT",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0xb5c2f7ea"
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
            "type": "function",
            "signature": "0xc87b56dd"
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
            "type": "function",
            "signature": "0xe985e9c5"
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
            "inputs": [
                {
                    "name": "_registry",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor",
            "signature": "constructor"
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
            "type": "event",
            "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
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
            "type": "event",
            "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
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
            "type": "event",
            "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "interfaceID",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "name": "_isSupported",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x01ffc9a7"
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
            "name": "create",
            "outputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x99f10501"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_agent",
                    "type": "address"
                }
            ],
            "name": "addAuthorizedMintAgent",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x9c0d9c43"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_agent",
                    "type": "address"
                }
            ],
            "name": "revokeMintAgentAuthorization",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x81ac3fbc"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getAuthorizedMintAgents",
            "outputs": [
                {
                    "name": "_agents",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x0343e122"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_agent",
                    "type": "address"
                }
            ],
            "name": "addAuthorizedTokenURIAgent",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x33d26177"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getAuthorizedTokenURIAgents",
            "outputs": [
                {
                    "name": "_agents",
                    "type": "address[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function",
            "signature": "0x21d37127"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_agent",
                    "type": "address"
                }
            ],
            "name": "revokeTokenURIAuthorization",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x00b0aeae"
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
            "type": "function",
            "signature": "0x095ea7b3"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_to",
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
            "type": "function",
            "signature": "0xa22cb465"
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
            "type": "function",
            "signature": "0xa9059cbb"
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
            "type": "function",
            "signature": "0x23b872dd"
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
            "type": "function",
            "signature": "0x42842e0e"
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
            "type": "function",
            "signature": "0xb88d4fde"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_tokenId",
                    "type": "uint256"
                },
                {
                    "name": "_uri",
                    "type": "string"
                }
            ],
            "name": "setTokenURI",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x162094c4"
        }
    ],
    "bytecode": "0x60606040526000600b60146101000a81548160ff02191690831515021790555034156200002b57600080fd5b60405160208062003823833981016040528080519060200190919050506040805190810160405280600981526020017f44656274546f6b656e00000000000000000000000000000000000000000000008152506040805190810160405280600381526020017f44445400000000000000000000000000000000000000000000000000000000008152508160049080519060200190620000cc92919062000171565b508060059080519060200190620000e592919062000171565b50505033600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000220565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001b457805160ff1916838001178555620001e5565b82800160010185558215620001e5579182015b82811115620001e4578251825591602001919060010190620001c7565b5b509050620001f49190620001f8565b5090565b6200021d91905b8082111562000219576000816000905550600101620001ff565b5090565b90565b6135f380620002306000396000f3006060604052600436106101ab576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062b0aeae146101b057806301ffc9a7146101e95780630343e1221461024357806306fdde03146102ad578063081812fc1461033b578063095ea7b31461039e578063162094c4146103e057806318160ddd146104465780631fe23d7f1461046f57806321d37127146104fd57806323b872dd146105675780632f745c59146105c857806333d261771461061e5780633f4ba83a1461065757806342842e0e1461066c5780634f558e79146106cd5780634f6ccce7146107085780635c975abb1461073f5780636352211e1461076c57806370a08231146107cf5780637b1039991461081c57806381ac3fbc146108715780638456cb59146108aa5780638da5cb5b146108bf57806395d89b411461091457806399f10501146109a25780639c0d9c4314610a8a578063a22cb46514610ac3578063a9059cbb14610b07578063b5c2f7ea14610b49578063b88d4fde14610bd7578063c87b56dd14610c7b578063e985e9c514610d17578063f2fde38b14610d87575b600080fd5b34156101bb57600080fd5b6101e7600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610dc0565b005b34156101f457600080fd5b61022960048080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019091905050610e6a565b604051808215151515815260200191505060405180910390f35b341561024e57600080fd5b610256610eb8565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561029957808201518184015260208101905061027e565b505050509050019250505060405180910390f35b34156102b857600080fd5b6102c0610ecf565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103005780820151818401526020810190506102e5565b50505050905090810190601f16801561032d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561034657600080fd5b61035c6004808035906020019091905050610f77565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103a957600080fd5b6103de600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610fb4565b005b34156103eb57600080fd5b610444600480803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610fde565b005b341561045157600080fd5b610459611027565b6040518082815260200191505060405180910390f35b341561047a57600080fd5b610482611034565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104c25780820151818401526020810190506104a7565b50505050905090810190601f1680156104ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561050857600080fd5b61051061106d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610553578082015181840152602081019050610538565b505050509050019250505060405180910390f35b341561057257600080fd5b6105c6600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611084565b005b34156105d357600080fd5b610608600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506110ba565b6040518082815260200191505060405180910390f35b341561062957600080fd5b610655600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611132565b005b341561066257600080fd5b61066a6111dc565b005b341561067757600080fd5b6106cb600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061129c565b005b34156106d857600080fd5b6106ee60048080359060200190919050506112d2565b604051808215151515815260200191505060405180910390f35b341561071357600080fd5b6107296004808035906020019091905050611343565b6040518082815260200191505060405180910390f35b341561074a57600080fd5b61075261137c565b604051808215151515815260200191505060405180910390f35b341561077757600080fd5b61078d600480803590602001909190505061138f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107da57600080fd5b610806600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061140c565b6040518082815260200191505060405180910390f35b341561082757600080fd5b61082f611490565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561087c57600080fd5b6108a8600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506114b6565b005b34156108b557600080fd5b6108bd611560565b005b34156108ca57600080fd5b6108d2611621565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561091f57600080fd5b610927611647565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561096757808201518184015260208101905061094c565b50505050905090810190601f1680156109945780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156109ad57600080fd5b610a74600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506116ef565b6040518082815260200191505060405180910390f35b3415610a9557600080fd5b610ac1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611921565b005b3415610ace57600080fd5b610b05600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803515159060200190919050506119cb565b005b3415610b1257600080fd5b610b47600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506119f5565b005b3415610b5457600080fd5b610b5c611a04565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b9c578082015181840152602081019050610b81565b50505050905090810190601f168015610bc95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610be257600080fd5b610c79600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611a3d565b005b3415610c8657600080fd5b610c9c6004808035906020019091905050611a75565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cdc578082015181840152602081019050610cc1565b50505050905090810190601f168015610d095780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610d2257600080fd5b610d6d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611b44565b604051808215151515815260200191505060405180910390f35b3415610d9257600080fd5b610dbe600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611bd8565b005b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e1c57600080fd5b610e67816040805190810160405280600e81526020017f646562742d746f6b656e2d7572690000000000000000000000000000000000008152506010611d309092919063ffffffff16565b50565b60006380ac58cd7c010000000000000000000000000000000000000000000000000000000002827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610ec061344a565b610eca600d612026565b905090565b610ed761345e565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f6d5780601f10610f4257610100808354040283529160200191610f6d565b820191906000526020600020905b815481529060010190602001808311610f5057829003601f168201915b5050505050905090565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600b60149054906101000a900460ff16151515610fd057600080fd5b610fda82826120be565b5050565b600b60149054906101000a900460ff16151515610ffa57600080fd5b61100e33601061228490919063ffffffff16565b151561101957600080fd5b61102382826122dd565b5050565b6000600880549050905090565b6040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e0000000000000000000000000081525081565b61107561344a565b61107f6010612026565b905090565b600b60149054906101000a900460ff161515156110a057600080fd5b6110aa818361231d565b6110b58383836124f8565b505050565b60006110c58361140c565b821015156110d257600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110151561111e57fe5b906000526020600020900154905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561118e57600080fd5b6111d9816040805190810160405280600e81526020017f646562742d746f6b656e2d757269000000000000000000000000000000000000815250601061260f9092919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561123857600080fd5b600b60149054906101000a900460ff16151561125357600080fd5b6000600b60146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600b60149054906101000a900460ff161515156112b857600080fd5b6112c2818361231d565b6112cd8383836127eb565b505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600061134d611027565b8210151561135a57600080fd5b60088281548110151561136957fe5b9060005260206000209001549050919050565b600b60149054906101000a900460ff1681565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561140357600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561144957600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561151257600080fd5b61155d816040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e00000000000000000000000000815250600d611d309092919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156115bc57600080fd5b600b60149054906101000a900460ff161515156115d857600080fd5b6001600b60146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61164f61345e565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116e55780601f106116ba576101008083540402835291602001916116e5565b820191906000526020600020905b8154815290600101906020018083116116c857829003601f168201915b5050505050905090565b600080600b60149054906101000a900460ff1615151561170e57600080fd5b61172233600d61228490919063ffffffff16565b151561172d57600080fd5b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cf9df5eb8b8b8b8b8b8b8b8b6000604051602001526040518963ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200198505050505050505050602060405180830381600087803b15156118e257600080fd5b6102c65a03f115156118f357600080fd5b50505060405180519050905061190d898260019004612823565b806001900491505098975050505050505050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561197d57600080fd5b6119c8816040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e00000000000000000000000000815250600d61260f9092919063ffffffff16565b50565b600b60149054906101000a900460ff161515156119e757600080fd5b6119f18282612877565b5050565b611a0033838361129c565b5050565b6040805190810160405280600e81526020017f646562742d746f6b656e2d75726900000000000000000000000000000000000081525081565b600b60149054906101000a900460ff16151515611a5957600080fd5b611a63828461231d565b611a6f848484846129b3565b50505050565b611a7d61345e565b611a86826112d2565b1515611a9157600080fd5b600a60008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b385780601f10611b0d57610100808354040283529160200191611b38565b820191906000526020600020905b815481529060010190602001808311611b1b57829003601f168201915b50505050509050919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611c3457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611c7057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000611d3f8686612284565b1515611d4a57600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515611dac57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515611e3d57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515611f2257fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081611f6a9190613472565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015611fe4578082015181840152602081019050611fc9565b50505050905090810190601f1680156120115780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b61202e61344a565b816002018054806020026020016040519081016040528092919081815260200182805480156120b257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612068575b50505050509050919050565b60006120c98261138f565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561210657600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061214657506121458133611b44565b5b151561215157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661217283610f77565b73ffffffffffffffffffffffffffffffffffffffff161415806121c25750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561227f57826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6122e6826112d2565b15156122f157600080fd5b80600a6000848152602001908152602001600020908051906020019061231892919061349e565b505050565b8073ffffffffffffffffffffffffffffffffffffffff16600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846001026000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156123d857600080fd5b6102c65a03f115156123e957600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff161415156124f457600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635969549e83600102836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15156124df57600080fd5b6102c65a03f115156124f057600080fd5b5050505b5050565b8061250333826129f2565b151561250e57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561254a57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561258657600080fd5b6125908483612a87565b61259a8483612bf0565b6125a48383612e0b565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6126198383612edf565b151561262457600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018054806001018281612694919061351e565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b838110156127ac578082015181840152602081019050612791565b50505050905090810190601f1680156127d95780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b806127f633826129f2565b151561280157600080fd5b61281d8484846020604051908101604052806000815250611a3d565b50505050565b61282d8282612ef4565b60088054905060096000838152602001908152602001600020819055506008805480600101828161285e919061354a565b9160005260206000209001600083909190915055505050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156128b257600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b816129be33826129f2565b15156129c957600080fd5b6129d4858585611084565b6129e085858585612fa4565b15156129eb57600080fd5b5050505050565b6000806129fe8361138f565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612a6d57508373ffffffffffffffffffffffffffffffffffffffff16612a5584610f77565b73ffffffffffffffffffffffffffffffffffffffff16145b80612a7e5750612a7d8185611b44565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16612aa78261138f565b73ffffffffffffffffffffffffffffffffffffffff16141515612ac957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612bec5760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b6000806000612bff858561317a565b60076000858152602001908152602001600020549250612c6b6001600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506132a890919063ffffffff16565b9150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515612cb957fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084815481101515612d1457fe5b9060005260206000209001819055506000600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515612d7157fe5b906000526020600020900181905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612dd29190613576565b50600060076000868152602001908152602001600020819055508260076000838152602001908152602001600020819055505050505050565b6000612e1783836132c1565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806001018281612ead919061354a565b916000526020600020900160008490919091505550806007600084815260200190815260200160002081905550505050565b6000612eeb8383612284565b15905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515612f3057600080fd5b612f3a8282612e0b565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600080612fc68573ffffffffffffffffffffffffffffffffffffffff16613419565b1515612fd55760019150613171565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156130a0578082015181840152602081019050613085565b50505050905090810190601f1680156130cd5780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15156130ed57600080fd5b6102c65a03f115156130fe57600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff1661319a8261138f565b73ffffffffffffffffffffffffffffffffffffffff161415156131bc57600080fd5b61320f6001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546132a890919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008282111515156132b657fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561332e57600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506133d26001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461342c90919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080823b905060008111915050919050565b600080828401905083811015151561344057fe5b8091505092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b8154818355818115116134995781836000526020600020918201910161349891906135a2565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106134df57805160ff191683800117855561350d565b8280016001018555821561350d579182015b8281111561350c5782518255916020019190600101906134f1565b5b50905061351a91906135a2565b5090565b8154818355818115116135455781836000526020600020918201910161354491906135a2565b5b505050565b8154818355818115116135715781836000526020600020918201910161357091906135a2565b5b505050565b81548183558181151161359d5781836000526020600020918201910161359c91906135a2565b5b505050565b6135c491905b808211156135c05760008160009055506001016135a8565b5090565b905600a165627a7a72305820b7fbc1a93187eaf360458b73830d1d4684b4c2628cb242240ee14c50b2fb71270029",
    "deployedBytecode": "0x6060604052600436106101ab576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062b0aeae146101b057806301ffc9a7146101e95780630343e1221461024357806306fdde03146102ad578063081812fc1461033b578063095ea7b31461039e578063162094c4146103e057806318160ddd146104465780631fe23d7f1461046f57806321d37127146104fd57806323b872dd146105675780632f745c59146105c857806333d261771461061e5780633f4ba83a1461065757806342842e0e1461066c5780634f558e79146106cd5780634f6ccce7146107085780635c975abb1461073f5780636352211e1461076c57806370a08231146107cf5780637b1039991461081c57806381ac3fbc146108715780638456cb59146108aa5780638da5cb5b146108bf57806395d89b411461091457806399f10501146109a25780639c0d9c4314610a8a578063a22cb46514610ac3578063a9059cbb14610b07578063b5c2f7ea14610b49578063b88d4fde14610bd7578063c87b56dd14610c7b578063e985e9c514610d17578063f2fde38b14610d87575b600080fd5b34156101bb57600080fd5b6101e7600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610dc0565b005b34156101f457600080fd5b61022960048080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019091905050610e6a565b604051808215151515815260200191505060405180910390f35b341561024e57600080fd5b610256610eb8565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561029957808201518184015260208101905061027e565b505050509050019250505060405180910390f35b34156102b857600080fd5b6102c0610ecf565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103005780820151818401526020810190506102e5565b50505050905090810190601f16801561032d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561034657600080fd5b61035c6004808035906020019091905050610f77565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103a957600080fd5b6103de600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610fb4565b005b34156103eb57600080fd5b610444600480803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610fde565b005b341561045157600080fd5b610459611027565b6040518082815260200191505060405180910390f35b341561047a57600080fd5b610482611034565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104c25780820151818401526020810190506104a7565b50505050905090810190601f1680156104ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561050857600080fd5b61051061106d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610553578082015181840152602081019050610538565b505050509050019250505060405180910390f35b341561057257600080fd5b6105c6600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611084565b005b34156105d357600080fd5b610608600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506110ba565b6040518082815260200191505060405180910390f35b341561062957600080fd5b610655600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611132565b005b341561066257600080fd5b61066a6111dc565b005b341561067757600080fd5b6106cb600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061129c565b005b34156106d857600080fd5b6106ee60048080359060200190919050506112d2565b604051808215151515815260200191505060405180910390f35b341561071357600080fd5b6107296004808035906020019091905050611343565b6040518082815260200191505060405180910390f35b341561074a57600080fd5b61075261137c565b604051808215151515815260200191505060405180910390f35b341561077757600080fd5b61078d600480803590602001909190505061138f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107da57600080fd5b610806600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061140c565b6040518082815260200191505060405180910390f35b341561082757600080fd5b61082f611490565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561087c57600080fd5b6108a8600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506114b6565b005b34156108b557600080fd5b6108bd611560565b005b34156108ca57600080fd5b6108d2611621565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561091f57600080fd5b610927611647565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561096757808201518184015260208101905061094c565b50505050905090810190601f1680156109945780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156109ad57600080fd5b610a74600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506116ef565b6040518082815260200191505060405180910390f35b3415610a9557600080fd5b610ac1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611921565b005b3415610ace57600080fd5b610b05600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803515159060200190919050506119cb565b005b3415610b1257600080fd5b610b47600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506119f5565b005b3415610b5457600080fd5b610b5c611a04565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b9c578082015181840152602081019050610b81565b50505050905090810190601f168015610bc95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610be257600080fd5b610c79600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611a3d565b005b3415610c8657600080fd5b610c9c6004808035906020019091905050611a75565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cdc578082015181840152602081019050610cc1565b50505050905090810190601f168015610d095780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610d2257600080fd5b610d6d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611b44565b604051808215151515815260200191505060405180910390f35b3415610d9257600080fd5b610dbe600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611bd8565b005b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e1c57600080fd5b610e67816040805190810160405280600e81526020017f646562742d746f6b656e2d7572690000000000000000000000000000000000008152506010611d309092919063ffffffff16565b50565b60006380ac58cd7c010000000000000000000000000000000000000000000000000000000002827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610ec061344a565b610eca600d612026565b905090565b610ed761345e565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f6d5780601f10610f4257610100808354040283529160200191610f6d565b820191906000526020600020905b815481529060010190602001808311610f5057829003601f168201915b5050505050905090565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600b60149054906101000a900460ff16151515610fd057600080fd5b610fda82826120be565b5050565b600b60149054906101000a900460ff16151515610ffa57600080fd5b61100e33601061228490919063ffffffff16565b151561101957600080fd5b61102382826122dd565b5050565b6000600880549050905090565b6040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e0000000000000000000000000081525081565b61107561344a565b61107f6010612026565b905090565b600b60149054906101000a900460ff161515156110a057600080fd5b6110aa818361231d565b6110b58383836124f8565b505050565b60006110c58361140c565b821015156110d257600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110151561111e57fe5b906000526020600020900154905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561118e57600080fd5b6111d9816040805190810160405280600e81526020017f646562742d746f6b656e2d757269000000000000000000000000000000000000815250601061260f9092919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561123857600080fd5b600b60149054906101000a900460ff16151561125357600080fd5b6000600b60146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600b60149054906101000a900460ff161515156112b857600080fd5b6112c2818361231d565b6112cd8383836127eb565b505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600061134d611027565b8210151561135a57600080fd5b60088281548110151561136957fe5b9060005260206000209001549050919050565b600b60149054906101000a900460ff1681565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561140357600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561144957600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561151257600080fd5b61155d816040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e00000000000000000000000000815250600d611d309092919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156115bc57600080fd5b600b60149054906101000a900460ff161515156115d857600080fd5b6001600b60146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61164f61345e565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116e55780601f106116ba576101008083540402835291602001916116e5565b820191906000526020600020905b8154815290600101906020018083116116c857829003601f168201915b5050505050905090565b600080600b60149054906101000a900460ff1615151561170e57600080fd5b61172233600d61228490919063ffffffff16565b151561172d57600080fd5b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cf9df5eb8b8b8b8b8b8b8b8b6000604051602001526040518963ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200198505050505050505050602060405180830381600087803b15156118e257600080fd5b6102c65a03f115156118f357600080fd5b50505060405180519050905061190d898260019004612823565b806001900491505098975050505050505050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561197d57600080fd5b6119c8816040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e00000000000000000000000000815250600d61260f9092919063ffffffff16565b50565b600b60149054906101000a900460ff161515156119e757600080fd5b6119f18282612877565b5050565b611a0033838361129c565b5050565b6040805190810160405280600e81526020017f646562742d746f6b656e2d75726900000000000000000000000000000000000081525081565b600b60149054906101000a900460ff16151515611a5957600080fd5b611a63828461231d565b611a6f848484846129b3565b50505050565b611a7d61345e565b611a86826112d2565b1515611a9157600080fd5b600a60008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b385780601f10611b0d57610100808354040283529160200191611b38565b820191906000526020600020905b815481529060010190602001808311611b1b57829003601f168201915b50505050509050919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611c3457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611c7057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000611d3f8686612284565b1515611d4a57600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515611dac57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515611e3d57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515611f2257fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081611f6a9190613472565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015611fe4578082015181840152602081019050611fc9565b50505050905090810190601f1680156120115780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b61202e61344a565b816002018054806020026020016040519081016040528092919081815260200182805480156120b257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612068575b50505050509050919050565b60006120c98261138f565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561210657600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061214657506121458133611b44565b5b151561215157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661217283610f77565b73ffffffffffffffffffffffffffffffffffffffff161415806121c25750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561227f57826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6122e6826112d2565b15156122f157600080fd5b80600a6000848152602001908152602001600020908051906020019061231892919061349e565b505050565b8073ffffffffffffffffffffffffffffffffffffffff16600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846001026000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156123d857600080fd5b6102c65a03f115156123e957600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff161415156124f457600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635969549e83600102836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15156124df57600080fd5b6102c65a03f115156124f057600080fd5b5050505b5050565b8061250333826129f2565b151561250e57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561254a57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561258657600080fd5b6125908483612a87565b61259a8483612bf0565b6125a48383612e0b565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6126198383612edf565b151561262457600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018054806001018281612694919061351e565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b838110156127ac578082015181840152602081019050612791565b50505050905090810190601f1680156127d95780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b806127f633826129f2565b151561280157600080fd5b61281d8484846020604051908101604052806000815250611a3d565b50505050565b61282d8282612ef4565b60088054905060096000838152602001908152602001600020819055506008805480600101828161285e919061354a565b9160005260206000209001600083909190915055505050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156128b257600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b816129be33826129f2565b15156129c957600080fd5b6129d4858585611084565b6129e085858585612fa4565b15156129eb57600080fd5b5050505050565b6000806129fe8361138f565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612a6d57508373ffffffffffffffffffffffffffffffffffffffff16612a5584610f77565b73ffffffffffffffffffffffffffffffffffffffff16145b80612a7e5750612a7d8185611b44565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16612aa78261138f565b73ffffffffffffffffffffffffffffffffffffffff16141515612ac957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612bec5760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b6000806000612bff858561317a565b60076000858152602001908152602001600020549250612c6b6001600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506132a890919063ffffffff16565b9150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515612cb957fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084815481101515612d1457fe5b9060005260206000209001819055506000600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515612d7157fe5b906000526020600020900181905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612dd29190613576565b50600060076000868152602001908152602001600020819055508260076000838152602001908152602001600020819055505050505050565b6000612e1783836132c1565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806001018281612ead919061354a565b916000526020600020900160008490919091505550806007600084815260200190815260200160002081905550505050565b6000612eeb8383612284565b15905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515612f3057600080fd5b612f3a8282612e0b565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600080612fc68573ffffffffffffffffffffffffffffffffffffffff16613419565b1515612fd55760019150613171565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156130a0578082015181840152602081019050613085565b50505050905090810190601f1680156130cd5780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15156130ed57600080fd5b6102c65a03f115156130fe57600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff1661319a8261138f565b73ffffffffffffffffffffffffffffffffffffffff161415156131bc57600080fd5b61320f6001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546132a890919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008282111515156132b657fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561332e57600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506133d26001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461342c90919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080823b905060008111915050919050565b600080828401905083811015151561344057fe5b8091505092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b8154818355818115116134995781836000526020600020918201910161349891906135a2565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106134df57805160ff191683800117855561350d565b8280016001018555821561350d579182015b8281111561350c5782518255916020019190600101906134f1565b5b50905061351a91906135a2565b5090565b8154818355818115116135455781836000526020600020918201910161354491906135a2565b5b505050565b8154818355818115116135715781836000526020600020918201910161357091906135a2565b5b505050565b81548183558181151161359d5781836000526020600020918201910161359c91906135a2565b5b505050565b6135c491905b808211156135c05760008160009055506001016135a8565b5090565b905600a165627a7a72305820b7fbc1a93187eaf360458b73830d1d4684b4c2628cb242240ee14c50b2fb71270029",
    "sourceMap": "1362:6140:5:-;;;268:5:37;247:26;;;;;;;;;;;;;;;;;;;;1867:148:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1107:105:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1179:5;1171;:13;;;;;;;;;;;;:::i;:::-;;1200:7;1190;:17;;;;;;;;;;;;:::i;:::-;;1107:105;;509:10:39;501:5;;:18;;;;;;;;;;;;;;;;;;1998:9:5;1974:8;;:34;;;;;;;;;;;;;;;;;;1867:148;1362:6140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "1362:6140:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4640:167;;;;;;;;;;;;;;;;;;;;;;;;;;;;2110:176;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3854:173;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;1303:68:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4974:131:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6913:207;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2887:87:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1659:63:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4366:172:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;5793:206:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2571:177:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4124:156:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:37;;;;;;;;;;;;;;6175:214:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2445:140:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3298::50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;247:26:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2107:164:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1756:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1496:28:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3589:178;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85:37;;;;;;;;;;;;;;238:20:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1466:72:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2455:770:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3324:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;5281:153;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5496:125;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1728:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6565:234:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:133:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4478:142:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;4640:167:5;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;4740:60:5;4780:6;4788:11;;;;;;;;;;;;;;;;;;4740:19;:39;;:60;;;;;:::i;:::-;4640:167;:::o;2110:176::-;2204:17;2259:10;2244:25;;:11;:25;;;;2237:32;;2110:176;;;:::o;3854:173::-;3934:17;;:::i;:::-;3974:46;:24;:44;:46::i;:::-;3967:53;;3854:173;:::o;1303:68:50:-;1340:6;;:::i;:::-;1361:5;1354:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1303:68;:::o;3577:111:48:-;3637:7;3659:14;:24;3674:8;3659:24;;;;;;;;;;;;;;;;;;;;;3652:31;;3577:111;;;:::o;4974:131:5:-;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;5070:28:5;5084:3;5089:8;5070:13;:28::i;:::-;4974:131;;:::o;6913:207::-;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;7024:44:5;7057:10;7024:19;:32;;:44;;;;:::i;:::-;7016:53;;;;;;;;7079:34;7098:8;7108:4;7079:18;:34::i;:::-;6913:207;;:::o;2887:87:50:-;2931:7;2953:9;:16;;;;2946:23;;2887:87;:::o;1659:63:5:-;;;;;;;;;;;;;;;;;;;;:::o;4366:172::-;4450:17;;:::i;:::-;4490:41;:19;:39;:41::i;:::-;4483:48;;4366:172;:::o;5793:206::-;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;5909:33:5;5928:8;5938:3;5909:18;:33::i;:::-;5952:40;5971:5;5978:3;5983:8;5952:18;:40::i;:::-;5793:206;;;:::o;2571:177:50:-;2653:7;2685:17;2695:6;2685:9;:17::i;:::-;2676:6;:26;2668:35;;;;;;;;2716:11;:19;2728:6;2716:19;;;;;;;;;;;;;;;2736:6;2716:27;;;;;;;;;;;;;;;;;;;2709:34;;2571:177;;;;:::o;4124:156:5:-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;4223:50:5;4253:6;4261:11;;;;;;;;;;;;;;;;;;4223:19;:29;;:50;;;;;:::i;:::-;4124:156;:::o;833:87:37:-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:37;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;6175:214:5:-;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;6295:33:5;6314:8;6324:3;6295:18;:33::i;:::-;6338:44;6361:5;6368:3;6373:8;6338:22;:44::i;:::-;6175:214;;;:::o;2445:140:48:-;2500:4;2512:13;2528:10;:20;2539:8;2528:20;;;;;;;;;;;;;;;;;;;;;2512:36;;2578:1;2561:19;;:5;:19;;;;2554:26;;2445:140;;;;:::o;3298::50:-;3357:7;3389:13;:11;:13::i;:::-;3380:6;:22;3372:31;;;;;;;;3416:9;3426:6;3416:17;;;;;;;;;;;;;;;;;;;3409:24;;3298:140;;;:::o;247:26:37:-;;;;;;;;;;;;;:::o;2107:164:48:-;2163:7;2178:13;2194:10;:20;2205:8;2194:20;;;;;;;;;;;;;;;;;;;;;2178:36;;2245:1;2228:19;;:5;:19;;;;2220:28;;;;;;;;2261:5;2254:12;;2107:164;;;;:::o;1756:142::-;1812:7;1853:1;1835:20;;:6;:20;;;;1827:29;;;;;;;;1869:16;:24;1886:6;1869:24;;;;;;;;;;;;;;;;1862:31;;1756:142;;;:::o;1496:28:5:-;;;;;;;;;;;;;:::o;3589:178::-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;3690:70:5;3735:6;3743:16;;;;;;;;;;;;;;;;;;3690:24;:44;;:70;;;;;:::i;:::-;3589:178;:::o;666:85:37:-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:39:-;;;;;;;;;;;;;:::o;1466:72:50:-;1505:6;;:::i;:::-;1526:7;1519:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1466:72;:::o;2455:770:5:-;2773:13;2871:17;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;2810:49:5;2848:10;2810:24;:37;;:49;;;;:::i;:::-;2802:58;;;;;;;;2891:8;;;;;;;;;;;:15;;;2920:8;2942:12;2968:7;2989:12;3015:22;3051:14;3079:24;3117:5;2891:241;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2871:261;;3143:42;3155:12;3174:9;3169:15;;;3143:11;:42::i;:::-;3208:9;3203:15;;;3196:22;;2455:770;;;;;;;;;;;:::o;3324:162::-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;3419:60:5;3454:6;3462:16;;;;;;;;;;;;;;;;;;3419:24;:34;;:60;;;;;:::i;:::-;3324:162;:::o;5281:153::-;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;5388:39:5;5412:3;5417:9;5388:23;:39::i;:::-;5281:153;;:::o;5496:125::-;5571:43;5588:10;5600:3;5605:8;5571:16;:43::i;:::-;5496:125;;:::o;1728:53::-;;;;;;;;;;;;;;;;;;;;:::o;6565:234::-;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;6698:33:5;6717:8;6727:3;6698:18;:33::i;:::-;6741:51;6764:5;6771:3;6776:8;6786:5;6741:22;:51::i;:::-;6565:234;;;;:::o;1727:133:50:-;1784:6;;:::i;:::-;1806:16;1813:8;1806:6;:16::i;:::-;1798:25;;;;;;;;1836:9;:19;1846:8;1836:19;;;;;;;;;;;1829:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:133;;;:::o;4478:142:48:-;4560:4;4579:17;:25;4597:6;4579:25;;;;;;;;;;;;;;;:36;4605:9;4579:36;;;;;;;;;;;;;;;;;;;;;;;;;4572:43;;4478:142;;;;:::o;832:169:39:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;2121:1168:17:-;2489:25;2551:23;2619:19;2452:25;2465:4;2471:5;2452:12;:25::i;:::-;2444:34;;;;;;;;2517:4;:17;;:24;2535:5;2517:24;;;;;;;;;;;;;;;;2489:52;;2608:1;2577:4;:21;;:28;;;;:32;2551:58;;2641:4;:21;;2663:18;2641:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;2619:63;;2745:4;:15;;:22;2761:5;2745:22;;;;;;;;;;;;;;;;2738:29;;;;;;;;;;;2894:11;2848:4;:21;;2870:20;2848:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;3009:20;2976:4;:17;;:30;2994:11;2976:30;;;;;;;;;;;;;;;:53;;;;3046:4;:17;;:24;3064:5;3046:24;;;;;;;;;;;;;;;3039:31;;;3144:4;:21;;3166:18;3144:41;;;;;;;;;;;;;;;;;;;3137:48;;;;;;;;;;;3227:1;3195:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;3260:5;3239:43;;;3267:14;3239:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2121:1168:17;;;;;;:::o;3646:162::-;3748:9;;:::i;:::-;3780:4;:21;;3773:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3646:162;;;:::o;2998:350:48:-;3059:13;3075:17;3083:8;3075:7;:17::i;:::-;3059:33;;3113:5;3106:12;;:3;:12;;;;3098:21;;;;;;;;3147:5;3133:19;;:10;:19;;;:58;;;;3156:35;3173:5;3180:10;3156:16;:35::i;:::-;3133:58;3125:67;;;;;;;;3236:1;3203:35;;:21;3215:8;3203:11;:21::i;:::-;:35;;;;:56;;;;3257:1;3242:17;;:3;:17;;;;3203:56;3199:145;;;3296:3;3269:14;:24;3284:8;3269:24;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;3323:3;3307:30;;3316:5;3307:30;;;3328:8;3307:30;;;;;;;;;;;;;;;;;;3199:145;2998:350;;;:::o;3295:166:17:-;3405:4;3432;:15;;:22;3448:5;3432:22;;;;;;;;;;;;;;;;;;;;;;;;;3425:29;;3295:166;;;;:::o;2085:130:50:-;2161:16;2168:8;2161:6;:16::i;:::-;2153:25;;;;;;;;2206:4;2184:9;:19;2194:8;2184:19;;;;;;;;;;;:26;;;;;;;;;;;;:::i;:::-;;2085:130;;:::o;7277:223:5:-;7414:3;7368:49;;:8;;;;;;;;;;;:23;;;7400:8;7392:17;;7368:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:49;;;;7364:130;;;7433:8;;;;;;;;;;;:26;;;7468:8;7460:17;;7479:3;7433:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7364:130;7277:223;;:::o;5042:315:48:-;5129:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;5170:1;5153:19;;:5;:19;;;;5145:28;;;;;;;;5202:1;5187:17;;:3;:17;;;;5179:26;;;;;;;;5212:30;5226:5;5233:8;5212:13;:30::i;:::-;5248:32;5264:5;5271:8;5248:15;:32::i;:::-;5286:25;5297:3;5302:8;5286:10;:25::i;:::-;5338:3;5322:30;;5331:5;5322:30;;;5343:8;5322:30;;;;;;;;;;;;;;;;;;5042:315;;;;:::o;1732:383:17:-;1884:28;1900:4;1906:5;1884:15;:28::i;:::-;1876:37;;;;;;;;1949:4;1924;:15;;:22;1940:5;1924:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1963:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1990:5;1963:33;;;;;;;;;;;;;;;;;;;;;;;2064:1;2033:4;:21;;:28;;;;:32;2006:4;:17;;:24;2024:5;2006:24;;;;;;;;;;;;;;;:59;;;;2086:5;2075:33;;;2093:14;2075:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1732:383:17;;;:::o;5964:154:48:-;6055:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6071:42;6088:5;6095:3;6100:8;6071:42;;;;;;;;;;;;;:16;:42::i;:::-;5964:154;;;;:::o;5315:176:50:-;5376:26;5388:3;5393:8;5376:11;:26::i;:::-;5440:9;:16;;;;5413:14;:24;5428:8;5413:24;;;;;;;;;;;:43;;;;5462:9;:24;;;;;;;;;;;:::i;:::-;;;;;;;;;;5477:8;5462:24;;;;;;;5315:176;;:::o;3969:200:48:-;4053:10;4046:17;;:3;:17;;;;4038:26;;;;;;;;4107:9;4070:17;:29;4088:10;4070:29;;;;;;;;;;;;;;;:34;4100:3;4070:34;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;4149:3;4122:42;;4137:10;4122:42;;;4154:9;4122:42;;;;;;;;;;;;;;;;;;;;;;3969:200;;:::o;6794:227::-;6898:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6914:34;6927:5;6934:3;6939:8;6914:12;:34::i;:::-;6962:53;6987:5;6994:3;6999:8;7009:5;6962:24;:53::i;:::-;6954:62;;;;;;;;6794:227;;;;;:::o;7368:240::-;7454:4;7466:13;7482:17;7490:8;7482:7;:17::i;:::-;7466:33;;7524:5;7512:17;;:8;:17;;;:54;;;;7558:8;7533:33;;:21;7545:8;7533:11;:21::i;:::-;:33;;;7512:54;:91;;;;7570:33;7587:5;7594:8;7570:16;:33::i;:::-;7512:91;7505:98;;7368:240;;;;;:::o;8653:260::-;8754:6;8733:27;;:17;8741:8;8733:7;:17::i;:::-;:27;;;8725:36;;;;;;;;8807:1;8771:38;;:14;:24;8786:8;8771:24;;;;;;;;;;;;;;;;;;;;;:38;;;;8767:142;;;8854:1;8819:14;:24;8834:8;8819:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;8889:1;8864:38;;8873:6;8864:38;;;8893:8;8864:38;;;;;;;;;;;;;;;;;;8767:142;8653:260;;:::o;4198:856:50:-;4316:18;4369:22;4432:17;4271:38;4293:5;4300:8;4271:21;:38::i;:::-;4337:16;:26;4354:8;4337:26;;;;;;;;;;;;4316:47;;4394:32;4424:1;4394:11;:18;4406:5;4394:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;4369:57;;4452:11;:18;4464:5;4452:18;;;;;;;;;;;;;;;4471:14;4452:34;;;;;;;;;;;;;;;;;;;4432:54;;4526:9;4493:11;:18;4505:5;4493:18;;;;;;;;;;;;;;;4512:10;4493:30;;;;;;;;;;;;;;;;;;:42;;;;4578:1;4541:11;:18;4553:5;4541:18;;;;;;;;;;;;;;;4560:14;4541:34;;;;;;;;;;;;;;;;;;:38;;;;4940:11;:18;4952:5;4940:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;5002:1;4973:16;:26;4990:8;4973:26;;;;;;;;;;;:30;;;;5039:10;5009:16;:27;5026:9;5009:27;;;;;;;;;;;:40;;;;4198:856;;;;;:::o;3697:226::-;3800:14;3763:31;3780:3;3785:8;3763:16;:31::i;:::-;3817:11;:16;3829:3;3817:16;;;;;;;;;;;;;;;:23;;;;3800:40;;3846:11;:16;3858:3;3846:16;;;;;;;;;;;;;;;:31;;;;;;;;;;;:::i;:::-;;;;;;;;;;3868:8;3846:31;;;;;;;3912:6;3883:16;:26;3900:8;3883:26;;;;;;;;;;;:35;;;;3697:226;;;:::o;3467:173:17:-;3580:4;3608:25;3621:4;3627:5;3608:12;:25::i;:::-;3607:26;3600:33;;3467:173;;;;:::o;7857:164:48:-;7941:1;7926:17;;:3;:17;;;;7918:26;;;;;;;;7950:25;7961:3;7966:8;7950:10;:25::i;:::-;8002:3;7981:35;;7998:1;7981:35;;;8007:8;7981:35;;;;;;;;;;;;;;;;;;7857:164;;:::o;10368:298::-;10479:4;10545:13;10496:16;:3;:14;;;:16::i;:::-;10495:17;10491:49;;;10529:4;10522:11;;;;10491:49;10576:3;10561:36;;;10598:5;10605:8;10615:5;10561:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10545:76:48;;605:10;10645:15;;10635:25;;;:6;:25;;;;10627:34;;10368:298;;;;;;;;:::o;9651:214::-;9753:5;9732:26;;:17;9740:8;9732:7;:17::i;:::-;:26;;;9724:35;;;;;;;;9791:30;9819:1;9791:16;:23;9808:5;9791:23;;;;;;;;;;;;;;;;:27;;:30;;;;:::i;:::-;9765:16;:23;9782:5;9765:23;;;;;;;;;;;;;;;:56;;;;9858:1;9827:10;:20;9838:8;9827:20;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;9651:214;;:::o;835:110:38:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;9172:204:48:-;9278:1;9246:34;;:10;:20;9257:8;9246:20;;;;;;;;;;;;;;;;;;;;;:34;;;9238:43;;;;;;;;9310:3;9287:10;:20;9298:8;9287:20;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;9343:28;9369:1;9343:16;:21;9360:3;9343:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;9319:16;:21;9336:3;9319:21;;;;;;;;;;;;;;;:52;;;;9172:204;;:::o;451:150:36:-;508:4;520:12;569:4;557:11;549:25;;595:1;588:4;:8;581:15;;451:150;;;;:::o;1007:129:38:-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o;1362:6140:5:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n// Internal dependencies.\nimport \"./DebtRegistry.sol\";\nimport \"./ERC165.sol\";\nimport { PermissionsLib, PermissionEvents } from \"./libraries/PermissionsLib.sol\";\n\n// External dependencies.\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\n\n/**\n * The DebtToken contract governs all business logic for making a debt agreement\n * transferable as an ERC721 non-fungible token.  Additionally, the contract\n * allows authorized contracts to trigger the minting of a debt agreement token\n * and, in turn, the insertion of a debt issuance into the DebtRegsitry.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract DebtToken is ERC721Token, ERC165, Pausable, PermissionEvents {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    DebtRegistry public registry;\n\n    PermissionsLib.Permissions internal tokenCreationPermissions;\n    PermissionsLib.Permissions internal tokenURIPermissions;\n\n    string public constant CREATION_CONTEXT = \"debt-token-creation\";\n    string public constant URI_CONTEXT = \"debt-token-uri\";\n\n    /**\n     * Constructor that sets the address of the debt registry.\n     */\n    function DebtToken(address _registry)\n        public\n        ERC721Token(\"DebtToken\", \"DDT\")\n    {\n        registry = DebtRegistry(_registry);\n    }\n\n    /**\n     * ERC165 interface.\n     * Returns true for ERC721, false otherwise\n     */\n    function supportsInterface(bytes4 interfaceID)\n        external\n        view\n        returns (bool _isSupported)\n    {\n        return interfaceID == 0x80ac58cd; // ERC721\n    }\n\n    /**\n     * Mints a unique debt token and inserts the associated issuance into\n     * the debt registry, if the calling address is authorized to do so.\n     */\n    function create(\n        address _version,\n        address _beneficiary,\n        address _debtor,\n        address _underwriter,\n        uint _underwriterRiskRating,\n        address _termsContract,\n        bytes32 _termsContractParameters,\n        uint _salt\n    )\n        public\n        whenNotPaused\n        returns (uint _tokenId)\n    {\n        require(tokenCreationPermissions.isAuthorized(msg.sender));\n\n        bytes32 entryHash = registry.insert(\n            _version,\n            _beneficiary,\n            _debtor,\n            _underwriter,\n            _underwriterRiskRating,\n            _termsContract,\n            _termsContractParameters,\n            _salt\n        );\n\n        super._mint(_beneficiary, uint(entryHash));\n\n        return uint(entryHash);\n    }\n\n    /**\n     * Adds an address to the list of agents authorized to mint debt tokens.\n     */\n    function addAuthorizedMintAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenCreationPermissions.authorize(_agent, CREATION_CONTEXT);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized to mint debt tokens\n     */\n    function revokeMintAgentAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenCreationPermissions.revokeAuthorization(_agent, CREATION_CONTEXT);\n    }\n\n    /**\n     * Returns the list of agents authorized to mint debt tokens\n     */\n    function getAuthorizedMintAgents()\n        public\n        view\n        returns (address[] _agents)\n    {\n        return tokenCreationPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Adds an address to the list of agents authorized to set token URIs.\n     */\n    function addAuthorizedTokenURIAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenURIPermissions.authorize(_agent, URI_CONTEXT);\n    }\n\n    /**\n     * Returns the list of agents authorized to set token URIs.\n     */\n    function getAuthorizedTokenURIAgents()\n        public\n        view\n        returns (address[] _agents)\n    {\n        return tokenURIPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Removes an address from the list of agents authorized to set token URIs.\n     */\n    function revokeTokenURIAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenURIPermissions.revokeAuthorization(_agent, URI_CONTEXT);\n    }\n\n    /**\n     * We override approval method of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function approve(address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        super.approve(_to, _tokenId);\n    }\n\n    /**\n     * We override setApprovalForAll method of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function setApprovalForAll(address _to, bool _approved)\n        public\n        whenNotPaused\n    {\n        super.setApprovalForAll(_to, _approved);\n    }\n\n    /**\n     * Support deprecated ERC721 method\n     */\n    function transfer(address _to, uint _tokenId)\n        public\n    {\n        safeTransferFrom(msg.sender, _to, _tokenId);\n    }\n\n    /**\n     * We override transferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function transferFrom(address _from, address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.transferFrom(_from, _to, _tokenId);\n    }\n\n    /**\n     * We override safeTransferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function safeTransferFrom(address _from, address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.safeTransferFrom(_from, _to, _tokenId);\n    }\n\n    /**\n     * We override safeTransferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function safeTransferFrom(address _from, address _to, uint _tokenId, bytes _data)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.safeTransferFrom(_from, _to, _tokenId, _data);\n    }\n\n    /**\n     * Allows senders with special permissions to set the token URI for a given debt token.\n     */\n    function setTokenURI(uint256 _tokenId, string _uri)\n        public\n        whenNotPaused\n    {\n        require(tokenURIPermissions.isAuthorized(msg.sender));\n        super._setTokenURI(_tokenId, _uri);\n    }\n\n    /**\n     * _modifyBeneficiary mutates the debt registry. This function should be\n     * called every time a token is transferred or minted\n     */\n    function _modifyBeneficiary(uint _tokenId, address _to)\n        internal\n    {\n        if (registry.getBeneficiary(bytes32(_tokenId)) != _to) {\n            registry.modifyBeneficiary(bytes32(_tokenId), _to);\n        }\n    }\n}\n",
    "sourcePath": "/Users/trqdinh/Development/loot/charta/contracts/DebtToken.sol",
    "ast": {
        "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/DebtToken.sol",
        "exportedSymbols": {
            "DebtToken": [
                3548
            ]
        },
        "id": 3549,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 3168,
                "literals": [
                    "solidity",
                    "0.4",
                    ".18"
                ],
                "nodeType": "PragmaDirective",
                "src": "584:23:5"
            },
            {
                "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/DebtRegistry.sol",
                "file": "./DebtRegistry.sol",
                "id": 3169,
                "nodeType": "ImportDirective",
                "scope": 3549,
                "sourceUnit": 3167,
                "src": "635:28:5",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/ERC165.sol",
                "file": "./ERC165.sol",
                "id": 3170,
                "nodeType": "ImportDirective",
                "scope": 3549,
                "sourceUnit": 3559,
                "src": "664:22:5",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/libraries/PermissionsLib.sol",
                "file": "./libraries/PermissionsLib.sol",
                "id": 3173,
                "nodeType": "ImportDirective",
                "scope": 3549,
                "sourceUnit": 6280,
                "src": "687:82:5",
                "symbolAliases": [
                    {
                        "foreign": 3171,
                        "local": null
                    },
                    {
                        "foreign": 3172,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                "id": 3174,
                "nodeType": "ImportDirective",
                "scope": 3549,
                "sourceUnit": 14006,
                "src": "797:60:5",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
                "file": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
                "id": 3175,
                "nodeType": "ImportDirective",
                "scope": 3549,
                "sourceUnit": 15830,
                "src": "858:66:5",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
                "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
                "id": 3176,
                "nodeType": "ImportDirective",
                "scope": 3549,
                "sourceUnit": 14299,
                "src": "925:59:5",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "baseContracts": [
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 3177,
                            "name": "ERC721Token",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 15829,
                            "src": "1384:11:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC721Token_$15829",
                                "typeString": "contract ERC721Token"
                            }
                        },
                        "id": 3178,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1384:11:5"
                    },
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 3179,
                            "name": "ERC165",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3558,
                            "src": "1397:6:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC165_$3558",
                                "typeString": "contract ERC165"
                            }
                        },
                        "id": 3180,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1397:6:5"
                    },
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 3181,
                            "name": "Pausable",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 14005,
                            "src": "1405:8:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Pausable_$14005",
                                "typeString": "contract Pausable"
                            }
                        },
                        "id": 3182,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1405:8:5"
                    },
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 3183,
                            "name": "PermissionEvents",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6075,
                            "src": "1415:16:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_PermissionEvents_$6075",
                                "typeString": "contract PermissionEvents"
                            }
                        },
                        "id": 3184,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1415:16:5"
                    }
                ],
                "contractDependencies": [
                    3558,
                    6075,
                    14005,
                    14159,
                    14724,
                    14744,
                    14751,
                    14858,
                    15441,
                    15829
                ],
                "contractKind": "contract",
                "documentation": "The DebtToken contract governs all business logic for making a debt agreement\ntransferable as an ERC721 non-fungible token.  Additionally, the contract\nallows authorized contracts to trigger the minting of a debt agreement token\nand, in turn, the insertion of a debt issuance into the DebtRegsitry.\n * Author: Nadav Hollander -- Github: nadavhollander",
                "fullyImplemented": true,
                "id": 3548,
                "linearizedBaseContracts": [
                    3548,
                    6075,
                    14005,
                    14159,
                    3558,
                    15829,
                    15441,
                    14751,
                    14744,
                    14724,
                    14858
                ],
                "name": "DebtToken",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 3187,
                        "libraryName": {
                            "contractScope": null,
                            "id": 3185,
                            "name": "PermissionsLib",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6279,
                            "src": "1444:14:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_PermissionsLib_$6279",
                                "typeString": "library PermissionsLib"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "1438:52:5",
                        "typeName": {
                            "contractScope": null,
                            "id": 3186,
                            "name": "PermissionsLib.Permissions",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6099,
                            "src": "1463:26:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                                "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                        }
                    },
                    {
                        "constant": false,
                        "id": 3189,
                        "name": "registry",
                        "nodeType": "VariableDeclaration",
                        "scope": 3548,
                        "src": "1496:28:5",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                            "typeString": "contract DebtRegistry"
                        },
                        "typeName": {
                            "contractScope": null,
                            "id": 3188,
                            "name": "DebtRegistry",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3166,
                            "src": "1496:12:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                "typeString": "contract DebtRegistry"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 3191,
                        "name": "tokenCreationPermissions",
                        "nodeType": "VariableDeclaration",
                        "scope": 3548,
                        "src": "1531:60:5",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                            "typeString": "struct PermissionsLib.Permissions storage ref"
                        },
                        "typeName": {
                            "contractScope": null,
                            "id": 3190,
                            "name": "PermissionsLib.Permissions",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6099,
                            "src": "1531:26:5",
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
                        "id": 3193,
                        "name": "tokenURIPermissions",
                        "nodeType": "VariableDeclaration",
                        "scope": 3548,
                        "src": "1597:55:5",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                            "typeString": "struct PermissionsLib.Permissions storage ref"
                        },
                        "typeName": {
                            "contractScope": null,
                            "id": 3192,
                            "name": "PermissionsLib.Permissions",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6099,
                            "src": "1597:26:5",
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
                        "id": 3196,
                        "name": "CREATION_CONTEXT",
                        "nodeType": "VariableDeclaration",
                        "scope": 3548,
                        "src": "1659:63:5",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                        },
                        "typeName": {
                            "id": 3194,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1659:6:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string storage pointer"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "hexValue": "646562742d746f6b656e2d6372656174696f6e",
                            "id": 3195,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1701:21:5",
                            "subdenomination": null,
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_2d9a63cb422dbf25d87c5964331a54f8f0ef47fda8423314940cc4724b7c93a1",
                                "typeString": "literal_string \"debt-token-creation\""
                            },
                            "value": "debt-token-creation"
                        },
                        "visibility": "public"
                    },
                    {
                        "constant": true,
                        "id": 3199,
                        "name": "URI_CONTEXT",
                        "nodeType": "VariableDeclaration",
                        "scope": 3548,
                        "src": "1728:53:5",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                        },
                        "typeName": {
                            "id": 3197,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1728:6:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string storage pointer"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "hexValue": "646562742d746f6b656e2d757269",
                            "id": 3198,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1765:16:5",
                            "subdenomination": null,
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_0d2873bacc3db71894b8d4e2c856fa4c9fb7274484262058e9cd6c3a8004a268",
                                "typeString": "literal_string \"debt-token-uri\""
                            },
                            "value": "debt-token-uri"
                        },
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3214,
                            "nodeType": "Block",
                            "src": "1964:51:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 3212,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 3208,
                                            "name": "registry",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3189,
                                            "src": "1974:8:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                                "typeString": "contract DebtRegistry"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 3210,
                                                    "name": "_registry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3201,
                                                    "src": "1998:9:5",
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
                                                "id": 3209,
                                                "name": "DebtRegistry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3166,
                                                "src": "1985:12:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_DebtRegistry_$3166_$",
                                                    "typeString": "type(contract DebtRegistry)"
                                                }
                                            },
                                            "id": 3211,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1985:23:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                                "typeString": "contract DebtRegistry"
                                            }
                                        },
                                        "src": "1974:34:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                            "typeString": "contract DebtRegistry"
                                        }
                                    },
                                    "id": 3213,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1974:34:5"
                                }
                            ]
                        },
                        "id": 3215,
                        "implemented": true,
                        "isConstructor": true,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "hexValue": "44656274546f6b656e",
                                        "id": 3204,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1940:11:5",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_c10442bb66c5f01b129d08a0133cb2d11acab7c9cdd4bcb1a415cdceb37ea6cd",
                                            "typeString": "literal_string \"DebtToken\""
                                        },
                                        "value": "DebtToken"
                                    },
                                    {
                                        "argumentTypes": null,
                                        "hexValue": "444454",
                                        "id": 3205,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1953:5:5",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_f8a9044cf25759a03370eb916040fc6ce23c95f27e93503ef2157147bcb9e846",
                                            "typeString": "literal_string \"DDT\""
                                        },
                                        "value": "DDT"
                                    }
                                ],
                                "id": 3206,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3203,
                                    "name": "ERC721Token",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 15829,
                                    "src": "1928:11:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_contract$_ERC721Token_$15829_$",
                                        "typeString": "type(contract ERC721Token)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1928:31:5"
                            }
                        ],
                        "name": "DebtToken",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3202,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3201,
                                    "name": "_registry",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3215,
                                    "src": "1886:17:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3200,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1886:7:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1885:19:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3207,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1964:0:5"
                        },
                        "scope": 3548,
                        "src": "1867:148:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3226,
                            "nodeType": "Block",
                            "src": "2227:59:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        },
                                        "id": 3224,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 3222,
                                            "name": "interfaceID",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3217,
                                            "src": "2244:11:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "hexValue": "30783830616335386364",
                                            "id": 3223,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2259:10:5",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_2158778573_by_1",
                                                "typeString": "int_const 2158778573"
                                            },
                                            "value": "0x80ac58cd"
                                        },
                                        "src": "2244:25:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 3221,
                                    "id": 3225,
                                    "nodeType": "Return",
                                    "src": "2237:32:5"
                                }
                            ]
                        },
                        "id": 3227,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "supportsInterface",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3218,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3217,
                                    "name": "interfaceID",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3227,
                                    "src": "2137:18:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 3216,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2137:6:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2136:20:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3221,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3220,
                                    "name": "_isSupported",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3227,
                                    "src": "2204:17:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 3219,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2204:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2203:19:5"
                        },
                        "scope": 3548,
                        "src": "2110:176:5",
                        "stateMutability": "view",
                        "superFunction": 3557,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 3285,
                            "nodeType": "Block",
                            "src": "2792:433:5",
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
                                                            "id": 3253,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15841,
                                                            "src": "2848:3:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 3254,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "2848:10:5",
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
                                                        "id": 3251,
                                                        "name": "tokenCreationPermissions",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3191,
                                                        "src": "2810:24:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                            "typeString": "struct PermissionsLib.Permissions storage ref"
                                                        }
                                                    },
                                                    "id": 3252,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "isAuthorized",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 6250,
                                                    "src": "2810:37:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 3255,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2810:49:5",
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
                                            "id": 3250,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "2802:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 3256,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2802:58:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3257,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2802:58:5"
                                },
                                {
                                    "assignments": [
                                        3259
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 3259,
                                            "name": "entryHash",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 3286,
                                            "src": "2871:17:5",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            },
                                            "typeName": {
                                                "id": 3258,
                                                "name": "bytes32",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2871:7:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 3271,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3262,
                                                "name": "_version",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3229,
                                                "src": "2920:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3263,
                                                "name": "_beneficiary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3231,
                                                "src": "2942:12:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3264,
                                                "name": "_debtor",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3233,
                                                "src": "2968:7:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3265,
                                                "name": "_underwriter",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3235,
                                                "src": "2989:12:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3266,
                                                "name": "_underwriterRiskRating",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3237,
                                                "src": "3015:22:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3267,
                                                "name": "_termsContract",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3239,
                                                "src": "3051:14:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3268,
                                                "name": "_termsContractParameters",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3241,
                                                "src": "3079:24:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3269,
                                                "name": "_salt",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3243,
                                                "src": "3117:5:5",
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
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3260,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3189,
                                                "src": "2891:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                                    "typeString": "contract DebtRegistry"
                                                }
                                            },
                                            "id": 3261,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "insert",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2868,
                                            "src": "2891:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_bytes32_$_t_uint256_$returns$_t_bytes32_$",
                                                "typeString": "function (address,address,address,address,uint256,address,bytes32,uint256) external returns (bytes32)"
                                            }
                                        },
                                        "id": 3270,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2891:241:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2871:261:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3275,
                                                "name": "_beneficiary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3231,
                                                "src": "3155:12:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 3277,
                                                        "name": "entryHash",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3259,
                                                        "src": "3174:9:5",
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
                                                    "id": 3276,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "3169:4:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                        "typeString": "type(uint256)"
                                                    },
                                                    "typeName": "uint"
                                                },
                                                "id": 3278,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3169:15:5",
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3272,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "3143:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3274,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "_mint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15749,
                                            "src": "3143:11:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 3279,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3143:42:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3280,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3143:42:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3282,
                                                "name": "entryHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3259,
                                                "src": "3208:9:5",
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
                                            "id": 3281,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "3203:4:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                            },
                                            "typeName": "uint"
                                        },
                                        "id": 3283,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3203:15:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 3249,
                                    "id": 3284,
                                    "nodeType": "Return",
                                    "src": "3196:22:5"
                                }
                            ]
                        },
                        "id": 3286,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3246,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3245,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "2742:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2742:13:5"
                            }
                        ],
                        "name": "create",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3244,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3229,
                                    "name": "_version",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2480:16:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3228,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2480:7:5",
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
                                    "id": 3231,
                                    "name": "_beneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2506:20:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3230,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2506:7:5",
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
                                    "id": 3233,
                                    "name": "_debtor",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2536:15:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3232,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2536:7:5",
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
                                    "id": 3235,
                                    "name": "_underwriter",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2561:20:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3234,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2561:7:5",
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
                                    "id": 3237,
                                    "name": "_underwriterRiskRating",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2591:27:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3236,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2591:4:5",
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
                                    "id": 3239,
                                    "name": "_termsContract",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2628:22:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3238,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2628:7:5",
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
                                    "id": 3241,
                                    "name": "_termsContractParameters",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2660:32:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3240,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2660:7:5",
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
                                    "id": 3243,
                                    "name": "_salt",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2702:10:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3242,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2702:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2470:248:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3249,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3248,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2773:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3247,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2773:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2772:15:5"
                        },
                        "scope": 3548,
                        "src": "2455:770:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3300,
                            "nodeType": "Block",
                            "src": "3409:77:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3296,
                                                "name": "_agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3288,
                                                "src": "3454:6:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3297,
                                                "name": "CREATION_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3196,
                                                "src": "3462:16:5",
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
                                                "id": 3293,
                                                "name": "tokenCreationPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3191,
                                                "src": "3419:24:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3295,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "authorize",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6149,
                                            "src": "3419:34:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 3298,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3419:60:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3299,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3419:60:5"
                                }
                            ]
                        },
                        "id": 3301,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3291,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3290,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "3395:9:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3395:9:5"
                            }
                        ],
                        "name": "addAuthorizedMintAgent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3289,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3288,
                                    "name": "_agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3301,
                                    "src": "3356:14:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3287,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3356:7:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3355:16:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3292,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3409:0:5"
                        },
                        "scope": 3548,
                        "src": "3324:162:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3315,
                            "nodeType": "Block",
                            "src": "3680:87:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3311,
                                                "name": "_agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3303,
                                                "src": "3735:6:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3312,
                                                "name": "CREATION_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3196,
                                                "src": "3743:16:5",
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
                                                "id": 3308,
                                                "name": "tokenCreationPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3191,
                                                "src": "3690:24:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3310,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "revokeAuthorization",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6235,
                                            "src": "3690:44:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 3313,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3690:70:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3314,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3690:70:5"
                                }
                            ]
                        },
                        "id": 3316,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3306,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3305,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "3666:9:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3666:9:5"
                            }
                        ],
                        "name": "revokeMintAgentAuthorization",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3304,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3303,
                                    "name": "_agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3316,
                                    "src": "3627:14:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3302,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3627:7:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3626:16:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3307,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3680:0:5"
                        },
                        "scope": 3548,
                        "src": "3589:178:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3326,
                            "nodeType": "Block",
                            "src": "3957:70:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3322,
                                                "name": "tokenCreationPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3191,
                                                "src": "3974:24:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3323,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getAuthorizedAgents",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6278,
                                            "src": "3974:44:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                                            }
                                        },
                                        "id": 3324,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3974:46:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 3321,
                                    "id": 3325,
                                    "nodeType": "Return",
                                    "src": "3967:53:5"
                                }
                            ]
                        },
                        "id": 3327,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "getAuthorizedMintAgents",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3317,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3886:2:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3321,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3320,
                                    "name": "_agents",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3327,
                                    "src": "3934:17:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[] memory"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 3318,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3934:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 3319,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3934:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[] storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3933:19:5"
                        },
                        "scope": 3548,
                        "src": "3854:173:5",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3341,
                            "nodeType": "Block",
                            "src": "4213:67:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3337,
                                                "name": "_agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3329,
                                                "src": "4253:6:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3338,
                                                "name": "URI_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3199,
                                                "src": "4261:11:5",
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
                                                "id": 3334,
                                                "name": "tokenURIPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3193,
                                                "src": "4223:19:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3336,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "authorize",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6149,
                                            "src": "4223:29:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 3339,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4223:50:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3340,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4223:50:5"
                                }
                            ]
                        },
                        "id": 3342,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3332,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3331,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "4199:9:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4199:9:5"
                            }
                        ],
                        "name": "addAuthorizedTokenURIAgent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3330,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3329,
                                    "name": "_agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3342,
                                    "src": "4160:14:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3328,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4160:7:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4159:16:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3333,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4213:0:5"
                        },
                        "scope": 3548,
                        "src": "4124:156:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3352,
                            "nodeType": "Block",
                            "src": "4473:65:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3348,
                                                "name": "tokenURIPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3193,
                                                "src": "4490:19:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3349,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getAuthorizedAgents",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6278,
                                            "src": "4490:39:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                                            }
                                        },
                                        "id": 3350,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4490:41:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 3347,
                                    "id": 3351,
                                    "nodeType": "Return",
                                    "src": "4483:48:5"
                                }
                            ]
                        },
                        "id": 3353,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "getAuthorizedTokenURIAgents",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3343,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4402:2:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3347,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3346,
                                    "name": "_agents",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3353,
                                    "src": "4450:17:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[] memory"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 3344,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4450:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 3345,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "4450:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[] storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4449:19:5"
                        },
                        "scope": 3548,
                        "src": "4366:172:5",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3367,
                            "nodeType": "Block",
                            "src": "4730:77:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3363,
                                                "name": "_agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3355,
                                                "src": "4780:6:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3364,
                                                "name": "URI_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3199,
                                                "src": "4788:11:5",
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
                                                "id": 3360,
                                                "name": "tokenURIPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3193,
                                                "src": "4740:19:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3362,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "revokeAuthorization",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6235,
                                            "src": "4740:39:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 3365,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4740:60:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3366,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4740:60:5"
                                }
                            ]
                        },
                        "id": 3368,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3358,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3357,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "4716:9:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4716:9:5"
                            }
                        ],
                        "name": "revokeTokenURIAuthorization",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3356,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3355,
                                    "name": "_agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3368,
                                    "src": "4677:14:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3354,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4677:7:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4676:16:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3359,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4730:0:5"
                        },
                        "scope": 3548,
                        "src": "4640:167:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3384,
                            "nodeType": "Block",
                            "src": "5060:45:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3380,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3370,
                                                "src": "5084:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3381,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3372,
                                                "src": "5089:8:5",
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3377,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "5070:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3379,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "approve",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15046,
                                            "src": "5070:13:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 3382,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5070:28:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3383,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5070:28:5"
                                }
                            ]
                        },
                        "id": 3385,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3375,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3374,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "5042:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5042:13:5"
                            }
                        ],
                        "name": "approve",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3373,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3370,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3385,
                                    "src": "4991:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3369,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4991:7:5",
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
                                    "id": 3372,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3385,
                                    "src": "5004:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3371,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5004:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4990:28:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3376,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5060:0:5"
                        },
                        "scope": 3548,
                        "src": "4974:131:5",
                        "stateMutability": "nonpayable",
                        "superFunction": 15046,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3401,
                            "nodeType": "Block",
                            "src": "5378:56:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3397,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3387,
                                                "src": "5412:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3398,
                                                "name": "_approved",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3389,
                                                "src": "5417:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
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
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3394,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "5388:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3396,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "setApprovalForAll",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15089,
                                            "src": "5388:23:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$",
                                                "typeString": "function (address,bool)"
                                            }
                                        },
                                        "id": 3399,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5388:39:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3400,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5388:39:5"
                                }
                            ]
                        },
                        "id": 3402,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3392,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3391,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "5360:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5360:13:5"
                            }
                        ],
                        "name": "setApprovalForAll",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3390,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3387,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3402,
                                    "src": "5308:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3386,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5308:7:5",
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
                                    "id": 3389,
                                    "name": "_approved",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3402,
                                    "src": "5321:14:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 3388,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5321:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5307:29:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3393,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5378:0:5"
                        },
                        "scope": 3548,
                        "src": "5281:153:5",
                        "stateMutability": "nonpayable",
                        "superFunction": 15089,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3416,
                            "nodeType": "Block",
                            "src": "5561:60:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 3410,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15841,
                                                    "src": "5588:3:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 3411,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "5588:10:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3412,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3404,
                                                "src": "5600:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3413,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3406,
                                                "src": "5605:8:5",
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 3409,
                                            "name": "safeTransferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3467,
                                                3495
                                            ],
                                            "referencedDeclaration": 3467,
                                            "src": "5571:16:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 3414,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5571:43:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3415,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5571:43:5"
                                }
                            ]
                        },
                        "id": 3417,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "transfer",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3407,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3404,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3417,
                                    "src": "5514:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3403,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5514:7:5",
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
                                    "id": 3406,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3417,
                                    "src": "5527:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3405,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5527:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5513:28:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3408,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5561:0:5"
                        },
                        "scope": 3548,
                        "src": "5496:125:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3441,
                            "nodeType": "Block",
                            "src": "5899:100:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3429,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3423,
                                                "src": "5928:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3430,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3421,
                                                "src": "5938:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 3428,
                                            "name": "_modifyBeneficiary",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3547,
                                            "src": "5909:18:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address)"
                                            }
                                        },
                                        "id": 3431,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5909:33:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3432,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5909:33:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3436,
                                                "name": "_from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3419,
                                                "src": "5971:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3437,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3421,
                                                "src": "5978:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3438,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3423,
                                                "src": "5983:8:5",
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3433,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "5952:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3435,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "transferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15155,
                                            "src": "5952:18:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 3439,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5952:40:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3440,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5952:40:5"
                                }
                            ]
                        },
                        "id": 3442,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3426,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3425,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "5881:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5881:13:5"
                            }
                        ],
                        "name": "transferFrom",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3424,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3419,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3442,
                                    "src": "5815:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3418,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5815:7:5",
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
                                    "id": 3421,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3442,
                                    "src": "5830:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3420,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5830:7:5",
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
                                    "id": 3423,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3442,
                                    "src": "5843:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3422,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5843:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5814:43:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3427,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5899:0:5"
                        },
                        "scope": 3548,
                        "src": "5793:206:5",
                        "stateMutability": "nonpayable",
                        "superFunction": 15155,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3466,
                            "nodeType": "Block",
                            "src": "6285:104:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3454,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3448,
                                                "src": "6314:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3455,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3446,
                                                "src": "6324:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 3453,
                                            "name": "_modifyBeneficiary",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3547,
                                            "src": "6295:18:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address)"
                                            }
                                        },
                                        "id": 3456,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6295:33:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3457,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6295:33:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3461,
                                                "name": "_from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3444,
                                                "src": "6361:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3462,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3446,
                                                "src": "6368:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3463,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3448,
                                                "src": "6373:8:5",
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3458,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "6338:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3460,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "safeTransferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15175,
                                            "src": "6338:22:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 3464,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6338:44:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3465,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6338:44:5"
                                }
                            ]
                        },
                        "id": 3467,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3451,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3450,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "6267:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6267:13:5"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3449,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3444,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3467,
                                    "src": "6201:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3443,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6201:7:5",
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
                                    "id": 3446,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3467,
                                    "src": "6216:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3445,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6216:7:5",
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
                                    "id": 3448,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3467,
                                    "src": "6229:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3447,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6229:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6200:43:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3452,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6285:0:5"
                        },
                        "scope": 3548,
                        "src": "6175:214:5",
                        "stateMutability": "nonpayable",
                        "superFunction": 15175,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3494,
                            "nodeType": "Block",
                            "src": "6688:111:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3481,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3473,
                                                "src": "6717:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3482,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3471,
                                                "src": "6727:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 3480,
                                            "name": "_modifyBeneficiary",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3547,
                                            "src": "6698:18:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address)"
                                            }
                                        },
                                        "id": 3483,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6698:33:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3484,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6698:33:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3488,
                                                "name": "_from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3469,
                                                "src": "6764:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3489,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3471,
                                                "src": "6771:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3490,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3473,
                                                "src": "6776:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3491,
                                                "name": "_data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3475,
                                                "src": "6786:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3485,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "6741:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3487,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "safeTransferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15205,
                                            "src": "6741:22:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (address,address,uint256,bytes memory)"
                                            }
                                        },
                                        "id": 3492,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6741:51:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3493,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6741:51:5"
                                }
                            ]
                        },
                        "id": 3495,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3478,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3477,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "6670:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6670:13:5"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3476,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3469,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3495,
                                    "src": "6591:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3468,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6591:7:5",
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
                                    "id": 3471,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3495,
                                    "src": "6606:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3470,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6606:7:5",
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
                                    "id": 3473,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3495,
                                    "src": "6619:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3472,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6619:4:5",
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
                                    "id": 3475,
                                    "name": "_data",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3495,
                                    "src": "6634:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                    },
                                    "typeName": {
                                        "id": 3474,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6634:5:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6590:56:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3479,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6688:0:5"
                        },
                        "scope": 3548,
                        "src": "6565:234:5",
                        "stateMutability": "nonpayable",
                        "superFunction": 15205,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3519,
                            "nodeType": "Block",
                            "src": "7006:114:5",
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
                                                            "id": 3507,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15841,
                                                            "src": "7057:3:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 3508,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "7057:10:5",
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
                                                        "id": 3505,
                                                        "name": "tokenURIPermissions",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3193,
                                                        "src": "7024:19:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                            "typeString": "struct PermissionsLib.Permissions storage ref"
                                                        }
                                                    },
                                                    "id": 3506,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "isAuthorized",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 6250,
                                                    "src": "7024:32:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 3509,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7024:44:5",
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
                                            "id": 3504,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "7016:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 3510,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7016:53:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3511,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7016:53:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3515,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3497,
                                                "src": "7098:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3516,
                                                "name": "_uri",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3499,
                                                "src": "7108:4:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3512,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "7079:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3514,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "_setTokenURI",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15561,
                                            "src": "7079:18:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (uint256,string memory)"
                                            }
                                        },
                                        "id": 3517,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7079:34:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3518,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7079:34:5"
                                }
                            ]
                        },
                        "id": 3520,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3502,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3501,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "6988:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6988:13:5"
                            }
                        ],
                        "name": "setTokenURI",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3500,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3497,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3520,
                                    "src": "6934:16:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3496,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6934:7:5",
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
                                    "id": 3499,
                                    "name": "_uri",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3520,
                                    "src": "6952:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                    },
                                    "typeName": {
                                        "id": 3498,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6952:6:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6933:31:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3503,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7006:0:5"
                        },
                        "scope": 3548,
                        "src": "6913:207:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3546,
                            "nodeType": "Block",
                            "src": "7354:146:5",
                            "statements": [
                                {
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 3534,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 3530,
                                                            "name": "_tokenId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3522,
                                                            "src": "7400:8:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "id": 3529,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "7392:7:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_bytes32_$",
                                                            "typeString": "type(bytes32)"
                                                        },
                                                        "typeName": "bytes32"
                                                    },
                                                    "id": 3531,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7392:17:5",
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
                                                    "id": 3527,
                                                    "name": "registry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3189,
                                                    "src": "7368:8:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                                        "typeString": "contract DebtRegistry"
                                                    }
                                                },
                                                "id": 3528,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "getBeneficiary",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 3032,
                                                "src": "7368:23:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                                                    "typeString": "function (bytes32) view external returns (address)"
                                                }
                                            },
                                            "id": 3532,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7368:42:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 3533,
                                            "name": "_to",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3524,
                                            "src": "7414:3:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "7368:49:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": null,
                                    "id": 3545,
                                    "nodeType": "IfStatement",
                                    "src": "7364:130:5",
                                    "trueBody": {
                                        "id": 3544,
                                        "nodeType": "Block",
                                        "src": "7419:75:5",
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
                                                                    "id": 3539,
                                                                    "name": "_tokenId",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 3522,
                                                                    "src": "7468:8:5",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                ],
                                                                "id": 3538,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "7460:7:5",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_bytes32_$",
                                                                    "typeString": "type(bytes32)"
                                                                },
                                                                "typeName": "bytes32"
                                                            },
                                                            "id": 3540,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "7460:17:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 3541,
                                                            "name": "_to",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3524,
                                                            "src": "7479:3:5",
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
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 3535,
                                                            "name": "registry",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3189,
                                                            "src": "7433:8:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                                                "typeString": "contract DebtRegistry"
                                                            }
                                                        },
                                                        "id": 3537,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "modifyBeneficiary",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 2906,
                                                        "src": "7433:26:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                                                            "typeString": "function (bytes32,address) external"
                                                        }
                                                    },
                                                    "id": 3542,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7433:50:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 3543,
                                                "nodeType": "ExpressionStatement",
                                                "src": "7433:50:5"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "id": 3547,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "_modifyBeneficiary",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3525,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3522,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3547,
                                    "src": "7305:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3521,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7305:4:5",
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
                                    "id": 3524,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3547,
                                    "src": "7320:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3523,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7320:7:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7304:28:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3526,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7354:0:5"
                        },
                        "scope": 3548,
                        "src": "7277:223:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "internal"
                    }
                ],
                "scope": 3549,
                "src": "1362:6140:5"
            }
        ],
        "src": "584:6919:5"
    },
    "legacyAST": {
        "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/DebtToken.sol",
        "exportedSymbols": {
            "DebtToken": [
                3548
            ]
        },
        "id": 3549,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 3168,
                "literals": [
                    "solidity",
                    "0.4",
                    ".18"
                ],
                "nodeType": "PragmaDirective",
                "src": "584:23:5"
            },
            {
                "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/DebtRegistry.sol",
                "file": "./DebtRegistry.sol",
                "id": 3169,
                "nodeType": "ImportDirective",
                "scope": 3549,
                "sourceUnit": 3167,
                "src": "635:28:5",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/ERC165.sol",
                "file": "./ERC165.sol",
                "id": 3170,
                "nodeType": "ImportDirective",
                "scope": 3549,
                "sourceUnit": 3559,
                "src": "664:22:5",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/libraries/PermissionsLib.sol",
                "file": "./libraries/PermissionsLib.sol",
                "id": 3173,
                "nodeType": "ImportDirective",
                "scope": 3549,
                "sourceUnit": 6280,
                "src": "687:82:5",
                "symbolAliases": [
                    {
                        "foreign": 3171,
                        "local": null
                    },
                    {
                        "foreign": 3172,
                        "local": null
                    }
                ],
                "unitAlias": ""
            },
            {
                "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
                "id": 3174,
                "nodeType": "ImportDirective",
                "scope": 3549,
                "sourceUnit": 14006,
                "src": "797:60:5",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
                "file": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
                "id": 3175,
                "nodeType": "ImportDirective",
                "scope": 3549,
                "sourceUnit": 15830,
                "src": "858:66:5",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
                "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
                "id": 3176,
                "nodeType": "ImportDirective",
                "scope": 3549,
                "sourceUnit": 14299,
                "src": "925:59:5",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "baseContracts": [
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 3177,
                            "name": "ERC721Token",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 15829,
                            "src": "1384:11:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC721Token_$15829",
                                "typeString": "contract ERC721Token"
                            }
                        },
                        "id": 3178,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1384:11:5"
                    },
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 3179,
                            "name": "ERC165",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3558,
                            "src": "1397:6:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC165_$3558",
                                "typeString": "contract ERC165"
                            }
                        },
                        "id": 3180,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1397:6:5"
                    },
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 3181,
                            "name": "Pausable",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 14005,
                            "src": "1405:8:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Pausable_$14005",
                                "typeString": "contract Pausable"
                            }
                        },
                        "id": 3182,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1405:8:5"
                    },
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 3183,
                            "name": "PermissionEvents",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6075,
                            "src": "1415:16:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_PermissionEvents_$6075",
                                "typeString": "contract PermissionEvents"
                            }
                        },
                        "id": 3184,
                        "nodeType": "InheritanceSpecifier",
                        "src": "1415:16:5"
                    }
                ],
                "contractDependencies": [
                    3558,
                    6075,
                    14005,
                    14159,
                    14724,
                    14744,
                    14751,
                    14858,
                    15441,
                    15829
                ],
                "contractKind": "contract",
                "documentation": "The DebtToken contract governs all business logic for making a debt agreement\ntransferable as an ERC721 non-fungible token.  Additionally, the contract\nallows authorized contracts to trigger the minting of a debt agreement token\nand, in turn, the insertion of a debt issuance into the DebtRegsitry.\n * Author: Nadav Hollander -- Github: nadavhollander",
                "fullyImplemented": true,
                "id": 3548,
                "linearizedBaseContracts": [
                    3548,
                    6075,
                    14005,
                    14159,
                    3558,
                    15829,
                    15441,
                    14751,
                    14744,
                    14724,
                    14858
                ],
                "name": "DebtToken",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "id": 3187,
                        "libraryName": {
                            "contractScope": null,
                            "id": 3185,
                            "name": "PermissionsLib",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6279,
                            "src": "1444:14:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_PermissionsLib_$6279",
                                "typeString": "library PermissionsLib"
                            }
                        },
                        "nodeType": "UsingForDirective",
                        "src": "1438:52:5",
                        "typeName": {
                            "contractScope": null,
                            "id": 3186,
                            "name": "PermissionsLib.Permissions",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6099,
                            "src": "1463:26:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                                "typeString": "struct PermissionsLib.Permissions storage pointer"
                            }
                        }
                    },
                    {
                        "constant": false,
                        "id": 3189,
                        "name": "registry",
                        "nodeType": "VariableDeclaration",
                        "scope": 3548,
                        "src": "1496:28:5",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                            "typeString": "contract DebtRegistry"
                        },
                        "typeName": {
                            "contractScope": null,
                            "id": 3188,
                            "name": "DebtRegistry",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3166,
                            "src": "1496:12:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                "typeString": "contract DebtRegistry"
                            }
                        },
                        "value": null,
                        "visibility": "public"
                    },
                    {
                        "constant": false,
                        "id": 3191,
                        "name": "tokenCreationPermissions",
                        "nodeType": "VariableDeclaration",
                        "scope": 3548,
                        "src": "1531:60:5",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                            "typeString": "struct PermissionsLib.Permissions storage ref"
                        },
                        "typeName": {
                            "contractScope": null,
                            "id": 3190,
                            "name": "PermissionsLib.Permissions",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6099,
                            "src": "1531:26:5",
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
                        "id": 3193,
                        "name": "tokenURIPermissions",
                        "nodeType": "VariableDeclaration",
                        "scope": 3548,
                        "src": "1597:55:5",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                            "typeString": "struct PermissionsLib.Permissions storage ref"
                        },
                        "typeName": {
                            "contractScope": null,
                            "id": 3192,
                            "name": "PermissionsLib.Permissions",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 6099,
                            "src": "1597:26:5",
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
                        "id": 3196,
                        "name": "CREATION_CONTEXT",
                        "nodeType": "VariableDeclaration",
                        "scope": 3548,
                        "src": "1659:63:5",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                        },
                        "typeName": {
                            "id": 3194,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1659:6:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string storage pointer"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "hexValue": "646562742d746f6b656e2d6372656174696f6e",
                            "id": 3195,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1701:21:5",
                            "subdenomination": null,
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_2d9a63cb422dbf25d87c5964331a54f8f0ef47fda8423314940cc4724b7c93a1",
                                "typeString": "literal_string \"debt-token-creation\""
                            },
                            "value": "debt-token-creation"
                        },
                        "visibility": "public"
                    },
                    {
                        "constant": true,
                        "id": 3199,
                        "name": "URI_CONTEXT",
                        "nodeType": "VariableDeclaration",
                        "scope": 3548,
                        "src": "1728:53:5",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                        },
                        "typeName": {
                            "id": 3197,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1728:6:5",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string storage pointer"
                            }
                        },
                        "value": {
                            "argumentTypes": null,
                            "hexValue": "646562742d746f6b656e2d757269",
                            "id": 3198,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1765:16:5",
                            "subdenomination": null,
                            "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_0d2873bacc3db71894b8d4e2c856fa4c9fb7274484262058e9cd6c3a8004a268",
                                "typeString": "literal_string \"debt-token-uri\""
                            },
                            "value": "debt-token-uri"
                        },
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3214,
                            "nodeType": "Block",
                            "src": "1964:51:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 3212,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "id": 3208,
                                            "name": "registry",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3189,
                                            "src": "1974:8:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                                "typeString": "contract DebtRegistry"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "id": 3210,
                                                    "name": "_registry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3201,
                                                    "src": "1998:9:5",
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
                                                "id": 3209,
                                                "name": "DebtRegistry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3166,
                                                "src": "1985:12:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_contract$_DebtRegistry_$3166_$",
                                                    "typeString": "type(contract DebtRegistry)"
                                                }
                                            },
                                            "id": 3211,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1985:23:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                                "typeString": "contract DebtRegistry"
                                            }
                                        },
                                        "src": "1974:34:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                            "typeString": "contract DebtRegistry"
                                        }
                                    },
                                    "id": 3213,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1974:34:5"
                                }
                            ]
                        },
                        "id": 3215,
                        "implemented": true,
                        "isConstructor": true,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "hexValue": "44656274546f6b656e",
                                        "id": 3204,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1940:11:5",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_c10442bb66c5f01b129d08a0133cb2d11acab7c9cdd4bcb1a415cdceb37ea6cd",
                                            "typeString": "literal_string \"DebtToken\""
                                        },
                                        "value": "DebtToken"
                                    },
                                    {
                                        "argumentTypes": null,
                                        "hexValue": "444454",
                                        "id": 3205,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1953:5:5",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_f8a9044cf25759a03370eb916040fc6ce23c95f27e93503ef2157147bcb9e846",
                                            "typeString": "literal_string \"DDT\""
                                        },
                                        "value": "DDT"
                                    }
                                ],
                                "id": 3206,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3203,
                                    "name": "ERC721Token",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 15829,
                                    "src": "1928:11:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_contract$_ERC721Token_$15829_$",
                                        "typeString": "type(contract ERC721Token)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1928:31:5"
                            }
                        ],
                        "name": "DebtToken",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3202,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3201,
                                    "name": "_registry",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3215,
                                    "src": "1886:17:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3200,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1886:7:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1885:19:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3207,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1964:0:5"
                        },
                        "scope": 3548,
                        "src": "1867:148:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3226,
                            "nodeType": "Block",
                            "src": "2227:59:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        },
                                        "id": 3224,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 3222,
                                            "name": "interfaceID",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3217,
                                            "src": "2244:11:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes4",
                                                "typeString": "bytes4"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "hexValue": "30783830616335386364",
                                            "id": 3223,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2259:10:5",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_2158778573_by_1",
                                                "typeString": "int_const 2158778573"
                                            },
                                            "value": "0x80ac58cd"
                                        },
                                        "src": "2244:25:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 3221,
                                    "id": 3225,
                                    "nodeType": "Return",
                                    "src": "2237:32:5"
                                }
                            ]
                        },
                        "id": 3227,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "supportsInterface",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3218,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3217,
                                    "name": "interfaceID",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3227,
                                    "src": "2137:18:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 3216,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2137:6:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2136:20:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3221,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3220,
                                    "name": "_isSupported",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3227,
                                    "src": "2204:17:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 3219,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2204:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2203:19:5"
                        },
                        "scope": 3548,
                        "src": "2110:176:5",
                        "stateMutability": "view",
                        "superFunction": 3557,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 3285,
                            "nodeType": "Block",
                            "src": "2792:433:5",
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
                                                            "id": 3253,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15841,
                                                            "src": "2848:3:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 3254,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "2848:10:5",
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
                                                        "id": 3251,
                                                        "name": "tokenCreationPermissions",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3191,
                                                        "src": "2810:24:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                            "typeString": "struct PermissionsLib.Permissions storage ref"
                                                        }
                                                    },
                                                    "id": 3252,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "isAuthorized",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 6250,
                                                    "src": "2810:37:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 3255,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "2810:49:5",
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
                                            "id": 3250,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "2802:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 3256,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2802:58:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3257,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2802:58:5"
                                },
                                {
                                    "assignments": [
                                        3259
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 3259,
                                            "name": "entryHash",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 3286,
                                            "src": "2871:17:5",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            },
                                            "typeName": {
                                                "id": 3258,
                                                "name": "bytes32",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2871:7:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "value": null,
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 3271,
                                    "initialValue": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3262,
                                                "name": "_version",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3229,
                                                "src": "2920:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3263,
                                                "name": "_beneficiary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3231,
                                                "src": "2942:12:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3264,
                                                "name": "_debtor",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3233,
                                                "src": "2968:7:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3265,
                                                "name": "_underwriter",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3235,
                                                "src": "2989:12:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3266,
                                                "name": "_underwriterRiskRating",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3237,
                                                "src": "3015:22:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3267,
                                                "name": "_termsContract",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3239,
                                                "src": "3051:14:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3268,
                                                "name": "_termsContractParameters",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3241,
                                                "src": "3079:24:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3269,
                                                "name": "_salt",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3243,
                                                "src": "3117:5:5",
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
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3260,
                                                "name": "registry",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3189,
                                                "src": "2891:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                                    "typeString": "contract DebtRegistry"
                                                }
                                            },
                                            "id": 3261,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "insert",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 2868,
                                            "src": "2891:15:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_bytes32_$_t_uint256_$returns$_t_bytes32_$",
                                                "typeString": "function (address,address,address,address,uint256,address,bytes32,uint256) external returns (bytes32)"
                                            }
                                        },
                                        "id": 3270,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2891:241:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2871:261:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3275,
                                                "name": "_beneficiary",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3231,
                                                "src": "3155:12:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "arguments": [
                                                    {
                                                        "argumentTypes": null,
                                                        "id": 3277,
                                                        "name": "entryHash",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3259,
                                                        "src": "3174:9:5",
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
                                                    "id": 3276,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "3169:4:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                        "typeString": "type(uint256)"
                                                    },
                                                    "typeName": "uint"
                                                },
                                                "id": 3278,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3169:15:5",
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3272,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "3143:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3274,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "_mint",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15749,
                                            "src": "3143:11:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 3279,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3143:42:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3280,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3143:42:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3282,
                                                "name": "entryHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3259,
                                                "src": "3208:9:5",
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
                                            "id": 3281,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "3203:4:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                "typeString": "type(uint256)"
                                            },
                                            "typeName": "uint"
                                        },
                                        "id": 3283,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3203:15:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 3249,
                                    "id": 3284,
                                    "nodeType": "Return",
                                    "src": "3196:22:5"
                                }
                            ]
                        },
                        "id": 3286,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3246,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3245,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "2742:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2742:13:5"
                            }
                        ],
                        "name": "create",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3244,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3229,
                                    "name": "_version",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2480:16:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3228,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2480:7:5",
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
                                    "id": 3231,
                                    "name": "_beneficiary",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2506:20:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3230,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2506:7:5",
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
                                    "id": 3233,
                                    "name": "_debtor",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2536:15:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3232,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2536:7:5",
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
                                    "id": 3235,
                                    "name": "_underwriter",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2561:20:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3234,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2561:7:5",
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
                                    "id": 3237,
                                    "name": "_underwriterRiskRating",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2591:27:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3236,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2591:4:5",
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
                                    "id": 3239,
                                    "name": "_termsContract",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2628:22:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3238,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2628:7:5",
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
                                    "id": 3241,
                                    "name": "_termsContractParameters",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2660:32:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 3240,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2660:7:5",
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
                                    "id": 3243,
                                    "name": "_salt",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2702:10:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3242,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2702:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2470:248:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3249,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3248,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3286,
                                    "src": "2773:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3247,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2773:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2772:15:5"
                        },
                        "scope": 3548,
                        "src": "2455:770:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3300,
                            "nodeType": "Block",
                            "src": "3409:77:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3296,
                                                "name": "_agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3288,
                                                "src": "3454:6:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3297,
                                                "name": "CREATION_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3196,
                                                "src": "3462:16:5",
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
                                                "id": 3293,
                                                "name": "tokenCreationPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3191,
                                                "src": "3419:24:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3295,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "authorize",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6149,
                                            "src": "3419:34:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 3298,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3419:60:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3299,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3419:60:5"
                                }
                            ]
                        },
                        "id": 3301,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3291,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3290,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "3395:9:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3395:9:5"
                            }
                        ],
                        "name": "addAuthorizedMintAgent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3289,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3288,
                                    "name": "_agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3301,
                                    "src": "3356:14:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3287,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3356:7:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3355:16:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3292,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3409:0:5"
                        },
                        "scope": 3548,
                        "src": "3324:162:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3315,
                            "nodeType": "Block",
                            "src": "3680:87:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3311,
                                                "name": "_agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3303,
                                                "src": "3735:6:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3312,
                                                "name": "CREATION_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3196,
                                                "src": "3743:16:5",
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
                                                "id": 3308,
                                                "name": "tokenCreationPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3191,
                                                "src": "3690:24:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3310,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "revokeAuthorization",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6235,
                                            "src": "3690:44:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 3313,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3690:70:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3314,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3690:70:5"
                                }
                            ]
                        },
                        "id": 3316,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3306,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3305,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "3666:9:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "3666:9:5"
                            }
                        ],
                        "name": "revokeMintAgentAuthorization",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3304,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3303,
                                    "name": "_agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3316,
                                    "src": "3627:14:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3302,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3627:7:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3626:16:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3307,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3680:0:5"
                        },
                        "scope": 3548,
                        "src": "3589:178:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3326,
                            "nodeType": "Block",
                            "src": "3957:70:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3322,
                                                "name": "tokenCreationPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3191,
                                                "src": "3974:24:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3323,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getAuthorizedAgents",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6278,
                                            "src": "3974:44:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                                            }
                                        },
                                        "id": 3324,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3974:46:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 3321,
                                    "id": 3325,
                                    "nodeType": "Return",
                                    "src": "3967:53:5"
                                }
                            ]
                        },
                        "id": 3327,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "getAuthorizedMintAgents",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3317,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3886:2:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3321,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3320,
                                    "name": "_agents",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3327,
                                    "src": "3934:17:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[] memory"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 3318,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "3934:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 3319,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "3934:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[] storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3933:19:5"
                        },
                        "scope": 3548,
                        "src": "3854:173:5",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3341,
                            "nodeType": "Block",
                            "src": "4213:67:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3337,
                                                "name": "_agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3329,
                                                "src": "4253:6:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3338,
                                                "name": "URI_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3199,
                                                "src": "4261:11:5",
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
                                                "id": 3334,
                                                "name": "tokenURIPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3193,
                                                "src": "4223:19:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3336,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "authorize",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6149,
                                            "src": "4223:29:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 3339,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4223:50:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3340,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4223:50:5"
                                }
                            ]
                        },
                        "id": 3342,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3332,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3331,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "4199:9:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4199:9:5"
                            }
                        ],
                        "name": "addAuthorizedTokenURIAgent",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3330,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3329,
                                    "name": "_agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3342,
                                    "src": "4160:14:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3328,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4160:7:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4159:16:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3333,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4213:0:5"
                        },
                        "scope": 3548,
                        "src": "4124:156:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3352,
                            "nodeType": "Block",
                            "src": "4473:65:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3348,
                                                "name": "tokenURIPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3193,
                                                "src": "4490:19:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3349,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "getAuthorizedAgents",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6278,
                                            "src": "4490:39:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                                            }
                                        },
                                        "id": 3350,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4490:41:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "functionReturnParameters": 3347,
                                    "id": 3351,
                                    "nodeType": "Return",
                                    "src": "4483:48:5"
                                }
                            ]
                        },
                        "id": 3353,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "getAuthorizedTokenURIAgents",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3343,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4402:2:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3347,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3346,
                                    "name": "_agents",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3353,
                                    "src": "4450:17:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[] memory"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 3344,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "4450:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 3345,
                                        "length": null,
                                        "nodeType": "ArrayTypeName",
                                        "src": "4450:9:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[] storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4449:19:5"
                        },
                        "scope": 3548,
                        "src": "4366:172:5",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3367,
                            "nodeType": "Block",
                            "src": "4730:77:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3363,
                                                "name": "_agent",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3355,
                                                "src": "4780:6:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3364,
                                                "name": "URI_CONTEXT",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3199,
                                                "src": "4788:11:5",
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
                                                "id": 3360,
                                                "name": "tokenURIPermissions",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3193,
                                                "src": "4740:19:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                    "typeString": "struct PermissionsLib.Permissions storage ref"
                                                }
                                            },
                                            "id": 3362,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "revokeAuthorization",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 6235,
                                            "src": "4740:39:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                                            }
                                        },
                                        "id": 3365,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4740:60:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3366,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4740:60:5"
                                }
                            ]
                        },
                        "id": 3368,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3358,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3357,
                                    "name": "onlyOwner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14133,
                                    "src": "4716:9:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "4716:9:5"
                            }
                        ],
                        "name": "revokeTokenURIAuthorization",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3356,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3355,
                                    "name": "_agent",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3368,
                                    "src": "4677:14:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3354,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4677:7:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4676:16:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3359,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4730:0:5"
                        },
                        "scope": 3548,
                        "src": "4640:167:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3384,
                            "nodeType": "Block",
                            "src": "5060:45:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3380,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3370,
                                                "src": "5084:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3381,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3372,
                                                "src": "5089:8:5",
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3377,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "5070:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3379,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "approve",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15046,
                                            "src": "5070:13:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 3382,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5070:28:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3383,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5070:28:5"
                                }
                            ]
                        },
                        "id": 3385,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3375,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3374,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "5042:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5042:13:5"
                            }
                        ],
                        "name": "approve",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3373,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3370,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3385,
                                    "src": "4991:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3369,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4991:7:5",
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
                                    "id": 3372,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3385,
                                    "src": "5004:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3371,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5004:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4990:28:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3376,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5060:0:5"
                        },
                        "scope": 3548,
                        "src": "4974:131:5",
                        "stateMutability": "nonpayable",
                        "superFunction": 15046,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3401,
                            "nodeType": "Block",
                            "src": "5378:56:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3397,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3387,
                                                "src": "5412:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3398,
                                                "name": "_approved",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3389,
                                                "src": "5417:9:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
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
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3394,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "5388:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3396,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "setApprovalForAll",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15089,
                                            "src": "5388:23:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$",
                                                "typeString": "function (address,bool)"
                                            }
                                        },
                                        "id": 3399,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5388:39:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3400,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5388:39:5"
                                }
                            ]
                        },
                        "id": 3402,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3392,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3391,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "5360:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5360:13:5"
                            }
                        ],
                        "name": "setApprovalForAll",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3390,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3387,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3402,
                                    "src": "5308:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3386,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5308:7:5",
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
                                    "id": 3389,
                                    "name": "_approved",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3402,
                                    "src": "5321:14:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 3388,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5321:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5307:29:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3393,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5378:0:5"
                        },
                        "scope": 3548,
                        "src": "5281:153:5",
                        "stateMutability": "nonpayable",
                        "superFunction": 15089,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3416,
                            "nodeType": "Block",
                            "src": "5561:60:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 3410,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15841,
                                                    "src": "5588:3:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 3411,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "5588:10:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3412,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3404,
                                                "src": "5600:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3413,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3406,
                                                "src": "5605:8:5",
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 3409,
                                            "name": "safeTransferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                3467,
                                                3495
                                            ],
                                            "referencedDeclaration": 3467,
                                            "src": "5571:16:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 3414,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5571:43:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3415,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5571:43:5"
                                }
                            ]
                        },
                        "id": 3417,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "transfer",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3407,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3404,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3417,
                                    "src": "5514:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3403,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5514:7:5",
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
                                    "id": 3406,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3417,
                                    "src": "5527:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3405,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5527:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5513:28:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3408,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5561:0:5"
                        },
                        "scope": 3548,
                        "src": "5496:125:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3441,
                            "nodeType": "Block",
                            "src": "5899:100:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3429,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3423,
                                                "src": "5928:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3430,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3421,
                                                "src": "5938:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 3428,
                                            "name": "_modifyBeneficiary",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3547,
                                            "src": "5909:18:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address)"
                                            }
                                        },
                                        "id": 3431,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5909:33:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3432,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5909:33:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3436,
                                                "name": "_from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3419,
                                                "src": "5971:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3437,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3421,
                                                "src": "5978:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3438,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3423,
                                                "src": "5983:8:5",
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3433,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "5952:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3435,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "transferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15155,
                                            "src": "5952:18:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 3439,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5952:40:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3440,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5952:40:5"
                                }
                            ]
                        },
                        "id": 3442,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3426,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3425,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "5881:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "5881:13:5"
                            }
                        ],
                        "name": "transferFrom",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3424,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3419,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3442,
                                    "src": "5815:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3418,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5815:7:5",
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
                                    "id": 3421,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3442,
                                    "src": "5830:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3420,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5830:7:5",
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
                                    "id": 3423,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3442,
                                    "src": "5843:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3422,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5843:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5814:43:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3427,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5899:0:5"
                        },
                        "scope": 3548,
                        "src": "5793:206:5",
                        "stateMutability": "nonpayable",
                        "superFunction": 15155,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3466,
                            "nodeType": "Block",
                            "src": "6285:104:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3454,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3448,
                                                "src": "6314:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3455,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3446,
                                                "src": "6324:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 3453,
                                            "name": "_modifyBeneficiary",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3547,
                                            "src": "6295:18:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address)"
                                            }
                                        },
                                        "id": 3456,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6295:33:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3457,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6295:33:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3461,
                                                "name": "_from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3444,
                                                "src": "6361:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3462,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3446,
                                                "src": "6368:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3463,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3448,
                                                "src": "6373:8:5",
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3458,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "6338:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3460,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "safeTransferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15175,
                                            "src": "6338:22:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 3464,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6338:44:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3465,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6338:44:5"
                                }
                            ]
                        },
                        "id": 3467,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3451,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3450,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "6267:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6267:13:5"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3449,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3444,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3467,
                                    "src": "6201:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3443,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6201:7:5",
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
                                    "id": 3446,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3467,
                                    "src": "6216:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3445,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6216:7:5",
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
                                    "id": 3448,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3467,
                                    "src": "6229:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3447,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6229:4:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6200:43:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3452,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6285:0:5"
                        },
                        "scope": 3548,
                        "src": "6175:214:5",
                        "stateMutability": "nonpayable",
                        "superFunction": 15175,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3494,
                            "nodeType": "Block",
                            "src": "6688:111:5",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3481,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3473,
                                                "src": "6717:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3482,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3471,
                                                "src": "6727:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 3480,
                                            "name": "_modifyBeneficiary",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3547,
                                            "src": "6698:18:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$__$",
                                                "typeString": "function (uint256,address)"
                                            }
                                        },
                                        "id": 3483,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6698:33:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3484,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6698:33:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3488,
                                                "name": "_from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3469,
                                                "src": "6764:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3489,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3471,
                                                "src": "6771:3:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3490,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3473,
                                                "src": "6776:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3491,
                                                "name": "_data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3475,
                                                "src": "6786:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3485,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "6741:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3487,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "safeTransferFrom",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15205,
                                            "src": "6741:22:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                                                "typeString": "function (address,address,uint256,bytes memory)"
                                            }
                                        },
                                        "id": 3492,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6741:51:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3493,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6741:51:5"
                                }
                            ]
                        },
                        "id": 3495,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3478,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3477,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "6670:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6670:13:5"
                            }
                        ],
                        "name": "safeTransferFrom",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3476,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3469,
                                    "name": "_from",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3495,
                                    "src": "6591:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3468,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6591:7:5",
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
                                    "id": 3471,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3495,
                                    "src": "6606:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3470,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6606:7:5",
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
                                    "id": 3473,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3495,
                                    "src": "6619:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3472,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6619:4:5",
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
                                    "id": 3475,
                                    "name": "_data",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3495,
                                    "src": "6634:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes memory"
                                    },
                                    "typeName": {
                                        "id": 3474,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6634:5:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6590:56:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3479,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6688:0:5"
                        },
                        "scope": 3548,
                        "src": "6565:234:5",
                        "stateMutability": "nonpayable",
                        "superFunction": 15205,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3519,
                            "nodeType": "Block",
                            "src": "7006:114:5",
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
                                                            "id": 3507,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 15841,
                                                            "src": "7057:3:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 3508,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "7057:10:5",
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
                                                        "id": 3505,
                                                        "name": "tokenURIPermissions",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 3193,
                                                        "src": "7024:19:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                                                            "typeString": "struct PermissionsLib.Permissions storage ref"
                                                        }
                                                    },
                                                    "id": 3506,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "isAuthorized",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 6250,
                                                    "src": "7024:32:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                                                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                                    }
                                                },
                                                "id": 3509,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7024:44:5",
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
                                            "id": 3504,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 15844,
                                            "src": "7016:7:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 3510,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7016:53:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3511,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7016:53:5"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 3515,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3497,
                                                "src": "7098:8:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 3516,
                                                "name": "_uri",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 3499,
                                                "src": "7108:4:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": null,
                                                "id": 3512,
                                                "name": "super",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 15897,
                                                "src": "7079:5:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_super$_DebtToken_$3548",
                                                    "typeString": "contract super DebtToken"
                                                }
                                            },
                                            "id": 3514,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberName": "_setTokenURI",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 15561,
                                            "src": "7079:18:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (uint256,string memory)"
                                            }
                                        },
                                        "id": 3517,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7079:34:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 3518,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7079:34:5"
                                }
                            ]
                        },
                        "id": 3520,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [],
                                "id": 3502,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 3501,
                                    "name": "whenNotPaused",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13966,
                                    "src": "6988:13:5",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_modifier$__$",
                                        "typeString": "modifier ()"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "6988:13:5"
                            }
                        ],
                        "name": "setTokenURI",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3500,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3497,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3520,
                                    "src": "6934:16:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3496,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6934:7:5",
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
                                    "id": 3499,
                                    "name": "_uri",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3520,
                                    "src": "6952:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                    },
                                    "typeName": {
                                        "id": 3498,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6952:6:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string storage pointer"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6933:31:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3503,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7006:0:5"
                        },
                        "scope": 3548,
                        "src": "6913:207:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 3546,
                            "nodeType": "Block",
                            "src": "7354:146:5",
                            "statements": [
                                {
                                    "condition": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 3534,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "arguments": [
                                                {
                                                    "argumentTypes": null,
                                                    "arguments": [
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 3530,
                                                            "name": "_tokenId",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3522,
                                                            "src": "7400:8:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        ],
                                                        "id": 3529,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "7392:7:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_bytes32_$",
                                                            "typeString": "type(bytes32)"
                                                        },
                                                        "typeName": "bytes32"
                                                    },
                                                    "id": 3531,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7392:17:5",
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
                                                    "id": 3527,
                                                    "name": "registry",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 3189,
                                                    "src": "7368:8:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                                        "typeString": "contract DebtRegistry"
                                                    }
                                                },
                                                "id": 3528,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "getBeneficiary",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 3032,
                                                "src": "7368:23:5",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                                                    "typeString": "function (bytes32) view external returns (address)"
                                                }
                                            },
                                            "id": 3532,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "7368:42:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 3533,
                                            "name": "_to",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 3524,
                                            "src": "7414:3:5",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "7368:49:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": null,
                                    "id": 3545,
                                    "nodeType": "IfStatement",
                                    "src": "7364:130:5",
                                    "trueBody": {
                                        "id": 3544,
                                        "nodeType": "Block",
                                        "src": "7419:75:5",
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
                                                                    "id": 3539,
                                                                    "name": "_tokenId",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 3522,
                                                                    "src": "7468:8:5",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                ],
                                                                "id": 3538,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "7460:7:5",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_bytes32_$",
                                                                    "typeString": "type(bytes32)"
                                                                },
                                                                "typeName": "bytes32"
                                                            },
                                                            "id": 3540,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "7460:17:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        },
                                                        {
                                                            "argumentTypes": null,
                                                            "id": 3541,
                                                            "name": "_to",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3524,
                                                            "src": "7479:3:5",
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
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 3535,
                                                            "name": "registry",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 3189,
                                                            "src": "7433:8:5",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_DebtRegistry_$3166",
                                                                "typeString": "contract DebtRegistry"
                                                            }
                                                        },
                                                        "id": 3537,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "modifyBeneficiary",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 2906,
                                                        "src": "7433:26:5",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                                                            "typeString": "function (bytes32,address) external"
                                                        }
                                                    },
                                                    "id": 3542,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "7433:50:5",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 3543,
                                                "nodeType": "ExpressionStatement",
                                                "src": "7433:50:5"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "id": 3547,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "_modifyBeneficiary",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 3525,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 3522,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3547,
                                    "src": "7305:13:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 3521,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7305:4:5",
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
                                    "id": 3524,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 3547,
                                    "src": "7320:11:5",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 3523,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7320:7:5",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7304:28:5"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 3526,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7354:0:5"
                        },
                        "scope": 3548,
                        "src": "7277:223:5",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "internal"
                    }
                ],
                "scope": 3549,
                "src": "1362:6140:5"
            }
        ],
        "src": "584:6919:5"
    },
    "compiler": {
        "name": "solc",
        "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
    },
    "networks": {
        "42": {
            "events": {
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
                },
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
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
                    "type": "event",
                    "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
                },
                "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
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
                    "type": "event",
                    "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
                },
                "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
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
                    "type": "event",
                    "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
                }
            },
            "links": {},
            "address": "0xd5f885511ecb2f7938af6b072333e5916746d23e",
            "transactionHash": "0x36665b9614e2da7880fa66b6b5fdf718f4d34c14533ea02449a6eb2cd6d5528a"
        },
        "70": {
            "events": {
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
                },
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
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
                    "type": "event",
                    "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
                },
                "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
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
                    "type": "event",
                    "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
                },
                "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
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
                    "type": "event",
                    "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
                }
            },
            "links": {},
            "address": "0xbB02de2224f63BDdCaCC3402e2F40362758691f6",
            "transactionHash": "0x62d0d23201ced9985a694443c2eef3734d3c4fea101436a69663a24a6164274f"
        }
    },
    "schemaVersion": "3.0.1",
    "updatedAt": "2019-02-04T01:12:49.716Z",
    "devdoc": {
        "methods": {
            "balanceOf(address)": {
                "details": "Gets the balance of the specified address",
                "params": {
                    "_owner": "address to query the balance of"
                },
                "return": "uint256 representing the amount owned by the passed address"
            },
            "exists(uint256)": {
                "details": "Returns whether the specified token exists",
                "params": {
                    "_tokenId": "uint256 ID of the token to query the existance of"
                },
                "return": "whether the token exists"
            },
            "getApproved(uint256)": {
                "details": "Gets the approved address for a token ID, or zero if no address set",
                "params": {
                    "_tokenId": "uint256 ID of the token to query the approval of"
                },
                "return": "address currently approved for a the given token ID"
            },
            "isApprovedForAll(address,address)": {
                "details": "Tells whether an operator is approved by a given owner",
                "params": {
                    "_operator": "operator address which you want to query the approval of",
                    "_owner": "owner address which you want to query the approval of"
                },
                "return": "bool whether the given operator is approved by the given owner"
            },
            "name()": {
                "details": "Gets the token name",
                "return": "string representing the token name"
            },
            "ownerOf(uint256)": {
                "details": "Gets the owner of the specified token ID",
                "params": {
                    "_tokenId": "uint256 ID of the token to query the owner of"
                },
                "return": "owner address currently marked as the owner of the given token ID"
            },
            "pause()": {
                "details": "called by the owner to pause, triggers stopped state"
            },
            "symbol()": {
                "details": "Gets the token symbol",
                "return": "string representing the token symbol"
            },
            "tokenByIndex(uint256)": {
                "details": "Gets the token ID at a given index of all the tokens in this contractReverts if the index is greater or equal to the total number of tokens",
                "params": {
                    "_index": "uint256 representing the index to be accessed of the tokens list"
                },
                "return": "uint256 token ID at the given index of the tokens list"
            },
            "tokenOfOwnerByIndex(address,uint256)": {
                "details": "Gets the token ID at a given index of the tokens list of the requested owner",
                "params": {
                    "_index": "uint256 representing the index to be accessed of the requested tokens list",
                    "_owner": "address owning the tokens list to be accessed"
                },
                "return": "uint256 token ID at the given index of the tokens list owned by the requested address"
            },
            "tokenURI(uint256)": {
                "details": "Returns an URI for a given token IDThrows if the token ID does not exist. May return an empty string.",
                "params": {
                    "_tokenId": "uint256 ID of the token to query"
                }
            },
            "totalSupply()": {
                "details": "Gets the total amount of tokens stored by the contract",
                "return": "uint256 representing the total amount of tokens"
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
            "addAuthorizedMintAgent(address)": {
                "notice": "Adds an address to the list of agents authorized to mint debt tokens."
            },
            "addAuthorizedTokenURIAgent(address)": {
                "notice": "Adds an address to the list of agents authorized to set token URIs."
            },
            "approve(address,uint256)": {
                "notice": "We override approval method of the parent ERC721Token contract to allow its functionality to be frozen in the case of an emergency"
            },
            "create(address,address,address,address,uint256,address,bytes32,uint256)": {
                "notice": "Mints a unique debt token and inserts the associated issuance into the debt registry, if the calling address is authorized to do so."
            },
            "getAuthorizedMintAgents()": {
                "notice": "Returns the list of agents authorized to mint debt tokens"
            },
            "getAuthorizedTokenURIAgents()": {
                "notice": "Returns the list of agents authorized to set token URIs."
            },
            "revokeMintAgentAuthorization(address)": {
                "notice": "Removes an address from the list of agents authorized to mint debt tokens"
            },
            "revokeTokenURIAuthorization(address)": {
                "notice": "Removes an address from the list of agents authorized to set token URIs."
            },
            "safeTransferFrom(address,address,uint256)": {
                "notice": "We override safeTransferFrom methods of the parent ERC721Token contract to allow its functionality to be frozen in the case of an emergency"
            },
            "safeTransferFrom(address,address,uint256,bytes)": {
                "notice": "We override safeTransferFrom methods of the parent ERC721Token contract to allow its functionality to be frozen in the case of an emergency"
            },
            "setApprovalForAll(address,bool)": {
                "notice": "We override setApprovalForAll method of the parent ERC721Token contract to allow its functionality to be frozen in the case of an emergency"
            },
            "setTokenURI(uint256,string)": {
                "notice": "Allows senders with special permissions to set the token URI for a given debt token."
            },
            "supportsInterface(bytes4)": {
                "notice": "ERC165 interface. Returns true for ERC721, false otherwise"
            },
            "transfer(address,uint256)": {
                "notice": "Support deprecated ERC721 method"
            },
            "transferFrom(address,address,uint256)": {
                "notice": "We override transferFrom methods of the parent ERC721Token contract to allow its functionality to be frozen in the case of an emergency"
            }
        }
    }
};
//# sourceMappingURL=DebtToken.js.map