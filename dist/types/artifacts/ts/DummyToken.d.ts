export declare const DummyToken: {
    "contractName": string;
    "abi": ({
        "constant": boolean;
        "inputs": {
            "name": string;
            "type": string;
        }[];
        "name": string;
        "outputs": {
            "name": string;
            "type": string;
        }[];
        "payable": boolean;
        "stateMutability": string;
        "type": string;
        "anonymous"?: undefined;
    } | {
        "inputs": {
            "name": string;
            "type": string;
        }[];
        "payable": boolean;
        "stateMutability": string;
        "type": string;
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
            "DummyToken": number[];
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
                "id": number;
                "libraryName": {
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
                "nodeType": string;
                "src": string;
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
                "constant"?: undefined;
                "name"?: undefined;
                "scope"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "value"?: undefined;
                "visibility"?: undefined;
                "body"?: undefined;
                "implemented"?: undefined;
                "isConstructor"?: undefined;
                "isDeclaredConst"?: undefined;
                "modifiers"?: undefined;
                "parameters"?: undefined;
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
                "libraryName"?: undefined;
                "body"?: undefined;
                "implemented"?: undefined;
                "isConstructor"?: undefined;
                "isDeclaredConst"?: undefined;
                "modifiers"?: undefined;
                "parameters"?: undefined;
                "payable"?: undefined;
                "returnParameters"?: undefined;
                "stateMutability"?: undefined;
                "superFunction"?: undefined;
            } | {
                "body": {
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
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                    } | {
                        "assignments": number[];
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
                        "initialValue": {
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
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                    } | {
                        "body": {
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "statements": ({
                                "assignments": number[];
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
                                "initialValue": {
                                    "argumentTypes": any;
                                    "baseExpression": {
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
                                    "indexExpression": {
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
                                };
                                "nodeType": string;
                                "src": string;
                                "expression"?: undefined;
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
                                        "baseExpression": {
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
                                        "indexExpression": {
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
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
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
                                "assignments"?: undefined;
                                "declarations"?: undefined;
                                "initialValue"?: undefined;
                            })[];
                        };
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
                        };
                        "id": number;
                        "initializationExpression": {
                            "assignments": number[];
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
                            "initialValue": {
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
                            };
                            "nodeType": string;
                            "src": string;
                        };
                        "loopExpression": {
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "operator": string;
                                "prefix": boolean;
                                "src": string;
                                "subExpression": {
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
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "nodeType": string;
                            "src": string;
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
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
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "baseType"?: undefined;
                            "length"?: undefined;
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
                            "baseType": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "name"?: undefined;
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
                "libraryName"?: undefined;
                "typeName"?: undefined;
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "value"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
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
                        "initialValue": {
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
                                "overloadedDeclarations": number[];
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
                        };
                        "falseBody": {
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
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
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
                        "nodeType": string;
                        "src": string;
                        "trueBody": {
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
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
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
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "expression"?: undefined;
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
                                "baseExpression": {
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
                                "indexExpression": {
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
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightHandSide": {
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
                "libraryName"?: undefined;
                "typeName"?: undefined;
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
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
            "DummyToken": number[];
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
                "id": number;
                "libraryName": {
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
                "nodeType": string;
                "src": string;
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
                "constant"?: undefined;
                "name"?: undefined;
                "scope"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "value"?: undefined;
                "visibility"?: undefined;
                "body"?: undefined;
                "implemented"?: undefined;
                "isConstructor"?: undefined;
                "isDeclaredConst"?: undefined;
                "modifiers"?: undefined;
                "parameters"?: undefined;
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
                "libraryName"?: undefined;
                "body"?: undefined;
                "implemented"?: undefined;
                "isConstructor"?: undefined;
                "isDeclaredConst"?: undefined;
                "modifiers"?: undefined;
                "parameters"?: undefined;
                "payable"?: undefined;
                "returnParameters"?: undefined;
                "stateMutability"?: undefined;
                "superFunction"?: undefined;
            } | {
                "body": {
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
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                    } | {
                        "assignments": number[];
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
                        "initialValue": {
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
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "body"?: undefined;
                        "condition"?: undefined;
                        "initializationExpression"?: undefined;
                        "loopExpression"?: undefined;
                    } | {
                        "body": {
                            "id": number;
                            "nodeType": string;
                            "src": string;
                            "statements": ({
                                "assignments": number[];
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
                                "initialValue": {
                                    "argumentTypes": any;
                                    "baseExpression": {
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
                                    "indexExpression": {
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
                                };
                                "nodeType": string;
                                "src": string;
                                "expression"?: undefined;
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
                                        "baseExpression": {
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
                                        "indexExpression": {
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
                                    };
                                    "nodeType": string;
                                    "operator": string;
                                    "rightHandSide": {
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
                                "assignments"?: undefined;
                                "declarations"?: undefined;
                                "initialValue"?: undefined;
                            })[];
                        };
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
                        };
                        "id": number;
                        "initializationExpression": {
                            "assignments": number[];
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
                            "initialValue": {
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
                            };
                            "nodeType": string;
                            "src": string;
                        };
                        "loopExpression": {
                            "expression": {
                                "argumentTypes": any;
                                "id": number;
                                "isConstant": boolean;
                                "isLValue": boolean;
                                "isPure": boolean;
                                "lValueRequested": boolean;
                                "nodeType": string;
                                "operator": string;
                                "prefix": boolean;
                                "src": string;
                                "subExpression": {
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
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "nodeType": string;
                            "src": string;
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
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
                            "id": number;
                            "name": string;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "baseType"?: undefined;
                            "length"?: undefined;
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
                            "baseType": {
                                "id": number;
                                "name": string;
                                "nodeType": string;
                                "src": string;
                                "typeDescriptions": {
                                    "typeIdentifier": string;
                                    "typeString": string;
                                };
                            };
                            "id": number;
                            "length": any;
                            "nodeType": string;
                            "src": string;
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "name"?: undefined;
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
                "libraryName"?: undefined;
                "typeName"?: undefined;
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "value"?: undefined;
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": ({
                        "assignments": number[];
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
                        "initialValue": {
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
                                "overloadedDeclarations": number[];
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
                        };
                        "falseBody": {
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
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
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
                        "nodeType": string;
                        "src": string;
                        "trueBody": {
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
                                        }[];
                                        "expression": {
                                            "argumentTypes": {
                                                "typeIdentifier": string;
                                                "typeString": string;
                                            }[];
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
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "expression"?: undefined;
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
                                "baseExpression": {
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
                                "indexExpression": {
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
                            };
                            "nodeType": string;
                            "operator": string;
                            "rightHandSide": {
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
                "libraryName"?: undefined;
                "typeName"?: undefined;
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
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
    "networks": {};
    "schemaVersion": string;
    "updatedAt": string;
    "devdoc": {
        "methods": {
            "allowance(address,address)": {
                "details": string;
                "params": {
                    "_owner": string;
                    "_spender": string;
                };
                "return": string;
            };
            "approve(address,uint256)": {
                "details": string;
                "params": {
                    "_spender": string;
                    "_value": string;
                };
            };
            "balanceOf(address)": {
                "details": string;
                "params": {
                    "_owner": string;
                };
                "return": string;
            };
            "decreaseApproval(address,uint256)": {
                "details": string;
                "params": {
                    "_spender": string;
                    "_subtractedValue": string;
                };
            };
            "finishMinting()": {
                "details": string;
                "return": string;
            };
            "increaseApproval(address,uint256)": {
                "details": string;
                "params": {
                    "_addedValue": string;
                    "_spender": string;
                };
            };
            "mint(address,uint256)": {
                "details": string;
                "params": {
                    "_amount": string;
                    "_to": string;
                };
                "return": string;
            };
            "totalSupply()": {
                "details": string;
            };
            "transfer(address,uint256)": {
                "details": string;
                "params": {
                    "_to": string;
                    "_value": string;
                };
            };
            "transferFrom(address,address,uint256)": {
                "details": string;
                "params": {
                    "_from": string;
                    "_to": string;
                    "_value": string;
                };
            };
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
