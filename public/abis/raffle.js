export default abi = [
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "_airnodeRrp",
            "type": "address"
        }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "components": [
            {
                "internalType": "uint256",
                "name": "raffleId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "winner",
                "type": "address"
            },
            {
                "internalType": "address[]",
                "name": "entries",
                "type": "address[]"
            },
            {
                "internalType": "bool",
                "name": "open",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "airnodeSuccess",
                "type": "bool"
            }
            ],
            "indexed": false,
            "internalType": "struct Raffle.IndividualRaffle",
            "name": "_raffleMetadata",
            "type": "tuple"
        }
        ],
        "name": "RaffleCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": false,
            "internalType": "address",
            "name": "airnodeAddress",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "bytes32",
            "name": "targetEndpoint",
            "type": "bytes32"
        },
        {
            "indexed": false,
            "internalType": "address",
            "name": "sponsorAddress",
            "type": "address"
        }
        ],
        "name": "SetRequestParameters",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "internalType": "uint256",
            "name": "_raffleId",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "address",
            "name": "raffleWinner",
            "type": "address"
        }
        ],
        "name": "WinnerPicked",
        "type": "event"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "name": "accountEntries",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "airnode",
        "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "airnodeRrp",
        "outputs": [
        {
            "internalType": "contract IAirnodeRrpV0",
            "name": "",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "_raffleId",
            "type": "uint256"
        }
        ],
        "name": "close",
        "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "_endTime",
            "type": "uint256"
        }
        ],
        "name": "create",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endpointIdUint256",
        "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "_raffleId",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "participantAddress",
            "type": "address"
        }
        ],
        "name": "enter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "_address",
            "type": "address"
        }
        ],
        "name": "getEnteredRaffles",
        "outputs": [
        {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "_raffleId",
            "type": "uint256"
        }
        ],
        "name": "getEntries",
        "outputs": [
        {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "_raffleId",
            "type": "uint256"
        }
        ],
        "name": "getWinners",
        "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
        ],
        "name": "pendingRequestIds",
        "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "bytes32",
            "name": "requestId",
            "type": "bytes32"
        },
        {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
        }
        ],
        "name": "pickWinner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
        ],
        "name": "raffles",
        "outputs": [
        {
            "internalType": "uint256",
            "name": "raffleId",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "winner",
            "type": "address"
        },
        {
            "internalType": "bool",
            "name": "open",
            "type": "bool"
        },
        {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
        },
        {
            "internalType": "bool",
            "name": "airnodeSuccess",
            "type": "bool"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "_airnode",
            "type": "address"
        },
        {
            "internalType": "bytes32",
            "name": "_endpointIdUint256",
            "type": "bytes32"
        },
        {
            "internalType": "address",
            "name": "_sponsorWallet",
            "type": "address"
        }
        ],
        "name": "setRequestParameters",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "sponsorWallet",
        "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
        {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]