const client = require(`../config/mongo`)
const getAgent = async (req, res) => {
  const db = client.getDb()
  const ln = req.params.license_number 
  const projection = getProjection()
    
  const agents = await db
    .collection(`mls-agents`)
    .find(
      { license_number: ln },
      { projection }
    )
    .toArray()

  const payload = 
    agents.length > 1 ? {
      error: `More than one agent has license_number of "${ln}".`,
      agents, 
    } : {
      result: agents[0] || null,
    }
  return res.json(payload)
}

function getProjection () {
  return { 
    license_number: 1, 
    biography: 1,
    designations: 1,
    facebook_url: 1,
    name: 1,
    photo_url: 1,
    status: 1,
  }
}

module.exports = {
  getAgent,
}
