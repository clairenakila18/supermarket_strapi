module.exports = {
    routes: [
      // GET (Read) - Fetch all customers
      {
        method: 'GET',
        path: '/customers',
        handler: 'customer.find',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      // GET (Read) - Fetch a single customer by ID
      {
        method: 'GET',
        path: '/customers/:id',
        handler: 'customer.findOne',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      // POST (Create) - Create a new customer
      {
        method: 'POST',
        path: '/customers',
        handler: 'customer.create',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      // PUT (Update) - Update an existing customer by ID
      {
        method: 'PUT',
        path: '/customers/:id',
        handler: 'customer.update',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      // DELETE (Delete) - Remove a customer by ID
      {
        method: 'DELETE',
        path: '/customers/:id',
        handler: 'customer.delete',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  