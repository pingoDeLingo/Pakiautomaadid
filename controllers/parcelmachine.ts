const { Router } = require('express');
const axios = require('axios');

const router = Router();

router.get('/parcelmachines', async (req, res) => {
    try {
        const response = await axios.get('https://www.omniva.ee/locations.json');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
