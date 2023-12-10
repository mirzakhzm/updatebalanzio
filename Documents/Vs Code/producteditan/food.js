const express = require('express');
const router = express.Router();
const pool = require('../../config/database.js');

router.get('/foods', (req, res) => {
    const selectFoodsSql = 'SELECT * FROM food';

    pool.query(selectFoodsSql, (error, results) => {
        if (error) {
            console.error('Error querying recipes:', error);
            return res.status(500).json({ error: 'Error querying foods' });
        }
        res.json({ status: 'Success', food: results });
    });
});



//Endpoint Get berdasarkan Kategori
router.get('/foods/:time_category', (req, res) => {
    const time_category = req.params.time_category;
  
    const selectFoodsSql = 'SELECT * FROM food WHERE time_category = ?';
  
    pool.query(selectFoodsSql, [time_category], (error, results) => {
      if (error) {
        console.error('Error querying foods:', error);
        return res.status(500).json({ error: 'Error querying foods' });
      }
      res.json({ status: 'Success', food: results });
    });
  });

module.exports = router;
