const client = require(`../config/mongo`)
const getAgent = async (req, res) => {
  const db = client.getDb()
  const ln = req.params.license_number 
  const projection = 
    { license_number: 1, 
      biography: 1,
      designations: 1,
      facebook_url: 1,
      name: 1,
      photo_url: 1,
      status: 1,
    }
  const agents = await db
    .collection(`mls-agents`)
    .find(
      { license_number: ln },
      { projection }
    )
    .toArray()

  if (agents.length > 1) {
    return res.json({
      error: `more than one agent has license_number of ${ln}`,
      agents, 
    })
  } else {
    return res.json({ 
      result: agents[0],
    })
  }
}

module.exports = {
  getAgent,
}
