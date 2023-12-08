const express = require("express")
const librosRoutes = express.Router();
const fs = require('fs');

const dataPath = './db/db.json' 

// util functions 

const guardarLibrosData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}

const getLibrosData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData) 
}


// get
librosRoutes.get('/libros', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });

// store
  librosRoutes.post('/libros', async (req, res) => {
    try {      
      const { books } = await getLibrosData()
      const { title, autor, public_at, ISBN } = { ...req.body }
      const store = {
        books : [...books, {
          id: books.length + 1,
          title, autor, public_at, ISBN
        }],
      }
      guardarLibrosData(store);
      res.send({answer: true, msg: 'Nuevo registrado creado'})

    } catch (error) {
      res.send({answer: false, msg: error})
    }
})


// Update - using Put method
librosRoutes.put('/libros/:id', async (req, res) => {
  try {
    const { books } = await getLibrosData()
    const { id } = req.params
    const {title, autor, public_at, ISBN } = { ...req.body }
  
    const updatedBooks = await books.map(item => {
      if (item.id == id) {
        return {
          ...item,
          title: title || item.title,
          autor: autor || item.autor,
          public_at: public_at || item.public_at,
          ISBN: ISBN || item.ISBN,
        };
      } else {
        return item;
      }
    });    
    guardarLibrosData(updatedBooks);
    res.send({answer: true, msg: 'Los datos se han actualizado'})
  } catch (error) {
    res.send({answer: false, msg: error})
  }
  

});

//delete - using delete method
librosRoutes.delete('/libros/:id', async (req, res) => {
  try {    
    const { books } = await getLibrosData()
    const { id } = req.params
    const deleteBook = await books.filter(item => item.id === id )
    guardarLibrosData(deleteBook);
    res.send({answer: true, msg: 'El registro se elimino'})  
  } catch (error) {
    res.send({answer: false, msg: error})
  }
})
module.exports = librosRoutes