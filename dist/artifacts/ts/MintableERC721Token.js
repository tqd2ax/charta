"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintableERC721Token = {
    "contractName": "MintableERC721Token",
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
            "inputs": [],
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
            "name": "mint",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function",
            "signature": "0x40c10f19"
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
        }
    ],
    "bytecode": "0x606060405234156200001057600080fd5b6040805190810160405280601381526020017f4d696e7461626c65455243373231546f6b656e000000000000000000000000008152506040805190810160405280600381526020017f4d45540000000000000000000000000000000000000000000000000000000000815250816004908051906020019062000094929190620000b6565b508060059080519060200190620000ad929190620000b6565b50505062000165565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000f957805160ff19168380011785556200012a565b828001600101855582156200012a579182015b82811115620001295782518255916020019190600101906200010c565b5b5090506200013991906200013d565b5090565b6200016291905b808211156200015e57600081600090555060010162000144565b5090565b90565b611d7180620001756000396000f300606060405260043610610107576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a71461010c57806306fdde0314610166578063081812fc146101f4578063095ea7b31461025757806318160ddd1461029957806323b872dd146102c25780632f745c591461032357806340c10f191461037957806342842e0e146103bb5780634f558e791461041c5780634f6ccce7146104575780636352211e1461048e57806370a08231146104f157806395d89b411461053e578063a22cb465146105cc578063a9059cbb14610610578063b88d4fde14610652578063c87b56dd146106f6578063e985e9c514610792575b600080fd5b341561011757600080fd5b61014c60048080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019091905050610802565b604051808215151515815260200191505060405180910390f35b341561017157600080fd5b610179610850565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101b957808201518184015260208101905061019e565b50505050905090810190601f1680156101e65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101ff57600080fd5b61021560048080359060200190919050506108f8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561026257600080fd5b610297600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610935565b005b34156102a457600080fd5b6102ac610afb565b6040518082815260200191505060405180910390f35b34156102cd57600080fd5b610321600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610b08565b005b341561032e57600080fd5b610363600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610c1f565b6040518082815260200191505060405180910390f35b341561038457600080fd5b6103b9600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610c97565b005b34156103c657600080fd5b61041a600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ca5565b005b341561042757600080fd5b61043d6004808035906020019091905050610cdd565b604051808215151515815260200191505060405180910390f35b341561046257600080fd5b6104786004808035906020019091905050610d4e565b6040518082815260200191505060405180910390f35b341561049957600080fd5b6104af6004808035906020019091905050610d87565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104fc57600080fd5b610528600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610e04565b6040518082815260200191505060405180910390f35b341561054957600080fd5b610551610e88565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610591578082015181840152602081019050610576565b50505050905090810190601f1680156105be5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156105d757600080fd5b61060e600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080351515906020019091905050610f30565b005b341561061b57600080fd5b610650600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061106c565b005b341561065d57600080fd5b6106f4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061107b565b005b341561070157600080fd5b61071760048080359060200190919050506110ba565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561075757808201518184015260208101905061073c565b50505050905090810190601f1680156107845780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561079d57600080fd5b6107e8600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611189565b604051808215151515815260200191505060405180910390f35b60006380ac58cd7c010000000000000000000000000000000000000000000000000000000002827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610858611cb4565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108ee5780601f106108c3576101008083540402835291602001916108ee565b820191906000526020600020905b8154815290600101906020018083116108d157829003601f168201915b5050505050905090565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061094082610d87565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561097d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806109bd57506109bc8133611189565b5b15156109c857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166109e9836108f8565b73ffffffffffffffffffffffffffffffffffffffff16141580610a395750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b15610af657826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b6000600880549050905090565b80610b13338261121d565b1515610b1e57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614151515610b5a57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610b9657600080fd5b610ba084836112b2565b610baa848361141b565b610bb48383611636565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6000610c2a83610e04565b82101515610c3757600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515610c8357fe5b906000526020600020900154905092915050565b610ca1828261170a565b5050565b80610cb0338261121d565b1515610cbb57600080fd5b610cd7848484602060405190810160405280600081525061107b565b50505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000610d58610afb565b82101515610d6557600080fd5b600882815481101515610d7457fe5b9060005260206000209001549050919050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610dfb57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610e4157600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610e90611cb4565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f265780601f10610efb57610100808354040283529160200191610f26565b820191906000526020600020905b815481529060010190602001808311610f0957829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610f6b57600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b611077338383610ca5565b5050565b81611086338261121d565b151561109157600080fd5b61109c858585610b08565b6110a88585858561175e565b15156110b357600080fd5b5050505050565b6110c2611cb4565b6110cb82610cdd565b15156110d657600080fd5b600a60008381526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561117d5780601f106111525761010080835404028352916020019161117d565b820191906000526020600020905b81548152906001019060200180831161116057829003601f168201915b50505050509050919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008061122983610d87565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061129857508373ffffffffffffffffffffffffffffffffffffffff16611280846108f8565b73ffffffffffffffffffffffffffffffffffffffff16145b806112a957506112a88185611189565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff166112d282610d87565b73ffffffffffffffffffffffffffffffffffffffff161415156112f457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156114175760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b600080600061142a8585611934565b600760008581526020019081526020016000205492506114966001600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050611a6290919063ffffffff16565b9150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156114e457fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208481548110151561153f57fe5b9060005260206000209001819055506000600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561159c57fe5b906000526020600020900181905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036115fd9190611cc8565b50600060076000868152602001908152602001600020819055508260076000838152602001908152602001600020819055505050505050565b60006116428383611a7b565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816116d89190611cf4565b916000526020600020900160008490919091505550806007600084815260200190815260200160002081905550505050565b6117148282611bd3565b6008805490506009600083815260200190815260200160002081905550600880548060010182816117459190611cf4565b9160005260206000209001600083909190915055505050565b6000806117808573ffffffffffffffffffffffffffffffffffffffff16611c83565b151561178f576001915061192b565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561185a57808201518184015260208101905061183f565b50505050905090810190601f1680156118875780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15156118a757600080fd5b6102c65a03f115156118b857600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff1661195482610d87565b73ffffffffffffffffffffffffffffffffffffffff1614151561197657600080fd5b6119c96001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a6290919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000828211151515611a7057fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611ae857600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611b8c6001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611c9690919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611c0f57600080fd5b611c198282611636565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600080823b905060008111915050919050565b6000808284019050838110151515611caa57fe5b8091505092915050565b602060405190810160405280600081525090565b815481835581811511611cef57818360005260206000209182019101611cee9190611d20565b5b505050565b815481835581811511611d1b57818360005260206000209182019101611d1a9190611d20565b5b505050565b611d4291905b80821115611d3e576000816000905550600101611d26565b5090565b905600a165627a7a723058209e69a7e89b509d74a74de26e07f4599bdb99ac7da9d3c1f8765d4c002cab68110029",
    "deployedBytecode": "0x606060405260043610610107576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806301ffc9a71461010c57806306fdde0314610166578063081812fc146101f4578063095ea7b31461025757806318160ddd1461029957806323b872dd146102c25780632f745c591461032357806340c10f191461037957806342842e0e146103bb5780634f558e791461041c5780634f6ccce7146104575780636352211e1461048e57806370a08231146104f157806395d89b411461053e578063a22cb465146105cc578063a9059cbb14610610578063b88d4fde14610652578063c87b56dd146106f6578063e985e9c514610792575b600080fd5b341561011757600080fd5b61014c60048080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019091905050610802565b604051808215151515815260200191505060405180910390f35b341561017157600080fd5b610179610850565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101b957808201518184015260208101905061019e565b50505050905090810190601f1680156101e65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101ff57600080fd5b61021560048080359060200190919050506108f8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561026257600080fd5b610297600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610935565b005b34156102a457600080fd5b6102ac610afb565b6040518082815260200191505060405180910390f35b34156102cd57600080fd5b610321600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610b08565b005b341561032e57600080fd5b610363600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610c1f565b6040518082815260200191505060405180910390f35b341561038457600080fd5b6103b9600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610c97565b005b34156103c657600080fd5b61041a600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ca5565b005b341561042757600080fd5b61043d6004808035906020019091905050610cdd565b604051808215151515815260200191505060405180910390f35b341561046257600080fd5b6104786004808035906020019091905050610d4e565b6040518082815260200191505060405180910390f35b341561049957600080fd5b6104af6004808035906020019091905050610d87565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104fc57600080fd5b610528600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610e04565b6040518082815260200191505060405180910390f35b341561054957600080fd5b610551610e88565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610591578082015181840152602081019050610576565b50505050905090810190601f1680156105be5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156105d757600080fd5b61060e600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080351515906020019091905050610f30565b005b341561061b57600080fd5b610650600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061106c565b005b341561065d57600080fd5b6106f4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061107b565b005b341561070157600080fd5b61071760048080359060200190919050506110ba565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561075757808201518184015260208101905061073c565b50505050905090810190601f1680156107845780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561079d57600080fd5b6107e8600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611189565b604051808215151515815260200191505060405180910390f35b60006380ac58cd7c010000000000000000000000000000000000000000000000000000000002827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610858611cb4565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108ee5780601f106108c3576101008083540402835291602001916108ee565b820191906000526020600020905b8154815290600101906020018083116108d157829003601f168201915b5050505050905090565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061094082610d87565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561097d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806109bd57506109bc8133611189565b5b15156109c857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166109e9836108f8565b73ffffffffffffffffffffffffffffffffffffffff16141580610a395750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b15610af657826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b6000600880549050905090565b80610b13338261121d565b1515610b1e57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614151515610b5a57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610b9657600080fd5b610ba084836112b2565b610baa848361141b565b610bb48383611636565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6000610c2a83610e04565b82101515610c3757600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515610c8357fe5b906000526020600020900154905092915050565b610ca1828261170a565b5050565b80610cb0338261121d565b1515610cbb57600080fd5b610cd7848484602060405190810160405280600081525061107b565b50505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000610d58610afb565b82101515610d6557600080fd5b600882815481101515610d7457fe5b9060005260206000209001549050919050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610dfb57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610e4157600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610e90611cb4565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f265780601f10610efb57610100808354040283529160200191610f26565b820191906000526020600020905b815481529060010190602001808311610f0957829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610f6b57600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b611077338383610ca5565b5050565b81611086338261121d565b151561109157600080fd5b61109c858585610b08565b6110a88585858561175e565b15156110b357600080fd5b5050505050565b6110c2611cb4565b6110cb82610cdd565b15156110d657600080fd5b600a60008381526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561117d5780601f106111525761010080835404028352916020019161117d565b820191906000526020600020905b81548152906001019060200180831161116057829003601f168201915b50505050509050919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60008061122983610d87565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061129857508373ffffffffffffffffffffffffffffffffffffffff16611280846108f8565b73ffffffffffffffffffffffffffffffffffffffff16145b806112a957506112a88185611189565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff166112d282610d87565b73ffffffffffffffffffffffffffffffffffffffff161415156112f457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156114175760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b600080600061142a8585611934565b600760008581526020019081526020016000205492506114966001600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050611a6290919063ffffffff16565b9150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156114e457fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208481548110151561153f57fe5b9060005260206000209001819055506000600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561159c57fe5b906000526020600020900181905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036115fd9190611cc8565b50600060076000868152602001908152602001600020819055508260076000838152602001908152602001600020819055505050505050565b60006116428383611a7b565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816116d89190611cf4565b916000526020600020900160008490919091505550806007600084815260200190815260200160002081905550505050565b6117148282611bd3565b6008805490506009600083815260200190815260200160002081905550600880548060010182816117459190611cf4565b9160005260206000209001600083909190915055505050565b6000806117808573ffffffffffffffffffffffffffffffffffffffff16611c83565b151561178f576001915061192b565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561185a57808201518184015260208101905061183f565b50505050905090810190601f1680156118875780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15156118a757600080fd5b6102c65a03f115156118b857600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff1661195482610d87565b73ffffffffffffffffffffffffffffffffffffffff1614151561197657600080fd5b6119c96001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a6290919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000828211151515611a7057fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515611ae857600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611b8c6001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611c9690919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515611c0f57600080fd5b611c198282611636565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600080823b905060008111915050919050565b6000808284019050838110151515611caa57fe5b8091505092915050565b602060405190810160405280600081525090565b815481835581811511611cef57818360005260206000209182019101611cee9190611d20565b5b505050565b815481835581811511611d1b57818360005260206000209182019101611d1a9190611d20565b5b505050565b611d4291905b80821115611d3e576000816000905550600101611d26565b5090565b905600a165627a7a723058209e69a7e89b509d74a74de26e07f4599bdb99ac7da9d3c1f8765d4c002cab68110029",
    "sourceMap": "285:684:20:-;;;343:82;;;;;;;;1107:105:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1179:5;1171;:13;;;;;;;;;;;;:::i;:::-;;1200:7;1190;:17;;;;;;;;;;;;:::i;:::-;;1107:105;;285:684:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "285:684:20:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;612:176;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1303:68:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2998:350;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2887:87:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5042:315:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2571:177:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;431:86:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5964:154:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2445:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3298::50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2107:164:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1756:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1466:72:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3969:200:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;850:117:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6794:227:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:133:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4478:142:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;612:176:20;706:17;761:10;746:25;;:11;:25;;;;739:32;;612:176;;;:::o;1303:68:50:-;1340:6;;:::i;:::-;1361:5;1354:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1303:68;:::o;3577:111:48:-;3637:7;3659:14;:24;3674:8;3659:24;;;;;;;;;;;;;;;;;;;;;3652:31;;3577:111;;;:::o;2998:350::-;3059:13;3075:17;3083:8;3075:7;:17::i;:::-;3059:33;;3113:5;3106:12;;:3;:12;;;;3098:21;;;;;;;;3147:5;3133:19;;:10;:19;;;:58;;;;3156:35;3173:5;3180:10;3156:16;:35::i;:::-;3133:58;3125:67;;;;;;;;3236:1;3203:35;;:21;3215:8;3203:11;:21::i;:::-;:35;;;;:56;;;;3257:1;3242:17;;:3;:17;;;;3203:56;3199:145;;;3296:3;3269:14;:24;3284:8;3269:24;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;3323:3;3307:30;;3316:5;3307:30;;;3328:8;3307:30;;;;;;;;;;;;;;;;;;3199:145;2998:350;;;:::o;2887:87:50:-;2931:7;2953:9;:16;;;;2946:23;;2887:87;:::o;5042:315:48:-;5129:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;5170:1;5153:19;;:5;:19;;;;5145:28;;;;;;;;5202:1;5187:17;;:3;:17;;;;5179:26;;;;;;;;5212:30;5226:5;5233:8;5212:13;:30::i;:::-;5248:32;5264:5;5271:8;5248:15;:32::i;:::-;5286:25;5297:3;5302:8;5286:10;:25::i;:::-;5338:3;5322:30;;5331:5;5322:30;;;5343:8;5322:30;;;;;;;;;;;;;;;;;;5042:315;;;;:::o;2571:177:50:-;2653:7;2685:17;2695:6;2685:9;:17::i;:::-;2676:6;:26;2668:35;;;;;;;;2716:11;:19;2728:6;2716:19;;;;;;;;;;;;;;;2736:6;2716:27;;;;;;;;;;;;;;;;;;;2709:34;;2571:177;;;;:::o;431:86:20:-;490:20;496:3;501:8;490:5;:20::i;:::-;431:86;;:::o;5964:154:48:-;6055:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6071:42;6088:5;6095:3;6100:8;6071:42;;;;;;;;;;;;;:16;:42::i;:::-;5964:154;;;;:::o;2445:140::-;2500:4;2512:13;2528:10;:20;2539:8;2528:20;;;;;;;;;;;;;;;;;;;;;2512:36;;2578:1;2561:19;;:5;:19;;;;2554:26;;2445:140;;;;:::o;3298::50:-;3357:7;3389:13;:11;:13::i;:::-;3380:6;:22;3372:31;;;;;;;;3416:9;3426:6;3416:17;;;;;;;;;;;;;;;;;;;3409:24;;3298:140;;;:::o;2107:164:48:-;2163:7;2178:13;2194:10;:20;2205:8;2194:20;;;;;;;;;;;;;;;;;;;;;2178:36;;2245:1;2228:19;;:5;:19;;;;2220:28;;;;;;;;2261:5;2254:12;;2107:164;;;;:::o;1756:142::-;1812:7;1853:1;1835:20;;:6;:20;;;;1827:29;;;;;;;;1869:16;:24;1886:6;1869:24;;;;;;;;;;;;;;;;1862:31;;1756:142;;;:::o;1466:72:50:-;1505:6;;:::i;:::-;1526:7;1519:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1466:72;:::o;3969:200:48:-;4053:10;4046:17;;:3;:17;;;;4038:26;;;;;;;;4107:9;4070:17;:29;4088:10;4070:29;;;;;;;;;;;;;;;:34;4100:3;4070:34;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;4149:3;4122:42;;4137:10;4122:42;;;4154:9;4122:42;;;;;;;;;;;;;;;;;;;;;;3969:200;;:::o;850:117:20:-;917:43;934:10;946:3;951:8;917:16;:43::i;:::-;850:117;;:::o;6794:227:48:-;6898:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6914:34;6927:5;6934:3;6939:8;6914:12;:34::i;:::-;6962:53;6987:5;6994:3;6999:8;7009:5;6962:24;:53::i;:::-;6954:62;;;;;;;;6794:227;;;;;:::o;1727:133:50:-;1784:6;;:::i;:::-;1806:16;1813:8;1806:6;:16::i;:::-;1798:25;;;;;;;;1836:9;:19;1846:8;1836:19;;;;;;;;;;;1829:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:133;;;:::o;4478:142:48:-;4560:4;4579:17;:25;4597:6;4579:25;;;;;;;;;;;;;;;:36;4605:9;4579:36;;;;;;;;;;;;;;;;;;;;;;;;;4572:43;;4478:142;;;;:::o;7368:240::-;7454:4;7466:13;7482:17;7490:8;7482:7;:17::i;:::-;7466:33;;7524:5;7512:17;;:8;:17;;;:54;;;;7558:8;7533:33;;:21;7545:8;7533:11;:21::i;:::-;:33;;;7512:54;:91;;;;7570:33;7587:5;7594:8;7570:16;:33::i;:::-;7512:91;7505:98;;7368:240;;;;;:::o;8653:260::-;8754:6;8733:27;;:17;8741:8;8733:7;:17::i;:::-;:27;;;8725:36;;;;;;;;8807:1;8771:38;;:14;:24;8786:8;8771:24;;;;;;;;;;;;;;;;;;;;;:38;;;;8767:142;;;8854:1;8819:14;:24;8834:8;8819:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;8889:1;8864:38;;8873:6;8864:38;;;8893:8;8864:38;;;;;;;;;;;;;;;;;;8767:142;8653:260;;:::o;4198:856:50:-;4316:18;4369:22;4432:17;4271:38;4293:5;4300:8;4271:21;:38::i;:::-;4337:16;:26;4354:8;4337:26;;;;;;;;;;;;4316:47;;4394:32;4424:1;4394:11;:18;4406:5;4394:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;4369:57;;4452:11;:18;4464:5;4452:18;;;;;;;;;;;;;;;4471:14;4452:34;;;;;;;;;;;;;;;;;;;4432:54;;4526:9;4493:11;:18;4505:5;4493:18;;;;;;;;;;;;;;;4512:10;4493:30;;;;;;;;;;;;;;;;;;:42;;;;4578:1;4541:11;:18;4553:5;4541:18;;;;;;;;;;;;;;;4560:14;4541:34;;;;;;;;;;;;;;;;;;:38;;;;4940:11;:18;4952:5;4940:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;5002:1;4973:16;:26;4990:8;4973:26;;;;;;;;;;;:30;;;;5039:10;5009:16;:27;5026:9;5009:27;;;;;;;;;;;:40;;;;4198:856;;;;;:::o;3697:226::-;3800:14;3763:31;3780:3;3785:8;3763:16;:31::i;:::-;3817:11;:16;3829:3;3817:16;;;;;;;;;;;;;;;:23;;;;3800:40;;3846:11;:16;3858:3;3846:16;;;;;;;;;;;;;;;:31;;;;;;;;;;;:::i;:::-;;;;;;;;;;3868:8;3846:31;;;;;;;3912:6;3883:16;:26;3900:8;3883:26;;;;;;;;;;;:35;;;;3697:226;;;:::o;5315:176::-;5376:26;5388:3;5393:8;5376:11;:26::i;:::-;5440:9;:16;;;;5413:14;:24;5428:8;5413:24;;;;;;;;;;;:43;;;;5462:9;:24;;;;;;;;;;;:::i;:::-;;;;;;;;;;5477:8;5462:24;;;;;;;5315:176;;:::o;10368:298:48:-;10479:4;10545:13;10496:16;:3;:14;;;:16::i;:::-;10495:17;10491:49;;;10529:4;10522:11;;;;10491:49;10576:3;10561:36;;;10598:5;10605:8;10615:5;10561:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10545:76:48;;605:10;10645:15;;10635:25;;;:6;:25;;;;10627:34;;10368:298;;;;;;;;:::o;9651:214::-;9753:5;9732:26;;:17;9740:8;9732:7;:17::i;:::-;:26;;;9724:35;;;;;;;;9791:30;9819:1;9791:16;:23;9808:5;9791:23;;;;;;;;;;;;;;;;:27;;:30;;;;:::i;:::-;9765:16;:23;9782:5;9765:23;;;;;;;;;;;;;;;:56;;;;9858:1;9827:10;:20;9838:8;9827:20;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;9651:214;;:::o;835:110:38:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;9172:204:48:-;9278:1;9246:34;;:10;:20;9257:8;9246:20;;;;;;;;;;;;;;;;;;;;;:34;;;9238:43;;;;;;;;9310:3;9287:10;:20;9298:8;9287:20;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;9343:28;9369:1;9343:16;:21;9360:3;9343:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;9319:16;:21;9336:3;9319:21;;;;;;;;;;;;;;;:52;;;;9172:204;;:::o;7857:164::-;7941:1;7926:17;;:3;:17;;;;7918:26;;;;;;;;7950:25;7961:3;7966:8;7950:10;:25::i;:::-;8002:3;7981:35;;7998:1;7981:35;;;8007:8;7981:35;;;;;;;;;;;;;;;;;;7857:164;;:::o;451:150:36:-;508:4;520:12;569:4;557:11;549:25;;595:1;588:4;:8;581:15;;451:150;;;;:::o;1007:129:38:-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o;285:684:20:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "pragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol\";\nimport \"../ERC165.sol\";\n\n/**\n * This implementation of the ERC721 standard allows us to deploy a test ERC721 contract and mint\n * non-fungible tokens that we can use in a test environment.\n */\ncontract MintableERC721Token is ERC721Token, ERC165 {\n    function MintableERC721Token() public ERC721Token(\"MintableERC721Token\", \"MET\") {}\n\n    function mint(address _to, uint _tokenId) public {\n        _mint(_to, _tokenId);\n    }\n\n    /**\n     * ERC165 interface.\n     * Returns true for ERC721, false otherwise\n     */\n    function supportsInterface(bytes4 interfaceID)\n        external\n        view\n        returns (bool _isSupported)\n    {\n        return interfaceID == 0x80ac58cd; // ERC721\n    }\n\n    /**\n     * Support deprecated ERC721 method\n     */\n    function transfer(address _to, uint _tokenId) public\n    {\n        safeTransferFrom(msg.sender, _to, _tokenId);\n    }\n}\n",
    "sourcePath": "/Users/trqdinh/Development/loot/charta/contracts/test/MintableERC721Token.sol",
    "ast": {
        "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/test/MintableERC721Token.sol",
        "exportedSymbols": {
            "MintableERC721Token": [
                10000
            ]
        },
        "id": 10001,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 9945,
                "literals": [
                    "solidity",
                    "0.4",
                    ".18"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:23:20"
            },
            {
                "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
                "file": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
                "id": 9946,
                "nodeType": "ImportDirective",
                "scope": 10001,
                "sourceUnit": 15830,
                "src": "25:66:20",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/ERC165.sol",
                "file": "../ERC165.sol",
                "id": 9947,
                "nodeType": "ImportDirective",
                "scope": 10001,
                "sourceUnit": 3559,
                "src": "92:23:20",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "baseContracts": [
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 9948,
                            "name": "ERC721Token",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 15829,
                            "src": "317:11:20",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC721Token_$15829",
                                "typeString": "contract ERC721Token"
                            }
                        },
                        "id": 9949,
                        "nodeType": "InheritanceSpecifier",
                        "src": "317:11:20"
                    },
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 9950,
                            "name": "ERC165",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3558,
                            "src": "330:6:20",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC165_$3558",
                                "typeString": "contract ERC165"
                            }
                        },
                        "id": 9951,
                        "nodeType": "InheritanceSpecifier",
                        "src": "330:6:20"
                    }
                ],
                "contractDependencies": [
                    3558,
                    14724,
                    14744,
                    14751,
                    14858,
                    15441,
                    15829
                ],
                "contractKind": "contract",
                "documentation": "This implementation of the ERC721 standard allows us to deploy a test ERC721 contract and mint\nnon-fungible tokens that we can use in a test environment.",
                "fullyImplemented": true,
                "id": 10000,
                "linearizedBaseContracts": [
                    10000,
                    3558,
                    15829,
                    15441,
                    14751,
                    14744,
                    14724,
                    14858
                ],
                "name": "MintableERC721Token",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 9958,
                            "nodeType": "Block",
                            "src": "423:2:20",
                            "statements": []
                        },
                        "id": 9959,
                        "implemented": true,
                        "isConstructor": true,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "hexValue": "4d696e7461626c65455243373231546f6b656e",
                                        "id": 9954,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "393:21:20",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_e9ad610c86cd9b7d12ef627f57a34dd2ac1eb58fd33a491d696446d1dd3c56c0",
                                            "typeString": "literal_string \"MintableERC721Token\""
                                        },
                                        "value": "MintableERC721Token"
                                    },
                                    {
                                        "argumentTypes": null,
                                        "hexValue": "4d4554",
                                        "id": 9955,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "416:5:20",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_b31cf29fc4077ecd85b2ec3881f8fa64c9e9555cff2b68f96ce27b3393ace3bb",
                                            "typeString": "literal_string \"MET\""
                                        },
                                        "value": "MET"
                                    }
                                ],
                                "id": 9956,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 9953,
                                    "name": "ERC721Token",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 15829,
                                    "src": "381:11:20",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_contract$_ERC721Token_$15829_$",
                                        "typeString": "type(contract ERC721Token)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "381:41:20"
                            }
                        ],
                        "name": "MintableERC721Token",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 9952,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "371:2:20"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 9957,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "423:0:20"
                        },
                        "scope": 10000,
                        "src": "343:82:20",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 9971,
                            "nodeType": "Block",
                            "src": "480:37:20",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 9967,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9961,
                                                "src": "496:3:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 9968,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9963,
                                                "src": "501:8:20",
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
                                            "id": 9966,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                15749
                                            ],
                                            "referencedDeclaration": 15749,
                                            "src": "490:5:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 9969,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "490:20:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 9970,
                                    "nodeType": "ExpressionStatement",
                                    "src": "490:20:20"
                                }
                            ]
                        },
                        "id": 9972,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "mint",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 9964,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9961,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9972,
                                    "src": "445:11:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9960,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "445:7:20",
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
                                    "id": 9963,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9972,
                                    "src": "458:13:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9962,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "458:4:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "444:28:20"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 9965,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "480:0:20"
                        },
                        "scope": 10000,
                        "src": "431:86:20",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 9983,
                            "nodeType": "Block",
                            "src": "729:59:20",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        },
                                        "id": 9981,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 9979,
                                            "name": "interfaceID",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9974,
                                            "src": "746:11:20",
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
                                            "id": 9980,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "761:10:20",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_2158778573_by_1",
                                                "typeString": "int_const 2158778573"
                                            },
                                            "value": "0x80ac58cd"
                                        },
                                        "src": "746:25:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 9978,
                                    "id": 9982,
                                    "nodeType": "Return",
                                    "src": "739:32:20"
                                }
                            ]
                        },
                        "id": 9984,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "supportsInterface",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 9975,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9974,
                                    "name": "interfaceID",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9984,
                                    "src": "639:18:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 9973,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "639:6:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "638:20:20"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 9978,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9977,
                                    "name": "_isSupported",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9984,
                                    "src": "706:17:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 9976,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "706:4:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "705:19:20"
                        },
                        "scope": 10000,
                        "src": "612:176:20",
                        "stateMutability": "view",
                        "superFunction": 3557,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 9998,
                            "nodeType": "Block",
                            "src": "907:60:20",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 9992,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15841,
                                                    "src": "934:3:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 9993,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "934:10:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 9994,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9986,
                                                "src": "946:3:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 9995,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9988,
                                                "src": "951:8:20",
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
                                            "id": 9991,
                                            "name": "safeTransferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                15175,
                                                15205
                                            ],
                                            "referencedDeclaration": 15175,
                                            "src": "917:16:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 9996,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "917:43:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 9997,
                                    "nodeType": "ExpressionStatement",
                                    "src": "917:43:20"
                                }
                            ]
                        },
                        "id": 9999,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "transfer",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 9989,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9986,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9999,
                                    "src": "868:11:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9985,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "868:7:20",
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
                                    "id": 9988,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9999,
                                    "src": "881:13:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9987,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "881:4:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "867:28:20"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 9990,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "907:0:20"
                        },
                        "scope": 10000,
                        "src": "850:117:20",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    }
                ],
                "scope": 10001,
                "src": "285:684:20"
            }
        ],
        "src": "0:970:20"
    },
    "legacyAST": {
        "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/test/MintableERC721Token.sol",
        "exportedSymbols": {
            "MintableERC721Token": [
                10000
            ]
        },
        "id": 10001,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 9945,
                "literals": [
                    "solidity",
                    "0.4",
                    ".18"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:23:20"
            },
            {
                "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
                "file": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
                "id": 9946,
                "nodeType": "ImportDirective",
                "scope": 10001,
                "sourceUnit": 15830,
                "src": "25:66:20",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/ERC165.sol",
                "file": "../ERC165.sol",
                "id": 9947,
                "nodeType": "ImportDirective",
                "scope": 10001,
                "sourceUnit": 3559,
                "src": "92:23:20",
                "symbolAliases": [],
                "unitAlias": ""
            },
            {
                "baseContracts": [
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 9948,
                            "name": "ERC721Token",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 15829,
                            "src": "317:11:20",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC721Token_$15829",
                                "typeString": "contract ERC721Token"
                            }
                        },
                        "id": 9949,
                        "nodeType": "InheritanceSpecifier",
                        "src": "317:11:20"
                    },
                    {
                        "arguments": [],
                        "baseName": {
                            "contractScope": null,
                            "id": 9950,
                            "name": "ERC165",
                            "nodeType": "UserDefinedTypeName",
                            "referencedDeclaration": 3558,
                            "src": "330:6:20",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC165_$3558",
                                "typeString": "contract ERC165"
                            }
                        },
                        "id": 9951,
                        "nodeType": "InheritanceSpecifier",
                        "src": "330:6:20"
                    }
                ],
                "contractDependencies": [
                    3558,
                    14724,
                    14744,
                    14751,
                    14858,
                    15441,
                    15829
                ],
                "contractKind": "contract",
                "documentation": "This implementation of the ERC721 standard allows us to deploy a test ERC721 contract and mint\nnon-fungible tokens that we can use in a test environment.",
                "fullyImplemented": true,
                "id": 10000,
                "linearizedBaseContracts": [
                    10000,
                    3558,
                    15829,
                    15441,
                    14751,
                    14744,
                    14724,
                    14858
                ],
                "name": "MintableERC721Token",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "body": {
                            "id": 9958,
                            "nodeType": "Block",
                            "src": "423:2:20",
                            "statements": []
                        },
                        "id": 9959,
                        "implemented": true,
                        "isConstructor": true,
                        "isDeclaredConst": false,
                        "modifiers": [
                            {
                                "arguments": [
                                    {
                                        "argumentTypes": null,
                                        "hexValue": "4d696e7461626c65455243373231546f6b656e",
                                        "id": 9954,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "393:21:20",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_e9ad610c86cd9b7d12ef627f57a34dd2ac1eb58fd33a491d696446d1dd3c56c0",
                                            "typeString": "literal_string \"MintableERC721Token\""
                                        },
                                        "value": "MintableERC721Token"
                                    },
                                    {
                                        "argumentTypes": null,
                                        "hexValue": "4d4554",
                                        "id": 9955,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "string",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "416:5:20",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_stringliteral_b31cf29fc4077ecd85b2ec3881f8fa64c9e9555cff2b68f96ce27b3393ace3bb",
                                            "typeString": "literal_string \"MET\""
                                        },
                                        "value": "MET"
                                    }
                                ],
                                "id": 9956,
                                "modifierName": {
                                    "argumentTypes": null,
                                    "id": 9953,
                                    "name": "ERC721Token",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 15829,
                                    "src": "381:11:20",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_contract$_ERC721Token_$15829_$",
                                        "typeString": "type(contract ERC721Token)"
                                    }
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "381:41:20"
                            }
                        ],
                        "name": "MintableERC721Token",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 9952,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "371:2:20"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 9957,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "423:0:20"
                        },
                        "scope": 10000,
                        "src": "343:82:20",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 9971,
                            "nodeType": "Block",
                            "src": "480:37:20",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "id": 9967,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9961,
                                                "src": "496:3:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 9968,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9963,
                                                "src": "501:8:20",
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
                                            "id": 9966,
                                            "name": "_mint",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                15749
                                            ],
                                            "referencedDeclaration": 15749,
                                            "src": "490:5:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 9969,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "490:20:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 9970,
                                    "nodeType": "ExpressionStatement",
                                    "src": "490:20:20"
                                }
                            ]
                        },
                        "id": 9972,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "mint",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 9964,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9961,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9972,
                                    "src": "445:11:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9960,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "445:7:20",
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
                                    "id": 9963,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9972,
                                    "src": "458:13:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9962,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "458:4:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "444:28:20"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 9965,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "480:0:20"
                        },
                        "scope": 10000,
                        "src": "431:86:20",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 9983,
                            "nodeType": "Block",
                            "src": "729:59:20",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "commonType": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        },
                                        "id": 9981,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 9979,
                                            "name": "interfaceID",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9974,
                                            "src": "746:11:20",
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
                                            "id": 9980,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "761:10:20",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_2158778573_by_1",
                                                "typeString": "int_const 2158778573"
                                            },
                                            "value": "0x80ac58cd"
                                        },
                                        "src": "746:25:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 9978,
                                    "id": 9982,
                                    "nodeType": "Return",
                                    "src": "739:32:20"
                                }
                            ]
                        },
                        "id": 9984,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "supportsInterface",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 9975,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9974,
                                    "name": "interfaceID",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9984,
                                    "src": "639:18:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 9973,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "639:6:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "638:20:20"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 9978,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9977,
                                    "name": "_isSupported",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9984,
                                    "src": "706:17:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 9976,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "706:4:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "705:19:20"
                        },
                        "scope": 10000,
                        "src": "612:176:20",
                        "stateMutability": "view",
                        "superFunction": 3557,
                        "visibility": "external"
                    },
                    {
                        "body": {
                            "id": 9998,
                            "nodeType": "Block",
                            "src": "907:60:20",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 9992,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 15841,
                                                    "src": "934:3:20",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 9993,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "934:10:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 9994,
                                                "name": "_to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9986,
                                                "src": "946:3:20",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 9995,
                                                "name": "_tokenId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 9988,
                                                "src": "951:8:20",
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
                                            "id": 9991,
                                            "name": "safeTransferFrom",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                15175,
                                                15205
                                            ],
                                            "referencedDeclaration": 15175,
                                            "src": "917:16:20",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 9996,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "917:43:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 9997,
                                    "nodeType": "ExpressionStatement",
                                    "src": "917:43:20"
                                }
                            ]
                        },
                        "id": 9999,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "transfer",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 9989,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9986,
                                    "name": "_to",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9999,
                                    "src": "868:11:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9985,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "868:7:20",
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
                                    "id": 9988,
                                    "name": "_tokenId",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9999,
                                    "src": "881:13:20",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9987,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "881:4:20",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "867:28:20"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 9990,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "907:0:20"
                        },
                        "scope": 10000,
                        "src": "850:117:20",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    }
                ],
                "scope": 10001,
                "src": "285:684:20"
            }
        ],
        "src": "0:970:20"
    },
    "compiler": {
        "name": "solc",
        "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
    },
    "networks": {
        "42": {
            "events": {},
            "links": {},
            "address": "0xfda2d27d268bf93676d192778b0ab86bc81a2610",
            "transactionHash": "0x4367d38451f47c202aca287ca23b19842bae463da9cef89abd11e8e4de35f5e2"
        },
        "70": {
            "events": {},
            "links": {},
            "address": "0x64a2aF25392E94bC4337d98035f39Daac11C5548",
            "transactionHash": "0x634ba13b1928c9d6c44f6ee5953fc58470bc649ee5103b352ae996a204cecf2b"
        }
    },
    "schemaVersion": "3.0.1",
    "updatedAt": "2019-02-04T01:12:49.683Z",
    "devdoc": {
        "methods": {
            "approve(address,uint256)": {
                "details": "Approves another address to transfer the given token IDThe zero address indicates there is no approved address.There can only be one approved address per token at a given time.Can only be called by the token owner or an approved operator.",
                "params": {
                    "_to": "address to be approved for the given token ID",
                    "_tokenId": "uint256 ID of the token to be approved"
                }
            },
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
            "safeTransferFrom(address,address,uint256)": {
                "details": "Safely transfers the ownership of a given token ID to another addressIf the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`; otherwise, the transfer is reverted.Requires the msg sender to be the owner, approved, or operator",
                "params": {
                    "_from": "current owner of the token",
                    "_to": "address to receive the ownership of the given token ID",
                    "_tokenId": "uint256 ID of the token to be transferred"
                }
            },
            "safeTransferFrom(address,address,uint256,bytes)": {
                "details": "Safely transfers the ownership of a given token ID to another addressIf the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`; otherwise, the transfer is reverted.Requires the msg sender to be the owner, approved, or operator",
                "params": {
                    "_data": "bytes data to send along with a safe transfer check",
                    "_from": "current owner of the token",
                    "_to": "address to receive the ownership of the given token ID",
                    "_tokenId": "uint256 ID of the token to be transferred"
                }
            },
            "setApprovalForAll(address,bool)": {
                "details": "Sets or unsets the approval of a given operatorAn operator is allowed to transfer all tokens of the sender on their behalf",
                "params": {
                    "_approved": "representing the status of the approval to be set",
                    "_to": "operator address to set the approval"
                }
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
            "transferFrom(address,address,uint256)": {
                "details": "Transfers the ownership of a given token ID to another addressUsage of this method is discouraged, use `safeTransferFrom` whenever possibleRequires the msg sender to be the owner, approved, or operator",
                "params": {
                    "_from": "current owner of the token",
                    "_to": "address to receive the ownership of the given token ID",
                    "_tokenId": "uint256 ID of the token to be transferred"
                }
            }
        }
    },
    "userdoc": {
        "methods": {
            "supportsInterface(bytes4)": {
                "notice": "ERC165 interface. Returns true for ERC721, false otherwise"
            },
            "transfer(address,uint256)": {
                "notice": "Support deprecated ERC721 method"
            }
        }
    }
};
//# sourceMappingURL=MintableERC721Token.js.map