export const TokenTransferProxy = 
{
  "contractName": "TokenTransferProxy",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "CONTEXT",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x2e667c4e"
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
      "constant": false,
      "inputs": [
        {
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "addAuthorizedTransferAgent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x0a8f7b52"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "revokeTransferAgentAuthorization",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x94ae6e71"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAuthorizedTransferAgents",
      "outputs": [
        {
          "name": "authorizedAgents",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x9c200302"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x15dacbea"
    }
  ],
  "bytecode": "0x606060405260008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610ff78061006d6000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a8f7b52146100a957806315dacbea146100e25780632e667c4e1461017a5780633f4ba83a146102085780635c975abb1461021d5780638456cb591461024a5780638da5cb5b1461025f57806394ae6e71146102b45780639c200302146102ed578063f2fde38b14610357575b600080fd5b34156100b457600080fd5b6100e0600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610390565b005b34156100ed57600080fd5b610160600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610439565b604051808215151515815260200191505060405180910390f35b341561018557600080fd5b61018d61055e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101cd5780820151818401526020810190506101b2565b50505050905090810190601f1680156101fa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561021357600080fd5b61021b610597565b005b341561022857600080fd5b610230610655565b604051808215151515815260200191505060405180910390f35b341561025557600080fd5b61025d610668565b005b341561026a57600080fd5b610272610728565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102bf57600080fd5b6102eb600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061074d565b005b34156102f857600080fd5b6103006107f6565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610343578082015181840152602081019050610328565b505050509050019250505060405180910390f35b341561036257600080fd5b61038e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061080d565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103eb57600080fd5b610436816040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f787900000000000000000000000081525060016109629092919063ffffffff16565b50565b600061044f336001610b3e90919063ffffffff16565b151561045a57600080fd5b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd8585856000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b151561053957600080fd5b6102c65a03f1151561054a57600080fd5b505050604051805190509050949350505050565b6040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f787900000000000000000000000081525081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105f257600080fd5b600060149054906101000a900460ff16151561060d57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106c357600080fd5b600060149054906101000a900460ff161515156106df57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107a857600080fd5b6107f3816040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f78790000000000000000000000008152506001610b979092919063ffffffff16565b50565b6107fe610f3a565b6108086001610e8d565b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561086857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156108a457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61096c8383610f25565b151561097757600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508260020180548060010182816109e79190610f4e565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015610aff578082015181840152602081019050610ae4565b50505050905090810190601f168015610b2c5780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806000610ba68686610b3e565b1515610bb157600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515610c1357fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515610ca457fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515610d8957fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081610dd19190610f7a565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e4b578082015181840152602081019050610e30565b50505050905090810190601f168015610e785780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b610e95610f3a565b81600201805480602002602001604051908101604052809291908181526020018280548015610f1957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610ecf575b50505050509050919050565b6000610f318383610b3e565b15905092915050565b602060405190810160405280600081525090565b815481835581811511610f7557818360005260206000209182019101610f749190610fa6565b5b505050565b815481835581811511610fa157818360005260206000209182019101610fa09190610fa6565b5b505050565b610fc891905b80821115610fc4576000816000905550600101610fac565b5090565b905600a165627a7a7230582008e948bd59ad056bba322844c3da975d4ff0ad2051f0d28d75deeb4abdb0a9250029",
  "deployedBytecode": "0x6060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a8f7b52146100a957806315dacbea146100e25780632e667c4e1461017a5780633f4ba83a146102085780635c975abb1461021d5780638456cb591461024a5780638da5cb5b1461025f57806394ae6e71146102b45780639c200302146102ed578063f2fde38b14610357575b600080fd5b34156100b457600080fd5b6100e0600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610390565b005b34156100ed57600080fd5b610160600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610439565b604051808215151515815260200191505060405180910390f35b341561018557600080fd5b61018d61055e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101cd5780820151818401526020810190506101b2565b50505050905090810190601f1680156101fa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561021357600080fd5b61021b610597565b005b341561022857600080fd5b610230610655565b604051808215151515815260200191505060405180910390f35b341561025557600080fd5b61025d610668565b005b341561026a57600080fd5b610272610728565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102bf57600080fd5b6102eb600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061074d565b005b34156102f857600080fd5b6103006107f6565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610343578082015181840152602081019050610328565b505050509050019250505060405180910390f35b341561036257600080fd5b61038e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061080d565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103eb57600080fd5b610436816040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f787900000000000000000000000081525060016109629092919063ffffffff16565b50565b600061044f336001610b3e90919063ffffffff16565b151561045a57600080fd5b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd8585856000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b151561053957600080fd5b6102c65a03f1151561054a57600080fd5b505050604051805190509050949350505050565b6040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f787900000000000000000000000081525081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105f257600080fd5b600060149054906101000a900460ff16151561060d57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106c357600080fd5b600060149054906101000a900460ff161515156106df57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107a857600080fd5b6107f3816040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f78790000000000000000000000008152506001610b979092919063ffffffff16565b50565b6107fe610f3a565b6108086001610e8d565b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561086857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156108a457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61096c8383610f25565b151561097757600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508260020180548060010182816109e79190610f4e565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015610aff578082015181840152602081019050610ae4565b50505050905090810190601f168015610b2c5780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806000610ba68686610b3e565b1515610bb157600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515610c1357fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515610ca457fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515610d8957fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081610dd19190610f7a565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e4b578082015181840152602081019050610e30565b50505050905090810190601f168015610e785780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b610e95610f3a565b81600201805480602002602001604051908101604052809291908181526020018280548015610f1957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610ecf575b50505050509050919050565b6000610f318383610b3e565b15905092915050565b602060405190810160405280600081525090565b815481835581811511610f7557818360005260206000209182019101610f749190610fa6565b5b505050565b815481835581811511610fa157818360005260206000209182019101610fa09190610fa6565b5b505050565b610fc891905b80821115610fc4576000816000905550600101610fac565b5090565b905600a165627a7a7230582008e948bd59ad056bba322844c3da975d4ff0ad2051f0d28d75deeb4abdb0a9250029",
  "sourceMap": "1330:1487:13:-;;;268:5:37;247:26;;;;;;;;;;;;;;;;;;;;509:10:39;501:5;;:18;;;;;;;;;;;;;;;;;;1330:1487:13;;;;;;",
  "deployedSourceMap": "1330:1487:13:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1678:157;;;;;;;;;;;;;;;;;;;;;;;;;;;;2506:309;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1519:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:37;;;;;;;;;;;;;;247:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85;;;;;;;;;;;;;;238:20:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1943:173:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;2211:186;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;832:169:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;1678:157:13;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1777:51:13;1812:6;1820:7;;;;;;;;;;;;;;;;;;1777:24;:34;;:51;;;;;:::i;:::-;1678:157;:::o;2506:309::-;2656:13;2693:49;2731:10;2693:24;:37;;:49;;;;:::i;:::-;2685:58;;;;;;;;2767:6;2761:26;;;2788:5;2795:3;2800:7;2761:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2754:54;;2506:309;;;;;;:::o;1519:55::-;;;;;;;;;;;;;;;;;;;;:::o;833:87:37:-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:37;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;666:85::-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:39:-;;;;;;;;;;;;;:::o;1943:173:13:-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;2048:61:13;2093:6;2101:7;;;;;;;;;;;;;;;;;;2048:24;:44;;:61;;;;;:::i;:::-;1943:173;:::o;2211:186::-;2295:26;;:::i;:::-;2344:46;:24;:44;:46::i;:::-;2337:53;;2211:186;:::o;832:169:39:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;1732:383:17:-;1884:28;1900:4;1906:5;1884:15;:28::i;:::-;1876:37;;;;;;;;1949:4;1924;:15;;:22;1940:5;1924:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1963:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1990:5;1963:33;;;;;;;;;;;;;;;;;;;;;;;2064:1;2033:4;:21;;:28;;;;:32;2006:4;:17;;:24;2024:5;2006:24;;;;;;;;;;;;;;;:59;;;;2086:5;2075:33;;;2093:14;2075:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1732:383:17;;;:::o;3295:166::-;3405:4;3432;:15;;:22;3448:5;3432:22;;;;;;;;;;;;;;;;;;;;;;;;;3425:29;;3295:166;;;;:::o;2121:1168::-;2489:25;2551:23;2619:19;2452:25;2465:4;2471:5;2452:12;:25::i;:::-;2444:34;;;;;;;;2517:4;:17;;:24;2535:5;2517:24;;;;;;;;;;;;;;;;2489:52;;2608:1;2577:4;:21;;:28;;;;:32;2551:58;;2641:4;:21;;2663:18;2641:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;2619:63;;2745:4;:15;;:22;2761:5;2745:22;;;;;;;;;;;;;;;;2738:29;;;;;;;;;;;2894:11;2848:4;:21;;2870:20;2848:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;3009:20;2976:4;:17;;:30;2994:11;2976:30;;;;;;;;;;;;;;;:53;;;;3046:4;:17;;:24;3064:5;3046:24;;;;;;;;;;;;;;;3039:31;;;3144:4;:21;;3166:18;3144:41;;;;;;;;;;;;;;;;;;;3137:48;;;;;;;;;;;3227:1;3195:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;3260:5;3239:43;;;3267:14;3239:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2121:1168:17;;;;;;:::o;3646:162::-;3748:9;;:::i;:::-;3780:4;:21;;3773:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3646:162;;;:::o;3467:173::-;3580:4;3608:25;3621:4;3627:5;3608:12;:25::i;:::-;3607:26;3600:33;;3467:173;;;;:::o;1330:1487:13:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"./DebtRegistry.sol\";\nimport { PermissionsLib, PermissionEvents } from \"./libraries/PermissionsLib.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\n\n/**\n * The TokenTransferProxy is a proxy contract for transfering principal\n * and fee payments and repayments between agents and keepers in the Dharma\n * ecosystem.  It is decoupled from the DebtKernel in order to make upgrades to the\n * protocol contracts smoother -- if the DebtKernel or RepyamentRouter is upgraded to a new contract,\n * creditors will not have to grant new transfer approvals to a new contract's address.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract TokenTransferProxy is Pausable, PermissionEvents {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    PermissionsLib.Permissions internal tokenTransferPermissions;\n\n    string public constant CONTEXT = \"token-transfer-proxy\";\n\n    /**\n     * Add address to list of agents authorized to initiate `transferFrom` calls\n     */\n    function addAuthorizedTransferAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenTransferPermissions.authorize(_agent, CONTEXT);\n    }\n\n    /**\n     * Remove address from list of agents authorized to initiate `transferFrom` calls\n     */\n    function revokeTransferAgentAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenTransferPermissions.revokeAuthorization(_agent, CONTEXT);\n    }\n\n    /**\n     * Return list of agents authorized to initiate `transferFrom` calls\n     */\n    function getAuthorizedTransferAgents()\n        public\n        view\n        returns (address[] authorizedAgents)\n    {\n        return tokenTransferPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Transfer specified token amount from _from address to _to address on give token\n     */\n    function transferFrom(\n        address _token,\n        address _from,\n        address _to,\n        uint _amount\n    )\n        public\n        returns (bool _success)\n    {\n        require(tokenTransferPermissions.isAuthorized(msg.sender));\n\n        return ERC20(_token).transferFrom(_from, _to, _amount);\n    }\n}\n",
  "sourcePath": "/Users/trqdinh/Development/loot/charta/contracts/TokenTransferProxy.sol",
  "ast": {
    "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/TokenTransferProxy.sol",
    "exportedSymbols": {
      "TokenTransferProxy": [
        5214
      ]
    },
    "id": 5215,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5123,
        "literals": [
          "solidity",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:13"
      },
      {
        "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/DebtRegistry.sol",
        "file": "./DebtRegistry.sol",
        "id": 5124,
        "nodeType": "ImportDirective",
        "scope": 5215,
        "sourceUnit": 3167,
        "src": "609:28:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/libraries/PermissionsLib.sol",
        "file": "./libraries/PermissionsLib.sol",
        "id": 5127,
        "nodeType": "ImportDirective",
        "scope": 5215,
        "sourceUnit": 6280,
        "src": "638:82:13",
        "symbolAliases": [
          {
            "foreign": 5125,
            "local": null
          },
          {
            "foreign": 5126,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 5128,
        "nodeType": "ImportDirective",
        "scope": 5215,
        "sourceUnit": 14006,
        "src": "721:60:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 5129,
        "nodeType": "ImportDirective",
        "scope": 5215,
        "sourceUnit": 14299,
        "src": "782:59:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 5130,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14005,
              "src": "1361:8:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$14005",
                "typeString": "contract Pausable"
              }
            },
            "id": 5131,
            "nodeType": "InheritanceSpecifier",
            "src": "1361:8:13"
          },
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 5132,
              "name": "PermissionEvents",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6075,
              "src": "1371:16:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionEvents_$6075",
                "typeString": "contract PermissionEvents"
              }
            },
            "id": 5133,
            "nodeType": "InheritanceSpecifier",
            "src": "1371:16:13"
          }
        ],
        "contractDependencies": [
          6075,
          14005,
          14159
        ],
        "contractKind": "contract",
        "documentation": "The TokenTransferProxy is a proxy contract for transfering principal\nand fee payments and repayments between agents and keepers in the Dharma\necosystem.  It is decoupled from the DebtKernel in order to make upgrades to the\nprotocol contracts smoother -- if the DebtKernel or RepyamentRouter is upgraded to a new contract,\ncreditors will not have to grant new transfer approvals to a new contract's address.\n * Author: Nadav Hollander -- Github: nadavhollander",
        "fullyImplemented": true,
        "id": 5214,
        "linearizedBaseContracts": [
          5214,
          6075,
          14005,
          14159
        ],
        "name": "TokenTransferProxy",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 5136,
            "libraryName": {
              "contractScope": null,
              "id": 5134,
              "name": "PermissionsLib",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6279,
              "src": "1400:14:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionsLib_$6279",
                "typeString": "library PermissionsLib"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1394:52:13",
            "typeName": {
              "contractScope": null,
              "id": 5135,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6099,
              "src": "1419:26:13",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions storage pointer"
              }
            }
          },
          {
            "constant": false,
            "id": 5138,
            "name": "tokenTransferPermissions",
            "nodeType": "VariableDeclaration",
            "scope": 5214,
            "src": "1452:60:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$6099_storage",
              "typeString": "struct PermissionsLib.Permissions storage ref"
            },
            "typeName": {
              "contractScope": null,
              "id": 5137,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6099,
              "src": "1452:26:13",
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
            "id": 5141,
            "name": "CONTEXT",
            "nodeType": "VariableDeclaration",
            "scope": 5214,
            "src": "1519:55:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string memory"
            },
            "typeName": {
              "id": 5139,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1519:6:13",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string storage pointer"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "746f6b656e2d7472616e736665722d70726f7879",
              "id": 5140,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1552:22:13",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_e6e2cc95096937af380277769997559dc28dff28cfed6cb3fb96a155b60a5700",
                "typeString": "literal_string \"token-transfer-proxy\""
              },
              "value": "token-transfer-proxy"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 5155,
              "nodeType": "Block",
              "src": "1767:68:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5151,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5143,
                        "src": "1812:6:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5152,
                        "name": "CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5141,
                        "src": "1820:7:13",
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
                        "id": 5148,
                        "name": "tokenTransferPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5138,
                        "src": "1777:24:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5150,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6149,
                      "src": "1777:34:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1777:51:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5154,
                  "nodeType": "ExpressionStatement",
                  "src": "1777:51:13"
                }
              ]
            },
            "id": 5156,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 5146,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5145,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 14133,
                  "src": "1753:9:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1753:9:13"
              }
            ],
            "name": "addAuthorizedTransferAgent",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5144,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5143,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5156,
                  "src": "1714:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5142,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1714:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1713:16:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 5147,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1767:0:13"
            },
            "scope": 5214,
            "src": "1678:157:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5170,
              "nodeType": "Block",
              "src": "2038:78:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5166,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5158,
                        "src": "2093:6:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5167,
                        "name": "CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5141,
                        "src": "2101:7:13",
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
                        "id": 5163,
                        "name": "tokenTransferPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5138,
                        "src": "2048:24:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5165,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6235,
                      "src": "2048:44:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2048:61:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5169,
                  "nodeType": "ExpressionStatement",
                  "src": "2048:61:13"
                }
              ]
            },
            "id": 5171,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 5161,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5160,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 14133,
                  "src": "2024:9:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2024:9:13"
              }
            ],
            "name": "revokeTransferAgentAuthorization",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5158,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5171,
                  "src": "1985:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5157,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1985:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1984:16:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 5162,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2038:0:13"
            },
            "scope": 5214,
            "src": "1943:173:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5181,
              "nodeType": "Block",
              "src": "2327:70:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5177,
                        "name": "tokenTransferPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5138,
                        "src": "2344:24:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5178,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6278,
                      "src": "2344:44:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 5179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2344:46:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 5176,
                  "id": 5180,
                  "nodeType": "Return",
                  "src": "2337:53:13"
                }
              ]
            },
            "id": 5182,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedTransferAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5172,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2247:2:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 5176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5175,
                  "name": "authorizedAgents",
                  "nodeType": "VariableDeclaration",
                  "scope": 5182,
                  "src": "2295:26:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5173,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2295:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5174,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2295:9:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2294:28:13"
            },
            "scope": 5214,
            "src": "2211:186:13",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5212,
              "nodeType": "Block",
              "src": "2675:140:13",
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
                              "id": 5198,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15841,
                              "src": "2731:3:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 5199,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2731:10:13",
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
                            "id": 5196,
                            "name": "tokenTransferPermissions",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5138,
                            "src": "2693:24:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                              "typeString": "struct PermissionsLib.Permissions storage ref"
                            }
                          },
                          "id": 5197,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "isAuthorized",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6250,
                          "src": "2693:37:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 5200,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2693:49:13",
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
                      "id": 5195,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15844,
                      "src": "2685:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5201,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2685:58:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5202,
                  "nodeType": "ExpressionStatement",
                  "src": "2685:58:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5207,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5186,
                        "src": "2788:5:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5208,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5188,
                        "src": "2795:3:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5209,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5190,
                        "src": "2800:7:13",
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
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5204,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5184,
                            "src": "2767:6:13",
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
                          "id": 5203,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14298,
                          "src": "2761:5:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$14298_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 5205,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2761:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$14298",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 5206,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14280,
                      "src": "2761:26:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 5210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2761:47:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5194,
                  "id": 5211,
                  "nodeType": "Return",
                  "src": "2754:54:13"
                }
              ]
            },
            "id": 5213,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5184,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 5213,
                  "src": "2537:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5183,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2537:7:13",
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
                  "id": 5186,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5213,
                  "src": "2561:13:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5185,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2561:7:13",
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
                  "id": 5188,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5213,
                  "src": "2584:11:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5187,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2584:7:13",
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
                  "id": 5190,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5213,
                  "src": "2605:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5189,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2605:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2527:96:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 5194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5193,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5213,
                  "src": "2656:13:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5192,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2656:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2655:15:13"
            },
            "scope": 5214,
            "src": "2506:309:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 5215,
        "src": "1330:1487:13"
      }
    ],
    "src": "584:2234:13"
  },
  "legacyAST": {
    "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/TokenTransferProxy.sol",
    "exportedSymbols": {
      "TokenTransferProxy": [
        5214
      ]
    },
    "id": 5215,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5123,
        "literals": [
          "solidity",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:13"
      },
      {
        "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/DebtRegistry.sol",
        "file": "./DebtRegistry.sol",
        "id": 5124,
        "nodeType": "ImportDirective",
        "scope": 5215,
        "sourceUnit": 3167,
        "src": "609:28:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/trqdinh/Development/loot/charta/contracts/libraries/PermissionsLib.sol",
        "file": "./libraries/PermissionsLib.sol",
        "id": 5127,
        "nodeType": "ImportDirective",
        "scope": 5215,
        "sourceUnit": 6280,
        "src": "638:82:13",
        "symbolAliases": [
          {
            "foreign": 5125,
            "local": null
          },
          {
            "foreign": 5126,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 5128,
        "nodeType": "ImportDirective",
        "scope": 5215,
        "sourceUnit": 14006,
        "src": "721:60:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 5129,
        "nodeType": "ImportDirective",
        "scope": 5215,
        "sourceUnit": 14299,
        "src": "782:59:13",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 5130,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 14005,
              "src": "1361:8:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$14005",
                "typeString": "contract Pausable"
              }
            },
            "id": 5131,
            "nodeType": "InheritanceSpecifier",
            "src": "1361:8:13"
          },
          {
            "arguments": [],
            "baseName": {
              "contractScope": null,
              "id": 5132,
              "name": "PermissionEvents",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6075,
              "src": "1371:16:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionEvents_$6075",
                "typeString": "contract PermissionEvents"
              }
            },
            "id": 5133,
            "nodeType": "InheritanceSpecifier",
            "src": "1371:16:13"
          }
        ],
        "contractDependencies": [
          6075,
          14005,
          14159
        ],
        "contractKind": "contract",
        "documentation": "The TokenTransferProxy is a proxy contract for transfering principal\nand fee payments and repayments between agents and keepers in the Dharma\necosystem.  It is decoupled from the DebtKernel in order to make upgrades to the\nprotocol contracts smoother -- if the DebtKernel or RepyamentRouter is upgraded to a new contract,\ncreditors will not have to grant new transfer approvals to a new contract's address.\n * Author: Nadav Hollander -- Github: nadavhollander",
        "fullyImplemented": true,
        "id": 5214,
        "linearizedBaseContracts": [
          5214,
          6075,
          14005,
          14159
        ],
        "name": "TokenTransferProxy",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 5136,
            "libraryName": {
              "contractScope": null,
              "id": 5134,
              "name": "PermissionsLib",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6279,
              "src": "1400:14:13",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionsLib_$6279",
                "typeString": "library PermissionsLib"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1394:52:13",
            "typeName": {
              "contractScope": null,
              "id": 5135,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6099,
              "src": "1419:26:13",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$6099_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions storage pointer"
              }
            }
          },
          {
            "constant": false,
            "id": 5138,
            "name": "tokenTransferPermissions",
            "nodeType": "VariableDeclaration",
            "scope": 5214,
            "src": "1452:60:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$6099_storage",
              "typeString": "struct PermissionsLib.Permissions storage ref"
            },
            "typeName": {
              "contractScope": null,
              "id": 5137,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6099,
              "src": "1452:26:13",
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
            "id": 5141,
            "name": "CONTEXT",
            "nodeType": "VariableDeclaration",
            "scope": 5214,
            "src": "1519:55:13",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string memory"
            },
            "typeName": {
              "id": 5139,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1519:6:13",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string storage pointer"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "746f6b656e2d7472616e736665722d70726f7879",
              "id": 5140,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1552:22:13",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_e6e2cc95096937af380277769997559dc28dff28cfed6cb3fb96a155b60a5700",
                "typeString": "literal_string \"token-transfer-proxy\""
              },
              "value": "token-transfer-proxy"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 5155,
              "nodeType": "Block",
              "src": "1767:68:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5151,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5143,
                        "src": "1812:6:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5152,
                        "name": "CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5141,
                        "src": "1820:7:13",
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
                        "id": 5148,
                        "name": "tokenTransferPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5138,
                        "src": "1777:24:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5150,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6149,
                      "src": "1777:34:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1777:51:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5154,
                  "nodeType": "ExpressionStatement",
                  "src": "1777:51:13"
                }
              ]
            },
            "id": 5156,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 5146,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5145,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 14133,
                  "src": "1753:9:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1753:9:13"
              }
            ],
            "name": "addAuthorizedTransferAgent",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5144,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5143,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5156,
                  "src": "1714:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5142,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1714:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1713:16:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 5147,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1767:0:13"
            },
            "scope": 5214,
            "src": "1678:157:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5170,
              "nodeType": "Block",
              "src": "2038:78:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5166,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5158,
                        "src": "2093:6:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5167,
                        "name": "CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5141,
                        "src": "2101:7:13",
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
                        "id": 5163,
                        "name": "tokenTransferPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5138,
                        "src": "2048:24:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5165,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6235,
                      "src": "2048:44:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2048:61:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5169,
                  "nodeType": "ExpressionStatement",
                  "src": "2048:61:13"
                }
              ]
            },
            "id": 5171,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [],
                "id": 5161,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5160,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 14133,
                  "src": "2024:9:13",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2024:9:13"
              }
            ],
            "name": "revokeTransferAgentAuthorization",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5158,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5171,
                  "src": "1985:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5157,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1985:7:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1984:16:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 5162,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2038:0:13"
            },
            "scope": 5214,
            "src": "1943:173:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5181,
              "nodeType": "Block",
              "src": "2327:70:13",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5177,
                        "name": "tokenTransferPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5138,
                        "src": "2344:24:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5178,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6278,
                      "src": "2344:44:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 5179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2344:46:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 5176,
                  "id": 5180,
                  "nodeType": "Return",
                  "src": "2337:53:13"
                }
              ]
            },
            "id": 5182,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedTransferAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5172,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2247:2:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 5176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5175,
                  "name": "authorizedAgents",
                  "nodeType": "VariableDeclaration",
                  "scope": 5182,
                  "src": "2295:26:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[] memory"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5173,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2295:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5174,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2295:9:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[] storage pointer"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2294:28:13"
            },
            "scope": 5214,
            "src": "2211:186:13",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5212,
              "nodeType": "Block",
              "src": "2675:140:13",
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
                              "id": 5198,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15841,
                              "src": "2731:3:13",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 5199,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2731:10:13",
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
                            "id": 5196,
                            "name": "tokenTransferPermissions",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5138,
                            "src": "2693:24:13",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$6099_storage",
                              "typeString": "struct PermissionsLib.Permissions storage ref"
                            }
                          },
                          "id": 5197,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "isAuthorized",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6250,
                          "src": "2693:37:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$6099_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$6099_storage_ptr_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 5200,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2693:49:13",
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
                      "id": 5195,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15844,
                      "src": "2685:7:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5201,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2685:58:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5202,
                  "nodeType": "ExpressionStatement",
                  "src": "2685:58:13"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5207,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5186,
                        "src": "2788:5:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5208,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5188,
                        "src": "2795:3:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5209,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5190,
                        "src": "2800:7:13",
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
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 5204,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5184,
                            "src": "2767:6:13",
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
                          "id": 5203,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14298,
                          "src": "2761:5:13",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$14298_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 5205,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2761:13:13",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$14298",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 5206,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14280,
                      "src": "2761:26:13",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 5210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2761:47:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5194,
                  "id": 5211,
                  "nodeType": "Return",
                  "src": "2754:54:13"
                }
              ]
            },
            "id": 5213,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5184,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 5213,
                  "src": "2537:14:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5183,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2537:7:13",
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
                  "id": 5186,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 5213,
                  "src": "2561:13:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5185,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2561:7:13",
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
                  "id": 5188,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 5213,
                  "src": "2584:11:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5187,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2584:7:13",
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
                  "id": 5190,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 5213,
                  "src": "2605:12:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5189,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2605:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2527:96:13"
            },
            "payable": false,
            "returnParameters": {
              "id": 5194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5193,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 5213,
                  "src": "2656:13:13",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5192,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2656:4:13",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2655:15:13"
            },
            "scope": 5214,
            "src": "2506:309:13",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 5215,
        "src": "1330:1487:13"
      }
    ],
    "src": "584:2234:13"
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
        }
      },
      "links": {},
      "address": "0x1d4909aa1510a2d999347006ee5ed9d3d77ae47e",
      "transactionHash": "0x31bf17912835f50923e1fec9baa5b34413bca8388eea6c5d88f0cf193bf72a45"
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
        }
      },
      "links": {},
      "address": "0xE827BD9B1ef5DCEf1f513456d6e63A6C8e27c687",
      "transactionHash": "0x8af18fcc7dc7ee0eeb0e2b5470ee44ca270967ccf5a1a0b873bec5281d7259c8"
    }
  },
  "schemaVersion": "3.0.1",
  "updatedAt": "2019-02-04T01:11:00.815Z",
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
      "addAuthorizedTransferAgent(address)": {
        "notice": "Add address to list of agents authorized to initiate `transferFrom` calls"
      },
      "getAuthorizedTransferAgents()": {
        "notice": "Return list of agents authorized to initiate `transferFrom` calls"
      },
      "revokeTransferAgentAuthorization(address)": {
        "notice": "Remove address from list of agents authorized to initiate `transferFrom` calls"
      },
      "transferFrom(address,address,address,uint256)": {
        "notice": "Transfer specified token amount from _from address to _to address on give token"
      }
    }
  }
}
