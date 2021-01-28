/* DOCUMENT ROUTES HERE */

/**
 * @api {get} /agent/:license_number 
 * @apiName getAgent
 * @apiGroup mls
 * @apiVersion 1.0.0 
 * @apiParam {String} license_number 
 * @apiExample {curl} Example usage:
 * curl http:localhost:3040/agent/1234 
 * @apiSuccess {Object} result agent object 
 * @apiSuccessExample {json} Success response:
 *   HTTPS 200 OK
 *   {
 *     "result": {
 *       "license_number": "",
 *       "biography": "",
 *       "designations": "",
 *       "facebook_url": "",
 *       "name": {
 *         "first": "",
 *         "middle": "",
 *         "last": ""
 *       },
 *       "photo_url": "",
 *       "status": {
 *         "name": "Active",
 *         "date": ""
 *       }
 *     } 
 *   }
 */