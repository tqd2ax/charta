export declare const DebtToken: {
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
            "DebtToken": number[];
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
            "symbolAliases": {
                "foreign": number;
                "local": any;
            }[];
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
                "value": {
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
                "modifiers": {
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
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": {
                        "expression": {
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
                        };
                        "functionReturnParameters": number;
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
                "superFunction": number;
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
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
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
                                        "id": number;
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
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "memberName"?: undefined;
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
                        "id": number;
                        "nodeType": string;
                        "src": string;
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
                                "arguments"?: undefined;
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "kind"?: undefined;
                                "lValueRequested"?: undefined;
                                "names"?: undefined;
                            } | {
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
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
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
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
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
                                "expression"?: undefined;
                                "memberName"?: undefined;
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
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
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
                    "statements": {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": any[];
                            "expression": {
                                "argumentTypes": any[];
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
                        "functionReturnParameters": number;
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
                    "parameters": any[];
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
                    "statements": {
                        "expression": {
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
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "memberName"?: undefined;
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
                                "id": number;
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
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
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
                "superFunction": number;
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
                    "statements": {
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
                        "falseBody": any;
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
                                    "arguments": ({
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
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            }[];
                        };
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
            "DebtToken": number[];
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
            "symbolAliases": {
                "foreign": number;
                "local": any;
            }[];
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
                "value": {
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
                "modifiers": {
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
            } | {
                "body": {
                    "id": number;
                    "nodeType": string;
                    "src": string;
                    "statements": {
                        "expression": {
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
                        };
                        "functionReturnParameters": number;
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
                "superFunction": number;
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
                        "expression": {
                            "argumentTypes": any;
                            "arguments": {
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
                                        "id": number;
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
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "memberName"?: undefined;
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
                        "id": number;
                        "nodeType": string;
                        "src": string;
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
                                "arguments"?: undefined;
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "kind"?: undefined;
                                "lValueRequested"?: undefined;
                                "names"?: undefined;
                            } | {
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
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
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
                        "id": number;
                        "nodeType": string;
                        "src": string;
                        "assignments"?: undefined;
                        "declarations"?: undefined;
                        "initialValue"?: undefined;
                        "functionReturnParameters"?: undefined;
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
                                "expression"?: undefined;
                                "memberName"?: undefined;
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
                        "functionReturnParameters": number;
                        "id": number;
                        "nodeType": string;
                        "src": string;
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
                    "statements": {
                        "expression": {
                            "argumentTypes": any;
                            "arguments": any[];
                            "expression": {
                                "argumentTypes": any[];
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
                        "functionReturnParameters": number;
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
                    "parameters": any[];
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
                    "statements": {
                        "expression": {
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
                                "expression"?: undefined;
                                "isConstant"?: undefined;
                                "isLValue"?: undefined;
                                "isPure"?: undefined;
                                "lValueRequested"?: undefined;
                                "memberName"?: undefined;
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
                                "id": number;
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
                                "name"?: undefined;
                                "overloadedDeclarations"?: undefined;
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
                "superFunction": number;
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
                    "statements": {
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
                        "falseBody": any;
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
                                    "arguments": ({
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
                                "id": number;
                                "nodeType": string;
                                "src": string;
                            }[];
                        };
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
    "networks": {
        "42": {
            "events": {
                "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
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
                "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
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
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
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
                "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
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
                "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
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
        "70": {
            "events": {
                "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
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
                "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
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
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
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
                "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
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
                "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
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
            "balanceOf(address)": {
                "details": string;
                "params": {
                    "_owner": string;
                };
                "return": string;
            };
            "exists(uint256)": {
                "details": string;
                "params": {
                    "_tokenId": string;
                };
                "return": string;
            };
            "getApproved(uint256)": {
                "details": string;
                "params": {
                    "_tokenId": string;
                };
                "return": string;
            };
            "isApprovedForAll(address,address)": {
                "details": string;
                "params": {
                    "_operator": string;
                    "_owner": string;
                };
                "return": string;
            };
            "name()": {
                "details": string;
                "return": string;
            };
            "ownerOf(uint256)": {
                "details": string;
                "params": {
                    "_tokenId": string;
                };
                "return": string;
            };
            "pause()": {
                "details": string;
            };
            "symbol()": {
                "details": string;
                "return": string;
            };
            "tokenByIndex(uint256)": {
                "details": string;
                "params": {
                    "_index": string;
                };
                "return": string;
            };
            "tokenOfOwnerByIndex(address,uint256)": {
                "details": string;
                "params": {
                    "_index": string;
                    "_owner": string;
                };
                "return": string;
            };
            "tokenURI(uint256)": {
                "details": string;
                "params": {
                    "_tokenId": string;
                };
            };
            "totalSupply()": {
                "details": string;
                "return": string;
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
            "addAuthorizedMintAgent(address)": {
                "notice": string;
            };
            "addAuthorizedTokenURIAgent(address)": {
                "notice": string;
            };
            "approve(address,uint256)": {
                "notice": string;
            };
            "create(address,address,address,address,uint256,address,bytes32,uint256)": {
                "notice": string;
            };
            "getAuthorizedMintAgents()": {
                "notice": string;
            };
            "getAuthorizedTokenURIAgents()": {
                "notice": string;
            };
            "revokeMintAgentAuthorization(address)": {
                "notice": string;
            };
            "revokeTokenURIAuthorization(address)": {
                "notice": string;
            };
            "safeTransferFrom(address,address,uint256)": {
                "notice": string;
            };
            "safeTransferFrom(address,address,uint256,bytes)": {
                "notice": string;
            };
            "setApprovalForAll(address,bool)": {
                "notice": string;
            };
            "setTokenURI(uint256,string)": {
                "notice": string;
            };
            "supportsInterface(bytes4)": {
                "notice": string;
            };
            "transfer(address,uint256)": {
                "notice": string;
            };
            "transferFrom(address,address,uint256)": {
                "notice": string;
            };
        };
    };
};
