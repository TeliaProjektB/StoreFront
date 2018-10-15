define([], function(){
	"use strict";
	
	function initModule(){

		var swaggerJSONEXAMPLE = {
					  "paths": {
					    "/sendSms": {
					      "post": {
					        "x-auth-type": "Application & Application User",
					        "produces": [
					          "application/json"
					        ],
					        "description": "Send sms through Telia's service",
					        "operationId": "resource_SmsServiceResource_sendSmsMethod_POST",
					        "responses": {
					          "200": {
					            "schema": {
					              "description": "",
					              "$ref": "#/definitions/json_SmsServiceResponse"
					            },
					            "headers": {},
					            "description": "Successful operation"
					          },
					          "400": {
					            "headers": {},
					            "description": "Bad Request"
					          },
					          "500": {
					            "headers": {},
					            "description": "Internal server error"
					          },
					          "default": {
					            "description": "Unexpected error."
					          }
					        },
					        "parameters": [
					          {
					            "schema": {
					              "description": "",
					              "$ref": "#/definitions/json_SmsServiceRequest"
					            },
					            "in": "body",
					            "name": "body",
					            "description": ""
					          }
					        ],
					        "x-throttling-tier": "Unlimited",
					        "tags": [
					          "SmsServiceResource"
					        ],
					        "consumes": [
					          "application/json"
					        ]
					      }
					    }
					  },
					  "schemes": [
					    "https",
					    "http"
					  ],
					  "definitions": {
					    "json_SmsServiceRequest": {
					      "description": "<pre>\n Request consists of the following attributes:\n originator: is the originator which sends sms, halebop or telia.\n destinationnumber: is the phonunumber\n 07* number\n 467* number\n +467* number\n 076 123* number (contains space)\n 07*- number (contains hyphen)\n message: is the message which sends to customer.\n </pre>",
					      "type": "object",
					      "title": "SmsServiceRequest",
					      "properties": {
					        "originator": {
					          "description": "",
					          "type": "string"
					        },
					        "message": {
					          "description": "",
					          "type": "string"
					        },
					        "destinationNumber": {
					          "description": "",
					          "type": "string"
					        }
					      }
					    },
					    "json_SmsServiceResponse": {
					      "description": "<pre>\n Response consists of the following attributes: statusCode, statusMessage.\n statusCode: is a status code for the transaction which is always 0\n statusMessage contains the execution status of the transaction\n </pre>",
					      "type": "object",
					      "title": "SmsServiceResponse",
					      "properties": {
					        "statusMessage": {
					          "description": "The status message for the transaction",
					          "type": "string"
					        },
					        "statusCode": {
					          "description": "The status code for the transaction",
					          "type": "string"
					        }
					      }
					    }
					  },
					  "swagger": "2.0",
					  "info": {
					    "license": {
					      "name": "Apache License, Version 2.0",
					      "url": "http://www.apache.org/licenses/LICENSE-2.0"
					    },
					    "description": "Service that replaces the Agora \"c2b-sms-service\". This service is used for sending text messages with e.g. customer credentials to customers that have ordered new subscription.",
					    "title": "sms-service",
					    "version": "local-build"
					  },
					  "tags": [
					    {
					      "name": "SmsServiceResource"
					    }
					  ],
					  "securityDefinitions": {
					    "default": {
					      "type": "oauth2",
					      "authorizationUrl": "https://apimarket.telia.se:8243/authorize",
					      "flow": "implicit",
					      "scopes": {}
					    }
					  },
					  "basePath": "/sendsms/v1.0.0",
					  "host": "apimarket.telia.se:8243"
					};



		var example2 = {
		    "swagger": "2.0", 
		    "info": {
		        "title": "Account Management", 
		        "description": "This is Swagger UI environment generated for the TMF Account Management specification", 
		        "version": "2.1"
		    }, 
		    "host": "serverRoot", 
		    "basePath": "/tmf-api/accountManagement/v2/", 
		    "schemes": [
		        "https"
		    ], 
		    "consumes": [
		        "application/json"
		    ], 
		    "produces": [
		        "application/json"
		    ], 
		    "paths": {
		        "/partyAccount": {
		            "get": {
		                "operationId": "listPartyAccount", 
		                "summary": "List or find 'PartyAccount' objects", 
		                "tags": [
		                    "partyAccount"
		                ], 
		                "parameters": [
		                    {
		                        "type": "string", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "fields", 
		                        "description": "Comma separated properties to display in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "offset", 
		                        "description": "Requested index for start of resources to be provided in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "limit", 
		                        "description": "Requested number of resources to be provided in response"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/PartyAccount"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "post": {
		                "operationId": "createPartyAccount", 
		                "summary": "Creates a 'PartyAccount'", 
		                "tags": [
		                    "partyAccount"
		                ], 
		                "parameters": [
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/PartyAccount_Create"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "partyAccount", 
		                        "description": "The Party Account to be created"
		                    }
		                ], 
		                "responses": {
		                    "201": {
		                        "description": "Created", 
		                        "schema": {
		                            "$ref": "#/definitions/PartyAccount"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/partyAccount/{id}": {
		            "get": {
		                "operationId": "retrievePartyAccount", 
		                "summary": "Retrieves a 'PartyAccount' by Id", 
		                "tags": [
		                    "partyAccount"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Party Account"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/PartyAccount"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "patch": {
		                "operationId": "patchPartyAccount", 
		                "summary": "Updates partially a 'PartyAccount' by Id", 
		                "tags": [
		                    "partyAccount"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Party Account"
		                    }, 
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/PartyAccount_Update"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "partyAccount", 
		                        "description": "The Party Account to be updated"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Updated", 
		                        "schema": {
		                            "$ref": "#/definitions/PartyAccount"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "delete": {
		                "operationId": "deletePartyAccount", 
		                "summary": "Deletes a 'PartyAccount' by Id", 
		                "tags": [
		                    "partyAccount"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Party Account"
		                    }
		                ], 
		                "responses": {
		                    "204": {
		                        "description": "Deleted"
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/billingAccount": {
		            "get": {
		                "operationId": "listBillingAccount", 
		                "summary": "List or find 'BillingAccount' objects", 
		                "tags": [
		                    "billingAccount"
		                ], 
		                "parameters": [
		                    {
		                        "type": "string", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "fields", 
		                        "description": "Comma separated properties to display in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "offset", 
		                        "description": "Requested index for start of resources to be provided in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "limit", 
		                        "description": "Requested number of resources to be provided in response"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/BillingAccount"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "post": {
		                "operationId": "createBillingAccount", 
		                "summary": "Creates a 'BillingAccount'", 
		                "tags": [
		                    "billingAccount"
		                ], 
		                "parameters": [
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/BillingAccount_Create"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "billingAccount", 
		                        "description": "The Billing Account to be created"
		                    }
		                ], 
		                "responses": {
		                    "201": {
		                        "description": "Created", 
		                        "schema": {
		                            "$ref": "#/definitions/BillingAccount"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/billingAccount/{id}": {
		            "get": {
		                "operationId": "retrieveBillingAccount", 
		                "summary": "Retrieves a 'BillingAccount' by Id", 
		                "tags": [
		                    "billingAccount"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Billing Account"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/BillingAccount"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "patch": {
		                "operationId": "patchBillingAccount", 
		                "summary": "Updates partially a 'BillingAccount' by Id", 
		                "tags": [
		                    "billingAccount"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Billing Account"
		                    }, 
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/BillingAccount_Update"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "billingAccount", 
		                        "description": "The Billing Account to be updated"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Updated", 
		                        "schema": {
		                            "$ref": "#/definitions/BillingAccount"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "delete": {
		                "operationId": "deleteBillingAccount", 
		                "summary": "Deletes a 'BillingAccount' by Id", 
		                "tags": [
		                    "billingAccount"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Billing Account"
		                    }
		                ], 
		                "responses": {
		                    "204": {
		                        "description": "Deleted"
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/settlementAccount": {
		            "get": {
		                "operationId": "listSettlementAccount", 
		                "summary": "List or find 'SettlementAccount' objects", 
		                "tags": [
		                    "settlementAccount"
		                ], 
		                "parameters": [
		                    {
		                        "type": "string", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "fields", 
		                        "description": "Comma separated properties to display in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "offset", 
		                        "description": "Requested index for start of resources to be provided in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "limit", 
		                        "description": "Requested number of resources to be provided in response"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/SettlementAccount"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "post": {
		                "operationId": "createSettlementAccount", 
		                "summary": "Creates a 'SettlementAccount'", 
		                "tags": [
		                    "settlementAccount"
		                ], 
		                "parameters": [
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/SettlementAccount_Create"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "settlementAccount", 
		                        "description": "The Settlement Account to be created"
		                    }
		                ], 
		                "responses": {
		                    "201": {
		                        "description": "Created", 
		                        "schema": {
		                            "$ref": "#/definitions/SettlementAccount"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/settlementAccount/{id}": {
		            "get": {
		                "operationId": "retrieveSettlementAccount", 
		                "summary": "Retrieves a 'SettlementAccount' by Id", 
		                "tags": [
		                    "settlementAccount"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Settlement Account"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/SettlementAccount"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "patch": {
		                "operationId": "patchSettlementAccount", 
		                "summary": "Updates partially a 'SettlementAccount' by Id", 
		                "tags": [
		                    "settlementAccount"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Settlement Account"
		                    }, 
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/SettlementAccount_Update"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "settlementAccount", 
		                        "description": "The Settlement Account to be updated"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Updated", 
		                        "schema": {
		                            "$ref": "#/definitions/SettlementAccount"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "delete": {
		                "operationId": "deleteSettlementAccount", 
		                "summary": "Deletes a 'SettlementAccount' by Id", 
		                "tags": [
		                    "settlementAccount"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Settlement Account"
		                    }
		                ], 
		                "responses": {
		                    "204": {
		                        "description": "Deleted"
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/financialAccount": {
		            "get": {
		                "operationId": "listFinancialAccount", 
		                "summary": "List or find 'FinancialAccount' objects", 
		                "tags": [
		                    "financialAccount"
		                ], 
		                "parameters": [
		                    {
		                        "type": "string", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "fields", 
		                        "description": "Comma separated properties to display in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "offset", 
		                        "description": "Requested index for start of resources to be provided in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "limit", 
		                        "description": "Requested number of resources to be provided in response"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/FinancialAccount"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "post": {
		                "operationId": "createFinancialAccount", 
		                "summary": "Creates a 'FinancialAccount'", 
		                "tags": [
		                    "financialAccount"
		                ], 
		                "parameters": [
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/FinancialAccount_Create"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "financialAccount", 
		                        "description": "The Financial Account to be created"
		                    }
		                ], 
		                "responses": {
		                    "201": {
		                        "description": "Created", 
		                        "schema": {
		                            "$ref": "#/definitions/FinancialAccount"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/financialAccount/{id}": {
		            "get": {
		                "operationId": "retrieveFinancialAccount", 
		                "summary": "Retrieves a 'FinancialAccount' by Id", 
		                "tags": [
		                    "financialAccount"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Financial Account"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/FinancialAccount"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "patch": {
		                "operationId": "patchFinancialAccount", 
		                "summary": "Updates partially a 'FinancialAccount' by Id", 
		                "tags": [
		                    "financialAccount"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Financial Account"
		                    }, 
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/FinancialAccount_Update"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "financialAccount", 
		                        "description": "The Financial Account to be updated"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Updated", 
		                        "schema": {
		                            "$ref": "#/definitions/FinancialAccount"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "delete": {
		                "operationId": "deleteFinancialAccount", 
		                "summary": "Deletes a 'FinancialAccount' by Id", 
		                "tags": [
		                    "financialAccount"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Financial Account"
		                    }
		                ], 
		                "responses": {
		                    "204": {
		                        "description": "Deleted"
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/billingCycleSpecification": {
		            "get": {
		                "operationId": "listBillingCycleSpecification", 
		                "summary": "List or find 'BillingCycleSpecification' objects", 
		                "tags": [
		                    "billingCycleSpecification"
		                ], 
		                "parameters": [
		                    {
		                        "type": "string", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "fields", 
		                        "description": "Comma separated properties to display in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "offset", 
		                        "description": "Requested index for start of resources to be provided in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "limit", 
		                        "description": "Requested number of resources to be provided in response"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/BillingCycleSpecification"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "post": {
		                "operationId": "createBillingCycleSpecification", 
		                "summary": "Creates a 'BillingCycleSpecification'", 
		                "tags": [
		                    "billingCycleSpecification"
		                ], 
		                "parameters": [
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/BillingCycleSpecification_Create"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "billingCycleSpecification", 
		                        "description": "The Billing Cycle Specification to be created"
		                    }
		                ], 
		                "responses": {
		                    "201": {
		                        "description": "Created", 
		                        "schema": {
		                            "$ref": "#/definitions/BillingCycleSpecification"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/billingCycleSpecification/{id}": {
		            "get": {
		                "operationId": "retrieveBillingCycleSpecification", 
		                "summary": "Retrieves a 'BillingCycleSpecification' by Id", 
		                "tags": [
		                    "billingCycleSpecification"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Billing Cycle Specification"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/BillingCycleSpecification"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "patch": {
		                "operationId": "patchBillingCycleSpecification", 
		                "summary": "Updates partially a 'BillingCycleSpecification' by Id", 
		                "tags": [
		                    "billingCycleSpecification"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Billing Cycle Specification"
		                    }, 
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/BillingCycleSpecification_Update"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "billingCycleSpecification", 
		                        "description": "The Billing Cycle Specification to be updated"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Updated", 
		                        "schema": {
		                            "$ref": "#/definitions/BillingCycleSpecification"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "delete": {
		                "operationId": "deleteBillingCycleSpecification", 
		                "summary": "Deletes a 'BillingCycleSpecification' by Id", 
		                "tags": [
		                    "billingCycleSpecification"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Billing Cycle Specification"
		                    }
		                ], 
		                "responses": {
		                    "204": {
		                        "description": "Deleted"
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/billFormat": {
		            "get": {
		                "operationId": "listBillFormat", 
		                "summary": "List or find 'BillFormat' objects", 
		                "tags": [
		                    "billFormat"
		                ], 
		                "parameters": [
		                    {
		                        "type": "string", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "fields", 
		                        "description": "Comma separated properties to display in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "offset", 
		                        "description": "Requested index for start of resources to be provided in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "limit", 
		                        "description": "Requested number of resources to be provided in response"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/BillFormat"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "post": {
		                "operationId": "createBillFormat", 
		                "summary": "Creates a 'BillFormat'", 
		                "tags": [
		                    "billFormat"
		                ], 
		                "parameters": [
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/BillFormat_Create"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "billFormat", 
		                        "description": "The Bill Format to be created"
		                    }
		                ], 
		                "responses": {
		                    "201": {
		                        "description": "Created", 
		                        "schema": {
		                            "$ref": "#/definitions/BillFormat"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/billFormat/{id}": {
		            "get": {
		                "operationId": "retrieveBillFormat", 
		                "summary": "Retrieves a 'BillFormat' by Id", 
		                "tags": [
		                    "billFormat"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Bill Format"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/BillFormat"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "patch": {
		                "operationId": "patchBillFormat", 
		                "summary": "Updates partially a 'BillFormat' by Id", 
		                "tags": [
		                    "billFormat"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Bill Format"
		                    }, 
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/BillFormat_Update"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "billFormat", 
		                        "description": "The Bill Format to be updated"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Updated", 
		                        "schema": {
		                            "$ref": "#/definitions/BillFormat"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "delete": {
		                "operationId": "deleteBillFormat", 
		                "summary": "Deletes a 'BillFormat' by Id", 
		                "tags": [
		                    "billFormat"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Bill Format"
		                    }
		                ], 
		                "responses": {
		                    "204": {
		                        "description": "Deleted"
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/billPresentationMedia": {
		            "get": {
		                "operationId": "listBillPresentationMedia", 
		                "summary": "List or find 'BillPresentationMedia' objects", 
		                "tags": [
		                    "billPresentationMedia"
		                ], 
		                "parameters": [
		                    {
		                        "type": "string", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "fields", 
		                        "description": "Comma separated properties to display in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "offset", 
		                        "description": "Requested index for start of resources to be provided in response"
		                    }, 
		                    {
		                        "type": "integer", 
		                        "required": false, 
		                        "in": "query", 
		                        "name": "limit", 
		                        "description": "Requested number of resources to be provided in response"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/BillPresentationMedia"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "post": {
		                "operationId": "createBillPresentationMedia", 
		                "summary": "Creates a 'BillPresentationMedia'", 
		                "tags": [
		                    "billPresentationMedia"
		                ], 
		                "parameters": [
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/BillPresentationMedia_Create"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "billPresentationMedia", 
		                        "description": "The Bill Presentation Media to be created"
		                    }
		                ], 
		                "responses": {
		                    "201": {
		                        "description": "Created", 
		                        "schema": {
		                            "$ref": "#/definitions/BillPresentationMedia"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/billPresentationMedia/{id}": {
		            "get": {
		                "operationId": "retrieveBillPresentationMedia", 
		                "summary": "Retrieves a 'BillPresentationMedia' by Id", 
		                "tags": [
		                    "billPresentationMedia"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Bill Presentation Media"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Ok", 
		                        "schema": {
		                            "items": {
		                                "$ref": "#/definitions/BillPresentationMedia"
		                            }, 
		                            "type": "array"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "patch": {
		                "operationId": "patchBillPresentationMedia", 
		                "summary": "Updates partially a 'BillPresentationMedia' by Id", 
		                "tags": [
		                    "billPresentationMedia"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Bill Presentation Media"
		                    }, 
		                    {
		                        "schema": {
		                            "$ref": "#/definitions/BillPresentationMedia_Update"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "name": "billPresentationMedia", 
		                        "description": "The Bill Presentation Media to be updated"
		                    }
		                ], 
		                "responses": {
		                    "200": {
		                        "description": "Updated", 
		                        "schema": {
		                            "$ref": "#/definitions/BillPresentationMedia"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }, 
		            "delete": {
		                "operationId": "deleteBillPresentationMedia", 
		                "summary": "Deletes a 'BillPresentationMedia' by Id", 
		                "tags": [
		                    "billPresentationMedia"
		                ], 
		                "parameters": [
		                    {
		                        "required": true, 
		                        "type": "string", 
		                        "name": "id", 
		                        "in": "path", 
		                        "description": "Identifier of the Bill Presentation Media"
		                    }
		                ], 
		                "responses": {
		                    "204": {
		                        "description": "Deleted"
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/hub": {
		            "post": {
		                "operationId": "registerListener", 
		                "summary": "Register a listener", 
		                "description": "Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.", 
		                "tags": [
		                    "events subscription"
		                ], 
		                "parameters": [
		                    {
		                        "name": "data", 
		                        "schema": {
		                            "$ref": "#/definitions/EventSubscriptionInput"
		                        }, 
		                        "required": true, 
		                        "in": "body", 
		                        "description": "Data containing the callback endpoint to deliver the information"
		                    }
		                ], 
		                "responses": {
		                    "201": {
		                        "description": "Subscribed", 
		                        "schema": {
		                            "$ref": "#/definitions/EventSubscription"
		                        }
		                    }, 
		                    "405": {
		                        "description": "Method Not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad Request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "409": {
		                        "description": "Conflict", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }, 
		        "/hub/{id}": {
		            "delete": {
		                "operationId": "unregisterListener", 
		                "summary": "Unregister a listener", 
		                "description": "Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.", 
		                "tags": [
		                    "events subscription"
		                ], 
		                "parameters": [
		                    {
		                        "name": "id", 
		                        "type": "string", 
		                        "required": true, 
		                        "in": "path", 
		                        "description": "The id of the registered listener"
		                    }
		                ], 
		                "responses": {
		                    "204": {
		                        "description": "Deleted"
		                    }, 
		                    "405": {
		                        "description": "Method not allowed", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "404": {
		                        "description": "Not Found", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "403": {
		                        "description": "Forbidden", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "401": {
		                        "description": "Unauthorized", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "400": {
		                        "description": "Bad request", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }, 
		                    "500": {
		                        "description": "Internal Server Error", 
		                        "schema": {
		                            "$ref": "#/definitions/Error"
		                        }
		                    }
		                }
		            }
		        }
		    }, 
		    "definitions": {
		        "FinancialAccount": {
		            "type": "object", 
		            "description": "An account of money owed by a party to another entity in exchange for goods or services that have been delivered or used. A financial (account receivable account/account payable) aggregates the amounts of one or more party accounts (billing or settlement) owned by a given party.", 
		            "required": [
		                "name"
		            ], 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "creditLimit": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "The maximum amount of money that may be charged on an account"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "Detailed description of the party account"
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Unique reference of the account"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of the account"
		                }, 
		                "lastModified": {
		                    "type": "string", 
		                    "format": "date-time", 
		                    "description": "Date of last modification of the account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }, 
		                "state": {
		                    "type": "string", 
		                    "description": "Contains the lifecycle state such as: Active, Closed, Suspended and so on."
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "A categorization of an account, such as individual, joint, and so forth, whose instances share some of the same characteristics. Note: for flexibility we use a String here but an implementation may use an enumeration with a limited list of valid values."
		                }, 
		                "relatedParty": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/RelatedPartyRef"
		                    }
		                }, 
		                "taxExemption": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountTaxExemption"
		                    }
		                }, 
		                "contact": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/Contact"
		                    }
		                }, 
		                "accountBalance": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountBalance"
		                    }
		                }, 
		                "accountRelationship": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountRelationship"
		                    }
		                }
		            }
		        }, 
		        "FinancialAccount_Create": {
		            "type": "object", 
		            "description": "An account of money owed by a party to another entity in exchange for goods or services that have been delivered or used. A financial (account receivable account/account payable) aggregates the amounts of one or more party accounts (billing or settlement) owned by a given party.\nSkipped properties: id,href", 
		            "required": [
		                "name"
		            ], 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "creditLimit": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "The maximum amount of money that may be charged on an account"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "Detailed description of the party account"
		                }, 
		                "lastModified": {
		                    "type": "string", 
		                    "format": "date-time", 
		                    "description": "Date of last modification of the account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }, 
		                "state": {
		                    "type": "string", 
		                    "description": "Contains the lifecycle state such as: Active, Closed, Suspended and so on."
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "A categorization of an account, such as individual, joint, and so forth, whose instances share some of the same characteristics. Note: for flexibility we use a String here but an implementation may use an enumeration with a limited list of valid values."
		                }, 
		                "relatedParty": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/RelatedPartyRef"
		                    }
		                }, 
		                "taxExemption": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountTaxExemption"
		                    }
		                }, 
		                "contact": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/Contact"
		                    }
		                }, 
		                "accountBalance": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountBalance"
		                    }
		                }, 
		                "accountRelationship": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountRelationship"
		                    }
		                }
		            }
		        }, 
		        "FinancialAccount_Update": {
		            "type": "object", 
		            "description": "An account of money owed by a party to another entity in exchange for goods or services that have been delivered or used. A financial (account receivable account/account payable) aggregates the amounts of one or more party accounts (billing or settlement) owned by a given party.\nSkipped properties: id,href,id,href,lastModified", 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "creditLimit": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "The maximum amount of money that may be charged on an account"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "Detailed description of the party account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }, 
		                "state": {
		                    "type": "string", 
		                    "description": "Contains the lifecycle state such as: Active, Closed, Suspended and so on."
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "A categorization of an account, such as individual, joint, and so forth, whose instances share some of the same characteristics. Note: for flexibility we use a String here but an implementation may use an enumeration with a limited list of valid values."
		                }, 
		                "relatedParty": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/RelatedPartyRef"
		                    }
		                }, 
		                "taxExemption": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountTaxExemption"
		                    }
		                }, 
		                "contact": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/Contact"
		                    }
		                }, 
		                "accountBalance": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountBalance"
		                    }
		                }, 
		                "accountRelationship": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountRelationship"
		                    }
		                }
		            }
		        }, 
		        "BillingCycleSpecification": {
		            "type": "object", 
		            "description": "A detailed description of when to initiate a billing cycle and the various sub steps of a billing cycle.", 
		            "required": [
		                "name"
		            ], 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "billingDateShift": {
		                    "type": "integer", 
		                    "description": "An offset of a billing/settlement date. The offset is expressed as number of days with regard to the start of the billing/settlement period."
		                }, 
		                "billingPeriod": {
		                    "type": "string", 
		                    "description": "A billing time period. It can be recurring, for example: week, month, quarter of year, year ."
		                }, 
		                "chargeDateOffset": {
		                    "type": "integer", 
		                    "description": "An offset of a date through which charges previously received by the billing system will appear on the bill. The offset is expressed as number of days with regard to the start of the BillingPeriod."
		                }, 
		                "creditDateOffset": {
		                    "type": "integer", 
		                    "description": "An offset of a date through which credits previously received by the billing system will appear on the bill. The offset is expressed as number of days with regard to the start of the BillingPeriod."
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "An explanation regarding this billing cycle specification"
		                }, 
		                "frequency": {
		                    "type": "string", 
		                    "description": "Frequency of the billing cycle (monthly for instance)"
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Reference of the billing cycle specification"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of the billing cycle specification"
		                }, 
		                "mailingDateOffset": {
		                    "type": "integer", 
		                    "description": "An offset of a customer bill mailing date. The offset is expressed as number of days with regard to the start of the BillingPeriod."
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "A short descriptive name"
		                }, 
		                "paymentDueDateOffset": {
		                    "type": "integer", 
		                    "description": "An offset of a payment due date. The offset is expressed as number of days with regard to the start of the BillingPeriod."
		                }, 
		                "validFor": {
		                    "$ref": "#/definitions/TimePeriod", 
		                    "description": "The period for which the billing specification cycle is valid"
		                }
		            }
		        }, 
		        "BillingCycleSpecification_Create": {
		            "type": "object", 
		            "description": "A detailed description of when to initiate a billing cycle and the various sub steps of a billing cycle.\nSkipped properties: id,href", 
		            "required": [
		                "name"
		            ], 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "billingDateShift": {
		                    "type": "integer", 
		                    "description": "An offset of a billing/settlement date. The offset is expressed as number of days with regard to the start of the billing/settlement period."
		                }, 
		                "billingPeriod": {
		                    "type": "string", 
		                    "description": "A billing time period. It can be recurring, for example: week, month, quarter of year, year ."
		                }, 
		                "chargeDateOffset": {
		                    "type": "integer", 
		                    "description": "An offset of a date through which charges previously received by the billing system will appear on the bill. The offset is expressed as number of days with regard to the start of the BillingPeriod."
		                }, 
		                "creditDateOffset": {
		                    "type": "integer", 
		                    "description": "An offset of a date through which credits previously received by the billing system will appear on the bill. The offset is expressed as number of days with regard to the start of the BillingPeriod."
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "An explanation regarding this billing cycle specification"
		                }, 
		                "frequency": {
		                    "type": "string", 
		                    "description": "Frequency of the billing cycle (monthly for instance)"
		                }, 
		                "mailingDateOffset": {
		                    "type": "integer", 
		                    "description": "An offset of a customer bill mailing date. The offset is expressed as number of days with regard to the start of the BillingPeriod."
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "A short descriptive name"
		                }, 
		                "paymentDueDateOffset": {
		                    "type": "integer", 
		                    "description": "An offset of a payment due date. The offset is expressed as number of days with regard to the start of the BillingPeriod."
		                }, 
		                "validFor": {
		                    "$ref": "#/definitions/TimePeriod", 
		                    "description": "The period for which the billing specification cycle is valid"
		                }
		            }
		        }, 
		        "BillingCycleSpecification_Update": {
		            "type": "object", 
		            "description": "A detailed description of when to initiate a billing cycle and the various sub steps of a billing cycle.\nSkipped properties: id,href,id,href", 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "billingDateShift": {
		                    "type": "integer", 
		                    "description": "An offset of a billing/settlement date. The offset is expressed as number of days with regard to the start of the billing/settlement period."
		                }, 
		                "billingPeriod": {
		                    "type": "string", 
		                    "description": "A billing time period. It can be recurring, for example: week, month, quarter of year, year ."
		                }, 
		                "chargeDateOffset": {
		                    "type": "integer", 
		                    "description": "An offset of a date through which charges previously received by the billing system will appear on the bill. The offset is expressed as number of days with regard to the start of the BillingPeriod."
		                }, 
		                "creditDateOffset": {
		                    "type": "integer", 
		                    "description": "An offset of a date through which credits previously received by the billing system will appear on the bill. The offset is expressed as number of days with regard to the start of the BillingPeriod."
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "An explanation regarding this billing cycle specification"
		                }, 
		                "frequency": {
		                    "type": "string", 
		                    "description": "Frequency of the billing cycle (monthly for instance)"
		                }, 
		                "mailingDateOffset": {
		                    "type": "integer", 
		                    "description": "An offset of a customer bill mailing date. The offset is expressed as number of days with regard to the start of the BillingPeriod."
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "A short descriptive name"
		                }, 
		                "paymentDueDateOffset": {
		                    "type": "integer", 
		                    "description": "An offset of a payment due date. The offset is expressed as number of days with regard to the start of the BillingPeriod."
		                }, 
		                "validFor": {
		                    "$ref": "#/definitions/TimePeriod", 
		                    "description": "The period for which the billing specification cycle is valid"
		                }
		            }
		        }, 
		        "BillFormat": {
		            "type": "object", 
		            "description": "A detailed description of the way in which a bill is presented.", 
		            "required": [
		                "name"
		            ], 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "An explanatory text for this bill format"
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Reference of the bill format"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of the bill format"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "A short descriptive name"
		                }
		            }
		        }, 
		        "BillFormat_Create": {
		            "type": "object", 
		            "description": "A detailed description of the way in which a bill is presented.\nSkipped properties: id,href", 
		            "required": [
		                "name"
		            ], 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "An explanatory text for this bill format"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "A short descriptive name"
		                }
		            }
		        }, 
		        "BillFormat_Update": {
		            "type": "object", 
		            "description": "A detailed description of the way in which a bill is presented.\nSkipped properties: id,href,id,href", 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "An explanatory text for this bill format"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "A short descriptive name"
		                }
		            }
		        }, 
		        "BillPresentationMedia": {
		            "type": "object", 
		            "description": "A mean of communicating a bill, supported by the associated bill format. For example, post mail, email, web page.", 
		            "required": [
		                "name"
		            ], 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "An explanatory text describing this bill presentation media"
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Reference of the bill presentation media"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of the bill presentation media"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "A short descriptive name"
		                }
		            }
		        }, 
		        "BillPresentationMedia_Create": {
		            "type": "object", 
		            "description": "A mean of communicating a bill, supported by the associated bill format. For example, post mail, email, web page.\nSkipped properties: id,href", 
		            "required": [
		                "name"
		            ], 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "An explanatory text describing this bill presentation media"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "A short descriptive name"
		                }
		            }
		        }, 
		        "BillPresentationMedia_Update": {
		            "type": "object", 
		            "description": "A mean of communicating a bill, supported by the associated bill format. For example, post mail, email, web page.\nSkipped properties: id,href,id,href", 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "An explanatory text describing this bill presentation media"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "A short descriptive name"
		                }
		            }
		        }, 
		        "PartyAccount": {
		            "type": "object", 
		            "description": "Account used for billing or for settlement purposes concerning a given party (an organization or an individual).", 
		            "required": [
		                "name"
		            ], 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "creditLimit": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "The maximum amount of money that may be charged on an account"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "Detailed description of the party account"
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Unique reference of the account"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of the account"
		                }, 
		                "lastModified": {
		                    "type": "string", 
		                    "format": "date-time", 
		                    "description": "Date of last modification of the account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }, 
		                "state": {
		                    "type": "string", 
		                    "description": "Contains the lifecycle state such as: Active, Closed, Suspended and so on."
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "A categorization of an account, such as individual, joint, and so forth, whose instances share some of the same characteristics. Note: for flexibility we use a String here but an implementation may use an enumeration with a limited list of valid values."
		                }, 
		                "paymentStatus": {
		                    "type": "string", 
		                    "description": "The condition of the account, such as due, paid, in arrears."
		                }, 
		                "billStructure": {
		                    "$ref": "#/definitions/BillStructure"
		                }, 
		                "paymentPlan": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/PaymentPlan"
		                    }
		                }, 
		                "financialAccount": {
		                    "$ref": "#/definitions/FinancialAccountRef"
		                }, 
		                "defaultPaymentMethod": {
		                    "$ref": "#/definitions/PaymentMethodRef"
		                }, 
		                "relatedParty": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/RelatedPartyRef"
		                    }
		                }, 
		                "taxExemption": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountTaxExemption"
		                    }
		                }, 
		                "contact": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/Contact"
		                    }
		                }, 
		                "accountBalance": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountBalance"
		                    }
		                }, 
		                "accountRelationship": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountRelationship"
		                    }
		                }
		            }
		        }, 
		        "PartyAccount_Create": {
		            "type": "object", 
		            "description": "Account used for billing or for settlement purposes concerning a given party (an organization or an individual).\nSkipped properties: id,href", 
		            "required": [
		                "name", 
		                "relatedParty"
		            ], 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "creditLimit": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "The maximum amount of money that may be charged on an account"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "Detailed description of the party account"
		                }, 
		                "lastModified": {
		                    "type": "string", 
		                    "format": "date-time", 
		                    "description": "Date of last modification of the account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }, 
		                "state": {
		                    "type": "string", 
		                    "description": "Contains the lifecycle state such as: Active, Closed, Suspended and so on."
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "A categorization of an account, such as individual, joint, and so forth, whose instances share some of the same characteristics. Note: for flexibility we use a String here but an implementation may use an enumeration with a limited list of valid values."
		                }, 
		                "paymentStatus": {
		                    "type": "string", 
		                    "description": "The condition of the account, such as due, paid, in arrears."
		                }, 
		                "billStructure": {
		                    "$ref": "#/definitions/BillStructure"
		                }, 
		                "paymentPlan": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/PaymentPlan"
		                    }
		                }, 
		                "financialAccount": {
		                    "$ref": "#/definitions/FinancialAccountRef"
		                }, 
		                "defaultPaymentMethod": {
		                    "$ref": "#/definitions/PaymentMethodRef"
		                }, 
		                "relatedParty": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/RelatedPartyRef"
		                    }
		                }, 
		                "taxExemption": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountTaxExemption"
		                    }
		                }, 
		                "contact": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/Contact"
		                    }
		                }, 
		                "accountBalance": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountBalance"
		                    }
		                }, 
		                "accountRelationship": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountRelationship"
		                    }
		                }
		            }
		        }, 
		        "PartyAccount_Update": {
		            "type": "object", 
		            "description": "Account used for billing or for settlement purposes concerning a given party (an organization or an individual).\nSkipped properties: id,href,id,href,accountBalance", 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "creditLimit": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "The maximum amount of money that may be charged on an account"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "Detailed description of the party account"
		                }, 
		                "lastModified": {
		                    "type": "string", 
		                    "format": "date-time", 
		                    "description": "Date of last modification of the account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }, 
		                "state": {
		                    "type": "string", 
		                    "description": "Contains the lifecycle state such as: Active, Closed, Suspended and so on."
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "A categorization of an account, such as individual, joint, and so forth, whose instances share some of the same characteristics. Note: for flexibility we use a String here but an implementation may use an enumeration with a limited list of valid values."
		                }, 
		                "paymentStatus": {
		                    "type": "string", 
		                    "description": "The condition of the account, such as due, paid, in arrears."
		                }, 
		                "billStructure": {
		                    "$ref": "#/definitions/BillStructure"
		                }, 
		                "paymentPlan": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/PaymentPlan"
		                    }
		                }, 
		                "financialAccount": {
		                    "$ref": "#/definitions/FinancialAccountRef"
		                }, 
		                "defaultPaymentMethod": {
		                    "$ref": "#/definitions/PaymentMethodRef"
		                }, 
		                "relatedParty": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/RelatedPartyRef"
		                    }
		                }, 
		                "taxExemption": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountTaxExemption"
		                    }
		                }, 
		                "contact": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/Contact"
		                    }
		                }, 
		                "accountRelationship": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountRelationship"
		                    }
		                }
		            }
		        }, 
		        "BillingAccount": {
		            "type": "object", 
		            "description": "A party account used for billing purposes. It includes a description of the bill structure (frequency, presentation media, format and so on).", 
		            "required": [
		                "name", 
		                "relatedParty"
		            ], 
		            "properties": {
		                "paymentStatus": {
		                    "type": "string", 
		                    "description": "The condition of the account, such as due, paid, in arrears."
		                }, 
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "creditLimit": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "The maximum amount of money that may be charged on an account"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "Detailed description of the party account"
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Unique reference of the account"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of the account"
		                }, 
		                "lastModified": {
		                    "type": "string", 
		                    "format": "date-time", 
		                    "description": "Date of last modification of the account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }, 
		                "state": {
		                    "type": "string", 
		                    "description": "Contains the lifecycle state such as: Active, Closed, Suspended and so on."
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "A categorization of an account, such as individual, joint, and so forth, whose instances share some of the same characteristics. Note: for flexibility we use a String here but an implementation may use an enumeration with a limited list of valid values."
		                }, 
		                "billStructure": {
		                    "$ref": "#/definitions/BillStructure"
		                }, 
		                "paymentPlan": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/PaymentPlan"
		                    }
		                }, 
		                "financialAccount": {
		                    "$ref": "#/definitions/FinancialAccountRef"
		                }, 
		                "defaultPaymentMethod": {
		                    "$ref": "#/definitions/PaymentMethodRef"
		                }, 
		                "relatedParty": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/RelatedPartyRef"
		                    }
		                }, 
		                "taxExemption": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountTaxExemption"
		                    }
		                }, 
		                "contact": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/Contact"
		                    }
		                }, 
		                "accountBalance": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountBalance"
		                    }
		                }, 
		                "accountRelationship": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountRelationship"
		                    }
		                }
		            }
		        }, 
		        "BillingAccount_Create": {
		            "type": "object", 
		            "description": "A party account used for billing purposes. It includes a description of the bill structure (frequency, presentation media, format and so on).\nSkipped properties: id,href", 
		            "required": [
		                "name", 
		                "relatedParty"
		            ], 
		            "properties": {
		                "paymentStatus": {
		                    "type": "string", 
		                    "description": "The condition of the account, such as due, paid, in arrears."
		                }, 
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "creditLimit": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "The maximum amount of money that may be charged on an account"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "Detailed description of the party account"
		                }, 
		                "lastModified": {
		                    "type": "string", 
		                    "format": "date-time", 
		                    "description": "Date of last modification of the account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }, 
		                "state": {
		                    "type": "string", 
		                    "description": "Contains the lifecycle state such as: Active, Closed, Suspended and so on."
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "A categorization of an account, such as individual, joint, and so forth, whose instances share some of the same characteristics. Note: for flexibility we use a String here but an implementation may use an enumeration with a limited list of valid values."
		                }, 
		                "billStructure": {
		                    "$ref": "#/definitions/BillStructure"
		                }, 
		                "paymentPlan": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/PaymentPlan"
		                    }
		                }, 
		                "financialAccount": {
		                    "$ref": "#/definitions/FinancialAccountRef"
		                }, 
		                "defaultPaymentMethod": {
		                    "$ref": "#/definitions/PaymentMethodRef"
		                }, 
		                "relatedParty": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/RelatedPartyRef"
		                    }
		                }, 
		                "taxExemption": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountTaxExemption"
		                    }
		                }, 
		                "contact": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/Contact"
		                    }
		                }, 
		                "accountBalance": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountBalance"
		                    }
		                }, 
		                "accountRelationship": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountRelationship"
		                    }
		                }
		            }
		        }, 
		        "BillingAccount_Update": {
		            "type": "object", 
		            "description": "A party account used for billing purposes. It includes a description of the bill structure (frequency, presentation media, format and so on).\nSkipped properties: id,href,id,href,accountBalance", 
		            "properties": {
		                "paymentStatus": {
		                    "type": "string", 
		                    "description": "The condition of the account, such as due, paid, in arrears."
		                }, 
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "creditLimit": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "The maximum amount of money that may be charged on an account"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "Detailed description of the party account"
		                }, 
		                "lastModified": {
		                    "type": "string", 
		                    "format": "date-time", 
		                    "description": "Date of last modification of the account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }, 
		                "state": {
		                    "type": "string", 
		                    "description": "Contains the lifecycle state such as: Active, Closed, Suspended and so on."
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "A categorization of an account, such as individual, joint, and so forth, whose instances share some of the same characteristics. Note: for flexibility we use a String here but an implementation may use an enumeration with a limited list of valid values."
		                }, 
		                "billStructure": {
		                    "$ref": "#/definitions/BillStructure"
		                }, 
		                "paymentPlan": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/PaymentPlan"
		                    }
		                }, 
		                "financialAccount": {
		                    "$ref": "#/definitions/FinancialAccountRef"
		                }, 
		                "defaultPaymentMethod": {
		                    "$ref": "#/definitions/PaymentMethodRef"
		                }, 
		                "relatedParty": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/RelatedPartyRef"
		                    }
		                }, 
		                "taxExemption": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountTaxExemption"
		                    }
		                }, 
		                "contact": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/Contact"
		                    }
		                }, 
		                "accountRelationship": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountRelationship"
		                    }
		                }
		            }
		        }, 
		        "SettlementAccount": {
		            "type": "object", 
		            "description": "A party account used for settlement purposes. It includes a description of the structure used for the settlement (frequency, presentation media, format and so on).", 
		            "required": [
		                "name", 
		                "relatedParty"
		            ], 
		            "properties": {
		                "paymentStatus": {
		                    "type": "string", 
		                    "description": "The condition of the account, such as due, paid, in arrears."
		                }, 
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "creditLimit": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "The maximum amount of money that may be charged on an account"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "Detailed description of the party account"
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Unique reference of the account"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of the account"
		                }, 
		                "lastModified": {
		                    "type": "string", 
		                    "format": "date-time", 
		                    "description": "Date of last modification of the account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }, 
		                "state": {
		                    "type": "string", 
		                    "description": "Contains the lifecycle state such as: Active, Closed, Suspended and so on."
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "A categorization of an account, such as individual, joint, and so forth, whose instances share some of the same characteristics. Note: for flexibility we use a String here but an implementation may use an enumeration with a limited list of valid values."
		                }, 
		                "billStructure": {
		                    "$ref": "#/definitions/BillStructure"
		                }, 
		                "paymentPlan": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/PaymentPlan"
		                    }
		                }, 
		                "financialAccount": {
		                    "$ref": "#/definitions/FinancialAccountRef"
		                }, 
		                "defaultPaymentMethod": {
		                    "$ref": "#/definitions/PaymentMethodRef"
		                }, 
		                "relatedParty": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/RelatedPartyRef"
		                    }
		                }, 
		                "taxExemption": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountTaxExemption"
		                    }
		                }, 
		                "contact": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/Contact"
		                    }
		                }, 
		                "accountBalance": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountBalance"
		                    }
		                }, 
		                "accountRelationship": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountRelationship"
		                    }
		                }
		            }
		        }, 
		        "SettlementAccount_Create": {
		            "type": "object", 
		            "description": "A party account used for settlement purposes. It includes a description of the structure used for the settlement (frequency, presentation media, format and so on).\nSkipped properties: id,href", 
		            "required": [
		                "name", 
		                "relatedParty"
		            ], 
		            "properties": {
		                "paymentStatus": {
		                    "type": "string", 
		                    "description": "The condition of the account, such as due, paid, in arrears."
		                }, 
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "creditLimit": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "The maximum amount of money that may be charged on an account"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "Detailed description of the party account"
		                }, 
		                "lastModified": {
		                    "type": "string", 
		                    "format": "date-time", 
		                    "description": "Date of last modification of the account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }, 
		                "state": {
		                    "type": "string", 
		                    "description": "Contains the lifecycle state such as: Active, Closed, Suspended and so on."
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "A categorization of an account, such as individual, joint, and so forth, whose instances share some of the same characteristics. Note: for flexibility we use a String here but an implementation may use an enumeration with a limited list of valid values."
		                }, 
		                "billStructure": {
		                    "$ref": "#/definitions/BillStructure"
		                }, 
		                "paymentPlan": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/PaymentPlan"
		                    }
		                }, 
		                "financialAccount": {
		                    "$ref": "#/definitions/FinancialAccountRef"
		                }, 
		                "defaultPaymentMethod": {
		                    "$ref": "#/definitions/PaymentMethodRef"
		                }, 
		                "relatedParty": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/RelatedPartyRef"
		                    }
		                }, 
		                "taxExemption": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountTaxExemption"
		                    }
		                }, 
		                "contact": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/Contact"
		                    }
		                }, 
		                "accountBalance": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountBalance"
		                    }
		                }, 
		                "accountRelationship": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountRelationship"
		                    }
		                }
		            }
		        }, 
		        "SettlementAccount_Update": {
		            "type": "object", 
		            "description": "A party account used for settlement purposes. It includes a description of the structure used for the settlement (frequency, presentation media, format and so on).\nSkipped properties: id,href,id,href,accountBalance", 
		            "properties": {
		                "paymentStatus": {
		                    "type": "string", 
		                    "description": "The condition of the account, such as due, paid, in arrears."
		                }, 
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "creditLimit": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "The maximum amount of money that may be charged on an account"
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "Detailed description of the party account"
		                }, 
		                "lastModified": {
		                    "type": "string", 
		                    "format": "date-time", 
		                    "description": "Date of last modification of the account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }, 
		                "state": {
		                    "type": "string", 
		                    "description": "Contains the lifecycle state such as: Active, Closed, Suspended and so on."
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "A categorization of an account, such as individual, joint, and so forth, whose instances share some of the same characteristics. Note: for flexibility we use a String here but an implementation may use an enumeration with a limited list of valid values."
		                }, 
		                "billStructure": {
		                    "$ref": "#/definitions/BillStructure"
		                }, 
		                "paymentPlan": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/PaymentPlan"
		                    }
		                }, 
		                "financialAccount": {
		                    "$ref": "#/definitions/FinancialAccountRef"
		                }, 
		                "defaultPaymentMethod": {
		                    "$ref": "#/definitions/PaymentMethodRef"
		                }, 
		                "relatedParty": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/RelatedPartyRef"
		                    }
		                }, 
		                "taxExemption": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountTaxExemption"
		                    }
		                }, 
		                "contact": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/Contact"
		                    }
		                }, 
		                "accountRelationship": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/AccountRelationship"
		                    }
		                }
		            }
		        }, 
		        "Money": {
		            "type": "object", 
		            "description": "A base / value business entity used to represent money", 
		            "properties": {
		                "unit": {
		                    "type": "string", 
		                    "description": "Currency (ISO4217 norm uses 3 letters to define the currency)"
		                }, 
		                "value": {
		                    "type": "number", 
		                    "format": "float", 
		                    "description": "A positive floating point number"
		                }
		            }
		        }, 
		        "RelatedPartyRef": {
		            "type": "object", 
		            "description": "RelatedParty reference. A related party defines party or party role linked to a specific entity.", 
		            "required": [
		                "id", 
		                "name"
		            ], 
		            "properties": {
		                "@referredType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the name of the class type of the referred resource entity."
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Reference of the related party, could be a party reference or a party role reference"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of a related party"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the related party"
		                }, 
		                "role": {
		                    "type": "string", 
		                    "description": "Role of the related party."
		                }
		            }
		        }, 
		        "AccountTaxExemption": {
		            "type": "object", 
		            "description": "Proof of freedom from taxes imposed by a taxing jurisdiction", 
		            "required": [
		                "issuingJurisdiction", 
		                "validFor"
		            ], 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "certificateNumber": {
		                    "type": "string", 
		                    "description": "Identifier of a document that shows proof of exemption from taxes for the taxing jurisdiction"
		                }, 
		                "issuingJurisdiction": {
		                    "type": "string", 
		                    "description": "Name of the taxing jurisdiction for which taxes are exempt"
		                }, 
		                "reason": {
		                    "type": "string", 
		                    "description": "Reason of the tax exemption"
		                }, 
		                "validFor": {
		                    "$ref": "#/definitions/TimePeriod", 
		                    "description": "Period for which the exemption is valid"
		                }
		            }
		        }, 
		        "Contact": {
		            "type": "object", 
		            "description": "An individual or an organization used as a contact point for a given account and accessed via some contact medium.", 
		            "required": [
		                "contactType", 
		                "validFor"
		            ], 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "contactName": {
		                    "type": "string", 
		                    "description": "A displayable name for that contact"
		                }, 
		                "contactType": {
		                    "type": "string", 
		                    "description": "Type of contact (primary, secondary...)"
		                }, 
		                "partyRoleType": {
		                    "type": "string", 
		                    "description": "Identifies what kind of party role type is linked to the contact (a account manager...)"
		                }, 
		                "validFor": {
		                    "$ref": "#/definitions/TimePeriod", 
		                    "description": "Validity period of that contact"
		                }, 
		                "contactMedium": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/ContactMedium"
		                    }
		                }, 
		                "relatedParty": {
		                    "$ref": "#/definitions/RelatedPartyRef"
		                }
		            }
		        }, 
		        "AccountBalance": {
		            "type": "object", 
		            "description": "Balances linked to the account", 
		            "required": [
		                "type", 
		                "amount", 
		                "validFor"
		            ], 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "amount": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "Balance amount"
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "Type of the balance : deposit balance, disputed balance, loyalty balance, receivable balance..."
		                }, 
		                "validFor": {
		                    "$ref": "#/definitions/TimePeriod", 
		                    "description": "Balance validity period"
		                }
		            }
		        }, 
		        "AccountRelationship": {
		            "type": "object", 
		            "description": "Significant connection between accounts. For instance an aggregating account for a list of shop branches each having its own billing account.", 
		            "required": [
		                "relationshipType", 
		                "validFor"
		            ], 
		            "properties": {
		                "relationshipType": {
		                    "type": "string", 
		                    "description": "Type of relationship"
		                }, 
		                "validFor": {
		                    "$ref": "#/definitions/TimePeriod", 
		                    "description": "Validity period of that relationship"
		                }, 
		                "account": {
		                    "$ref": "#/definitions/AccountRef"
		                }
		            }
		        }, 
		        "TimePeriod": {
		            "type": "object", 
		            "description": "A base / value business entity used to represent a period of time between two timepoints.", 
		            "properties": {
		                "endDateTime": {
		                    "type": "string", 
		                    "format": "date-time", 
		                    "description": "An instant of time, ending at the TimePeriod."
		                }, 
		                "startDateTime": {
		                    "type": "string", 
		                    "format": "date-time", 
		                    "description": "An instant of time, starting at the TimePeriod"
		                }
		            }
		        }, 
		        "ContactMedium": {
		            "type": "object", 
		            "description": "Indicates the contact medium that could be used to contact the party.", 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "preferred": {
		                    "type": "boolean", 
		                    "description": "If true, indicates that is the preferred contact medium"
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "Type of the contact medium, such as: email address, telephone number, postal address"
		                }, 
		                "validFor": {
		                    "$ref": "#/definitions/TimePeriod", 
		                    "description": "The time period that the contact medium is valid for"
		                }, 
		                "characteristic": {
		                    "$ref": "#/definitions/MediumCharacteristic"
		                }
		            }
		        }, 
		        "MediumCharacteristic": {
		            "type": "object", 
		            "description": "Describes the contact medium characteristics that could be used to contact a party (an individual or an organization)", 
		            "properties": {
		                "city": {
		                    "type": "string", 
		                    "description": "The city"
		                }, 
		                "country": {
		                    "type": "string", 
		                    "description": "The country"
		                }, 
		                "emailAddress": {
		                    "type": "string", 
		                    "description": "Full email address in standard format"
		                }, 
		                "faxNumber": {
		                    "type": "string", 
		                    "description": "The fax number of the contact"
		                }, 
		                "phoneNumber": {
		                    "type": "string", 
		                    "description": "The primary phone number of the contact"
		                }, 
		                "postCode": {
		                    "type": "string", 
		                    "description": "Postcode"
		                }, 
		                "stateOrProvince": {
		                    "type": "string", 
		                    "description": "State or province"
		                }, 
		                "street1": {
		                    "type": "string", 
		                    "description": "Describes the street"
		                }, 
		                "street2": {
		                    "type": "string", 
		                    "description": "Complementary street description"
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "Type of medium (fax, mobile phone...)"
		                }
		            }
		        }, 
		        "AccountRef": {
		            "type": "object", 
		            "description": "Account reference. A account may be a party account or a financial account.", 
		            "properties": {
		                "@referredType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the name of the class type of the referred resource entity."
		                }, 
		                "description": {
		                    "type": "string", 
		                    "description": "Detailed description of the account"
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Reference of the account"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of the account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }
		            }
		        }, 
		        "BillStructure": {
		            "type": "object", 
		            "description": "The structure of the bill for party accounts (billling or settlement).", 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "presentationMedia": {
		                    "type": "array", 
		                    "items": {
		                        "$ref": "#/definitions/BillPresentationMediaRef"
		                    }
		                }, 
		                "format": {
		                    "$ref": "#/definitions/BillFormatRef"
		                }, 
		                "cycleSpecification": {
		                    "$ref": "#/definitions/BillingCycleSpecificationRef"
		                }
		            }
		        }, 
		        "PaymentPlan": {
		            "type": "object", 
		            "description": "Defines a plan for payment (when a party wants to spread his payments)", 
		            "properties": {
		                "@baseType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the link to the schema that defines the structure of the class type of the current object."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "Generic attribute containing the name of the resource class type"
		                }, 
		                "numberOfPayments": {
		                    "type": "integer", 
		                    "description": "Number of payments used to spread the global payment"
		                }, 
		                "paymentFrequency": {
		                    "type": "string", 
		                    "description": "Frequency of the payments, such as monthly and bimonthly"
		                }, 
		                "priority": {
		                    "type": "integer", 
		                    "description": "Priority of the payment plan"
		                }, 
		                "status": {
		                    "type": "string", 
		                    "description": "Status of the payment plan (effective, ineffective)"
		                }, 
		                "totalAmount": {
		                    "$ref": "#/definitions/Money", 
		                    "description": "Amount paid"
		                }, 
		                "type": {
		                    "type": "string", 
		                    "description": "Type of payment plan"
		                }, 
		                "validFor": {
		                    "$ref": "#/definitions/TimePeriod", 
		                    "description": "Validity period of the payment plan"
		                }, 
		                "paymentMethod": {
		                    "$ref": "#/definitions/PaymentMethodRef"
		                }
		            }
		        }, 
		        "FinancialAccountRef": {
		            "type": "object", 
		            "description": "AccountReceivable reference. An account of money owed by a party to another entity in exchange for goods or services that have been delivered or used. An account receivable aggregates the amounts of one or more party accounts (billing or settlement) owned by a given party.", 
		            "properties": {
		                "@referredType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the name of the class type of the referred resource entity."
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Unique reference of the account"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of the account"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the account"
		                }, 
		                "accountBalance": {
		                    "$ref": "#/definitions/AccountBalance"
		                }
		            }
		        }, 
		        "PaymentMethodRef": {
		            "type": "object", 
		            "description": "PaymentMethod reference. A payment method defines a specific mean of payment (e.g direct debit).", 
		            "properties": {
		                "@referredType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the name of the class type of the referred resource entity."
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Reference of the payment mean"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of the payment mean"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "Name of the payment mean"
		                }
		            }
		        }, 
		        "BillPresentationMediaRef": {
		            "type": "object", 
		            "description": "PresentationMedia reference. A mean of communicating a bill, supported by the associated bill format. For example, post mail, email, web page.", 
		            "properties": {
		                "@referredType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the name of the class type of the referred resource entity."
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Reference of the bill presentation media"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of the bill presentation media"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "A short descriptive name"
		                }
		            }
		        }, 
		        "BillFormatRef": {
		            "type": "object", 
		            "description": "BillFormat reference. A bill format is a description of the way in which a bill is presented.", 
		            "properties": {
		                "@referredType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the name of the class type of the referred resource entity."
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Reference of the bill format"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of the bill format"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "A short descriptive name"
		                }
		            }
		        }, 
		        "BillingCycleSpecificationRef": {
		            "type": "object", 
		            "description": "BillingCycleSpecification reference. A description of when to initiate a billing cycle and the various sub steps of a billing cycle.", 
		            "properties": {
		                "@referredType": {
		                    "type": "string", 
		                    "description": "Generic attribute indicating the name of the class type of the referred resource entity."
		                }, 
		                "dateShift": {
		                    "type": "integer", 
		                    "description": "An offset of a billing/settlement date. The offset is expressed as number of days with regard to the start of the billing/settlement period."
		                }, 
		                "frequency": {
		                    "type": "string", 
		                    "description": "Frequency of the billing cycle (monthly for instance)"
		                }, 
		                "href": {
		                    "type": "string", 
		                    "description": "Reference of the billing cycle specification"
		                }, 
		                "id": {
		                    "type": "string", 
		                    "description": "Unique identifier of the billing cycle specification"
		                }, 
		                "name": {
		                    "type": "string", 
		                    "description": "A short descriptive name"
		                }
		            }
		        }, 
		        "EventSubscription": {
		            "required": [
		                "id", 
		                "callback"
		            ], 
		            "properties": {
		                "id": {
		                    "type": "string", 
		                    "description": "Id of the listener"
		                }, 
		                "callback": {
		                    "type": "string", 
		                    "description": "The callback being registered."
		                }, 
		                "query": {
		                    "type": "string", 
		                    "description": "additional data to be passed"
		                }
		            }
		        }, 
		        "EventSubscriptionInput": {
		            "required": [
		                "callback"
		            ], 
		            "properties": {
		                "callback": {
		                    "type": "string", 
		                    "description": "The callback being registered."
		                }, 
		                "query": {
		                    "type": "string", 
		                    "description": "additional data to be passed"
		                }
		            }
		        }, 
		        "Error": {
		            "required": [
		                "code", 
		                "reason"
		            ], 
		            "properties": {
		                "code": {
		                    "type": "integer", 
		                    "description": "Application related code."
		                }, 
		                "reason": {
		                    "type": "integer", 
		                    "description": "Text that explains the reason for error."
		                }, 
		                "message": {
		                    "type": "string", 
		                    "description": "(optional) Text that provide more details and corrective actions related to the error."
		                }, 
		                "status": {
		                    "type": "integer", 
		                    "description": "(optional) http error code extension like 400-2"
		                }, 
		                "referenceError": {
		                    "type": "string", 
		                    "description": "(optional) A URL to online documentation that provides more information about the error."
		                }, 
		                "@type": {
		                    "type": "string", 
		                    "description": "(optional) The class type of a REST resource."
		                }, 
		                "@schemaLocation": {
		                    "type": "string", 
		                    "description": "(optional) A link to the schema describing a REST resource."
		                }
		            }
		        }
		    }
		};

		this.getSwagger = function(apiId, onLoad){
			onLoad(example2);
		}

		

	}return{
		init: initModule
	}


});