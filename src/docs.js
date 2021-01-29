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
 * @apiDefine Success Successfully retrieved an agent 
 * @apiSuccess {Object} result agent object for given <code>license_number</code>
 * @apiSuccessExample {json} Success response:
 *   HTTPS 200 OK
 *   {
 *     msg: "Successfully matched agent!",
 *     result: {
 *       license_number: "1234",
 *       biography: "",
 *       designations: "",
 *       facebook_url: "",
 *       name: {
 *         first: "",
 *         middle: "",
 *         last: ""
 *       },
 *       photo_url: "",
 *       email: "",
 *       cell_phone: ""
 *     } 
 *   }
 */
/**
 * @apiDefine NotFound No agent matches license_number 
 * @apiSuccessExample {json} Agent not found response:
 *   HTTPS 200 OK 
 *   {
 *     msg: "No agent found for license_number '1234'",
 *     result: null
 *   }
 */
/**
 * @apiDefine MultipleAgents More than one agent was found
 * @apiSuccessExample {json} Multiple agents found response:
 *   HTTPS 200 OK 
 *   {
 *     msg: 'More than one agent has license_number "1234".' 
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
 *       email: "",
 *       cell_phone: ""
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
 *       email: "",
 *       cell_phone: ""
 *     }] 
 */