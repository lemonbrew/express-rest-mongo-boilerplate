/* DOCUMENT ROUTES HERE */

/**
 * @api {get} /agent/:license_number 
 * @apiName getAgent
 * @apiGroup mls
 * @apiVersion 1.0.0 
 * @apiParam {String} license_number 
 * @apiExample {curl} Example usage:
 * curl http:localhost:3040/agent/1234 
 * @apiUse Success
 * @apiUse NotFound
 * @apiUse MultipleAgents
 */

/* RESPONSE DEFINITIONS */

/**
 * @apiDefine Success Successfully retrieve an agent 
 * @apiSuccess {Object} result agent object of given <code>license_number</code>
 * @apiSuccessExample {json} Success response:
 *   HTTPS 200 OK
 *   {
 *     result: {
 *       license_number: "",
 *       biography: "",
 *       designations: "",
 *       facebook_url: "",
 *       name: {
 *         first: "",
 *         middle: "",
 *         last: ""
 *       },
 *       photo_url: "",
 *       status: {
 *         name: "Active",
 *         date: ""
 *       }
 *     } 
 *   }
 */
/**
 * @apiDefine NotFound No agent matches license_number 
 * @apiSuccessExample {json} Not found response:
 *   HTTPS 404 Not Found 
 *   {
 *     result: null
 *   }
 */
/**
 * @apiDefine MultipleAgents More than one agent was found
 * @apiSuccessExample {json} Multiple agents found response:
 *   HTTPS 200 OK 
 *   {
 *     error: 'More than one agent has license_number of "1234".' 
 *     agents: [{
 *       license_number: "1234",
 *       biography: "",
 *       designations: "",
 *       facebook_url: "",
 *       name: {
 *         first: "Agent",
 *         middle: "",
 *         last: "One"
 *       },
 *       photo_url: "",
 *       status: {
 *         name: "Active",
 *         date: ""
 *       }
 *     },
 *     {
 *       license_number: "1234",
 *       biography: "",
 *       designations: "",
 *       facebook_url: "",
 *       name: {
 *         first: "Agent",
 *         middle: "",
 *         last: "Two"
 *       },
 *       photo_url: "",
 *       status: {
 *         name: "Active",
 *         date: ""
 *       }
 *     }] 
 */