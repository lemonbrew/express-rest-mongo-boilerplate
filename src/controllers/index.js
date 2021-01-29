const client = require(`../config/mongo`)

// IDEA: make sure you are searching by type (Broker vs Realtor). Can a person who is both share the same license_number? 
// will adding type to query make it faster?  
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
    cell_phone: 1,
    email: 1
  }
}

module.exports = {
  getAgent,
}
