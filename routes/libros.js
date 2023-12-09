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
       console.log('post', req.body)
      const { title, autor, public_at, isbn, estatus } = { ...req.body }
      const store = {
        books : [...books, {
          id: books.length + 1,
          title, autor, public_at: Date.parse(public_at), isbn, status: (/true/).test(estatus)
        }],
      }
      guardarLibrosData(store);
      res.send({answer: true, msg: 'Nuevo registrado creado', request:req.body })

    } catch (error) {
      res.send({answer: false, msg: error})
    }
})


// Update - using Put method
librosRoutes.put('/libros/:id', async (req, res) => {
  try {
    const { books } = await getLibrosData()
    const { id } = req.params
    const {title, autor, public_at, isbn, estatus } = { ...req.body }
  
    const updatedBooks = await books.map(item => {
      if (item.id == id) {
        return {
          ...item,
          title: title || item.title,
          autor: autor || item.autor,
          public_at: Date.parse(public_at) || item.public_at,
          isbn: isbn || item.isbn,
          status: (/true/).test(estatus) || item.status
        };
      } else {
        return item;
      }
    });  
    const update = {
      books: 
        [...updatedBooks]
    }  
  
    guardarLibrosData(update);
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
    const deleteBook = await books.filter(item => item.id != id )
 
    guardarLibrosData({books: [...deleteBook]});
    // console.log('antes', books)
    // console.log('nuevo ', deleteBook)
    res.send({answer: true, msg: 'El registro se elimino'})  
  } catch (error) {
    res.send({answer: false, msg: error})
  }
})
module.exports = librosRoutes