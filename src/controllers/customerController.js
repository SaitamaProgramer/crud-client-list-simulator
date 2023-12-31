const controller = {};



controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers ) => {
          if (err) {
            res.json(err);
          }
          console.log(customers)
          res.render('customers', {
            data: customers
          });
        });
    });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log('Recieved data', data)
   req.getConnection((err, conn) => {
    conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
      
      res.redirect('/')
    });
   })
};


controller.delete = (req, res) => {
  const {id} = req.params
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM customer WHERE id = ? ', [id], (err, rows) => {
      res.redirect('/')
    })
  }) 
  
}
module.exports = controller

