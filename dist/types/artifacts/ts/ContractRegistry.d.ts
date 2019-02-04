export declare const ContractRegistry: {
    "contractName": string;
    "abi": ({
        "constant": boolean;
        "inputs": any[];
        "name": string;
        "outputs": {
            "name": string;
            "type": string;
        }[];
        "payable": boolean;
        "stateMutability": string;
        "type": string;
        "signature": string;
        "anonymous"?: undefined;
    } | {
        "constant": boolean;
        "inputs": {
            "name": string;
            "type": string;
        }[];
        "name": string;
        "outputs": any[];
        "payable": boolean;
        "stateMutability": string;
        "type": string;
        "signature": string;
        "anonymous"?: undefined;
    } | {
        "inputs": {
            "name": string;
            "type": string;
        }[];
        "payable": boolean;
        "stateMutability": string;
        "type": string;
        "signature": string;
        "constant"?: undefined;
        "name"?: undefined;
        "outputs"?: undefined;
        "anonymous"?: undefined;
    } | {
        "anonymous": boolean;
        "inputs": {
            "indexed": boolean;
            "name": string;
            "type": string;
        }[];
        "name": string;
        "type": string;
        "signature": string;
        "constant"?: undefined;
        "outputs"?: undefined;
        "payable"?: undefined;
        "stateMutability"?: undefined;
    })[];
    "bytecode": string;
    "deployedBytecode": string;
    "sourceMap": string;
    "deployedSourceMap": string;
    "source": string;
    "sourcePath": string;
    "ast": {
        "absolutePath": string;
        "exportedSymbols": {
            "ContractRegistry": number[];
        };
        "id": number;
        "nodeType": string;
        "nodes": ({
            "id": number;
            "literals": string[];
            "nodeType": string;
            "src": string;
            "absolutePath"?: undefined;
            "file"?: undefined;
            "scope"?: undefined;
            "sourceUnit"?: undefined;
            "symbolAliases"?: undefined;
            "unitAlias"?: undefined;
            "baseContracts"?: undefined;
            "contractDependencies"?: undefined;
            "contractKind"?: undefined;
            "documentation"?: undefined;
            "fullyImplemented"?: undefined;
            "linearizedBaseContracts"?: undefined;
            "name"?: undefined;
            "nodes"?: undefined;
        } | {
            "absolutePath": string;
            "file": string;
            "id": number;
            "nodeType": string;
            "scope": number;
            "sourceUnit": number;
            "src": string;
            "symbolAliases": any[];
            "unitAlias": string;
            "literals"?: undefined;
            "baseContracts"?: undefined;
            "contractDependencies"?: undefined;
            "contractKind"?: undefined;
            "documentation"?: undefined;
            "fullyImplemented"?: undefined;
            "linearizedBaseContracts"?: undefined;
            "name"?: undefined;
            "nodes"?: undefined;
        } | {
            "baseContracts": {
                "arguments": any[];
                "baseName": {
                    "contractScope": any;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "referencedDeclaration": number;
                    "src": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                };
                "id": number;
                "nodeType": string;
                "src": string;
            }[];
            "contractDependencies": number[];
            "contractKind": string;
            "documentation": any;
            "fullyImplemented": boolean;
            "id": number;
            "linearizedBaseContracts": number[];
            "name": string;
            "nodeType": string;
            "nodes": ({
                "anonymous": boolean;
                "id": number;
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": ({
                        "constant": boolean;
                        "id": number;
                        "indexed": boolean;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    } | {
                        "constant": boolean;
                        "id": number;
                        "indexed": boolean;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "contractScope"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "value": any;
                        "visibility": string;
                    })[];
                    "src": string;
                };
                "src": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "constant"?: undefined;
                "scope"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
                "visibility"?: undefined;
                "body"?: undefined;
                "implemented"?: undefined;
                "isConstructor"?: undefined;
                "isDeclaredConst"?: undefined;
                "modifiers"?: undefined;
                "payable"?: undefined;
                "returnParameters"?: undefined;
                "stateMutability"?: undefined;
                "superFunction"?: undefined;
            } | {
                "canonicalName": string;
                "id": number;
                "members": {
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "src": string;
                }[];
                "name": string;
                "nodeType": string;
                "src": string;
                "anonymous"?: undefined;
                "parameters"?: undefined;
                "constant"?: undefined;
                "scope"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
                "visibility"?: undefined;
                "body"?: undefined;
                "implemented"?: undefined;
                "isConstructor"?: undefined;
                "isDeclaredConst"?: undefined;
                "modifiers"?: undefined;
                "payable"?: undefined;
                "returnParameters"?: undefined;
                "stateMutability"?: undefined;
                "superFunction"?: undefined;
            } | {
                "constant": boolean;
                "id": number;
                "name": string;
                "nodeType": string;
                "scope": number;
                "src": string;
                "stateVariable": boolean;
                "storageLocation": string;
                "typeDescriptions": {
                    "typeIdentifier": string;
                    "typeString": string;
                };
                "typeName": {
                    "contractScope": any;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "referencedDeclaration": number;
                    "src": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                };
                "value": any;
                "visibility": string;
                "anonymous"?: undefined;
                "parameters"?: undefined;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "body"?: undefined;
                "implemented"?: undefined;
                "isConstructor"?: undefined;
                "isDeclaredConst"?: undefined;
                "modifiers"?: undefined;
                "payable"?: undefined;
                "returnParameters"?: undefined;
                "stateMutability"?: undefined;
                "superFunction"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": {
                        "expression": {
                            "argumentTypes": any;
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "leftHandSide": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightHandSide": {
                                "argumentTypes": any;
                                "arguments": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                }[];
                                "expression": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                    }[];
                };
                "id": number;
                "implemented": boolean;
                "isConstructor": boolean;
                "isDeclaredConst": boolean;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "payable": boolean;
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": any[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "anonymous"?: undefined;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": any[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": any;
                        "nodeType": string;
                        "src": string;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "expression"?: undefined;
                    } | {
                        "condition": {
                            "argumentTypes": any;
                            "commonType": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "leftExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightExpression": {
                                "argumentTypes": any;
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": any;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "falseBody": {
                            "condition": {
                                "argumentTypes": any;
                                "commonType": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "leftExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "nodeType": string;
                                "operator": string;
                                "rightExpression": {
                                    "argumentTypes": any;
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": any;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "falseBody": {
                                "condition": {
                                    "argumentTypes": any;
                                    "commonType": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftExpression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightExpression": {
                                        "argumentTypes": any;
                                        "expression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "memberName": string;
                                        "nodeType": string;
                                        "referencedDeclaration": any;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "falseBody": {
                                    "condition": {
                                        "argumentTypes": any;
                                        "commonType": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "leftExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "nodeType": string;
                                        "operator": string;
                                        "rightExpression": {
                                            "argumentTypes": any;
                                            "expression": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "memberName": string;
                                            "nodeType": string;
                                            "referencedDeclaration": any;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "falseBody": {
                                        "condition": {
                                            "argumentTypes": any;
                                            "commonType": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "leftExpression": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "nodeType": string;
                                            "operator": string;
                                            "rightExpression": {
                                                "argumentTypes": any;
                                                "expression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "memberName": string;
                                                "nodeType": string;
                                                "referencedDeclaration": any;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "falseBody": {
                                            "condition": {
                                                "argumentTypes": any;
                                                "commonType": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "leftExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "nodeType": string;
                                                "operator": string;
                                                "rightExpression": {
                                                    "argumentTypes": any;
                                                    "expression": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "memberName": string;
                                                    "nodeType": string;
                                                    "referencedDeclaration": any;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "falseBody": {
                                                "condition": {
                                                    "argumentTypes": any;
                                                    "commonType": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "leftExpression": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "nodeType": string;
                                                    "operator": string;
                                                    "rightExpression": {
                                                        "argumentTypes": any;
                                                        "expression": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "lValueRequested": boolean;
                                                        "memberName": string;
                                                        "nodeType": string;
                                                        "referencedDeclaration": any;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "falseBody": {
                                                    "id": number;
                                                    "nodeType": string;
                                                    "src": string;
                                                    "statements": {
                                                        "expression": {
                                                            "argumentTypes": any;
                                                            "arguments": any[];
                                                            "expression": {
                                                                "argumentTypes": any[];
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "kind": string;
                                                            "lValueRequested": boolean;
                                                            "names": any[];
                                                            "nodeType": string;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "id": number;
                                                        "nodeType": string;
                                                        "src": string;
                                                    }[];
                                                };
                                                "id": number;
                                                "nodeType": string;
                                                "src": string;
                                                "trueBody": {
                                                    "id": number;
                                                    "nodeType": string;
                                                    "src": string;
                                                    "statements": ({
                                                        "expression": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "lValueRequested": boolean;
                                                            "leftHandSide": {
                                                                "argumentTypes": any;
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "nodeType": string;
                                                            "operator": string;
                                                            "rightHandSide": {
                                                                "argumentTypes": any;
                                                                "arguments": {
                                                                    "argumentTypes": any;
                                                                    "id": number;
                                                                    "name": string;
                                                                    "nodeType": string;
                                                                    "overloadedDeclarations": any[];
                                                                    "referencedDeclaration": number;
                                                                    "src": string;
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    };
                                                                }[];
                                                                "expression": {
                                                                    "argumentTypes": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    }[];
                                                                    "id": number;
                                                                    "isConstant": boolean;
                                                                    "isLValue": boolean;
                                                                    "isPure": boolean;
                                                                    "lValueRequested": boolean;
                                                                    "nodeType": string;
                                                                    "src": string;
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    };
                                                                    "typeName": string;
                                                                    "name"?: undefined;
                                                                    "overloadedDeclarations"?: undefined;
                                                                    "referencedDeclaration"?: undefined;
                                                                };
                                                                "id": number;
                                                                "isConstant": boolean;
                                                                "isLValue": boolean;
                                                                "isPure": boolean;
                                                                "kind": string;
                                                                "lValueRequested": boolean;
                                                                "names": any[];
                                                                "nodeType": string;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                            "arguments"?: undefined;
                                                            "expression"?: undefined;
                                                            "kind"?: undefined;
                                                            "names"?: undefined;
                                                        };
                                                        "id": number;
                                                        "nodeType": string;
                                                        "src": string;
                                                    } | {
                                                        "expression": {
                                                            "argumentTypes": any;
                                                            "arguments": {
                                                                "argumentTypes": any;
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            }[];
                                                            "expression": {
                                                                "argumentTypes": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                }[];
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "kind": string;
                                                            "lValueRequested": boolean;
                                                            "names": any[];
                                                            "nodeType": string;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                            "leftHandSide"?: undefined;
                                                            "operator"?: undefined;
                                                            "rightHandSide"?: undefined;
                                                        };
                                                        "id": number;
                                                        "nodeType": string;
                                                        "src": string;
                                                    } | {
                                                        "expression": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "lValueRequested": boolean;
                                                            "leftHandSide": {
                                                                "argumentTypes": any;
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "nodeType": string;
                                                            "operator": string;
                                                            "rightHandSide": {
                                                                "argumentTypes": any;
                                                                "arguments": {
                                                                    "argumentTypes": any;
                                                                    "id": number;
                                                                    "name": string;
                                                                    "nodeType": string;
                                                                    "overloadedDeclarations": any[];
                                                                    "referencedDeclaration": number;
                                                                    "src": string;
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    };
                                                                }[];
                                                                "expression": {
                                                                    "argumentTypes": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    }[];
                                                                    "id": number;
                                                                    "name": string;
                                                                    "nodeType": string;
                                                                    "overloadedDeclarations": any[];
                                                                    "referencedDeclaration": number;
                                                                    "src": string;
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    };
                                                                    "isConstant"?: undefined;
                                                                    "isLValue"?: undefined;
                                                                    "isPure"?: undefined;
                                                                    "lValueRequested"?: undefined;
                                                                    "typeName"?: undefined;
                                                                };
                                                                "id": number;
                                                                "isConstant": boolean;
                                                                "isLValue": boolean;
                                                                "isPure": boolean;
                                                                "kind": string;
                                                                "lValueRequested": boolean;
                                                                "names": any[];
                                                                "nodeType": string;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                            "arguments"?: undefined;
                                                            "expression"?: undefined;
                                                            "kind"?: undefined;
                                                            "names"?: undefined;
                                                        };
                                                        "id": number;
                                                        "nodeType": string;
                                                        "src": string;
                                                    })[];
                                                };
                                            };
                                            "id": number;
                                            "nodeType": string;
                                            "src": string;
                                            "trueBody": {
                                                "id": number;
                                                "nodeType": string;
                                                "src": string;
                                                "statements": ({
                                                    "expression": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "lValueRequested": boolean;
                                                        "leftHandSide": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "nodeType": string;
                                                        "operator": string;
                                                        "rightHandSide": {
                                                            "argumentTypes": any;
                                                            "arguments": {
                                                                "argumentTypes": any;
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            }[];
                                                            "expression": {
                                                                "argumentTypes": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                }[];
                                                                "id": number;
                                                                "isConstant": boolean;
                                                                "isLValue": boolean;
                                                                "isPure": boolean;
                                                                "lValueRequested": boolean;
                                                                "nodeType": string;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                                "typeName": string;
                                                                "name"?: undefined;
                                                                "overloadedDeclarations"?: undefined;
                                                                "referencedDeclaration"?: undefined;
                                                            };
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "kind": string;
                                                            "lValueRequested": boolean;
                                                            "names": any[];
                                                            "nodeType": string;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                        "arguments"?: undefined;
                                                        "expression"?: undefined;
                                                        "kind"?: undefined;
                                                        "names"?: undefined;
                                                    };
                                                    "id": number;
                                                    "nodeType": string;
                                                    "src": string;
                                                } | {
                                                    "expression": {
                                                        "argumentTypes": any;
                                                        "arguments": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        }[];
                                                        "expression": {
                                                            "argumentTypes": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            }[];
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "kind": string;
                                                        "lValueRequested": boolean;
                                                        "names": any[];
                                                        "nodeType": string;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                        "leftHandSide"?: undefined;
                                                        "operator"?: undefined;
                                                        "rightHandSide"?: undefined;
                                                    };
                                                    "id": number;
                                                    "nodeType": string;
                                                    "src": string;
                                                } | {
                                                    "expression": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "lValueRequested": boolean;
                                                        "leftHandSide": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "nodeType": string;
                                                        "operator": string;
                                                        "rightHandSide": {
                                                            "argumentTypes": any;
                                                            "arguments": {
                                                                "argumentTypes": any;
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            }[];
                                                            "expression": {
                                                                "argumentTypes": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                }[];
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                                "isConstant"?: undefined;
                                                                "isLValue"?: undefined;
                                                                "isPure"?: undefined;
                                                                "lValueRequested"?: undefined;
                                                                "typeName"?: undefined;
                                                            };
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "kind": string;
                                                            "lValueRequested": boolean;
                                                            "names": any[];
                                                            "nodeType": string;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                        "arguments"?: undefined;
                                                        "expression"?: undefined;
                                                        "kind"?: undefined;
                                                        "names"?: undefined;
                                                    };
                                                    "id": number;
                                                    "nodeType": string;
                                                    "src": string;
                                                })[];
                                            };
                                        };
                                        "id": number;
                                        "nodeType": string;
                                        "src": string;
                                        "trueBody": {
                                            "id": number;
                                            "nodeType": string;
                                            "src": string;
                                            "statements": ({
                                                "expression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "leftHandSide": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "nodeType": string;
                                                    "operator": string;
                                                    "rightHandSide": {
                                                        "argumentTypes": any;
                                                        "arguments": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        }[];
                                                        "expression": {
                                                            "argumentTypes": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            }[];
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "lValueRequested": boolean;
                                                            "nodeType": string;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                            "typeName": string;
                                                            "name"?: undefined;
                                                            "overloadedDeclarations"?: undefined;
                                                            "referencedDeclaration"?: undefined;
                                                        };
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "kind": string;
                                                        "lValueRequested": boolean;
                                                        "names": any[];
                                                        "nodeType": string;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "arguments"?: undefined;
                                                    "expression"?: undefined;
                                                    "kind"?: undefined;
                                                    "names"?: undefined;
                                                };
                                                "id": number;
                                                "nodeType": string;
                                                "src": string;
                                            } | {
                                                "expression": {
                                                    "argumentTypes": any;
                                                    "arguments": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    }[];
                                                    "expression": {
                                                        "argumentTypes": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        }[];
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "kind": string;
                                                    "lValueRequested": boolean;
                                                    "names": any[];
                                                    "nodeType": string;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "leftHandSide"?: undefined;
                                                    "operator"?: undefined;
                                                    "rightHandSide"?: undefined;
                                                };
                                                "id": number;
                                                "nodeType": string;
                                                "src": string;
                                            } | {
                                                "expression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "leftHandSide": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "nodeType": string;
                                                    "operator": string;
                                                    "rightHandSide": {
                                                        "argumentTypes": any;
                                                        "arguments": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        }[];
                                                        "expression": {
                                                            "argumentTypes": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            }[];
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                            "isConstant"?: undefined;
                                                            "isLValue"?: undefined;
                                                            "isPure"?: undefined;
                                                            "lValueRequested"?: undefined;
                                                            "typeName"?: undefined;
                                                        };
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "kind": string;
                                                        "lValueRequested": boolean;
                                                        "names": any[];
                                                        "nodeType": string;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "arguments"?: undefined;
                                                    "expression"?: undefined;
                                                    "kind"?: undefined;
                                                    "names"?: undefined;
                                                };
                                                "id": number;
                                                "nodeType": string;
                                                "src": string;
                                            })[];
                                        };
                                    };
                                    "id": number;
                                    "nodeType": string;
                                    "src": string;
                                    "trueBody": {
                                        "id": number;
                                        "nodeType": string;
                                        "src": string;
                                        "statements": ({
                                            "expression": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "leftHandSide": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "nodeType": string;
                                                "operator": string;
                                                "rightHandSide": {
                                                    "argumentTypes": any;
                                                    "arguments": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    }[];
                                                    "expression": {
                                                        "argumentTypes": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        }[];
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "lValueRequested": boolean;
                                                        "nodeType": string;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                        "typeName": string;
                                                        "name"?: undefined;
                                                        "overloadedDeclarations"?: undefined;
                                                        "referencedDeclaration"?: undefined;
                                                    };
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "kind": string;
                                                    "lValueRequested": boolean;
                                                    "names": any[];
                                                    "nodeType": string;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "arguments"?: undefined;
                                                "expression"?: undefined;
                                                "kind"?: undefined;
                                                "names"?: undefined;
                                            };
                                            "id": number;
                                            "nodeType": string;
                                            "src": string;
                                        } | {
                                            "expression": {
                                                "argumentTypes": any;
                                                "arguments": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                }[];
                                                "expression": {
                                                    "argumentTypes": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    }[];
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "kind": string;
                                                "lValueRequested": boolean;
                                                "names": any[];
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "leftHandSide"?: undefined;
                                                "operator"?: undefined;
                                                "rightHandSide"?: undefined;
                                            };
                                            "id": number;
                                            "nodeType": string;
                                            "src": string;
                                        } | {
                                            "expression": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "leftHandSide": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "nodeType": string;
                                                "operator": string;
                                                "rightHandSide": {
                                                    "argumentTypes": any;
                                                    "arguments": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    }[];
                                                    "expression": {
                                                        "argumentTypes": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        }[];
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                        "isConstant"?: undefined;
                                                        "isLValue"?: undefined;
                                                        "isPure"?: undefined;
                                                        "lValueRequested"?: undefined;
                                                        "typeName"?: undefined;
                                                    };
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "kind": string;
                                                    "lValueRequested": boolean;
                                                    "names": any[];
                                                    "nodeType": string;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "arguments"?: undefined;
                                                "expression"?: undefined;
                                                "kind"?: undefined;
                                                "names"?: undefined;
                                            };
                                            "id": number;
                                            "nodeType": string;
                                            "src": string;
                                        })[];
                                    };
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "trueBody": {
                                    "id": number;
                                    "nodeType": string;
                                    "src": string;
                                    "statements": ({
                                        "expression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "leftHandSide": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "nodeType": string;
                                            "operator": string;
                                            "rightHandSide": {
                                                "argumentTypes": any;
                                                "arguments": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                }[];
                                                "expression": {
                                                    "argumentTypes": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    }[];
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "nodeType": string;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "typeName": string;
                                                    "name"?: undefined;
                                                    "overloadedDeclarations"?: undefined;
                                                    "referencedDeclaration"?: undefined;
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "kind": string;
                                                "lValueRequested": boolean;
                                                "names": any[];
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                            "arguments"?: undefined;
                                            "expression"?: undefined;
                                            "kind"?: undefined;
                                            "names"?: undefined;
                                        };
                                        "id": number;
                                        "nodeType": string;
                                        "src": string;
                                    } | {
                                        "expression": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                            "leftHandSide"?: undefined;
                                            "operator"?: undefined;
                                            "rightHandSide"?: undefined;
                                        };
                                        "id": number;
                                        "nodeType": string;
                                        "src": string;
                                    } | {
                                        "expression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "leftHandSide": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "nodeType": string;
                                            "operator": string;
                                            "rightHandSide": {
                                                "argumentTypes": any;
                                                "arguments": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                }[];
                                                "expression": {
                                                    "argumentTypes": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    }[];
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "isConstant"?: undefined;
                                                    "isLValue"?: undefined;
                                                    "isPure"?: undefined;
                                                    "lValueRequested"?: undefined;
                                                    "typeName"?: undefined;
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "kind": string;
                                                "lValueRequested": boolean;
                                                "names": any[];
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                            "arguments"?: undefined;
                                            "expression"?: undefined;
                                            "kind"?: undefined;
                                            "names"?: undefined;
                                        };
                                        "id": number;
                                        "nodeType": string;
                                        "src": string;
                                    })[];
                                };
                            };
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "trueBody": {
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "statements": ({
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "leftHandSide": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "nodeType": string;
                                        "operator": string;
                                        "rightHandSide": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "typeName": string;
                                                "name"?: undefined;
                                                "overloadedDeclarations"?: undefined;
                                                "referencedDeclaration"?: undefined;
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "kind"?: undefined;
                                        "names"?: undefined;
                                    };
                                    "id": number;
                                    "nodeType": string;
                                    "src": string;
                                } | {
                                    "expression": {
                                        "argumentTypes": any;
                                        "arguments": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "leftHandSide"?: undefined;
                                        "operator"?: undefined;
                                        "rightHandSide"?: undefined;
                                    };
                                    "id": number;
                                    "nodeType": string;
                                    "src": string;
                                } | {
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "leftHandSide": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "nodeType": string;
                                        "operator": string;
                                        "rightHandSide": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "isConstant"?: undefined;
                                                "isLValue"?: undefined;
                                                "isPure"?: undefined;
                                                "lValueRequested"?: undefined;
                                                "typeName"?: undefined;
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "kind"?: undefined;
                                        "names"?: undefined;
                                    };
                                    "id": number;
                                    "nodeType": string;
                                    "src": string;
                                })[];
                            };
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "trueBody": {
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "statements": ({
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftHandSide": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
                                        "argumentTypes": any;
                                        "arguments": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                            "typeName": string;
                                            "name"?: undefined;
                                            "overloadedDeclarations"?: undefined;
                                            "referencedDeclaration"?: undefined;
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "kind"?: undefined;
                                    "names"?: undefined;
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            } | {
                                "expression": {
                                    "argumentTypes": any;
                                    "arguments": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "leftHandSide"?: undefined;
                                    "operator"?: undefined;
                                    "rightHandSide"?: undefined;
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            } | {
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftHandSide": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
                                        "argumentTypes": any;
                                        "arguments": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                            "isConstant"?: undefined;
                                            "isLValue"?: undefined;
                                            "isPure"?: undefined;
                                            "lValueRequested"?: undefined;
                                            "typeName"?: undefined;
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "kind"?: undefined;
                                    "names"?: undefined;
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            })[];
                        };
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "expression"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                    })[];
                };
                "id": number;
                "implemented": boolean;
                "isConstructor": boolean;
                "isDeclaredConst": boolean;
                "modifiers": {
                    "arguments": any[];
                    "id": number;
                    "modifierName": {
                        "argumentTypes": any;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "overloadedDeclarations": any[];
                        "referencedDeclaration": number;
                        "src": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                    };
                    "nodeType": string;
                    "src": string;
                }[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": ({
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    } | {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "contractScope"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "value": any;
                        "visibility": string;
                    })[];
                    "src": string;
                };
                "payable": boolean;
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": any[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "anonymous"?: undefined;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "commonType": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "leftExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "nodeType": string;
                                "operator": string;
                                "rightExpression": {
                                    "argumentTypes": any;
                                    "arguments": {
                                        "argumentTypes": any;
                                        "hexValue": string;
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "subdenomination": any;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "value": string;
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "typeName": string;
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "commonType": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "leftExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "nodeType": string;
                                "operator": string;
                                "rightExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                    })[];
                };
                "id": number;
                "implemented": boolean;
                "isConstructor": boolean;
                "isDeclaredConst": boolean;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "payable": boolean;
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": any[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "anonymous"?: undefined;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
            })[];
            "scope": number;
            "src": string;
            "literals"?: undefined;
            "absolutePath"?: undefined;
            "file"?: undefined;
            "sourceUnit"?: undefined;
            "symbolAliases"?: undefined;
            "unitAlias"?: undefined;
        })[];
        "src": string;
    };
    "legacyAST": {
        "absolutePath": string;
        "exportedSymbols": {
            "ContractRegistry": number[];
        };
        "id": number;
        "nodeType": string;
        "nodes": ({
            "id": number;
            "literals": string[];
            "nodeType": string;
            "src": string;
            "absolutePath"?: undefined;
            "file"?: undefined;
            "scope"?: undefined;
            "sourceUnit"?: undefined;
            "symbolAliases"?: undefined;
            "unitAlias"?: undefined;
            "baseContracts"?: undefined;
            "contractDependencies"?: undefined;
            "contractKind"?: undefined;
            "documentation"?: undefined;
            "fullyImplemented"?: undefined;
            "linearizedBaseContracts"?: undefined;
            "name"?: undefined;
            "nodes"?: undefined;
        } | {
            "absolutePath": string;
            "file": string;
            "id": number;
            "nodeType": string;
            "scope": number;
            "sourceUnit": number;
            "src": string;
            "symbolAliases": any[];
            "unitAlias": string;
            "literals"?: undefined;
            "baseContracts"?: undefined;
            "contractDependencies"?: undefined;
            "contractKind"?: undefined;
            "documentation"?: undefined;
            "fullyImplemented"?: undefined;
            "linearizedBaseContracts"?: undefined;
            "name"?: undefined;
            "nodes"?: undefined;
        } | {
            "baseContracts": {
                "arguments": any[];
                "baseName": {
                    "contractScope": any;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "referencedDeclaration": number;
                    "src": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                };
                "id": number;
                "nodeType": string;
                "src": string;
            }[];
            "contractDependencies": number[];
            "contractKind": string;
            "documentation": any;
            "fullyImplemented": boolean;
            "id": number;
            "linearizedBaseContracts": number[];
            "name": string;
            "nodeType": string;
            "nodes": ({
                "anonymous": boolean;
                "id": number;
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": ({
                        "constant": boolean;
                        "id": number;
                        "indexed": boolean;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    } | {
                        "constant": boolean;
                        "id": number;
                        "indexed": boolean;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "contractScope"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "value": any;
                        "visibility": string;
                    })[];
                    "src": string;
                };
                "src": string;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "constant"?: undefined;
                "scope"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
                "visibility"?: undefined;
                "body"?: undefined;
                "implemented"?: undefined;
                "isConstructor"?: undefined;
                "isDeclaredConst"?: undefined;
                "modifiers"?: undefined;
                "payable"?: undefined;
                "returnParameters"?: undefined;
                "stateMutability"?: undefined;
                "superFunction"?: undefined;
            } | {
                "canonicalName": string;
                "id": number;
                "members": {
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "src": string;
                }[];
                "name": string;
                "nodeType": string;
                "src": string;
                "anonymous"?: undefined;
                "parameters"?: undefined;
                "constant"?: undefined;
                "scope"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
                "visibility"?: undefined;
                "body"?: undefined;
                "implemented"?: undefined;
                "isConstructor"?: undefined;
                "isDeclaredConst"?: undefined;
                "modifiers"?: undefined;
                "payable"?: undefined;
                "returnParameters"?: undefined;
                "stateMutability"?: undefined;
                "superFunction"?: undefined;
            } | {
                "constant": boolean;
                "id": number;
                "name": string;
                "nodeType": string;
                "scope": number;
                "src": string;
                "stateVariable": boolean;
                "storageLocation": string;
                "typeDescriptions": {
                    "typeIdentifier": string;
                    "typeString": string;
                };
                "typeName": {
                    "contractScope": any;
                    "id": number;
                    "name": string;
                    "nodeType": string;
                    "referencedDeclaration": number;
                    "src": string;
                    "typeDescriptions": {
                        "typeIdentifier": string;
                        "typeString": string;
                    };
                };
                "value": any;
                "visibility": string;
                "anonymous"?: undefined;
                "parameters"?: undefined;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "body"?: undefined;
                "implemented"?: undefined;
                "isConstructor"?: undefined;
                "isDeclaredConst"?: undefined;
                "modifiers"?: undefined;
                "payable"?: undefined;
                "returnParameters"?: undefined;
                "stateMutability"?: undefined;
                "superFunction"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": {
                        "expression": {
                            "argumentTypes": any;
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "leftHandSide": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightHandSide": {
                                "argumentTypes": any;
                                "arguments": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                }[];
                                "expression": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "kind": string;
                                "lValueRequested": boolean;
                                "names": any[];
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                    }[];
                };
                "id": number;
                "implemented": boolean;
                "isConstructor": boolean;
                "isDeclaredConst": boolean;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "payable": boolean;
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": any[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "anonymous"?: undefined;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": any[];
                        "declarations": {
                            "constant": boolean;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "scope": number;
                            "src": string;
                            "stateVariable": boolean;
                            "storageLocation": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "typeName": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "value": any;
                            "visibility": string;
                        }[];
                        "id": number;
                        "initialValue": any;
                        "nodeType": string;
                        "src": string;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "expression"?: undefined;
                    } | {
                        "condition": {
                            "argumentTypes": any;
                            "commonType": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "lValueRequested": boolean;
                            "leftExpression": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightExpression": {
                                "argumentTypes": any;
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "memberName": string;
                                "nodeType": string;
                                "referencedDeclaration": any;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "falseBody": {
                            "condition": {
                                "argumentTypes": any;
                                "commonType": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "leftExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "nodeType": string;
                                "operator": string;
                                "rightExpression": {
                                    "argumentTypes": any;
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "memberName": string;
                                    "nodeType": string;
                                    "referencedDeclaration": any;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "falseBody": {
                                "condition": {
                                    "argumentTypes": any;
                                    "commonType": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftExpression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightExpression": {
                                        "argumentTypes": any;
                                        "expression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "memberName": string;
                                        "nodeType": string;
                                        "referencedDeclaration": any;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "falseBody": {
                                    "condition": {
                                        "argumentTypes": any;
                                        "commonType": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "leftExpression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "nodeType": string;
                                        "operator": string;
                                        "rightExpression": {
                                            "argumentTypes": any;
                                            "expression": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "memberName": string;
                                            "nodeType": string;
                                            "referencedDeclaration": any;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "falseBody": {
                                        "condition": {
                                            "argumentTypes": any;
                                            "commonType": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "leftExpression": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "nodeType": string;
                                            "operator": string;
                                            "rightExpression": {
                                                "argumentTypes": any;
                                                "expression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "memberName": string;
                                                "nodeType": string;
                                                "referencedDeclaration": any;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "falseBody": {
                                            "condition": {
                                                "argumentTypes": any;
                                                "commonType": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "leftExpression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "nodeType": string;
                                                "operator": string;
                                                "rightExpression": {
                                                    "argumentTypes": any;
                                                    "expression": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "memberName": string;
                                                    "nodeType": string;
                                                    "referencedDeclaration": any;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "falseBody": {
                                                "condition": {
                                                    "argumentTypes": any;
                                                    "commonType": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "leftExpression": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "nodeType": string;
                                                    "operator": string;
                                                    "rightExpression": {
                                                        "argumentTypes": any;
                                                        "expression": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "lValueRequested": boolean;
                                                        "memberName": string;
                                                        "nodeType": string;
                                                        "referencedDeclaration": any;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "falseBody": {
                                                    "id": number;
                                                    "nodeType": string;
                                                    "src": string;
                                                    "statements": {
                                                        "expression": {
                                                            "argumentTypes": any;
                                                            "arguments": any[];
                                                            "expression": {
                                                                "argumentTypes": any[];
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "kind": string;
                                                            "lValueRequested": boolean;
                                                            "names": any[];
                                                            "nodeType": string;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "id": number;
                                                        "nodeType": string;
                                                        "src": string;
                                                    }[];
                                                };
                                                "id": number;
                                                "nodeType": string;
                                                "src": string;
                                                "trueBody": {
                                                    "id": number;
                                                    "nodeType": string;
                                                    "src": string;
                                                    "statements": ({
                                                        "expression": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "lValueRequested": boolean;
                                                            "leftHandSide": {
                                                                "argumentTypes": any;
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "nodeType": string;
                                                            "operator": string;
                                                            "rightHandSide": {
                                                                "argumentTypes": any;
                                                                "arguments": {
                                                                    "argumentTypes": any;
                                                                    "id": number;
                                                                    "name": string;
                                                                    "nodeType": string;
                                                                    "overloadedDeclarations": any[];
                                                                    "referencedDeclaration": number;
                                                                    "src": string;
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    };
                                                                }[];
                                                                "expression": {
                                                                    "argumentTypes": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    }[];
                                                                    "id": number;
                                                                    "isConstant": boolean;
                                                                    "isLValue": boolean;
                                                                    "isPure": boolean;
                                                                    "lValueRequested": boolean;
                                                                    "nodeType": string;
                                                                    "src": string;
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    };
                                                                    "typeName": string;
                                                                    "name"?: undefined;
                                                                    "overloadedDeclarations"?: undefined;
                                                                    "referencedDeclaration"?: undefined;
                                                                };
                                                                "id": number;
                                                                "isConstant": boolean;
                                                                "isLValue": boolean;
                                                                "isPure": boolean;
                                                                "kind": string;
                                                                "lValueRequested": boolean;
                                                                "names": any[];
                                                                "nodeType": string;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                            "arguments"?: undefined;
                                                            "expression"?: undefined;
                                                            "kind"?: undefined;
                                                            "names"?: undefined;
                                                        };
                                                        "id": number;
                                                        "nodeType": string;
                                                        "src": string;
                                                    } | {
                                                        "expression": {
                                                            "argumentTypes": any;
                                                            "arguments": {
                                                                "argumentTypes": any;
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            }[];
                                                            "expression": {
                                                                "argumentTypes": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                }[];
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "kind": string;
                                                            "lValueRequested": boolean;
                                                            "names": any[];
                                                            "nodeType": string;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                            "leftHandSide"?: undefined;
                                                            "operator"?: undefined;
                                                            "rightHandSide"?: undefined;
                                                        };
                                                        "id": number;
                                                        "nodeType": string;
                                                        "src": string;
                                                    } | {
                                                        "expression": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "lValueRequested": boolean;
                                                            "leftHandSide": {
                                                                "argumentTypes": any;
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "nodeType": string;
                                                            "operator": string;
                                                            "rightHandSide": {
                                                                "argumentTypes": any;
                                                                "arguments": {
                                                                    "argumentTypes": any;
                                                                    "id": number;
                                                                    "name": string;
                                                                    "nodeType": string;
                                                                    "overloadedDeclarations": any[];
                                                                    "referencedDeclaration": number;
                                                                    "src": string;
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    };
                                                                }[];
                                                                "expression": {
                                                                    "argumentTypes": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    }[];
                                                                    "id": number;
                                                                    "name": string;
                                                                    "nodeType": string;
                                                                    "overloadedDeclarations": any[];
                                                                    "referencedDeclaration": number;
                                                                    "src": string;
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": string;
                                                                        "typeString": string;
                                                                    };
                                                                    "isConstant"?: undefined;
                                                                    "isLValue"?: undefined;
                                                                    "isPure"?: undefined;
                                                                    "lValueRequested"?: undefined;
                                                                    "typeName"?: undefined;
                                                                };
                                                                "id": number;
                                                                "isConstant": boolean;
                                                                "isLValue": boolean;
                                                                "isPure": boolean;
                                                                "kind": string;
                                                                "lValueRequested": boolean;
                                                                "names": any[];
                                                                "nodeType": string;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            };
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                            "arguments"?: undefined;
                                                            "expression"?: undefined;
                                                            "kind"?: undefined;
                                                            "names"?: undefined;
                                                        };
                                                        "id": number;
                                                        "nodeType": string;
                                                        "src": string;
                                                    })[];
                                                };
                                            };
                                            "id": number;
                                            "nodeType": string;
                                            "src": string;
                                            "trueBody": {
                                                "id": number;
                                                "nodeType": string;
                                                "src": string;
                                                "statements": ({
                                                    "expression": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "lValueRequested": boolean;
                                                        "leftHandSide": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "nodeType": string;
                                                        "operator": string;
                                                        "rightHandSide": {
                                                            "argumentTypes": any;
                                                            "arguments": {
                                                                "argumentTypes": any;
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            }[];
                                                            "expression": {
                                                                "argumentTypes": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                }[];
                                                                "id": number;
                                                                "isConstant": boolean;
                                                                "isLValue": boolean;
                                                                "isPure": boolean;
                                                                "lValueRequested": boolean;
                                                                "nodeType": string;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                                "typeName": string;
                                                                "name"?: undefined;
                                                                "overloadedDeclarations"?: undefined;
                                                                "referencedDeclaration"?: undefined;
                                                            };
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "kind": string;
                                                            "lValueRequested": boolean;
                                                            "names": any[];
                                                            "nodeType": string;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                        "arguments"?: undefined;
                                                        "expression"?: undefined;
                                                        "kind"?: undefined;
                                                        "names"?: undefined;
                                                    };
                                                    "id": number;
                                                    "nodeType": string;
                                                    "src": string;
                                                } | {
                                                    "expression": {
                                                        "argumentTypes": any;
                                                        "arguments": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        }[];
                                                        "expression": {
                                                            "argumentTypes": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            }[];
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "kind": string;
                                                        "lValueRequested": boolean;
                                                        "names": any[];
                                                        "nodeType": string;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                        "leftHandSide"?: undefined;
                                                        "operator"?: undefined;
                                                        "rightHandSide"?: undefined;
                                                    };
                                                    "id": number;
                                                    "nodeType": string;
                                                    "src": string;
                                                } | {
                                                    "expression": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "lValueRequested": boolean;
                                                        "leftHandSide": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "nodeType": string;
                                                        "operator": string;
                                                        "rightHandSide": {
                                                            "argumentTypes": any;
                                                            "arguments": {
                                                                "argumentTypes": any;
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                            }[];
                                                            "expression": {
                                                                "argumentTypes": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                }[];
                                                                "id": number;
                                                                "name": string;
                                                                "nodeType": string;
                                                                "overloadedDeclarations": any[];
                                                                "referencedDeclaration": number;
                                                                "src": string;
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": string;
                                                                    "typeString": string;
                                                                };
                                                                "isConstant"?: undefined;
                                                                "isLValue"?: undefined;
                                                                "isPure"?: undefined;
                                                                "lValueRequested"?: undefined;
                                                                "typeName"?: undefined;
                                                            };
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "kind": string;
                                                            "lValueRequested": boolean;
                                                            "names": any[];
                                                            "nodeType": string;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        };
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                        "arguments"?: undefined;
                                                        "expression"?: undefined;
                                                        "kind"?: undefined;
                                                        "names"?: undefined;
                                                    };
                                                    "id": number;
                                                    "nodeType": string;
                                                    "src": string;
                                                })[];
                                            };
                                        };
                                        "id": number;
                                        "nodeType": string;
                                        "src": string;
                                        "trueBody": {
                                            "id": number;
                                            "nodeType": string;
                                            "src": string;
                                            "statements": ({
                                                "expression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "leftHandSide": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "nodeType": string;
                                                    "operator": string;
                                                    "rightHandSide": {
                                                        "argumentTypes": any;
                                                        "arguments": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        }[];
                                                        "expression": {
                                                            "argumentTypes": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            }[];
                                                            "id": number;
                                                            "isConstant": boolean;
                                                            "isLValue": boolean;
                                                            "isPure": boolean;
                                                            "lValueRequested": boolean;
                                                            "nodeType": string;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                            "typeName": string;
                                                            "name"?: undefined;
                                                            "overloadedDeclarations"?: undefined;
                                                            "referencedDeclaration"?: undefined;
                                                        };
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "kind": string;
                                                        "lValueRequested": boolean;
                                                        "names": any[];
                                                        "nodeType": string;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "arguments"?: undefined;
                                                    "expression"?: undefined;
                                                    "kind"?: undefined;
                                                    "names"?: undefined;
                                                };
                                                "id": number;
                                                "nodeType": string;
                                                "src": string;
                                            } | {
                                                "expression": {
                                                    "argumentTypes": any;
                                                    "arguments": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    }[];
                                                    "expression": {
                                                        "argumentTypes": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        }[];
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "kind": string;
                                                    "lValueRequested": boolean;
                                                    "names": any[];
                                                    "nodeType": string;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "leftHandSide"?: undefined;
                                                    "operator"?: undefined;
                                                    "rightHandSide"?: undefined;
                                                };
                                                "id": number;
                                                "nodeType": string;
                                                "src": string;
                                            } | {
                                                "expression": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "leftHandSide": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "nodeType": string;
                                                    "operator": string;
                                                    "rightHandSide": {
                                                        "argumentTypes": any;
                                                        "arguments": {
                                                            "argumentTypes": any;
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                        }[];
                                                        "expression": {
                                                            "argumentTypes": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            }[];
                                                            "id": number;
                                                            "name": string;
                                                            "nodeType": string;
                                                            "overloadedDeclarations": any[];
                                                            "referencedDeclaration": number;
                                                            "src": string;
                                                            "typeDescriptions": {
                                                                "typeIdentifier": string;
                                                                "typeString": string;
                                                            };
                                                            "isConstant"?: undefined;
                                                            "isLValue"?: undefined;
                                                            "isPure"?: undefined;
                                                            "lValueRequested"?: undefined;
                                                            "typeName"?: undefined;
                                                        };
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "kind": string;
                                                        "lValueRequested": boolean;
                                                        "names": any[];
                                                        "nodeType": string;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    };
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "arguments"?: undefined;
                                                    "expression"?: undefined;
                                                    "kind"?: undefined;
                                                    "names"?: undefined;
                                                };
                                                "id": number;
                                                "nodeType": string;
                                                "src": string;
                                            })[];
                                        };
                                    };
                                    "id": number;
                                    "nodeType": string;
                                    "src": string;
                                    "trueBody": {
                                        "id": number;
                                        "nodeType": string;
                                        "src": string;
                                        "statements": ({
                                            "expression": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "leftHandSide": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "nodeType": string;
                                                "operator": string;
                                                "rightHandSide": {
                                                    "argumentTypes": any;
                                                    "arguments": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    }[];
                                                    "expression": {
                                                        "argumentTypes": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        }[];
                                                        "id": number;
                                                        "isConstant": boolean;
                                                        "isLValue": boolean;
                                                        "isPure": boolean;
                                                        "lValueRequested": boolean;
                                                        "nodeType": string;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                        "typeName": string;
                                                        "name"?: undefined;
                                                        "overloadedDeclarations"?: undefined;
                                                        "referencedDeclaration"?: undefined;
                                                    };
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "kind": string;
                                                    "lValueRequested": boolean;
                                                    "names": any[];
                                                    "nodeType": string;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "arguments"?: undefined;
                                                "expression"?: undefined;
                                                "kind"?: undefined;
                                                "names"?: undefined;
                                            };
                                            "id": number;
                                            "nodeType": string;
                                            "src": string;
                                        } | {
                                            "expression": {
                                                "argumentTypes": any;
                                                "arguments": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                }[];
                                                "expression": {
                                                    "argumentTypes": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    }[];
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "kind": string;
                                                "lValueRequested": boolean;
                                                "names": any[];
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "leftHandSide"?: undefined;
                                                "operator"?: undefined;
                                                "rightHandSide"?: undefined;
                                            };
                                            "id": number;
                                            "nodeType": string;
                                            "src": string;
                                        } | {
                                            "expression": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "leftHandSide": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "nodeType": string;
                                                "operator": string;
                                                "rightHandSide": {
                                                    "argumentTypes": any;
                                                    "arguments": {
                                                        "argumentTypes": any;
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                    }[];
                                                    "expression": {
                                                        "argumentTypes": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        }[];
                                                        "id": number;
                                                        "name": string;
                                                        "nodeType": string;
                                                        "overloadedDeclarations": any[];
                                                        "referencedDeclaration": number;
                                                        "src": string;
                                                        "typeDescriptions": {
                                                            "typeIdentifier": string;
                                                            "typeString": string;
                                                        };
                                                        "isConstant"?: undefined;
                                                        "isLValue"?: undefined;
                                                        "isPure"?: undefined;
                                                        "lValueRequested"?: undefined;
                                                        "typeName"?: undefined;
                                                    };
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "kind": string;
                                                    "lValueRequested": boolean;
                                                    "names": any[];
                                                    "nodeType": string;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                };
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "arguments"?: undefined;
                                                "expression"?: undefined;
                                                "kind"?: undefined;
                                                "names"?: undefined;
                                            };
                                            "id": number;
                                            "nodeType": string;
                                            "src": string;
                                        })[];
                                    };
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "trueBody": {
                                    "id": number;
                                    "nodeType": string;
                                    "src": string;
                                    "statements": ({
                                        "expression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "leftHandSide": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "nodeType": string;
                                            "operator": string;
                                            "rightHandSide": {
                                                "argumentTypes": any;
                                                "arguments": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                }[];
                                                "expression": {
                                                    "argumentTypes": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    }[];
                                                    "id": number;
                                                    "isConstant": boolean;
                                                    "isLValue": boolean;
                                                    "isPure": boolean;
                                                    "lValueRequested": boolean;
                                                    "nodeType": string;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "typeName": string;
                                                    "name"?: undefined;
                                                    "overloadedDeclarations"?: undefined;
                                                    "referencedDeclaration"?: undefined;
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "kind": string;
                                                "lValueRequested": boolean;
                                                "names": any[];
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                            "arguments"?: undefined;
                                            "expression"?: undefined;
                                            "kind"?: undefined;
                                            "names"?: undefined;
                                        };
                                        "id": number;
                                        "nodeType": string;
                                        "src": string;
                                    } | {
                                        "expression": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                            "leftHandSide"?: undefined;
                                            "operator"?: undefined;
                                            "rightHandSide"?: undefined;
                                        };
                                        "id": number;
                                        "nodeType": string;
                                        "src": string;
                                    } | {
                                        "expression": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "leftHandSide": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "nodeType": string;
                                            "operator": string;
                                            "rightHandSide": {
                                                "argumentTypes": any;
                                                "arguments": {
                                                    "argumentTypes": any;
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                }[];
                                                "expression": {
                                                    "argumentTypes": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    }[];
                                                    "id": number;
                                                    "name": string;
                                                    "nodeType": string;
                                                    "overloadedDeclarations": any[];
                                                    "referencedDeclaration": number;
                                                    "src": string;
                                                    "typeDescriptions": {
                                                        "typeIdentifier": string;
                                                        "typeString": string;
                                                    };
                                                    "isConstant"?: undefined;
                                                    "isLValue"?: undefined;
                                                    "isPure"?: undefined;
                                                    "lValueRequested"?: undefined;
                                                    "typeName"?: undefined;
                                                };
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "kind": string;
                                                "lValueRequested": boolean;
                                                "names": any[];
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            };
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                            "arguments"?: undefined;
                                            "expression"?: undefined;
                                            "kind"?: undefined;
                                            "names"?: undefined;
                                        };
                                        "id": number;
                                        "nodeType": string;
                                        "src": string;
                                    })[];
                                };
                            };
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "trueBody": {
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "statements": ({
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "leftHandSide": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "nodeType": string;
                                        "operator": string;
                                        "rightHandSide": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "id": number;
                                                "isConstant": boolean;
                                                "isLValue": boolean;
                                                "isPure": boolean;
                                                "lValueRequested": boolean;
                                                "nodeType": string;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "typeName": string;
                                                "name"?: undefined;
                                                "overloadedDeclarations"?: undefined;
                                                "referencedDeclaration"?: undefined;
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "kind"?: undefined;
                                        "names"?: undefined;
                                    };
                                    "id": number;
                                    "nodeType": string;
                                    "src": string;
                                } | {
                                    "expression": {
                                        "argumentTypes": any;
                                        "arguments": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "leftHandSide"?: undefined;
                                        "operator"?: undefined;
                                        "rightHandSide"?: undefined;
                                    };
                                    "id": number;
                                    "nodeType": string;
                                    "src": string;
                                } | {
                                    "expression": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "leftHandSide": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "nodeType": string;
                                        "operator": string;
                                        "rightHandSide": {
                                            "argumentTypes": any;
                                            "arguments": {
                                                "argumentTypes": any;
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                            }[];
                                            "expression": {
                                                "argumentTypes": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                }[];
                                                "id": number;
                                                "name": string;
                                                "nodeType": string;
                                                "overloadedDeclarations": any[];
                                                "referencedDeclaration": number;
                                                "src": string;
                                                "typeDescriptions": {
                                                    "typeIdentifier": string;
                                                    "typeString": string;
                                                };
                                                "isConstant"?: undefined;
                                                "isLValue"?: undefined;
                                                "isPure"?: undefined;
                                                "lValueRequested"?: undefined;
                                                "typeName"?: undefined;
                                            };
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "kind": string;
                                            "lValueRequested": boolean;
                                            "names": any[];
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        };
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "kind"?: undefined;
                                        "names"?: undefined;
                                    };
                                    "id": number;
                                    "nodeType": string;
                                    "src": string;
                                })[];
                            };
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "trueBody": {
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "statements": ({
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftHandSide": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
                                        "argumentTypes": any;
                                        "arguments": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "id": number;
                                            "isConstant": boolean;
                                            "isLValue": boolean;
                                            "isPure": boolean;
                                            "lValueRequested": boolean;
                                            "nodeType": string;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                            "typeName": string;
                                            "name"?: undefined;
                                            "overloadedDeclarations"?: undefined;
                                            "referencedDeclaration"?: undefined;
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "kind"?: undefined;
                                    "names"?: undefined;
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            } | {
                                "expression": {
                                    "argumentTypes": any;
                                    "arguments": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "leftHandSide"?: undefined;
                                    "operator"?: undefined;
                                    "rightHandSide"?: undefined;
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            } | {
                                "expression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "lValueRequested": boolean;
                                    "leftHandSide": {
                                        "argumentTypes": any;
                                        "id": number;
                                        "name": string;
                                        "nodeType": string;
                                        "overloadedDeclarations": any[];
                                        "referencedDeclaration": number;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
                                        "argumentTypes": any;
                                        "arguments": {
                                            "argumentTypes": any;
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
                                            "id": number;
                                            "name": string;
                                            "nodeType": string;
                                            "overloadedDeclarations": any[];
                                            "referencedDeclaration": number;
                                            "src": string;
                                            "typeDescriptions": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            };
                                            "isConstant"?: undefined;
                                            "isLValue"?: undefined;
                                            "isPure"?: undefined;
                                            "lValueRequested"?: undefined;
                                            "typeName"?: undefined;
                                        };
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "names": any[];
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                    };
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "kind"?: undefined;
                                    "names"?: undefined;
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            })[];
                        };
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "expression"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                    })[];
                };
                "id": number;
                "implemented": boolean;
                "isConstructor": boolean;
                "isDeclaredConst": boolean;
                "modifiers": {
                    "arguments": any[];
                    "id": number;
                    "modifierName": {
                        "argumentTypes": any;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "overloadedDeclarations": any[];
                        "referencedDeclaration": number;
                        "src": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                    };
                    "nodeType": string;
                    "src": string;
                }[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": ({
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "contractScope": any;
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "referencedDeclaration": number;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    } | {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "contractScope"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "value": any;
                        "visibility": string;
                    })[];
                    "src": string;
                };
                "payable": boolean;
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": any[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "anonymous"?: undefined;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "commonType": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "leftExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "nodeType": string;
                                "operator": string;
                                "rightExpression": {
                                    "argumentTypes": any;
                                    "arguments": {
                                        "argumentTypes": any;
                                        "hexValue": string;
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "kind": string;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "subdenomination": any;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "value": string;
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
                                        "id": number;
                                        "isConstant": boolean;
                                        "isLValue": boolean;
                                        "isPure": boolean;
                                        "lValueRequested": boolean;
                                        "nodeType": string;
                                        "src": string;
                                        "typeDescriptions": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        };
                                        "typeName": string;
                                    };
                                    "id": number;
                                    "isConstant": boolean;
                                    "isLValue": boolean;
                                    "isPure": boolean;
                                    "kind": string;
                                    "lValueRequested": boolean;
                                    "names": any[];
                                    "nodeType": string;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "commonType": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "leftExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "nodeType": string;
                                "operator": string;
                                "rightExpression": {
                                    "argumentTypes": any;
                                    "id": number;
                                    "name": string;
                                    "nodeType": string;
                                    "overloadedDeclarations": any[];
                                    "referencedDeclaration": number;
                                    "src": string;
                                    "typeDescriptions": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    };
                                };
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            }[];
                            "expression": {
                                "argumentTypes": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                }[];
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "overloadedDeclarations": any[];
                                "referencedDeclaration": number;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "isConstant": boolean;
                            "isLValue": boolean;
                            "isPure": boolean;
                            "kind": string;
                            "lValueRequested": boolean;
                            "names": any[];
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                    })[];
                };
                "id": number;
                "implemented": boolean;
                "isConstructor": boolean;
                "isDeclaredConst": boolean;
                "modifiers": any[];
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
                        "constant": boolean;
                        "id": number;
                        "name": string;
                        "nodeType": string;
                        "scope": number;
                        "src": string;
                        "stateVariable": boolean;
                        "storageLocation": string;
                        "typeDescriptions": {
                            "typeIdentifier": string;
                            "typeString": string;
                        };
                        "typeName": {
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "payable": boolean;
                "returnParameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": any[];
                    "src": string;
                };
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "anonymous"?: undefined;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
            })[];
            "scope": number;
            "src": string;
            "literals"?: undefined;
            "absolutePath"?: undefined;
            "file"?: undefined;
            "sourceUnit"?: undefined;
            "symbolAliases"?: undefined;
            "unitAlias"?: undefined;
        })[];
        "src": string;
    };
    "compiler": {
        "name": string;
        "version": string;
    };
    "networks": {
        "42": {
            "events": {};
            "links": {};
            "address": string;
            "transactionHash": string;
        };
        "70": {
            "events": {
                "0xea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e788": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                    "signature": string;
                };
                "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
                    "anonymous": boolean;
                    "inputs": {
                        "indexed": boolean;
                        "name": string;
                        "type": string;
                    }[];
                    "name": string;
                    "type": string;
                    "signature": string;
                };
            };
            "links": {};
            "address": string;
            "transactionHash": string;
        };
    };
    "schemaVersion": string;
    "updatedAt": string;
    "devdoc": {
        "methods": {
            "transferOwnership(address)": {
                "details": string;
                "params": {
                    "newOwner": string;
                };
            };
        };
    };
    "userdoc": {
        "methods": {};
    };
};
