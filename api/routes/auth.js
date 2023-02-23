const express = require('express');
const passport = require('passport');

const passportService = require('../services/passport')

const requireLogin = passport.authenticate('local', { session: false })

const router = express.Router();
const AuthenticationController = require('../controllers/authentication_controller')

//GET ALL
// router.get('/', async (req, res) => {
   
// })

router.post('/', AuthenticationController.signup)
router.post('/signin', requireLogin, AuthenticationController.signin)

// //GET ONE
// router.get('/:id', getMovie, (req, res) => {
//     res.json(res.movie)
    
// })

// //POST CREATE
// router.post('/', async (req, res) => {
//     const movie = new Movie({
//         title: req.body.title,
//         genre: req.body.genre,
//         released: req.body.released
//     })
//     try {
//         const newMovie = await movie.save();
//         res.status(201).json(newMovie)

//     } catch(error) {
//         res.status(400).json({ message: error.message})

//     }

// })

// //PATCH UPDATE
// router.patch('/:id', getMovie, async (req, res) => {
//     if(req.body.title != null){
//         res.movie.title = req.body.title
//     }
//     if(req.body.genre != null){
//         res.movie.genre = req.body.genre
//     }
//     if(req.body.released != null){
//         res.movie.released = req.body.released
//     }
//     try{
//         const updatedMovie = await res.movie.save()
//         res.json(updatedMovie)

//     } catch (error){
//         res.status(400).json({message:error.message})

//     }
// })

// //DELETE
// router.delete('/:id', getMovie, async (req, res) => {
//     try {
//         await res.movie.remove();
//         res.json({message:"Removed movie"})


//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }

// })

module.exports = router;
