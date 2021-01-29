define({ "api": [
  {
    "type": "get",
    "url": "/agent/:license_number",
    "title": "",
    "name": "getAgent",
    "group": "mls",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "license_number",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http:localhost:3040/agent/1234",
        "type": "curl"
      }
    ],
    "filename": "src/docs.js",
    "groupTitle": "mls",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>agent object of given <code>license_number</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  result: {\n    license_number: \"\",\n    biography: \"\",\n    designations: \"\",\n    facebook_url: \"\",\n    name: {\n      first: \"\",\n      middle: \"\",\n      last: \"\"\n    },\n    photo_url: \"\",\n    status: {\n      name: \"Active\",\n      date: \"\"\n    }\n  } \n}",
          "type": "json"
        },
        {
          "title": "Not found response:",
          "content": "HTTPS 404 Not Found \n{\n  result: null\n}",
          "type": "json"
        },
        {
          "title": "Multiple agents found response:",
          "content": "HTTPS 200 OK \n{\n  error: 'More than one agent has license_number of \"1234\".' \n  agents: [{\n    license_number: \"1234\",\n    biography: \"\",\n    designations: \"\",\n    facebook_url: \"\",\n    name: {\n      first: \"Agent\",\n      middle: \"\",\n      last: \"One\"\n    },\n    photo_url: \"\",\n    status: {\n      name: \"Active\",\n      date: \"\"\n    }\n  },\n  {\n    license_number: \"1234\",\n    biography: \"\",\n    designations: \"\",\n    facebook_url: \"\",\n    name: {\n      first: \"Agent\",\n      middle: \"\",\n      last: \"Two\"\n    },\n    photo_url: \"\",\n    status: {\n      name: \"Active\",\n      date: \"\"\n    }\n  }]",
          "type": "json"
        }
      ]
    }
  }
] });
