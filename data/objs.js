var formObj = {
    "a": {
        "schema": {
            "title": "User Feedback - Part 1",
            "description": "What do you think about Alpaca?",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "title": "Name"
                },
                "feedback": {
                    "type": "string",
                    "title": "Feedback"
                },
                "ranking": {
                    "type": "string",
                    "title": "Ranking",
                    "enum": ['excellent', 'ok', 'so so']
                }
            }
        },
        "options": {
            "helper": "Tell us what you think about Alpaca!",
            "fields": {
                "name": {
                    "size": 20,
                    "helper": "Please enter your name.",
                    "placeholder": "Enter your name"
                },
                "feedback": {
                    "type": "textarea",
                    "rows": 5,
                    "cols": 40,
                    "helper": "Please enter your feedback."
                },
                "ranking": {
                    "type": "select",
                    "helper": "Select your ranking.",
                    "optionLabels": ["Awesome!", "It's Ok", "Hmm..."]
                }
            }
        }
    },

    "b": {
        "schema": {
            "title": "User Feedback - Part 2",
            "description": "What do you think about Alpaca?",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "title": "Name"
                },
                "feedback": {
                    "type": "string",
                    "title": "Feedback"
                },
                "ranking": {
                    "type": "string",
                    "title": "Ranking",
                    "enum": ['excellent', 'ok', 'so so']
                }
            }
        }
    },

    "c": {
        "schema": {
            "title": "Customer Profile",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "organization": {
                    "type": "string"
                },
                "workPhone": {
                    "type": "string"
                },
                "cellPhone": {
                    "type": "string"
                },
                "address1": {
                    "type": "string"
                },
                "city": {
                    "type": "string"
                },
                "state": {
                    "type": "string"
                },
                "zipcode": {
                    "type": "string"
                },
                "country": {
                    "type": "string"
                },
                "emergencyContact": {
                    "type": "string"
                },
                "vegetarian": {
                    "type": "boolean",
                    "required": true,
                    "enum": [true, false],
                    "default": false
                },
                "dietaryComments": {
                    "type": "string"
                },
                "roomJune3": {
                    "type": "boolean",
                    "required": true,
                    "enum": [true, false],
                    "default": false
                },
                "smoking": {
                    "type": "boolean",
                    "required": true,
                    "enum": [true, false],
                    "default": false,
                    "readonly": true
                },
                "dinnerJune3": {
                    "type": "boolean",
                    "required": true,
                    "enum": [true, false],
                    "default": false
                },
                "dinnerJune4": {
                    "type": "boolean",
                    "required": true,
                    "enum": [true, false],
                    "default": false
                },
                "cambridgeTour": {
                    "type": "boolean",
                    "required": true,
                    "enum": [true, false],
                    "default": false
                },
                "labWebsite": {
                    "type": "string",
                    "format": "uri"
                },
                "photoFile": {
                    "type": "string",
                    "format": "uri"
                },
                "researchDescription": {
                    "type": "string"
                }
            }
        },
        options: {
            "fields": {
                "name": {
                    "type": "text",
                    "label": "Name:"
                },
                "email": {
                    "type": "email",
                    "label": "Email Address:"
                },
                "organization": {
                    "type": "text",
                    "label": "Organization:"
                },
                "workPhone": {
                    "type": "phone",
                    "label": "Work phone:"
                },
                "cellPhone": {
                    "type": "phone",
                    "label": "Cell phone:"
                },
                "address1": {
                    "type": "text",
                    "label": "Address:"
                },
                "city": {
                    "type": "text",
                    "label": "City:"
                },
                "state": {
                    "type": "state",
                    "label": "State:"
                },
                "zipcode": {
                    "type": "zipcode",
                    "label": "Zip/Postal code:"
                },
                "country": {
                    "type": "country",
                    "label": "Country (if other than U.S.):"
                },
                "emergencyContact": {
                    "type": "text",
                    "label": "Emergency contact (name and number):"
                },
                "vegetarian": {
                    "type": "radio",
                    "label": "Are you a vegetarian:",
                    "optionLabels": ["Yes", "No"]
                },
                "dietaryComments": {
                    "type": "text",
                    "label": "Please specify any other dietary requirements:"
                },
                "roomJune3": {
                    "type": "radio",
                    "label": "Will you need a room on Monday, June 3rd?",
                    "optionLabels": ["Yes", "No"]
                },
                "smoking": {
                    "type": "radio",
                    "label": "Note that all rooms are non-smoking:",
                    "optionLabels": ["Yes", "No"]
                },
                "dinnerJune3": {
                    "type": "radio",
                    "label": "Will you be attending the reception and dinner on Monday, June 3rd?",
                    "optionLabels": ["Yes", "No"]
                },
                "dinnerJune4": {
                    "type": "radio",
                    "label": "Will you be attending the reception and dinner on Tuesday, June 4th?",
                    "optionLabels": ["Yes", "No"]
                },
                "cambridgeTour": {
                    "type": "radio",
                    "label": "Cambridge tour (date and time to be determined)?",
                    "optionLabels": ["Yes", "No"]
                },
                "labWebsite": {
                    "type": "text",
                    "label": "",
                    "size": 80
                },
                "photoFile": {
                    "type": "file",
                    "label": ""
                },
                "researchDescription": {
                    "type": "textarea",
                    "rows": 4,
                    "cols": 60,
                    "label": "",
                    "wordlimit": 250
                }
            },
            "form": {
                "attributes": {
                    "method": "POST",
                    "action": "save.php",
                    "enctype": "multipart/form-data"
                },
                "buttons": {
                    "submit": {
                        "value": "Submit"
                    },
                    "reset": {
                        "value": "Reset"
                    }
                }
            }
        }
    }

};

module.exports = formObj;