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

  if (agents.length > 1) {
    return res.json({
      msg: `More than one agent has license_number "${ln}".`,
      agents, 
    })
  } else if (!agents.length) {
    return res.json({
      msg: `No agent found for license_number "${ln}".`,
      result: null
    })
  } else {
    return res.json({
      msg: `Successfully matched agent!`,
      result: agents[0]
    })
  }
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
