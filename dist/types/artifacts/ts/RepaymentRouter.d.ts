export declare const RepaymentRouter: {
    "contractName": string;
    "abi": ({
        "inputs": {
            "name": string;
            "type": string;
        }[];
        "payable": boolean;
        "stateMutability": string;
        "type": string;
        "signature": string;
        "anonymous"?: undefined;
        "name"?: undefined;
        "constant"?: undefined;
        "outputs"?: undefined;
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
        "payable"?: undefined;
        "stateMutability"?: undefined;
        "constant"?: undefined;
        "outputs"?: undefined;
    } | {
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
        "signature": string;
        "anonymous"?: undefined;
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
            "RepaymentRouter": number[];
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
            "documentation": string;
            "fullyImplemented": boolean;
            "id": number;
            "linearizedBaseContracts": number[];
            "name": string;
            "nodeType": string;
            "nodes": ({
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
                "canonicalName"?: undefined;
                "members"?: undefined;
                "anonymous"?: undefined;
                "parameters"?: undefined;
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
                "constant"?: undefined;
                "scope"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
                "visibility"?: undefined;
                "anonymous"?: undefined;
                "parameters"?: undefined;
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
                "anonymous": boolean;
                "id": number;
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
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
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "src": string;
                "constant"?: undefined;
                "scope"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
                "visibility"?: undefined;
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
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "anonymous"?: undefined;
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
                            "name"?: undefined;
                            "overloadedDeclarations"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
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
                            "name"?: undefined;
                            "overloadedDeclarations"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "condition": {
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
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "isConstant"?: undefined;
                                        "isLValue"?: undefined;
                                        "isPure"?: undefined;
                                        "kind"?: undefined;
                                        "lValueRequested"?: undefined;
                                        "names"?: undefined;
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
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "commonType"?: undefined;
                            "leftExpression"?: undefined;
                            "rightExpression"?: undefined;
                        };
                        "falseBody": any;
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
                                    "arguments": ({
                                        "argumentTypes": any;
                                        "arguments": {
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
                                        "name"?: undefined;
                                        "overloadedDeclarations"?: undefined;
                                        "referencedDeclaration"?: undefined;
                                    } | {
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
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "isConstant"?: undefined;
                                        "isLValue"?: undefined;
                                        "isPure"?: undefined;
                                        "kind"?: undefined;
                                        "lValueRequested"?: undefined;
                                        "names"?: undefined;
                                    })[];
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
                                    "hexValue"?: undefined;
                                    "subdenomination"?: undefined;
                                    "value"?: undefined;
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "functionReturnParameters"?: undefined;
                            } | {
                                "expression": {
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
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "names"?: undefined;
                                };
                                "functionReturnParameters": number;
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            })[];
                        };
                        "expression"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
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
                                    "arguments": {
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
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
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
                            "nodeType": string;
                            "operator": string;
                            "rightExpression": {
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
                                    "arguments": ({
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
                                        "name"?: undefined;
                                        "overloadedDeclarations"?: undefined;
                                    } | {
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
                                        "expression"?: undefined;
                                        "isConstant"?: undefined;
                                        "isLValue"?: undefined;
                                        "isPure"?: undefined;
                                        "lValueRequested"?: undefined;
                                        "memberName"?: undefined;
                                    })[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
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
                            "prefix"?: undefined;
                            "subExpression"?: undefined;
                        };
                        "falseBody": any;
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
                                    "arguments": ({
                                        "argumentTypes": any;
                                        "arguments": {
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
                                        "name"?: undefined;
                                        "overloadedDeclarations"?: undefined;
                                        "referencedDeclaration"?: undefined;
                                    } | {
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
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "isConstant"?: undefined;
                                        "isLValue"?: undefined;
                                        "isPure"?: undefined;
                                        "kind"?: undefined;
                                        "lValueRequested"?: undefined;
                                        "names"?: undefined;
                                    })[];
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
                                    "hexValue"?: undefined;
                                    "subdenomination"?: undefined;
                                    "value"?: undefined;
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "functionReturnParameters"?: undefined;
                            } | {
                                "expression": {
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
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "names"?: undefined;
                                };
                                "functionReturnParameters": number;
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            })[];
                        };
                        "expression"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
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
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "condition": {
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
                                "arguments": ({
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
                                    "expression"?: undefined;
                                    "isConstant"?: undefined;
                                    "isLValue"?: undefined;
                                    "isPure"?: undefined;
                                    "lValueRequested"?: undefined;
                                    "memberName"?: undefined;
                                } | {
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
                                    "name"?: undefined;
                                    "overloadedDeclarations"?: undefined;
                                })[];
                                "expression": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
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
                                        "name"?: undefined;
                                        "overloadedDeclarations"?: undefined;
                                        "referencedDeclaration"?: undefined;
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
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "commonType"?: undefined;
                            "leftExpression"?: undefined;
                            "rightExpression"?: undefined;
                        };
                        "falseBody": any;
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
                                    "arguments": ({
                                        "argumentTypes": any;
                                        "arguments": {
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
                                        "name"?: undefined;
                                        "overloadedDeclarations"?: undefined;
                                        "referencedDeclaration"?: undefined;
                                    } | {
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
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "isConstant"?: undefined;
                                        "isLValue"?: undefined;
                                        "isPure"?: undefined;
                                        "kind"?: undefined;
                                        "lValueRequested"?: undefined;
                                        "names"?: undefined;
                                    })[];
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
                                    "hexValue"?: undefined;
                                    "subdenomination"?: undefined;
                                    "value"?: undefined;
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "functionReturnParameters"?: undefined;
                            } | {
                                "expression": {
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
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "names"?: undefined;
                                };
                                "functionReturnParameters": number;
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            })[];
                        };
                        "expression"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": ({
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
                                    "expression"?: undefined;
                                    "isConstant"?: undefined;
                                    "isLValue"?: undefined;
                                    "isPure"?: undefined;
                                    "lValueRequested"?: undefined;
                                    "memberName"?: undefined;
                                } | {
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
                                    "name"?: undefined;
                                    "overloadedDeclarations"?: undefined;
                                })[];
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
                            "name"?: undefined;
                            "overloadedDeclarations"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": ({
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
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "memberName"?: undefined;
                            } | {
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
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                            })[];
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
                            "name"?: undefined;
                            "overloadedDeclarations"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
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
                            "arguments"?: undefined;
                            "expression"?: undefined;
                            "isConstant"?: undefined;
                            "isLValue"?: undefined;
                            "isPure"?: undefined;
                            "kind"?: undefined;
                            "lValueRequested"?: undefined;
                            "names"?: undefined;
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
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
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "anonymous"?: undefined;
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
            "RepaymentRouter": number[];
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
            "documentation": string;
            "fullyImplemented": boolean;
            "id": number;
            "linearizedBaseContracts": number[];
            "name": string;
            "nodeType": string;
            "nodes": ({
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
                "canonicalName"?: undefined;
                "members"?: undefined;
                "anonymous"?: undefined;
                "parameters"?: undefined;
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
                "constant"?: undefined;
                "scope"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
                "visibility"?: undefined;
                "anonymous"?: undefined;
                "parameters"?: undefined;
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
                "anonymous": boolean;
                "id": number;
                "name": string;
                "nodeType": string;
                "parameters": {
                    "id": number;
                    "nodeType": string;
                    "parameters": {
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
                        };
                        "value": any;
                        "visibility": string;
                    }[];
                    "src": string;
                };
                "src": string;
                "constant"?: undefined;
                "scope"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
                "visibility"?: undefined;
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
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "anonymous"?: undefined;
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
                            "name"?: undefined;
                            "overloadedDeclarations"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
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
                            "name"?: undefined;
                            "overloadedDeclarations"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "condition": {
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
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "isConstant"?: undefined;
                                        "isLValue"?: undefined;
                                        "isPure"?: undefined;
                                        "kind"?: undefined;
                                        "lValueRequested"?: undefined;
                                        "names"?: undefined;
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
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "commonType"?: undefined;
                            "leftExpression"?: undefined;
                            "rightExpression"?: undefined;
                        };
                        "falseBody": any;
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
                                    "arguments": ({
                                        "argumentTypes": any;
                                        "arguments": {
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
                                        "name"?: undefined;
                                        "overloadedDeclarations"?: undefined;
                                        "referencedDeclaration"?: undefined;
                                    } | {
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
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "isConstant"?: undefined;
                                        "isLValue"?: undefined;
                                        "isPure"?: undefined;
                                        "kind"?: undefined;
                                        "lValueRequested"?: undefined;
                                        "names"?: undefined;
                                    })[];
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
                                    "hexValue"?: undefined;
                                    "subdenomination"?: undefined;
                                    "value"?: undefined;
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "functionReturnParameters"?: undefined;
                            } | {
                                "expression": {
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
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "names"?: undefined;
                                };
                                "functionReturnParameters": number;
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            })[];
                        };
                        "expression"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
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
                                    "arguments": {
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
                                    }[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
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
                            "nodeType": string;
                            "operator": string;
                            "rightExpression": {
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
                                    "arguments": ({
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
                                        "name"?: undefined;
                                        "overloadedDeclarations"?: undefined;
                                    } | {
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
                                        "expression"?: undefined;
                                        "isConstant"?: undefined;
                                        "isLValue"?: undefined;
                                        "isPure"?: undefined;
                                        "lValueRequested"?: undefined;
                                        "memberName"?: undefined;
                                    })[];
                                    "expression": {
                                        "argumentTypes": {
                                            "typeIdentifier": string;
                                            "typeString": string;
                                        }[];
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
                            "prefix"?: undefined;
                            "subExpression"?: undefined;
                        };
                        "falseBody": any;
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
                                    "arguments": ({
                                        "argumentTypes": any;
                                        "arguments": {
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
                                        "name"?: undefined;
                                        "overloadedDeclarations"?: undefined;
                                        "referencedDeclaration"?: undefined;
                                    } | {
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
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "isConstant"?: undefined;
                                        "isLValue"?: undefined;
                                        "isPure"?: undefined;
                                        "kind"?: undefined;
                                        "lValueRequested"?: undefined;
                                        "names"?: undefined;
                                    })[];
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
                                    "hexValue"?: undefined;
                                    "subdenomination"?: undefined;
                                    "value"?: undefined;
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "functionReturnParameters"?: undefined;
                            } | {
                                "expression": {
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
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "names"?: undefined;
                                };
                                "functionReturnParameters": number;
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            })[];
                        };
                        "expression"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
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
                        };
                        "nodeType": string;
                        "src": string;
                        "expression"?: undefined;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "condition": {
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
                                "arguments": ({
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
                                    "expression"?: undefined;
                                    "isConstant"?: undefined;
                                    "isLValue"?: undefined;
                                    "isPure"?: undefined;
                                    "lValueRequested"?: undefined;
                                    "memberName"?: undefined;
                                } | {
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
                                    "name"?: undefined;
                                    "overloadedDeclarations"?: undefined;
                                })[];
                                "expression": {
                                    "argumentTypes": {
                                        "typeIdentifier": string;
                                        "typeString": string;
                                    }[];
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
                                        "name"?: undefined;
                                        "overloadedDeclarations"?: undefined;
                                        "referencedDeclaration"?: undefined;
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
                            "typeDescriptions": {
                                "typeIdentifier": string;
                                "typeString": string;
                            };
                            "commonType"?: undefined;
                            "leftExpression"?: undefined;
                            "rightExpression"?: undefined;
                        };
                        "falseBody": any;
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
                                    "arguments": ({
                                        "argumentTypes": any;
                                        "arguments": {
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
                                        "name"?: undefined;
                                        "overloadedDeclarations"?: undefined;
                                        "referencedDeclaration"?: undefined;
                                    } | {
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
                                        "arguments"?: undefined;
                                        "expression"?: undefined;
                                        "isConstant"?: undefined;
                                        "isLValue"?: undefined;
                                        "isPure"?: undefined;
                                        "kind"?: undefined;
                                        "lValueRequested"?: undefined;
                                        "names"?: undefined;
                                    })[];
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
                                    "hexValue"?: undefined;
                                    "subdenomination"?: undefined;
                                    "value"?: undefined;
                                };
                                "id": number;
                                "nodeType": string;
                                "src": string;
                                "functionReturnParameters"?: undefined;
                            } | {
                                "expression": {
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
                                    "arguments"?: undefined;
                                    "expression"?: undefined;
                                    "names"?: undefined;
                                };
                                "functionReturnParameters": number;
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            })[];
                        };
                        "expression"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
                                "argumentTypes": any;
                                "arguments": ({
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
                                    "expression"?: undefined;
                                    "isConstant"?: undefined;
                                    "isLValue"?: undefined;
                                    "isPure"?: undefined;
                                    "lValueRequested"?: undefined;
                                    "memberName"?: undefined;
                                } | {
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
                                    "name"?: undefined;
                                    "overloadedDeclarations"?: undefined;
                                })[];
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
                            "name"?: undefined;
                            "overloadedDeclarations"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": ({
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
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "memberName"?: undefined;
                            } | {
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
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
                            })[];
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
                            "name"?: undefined;
                            "overloadedDeclarations"?: undefined;
                            "referencedDeclaration"?: undefined;
                        };
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
                    } | {
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
                            "arguments"?: undefined;
                            "expression"?: undefined;
                            "isConstant"?: undefined;
                            "isLValue"?: undefined;
                            "isPure"?: undefined;
                            "kind"?: undefined;
                            "lValueRequested"?: undefined;
                            "names"?: undefined;
                        };
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "condition"?: undefined;
                        "falseBody"?: undefined;
                        "trueBody"?: undefined;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
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
                "scope": number;
                "src": string;
                "stateMutability": string;
                "superFunction": any;
                "visibility": string;
                "constant"?: undefined;
                "stateVariable"?: undefined;
                "storageLocation"?: undefined;
                "typeDescriptions"?: undefined;
                "typeName"?: undefined;
                "value"?: undefined;
                "canonicalName"?: undefined;
                "members"?: undefined;
                "anonymous"?: undefined;
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
                "0x43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d0": {
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
                "0x36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e90": {
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
                "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
                    "anonymous": boolean;
                    "inputs": any[];
                    "name": string;
                    "type": string;
                    "signature": string;
                };
                "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
                    "anonymous": boolean;
                    "inputs": any[];
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
            "pause()": {
                "details": string;
            };
            "transferOwnership(address)": {
                "details": string;
                "params": {
                    "newOwner": string;
                };
            };
            "unpause()": {
                "details": string;
            };
        };
    };
    "userdoc": {
        "methods": {
            "repay(bytes32,uint256,address)": {
                "notice": string;
            };
        };
    };
};
