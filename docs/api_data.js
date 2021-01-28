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
        "content": "curl http:localhost:3040/1234",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>agent object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success response:",
          "content": "HTTPS 200 OK\n{\n  \"result\": {\n    \"license_number\": \"\",\n    \"biography\": \"\",\n    \"designations\": \"\",\n    \"facebook_url\": \"\",\n    \"name\": {\n      \"first\": \"\",\n      \"middle\": \"\",\n      \"last\": \"\"\n    },\n    \"photo_url\": \"\",\n    \"status\": {\n      \"name\": \"Active\",\n      \"date\": \"\"\n    }\n  } \n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/docs.js",
    "groupTitle": "mls"
  }
] });
