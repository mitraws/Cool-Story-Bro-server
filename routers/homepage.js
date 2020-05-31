const { Router } = require("express");
const Homepage = require("../models").homepage;
const Story = require("../models").story;

const router = new Router();
// const { toJWT, toData } = require("../auth/jwt");
// const authMiddleware = require("../auth/middleware")

router.get("/", async (req, res, next) => {
  try {
    const homepage = await Homepage.findAll();
    res.send(homepage);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    console.log(id);
    if (isNaN(parseInt(id))) {
      return res.status(400).send({ message: "Homepage id is not a number" });
    }
  
    const homepage = await Homepage.findByPk(id, {
      include: [Story],
      order: [[Story, "createdAt", "DESC"]]
    });

    if (homepage === null) {
        return res.status(404).send({ message: "Homepage not found" });
      }
    
      res.status(200).send({ message: "ok", homepage });
    });

// router.post("/", async (req, res, next) => {
//   try {
//     const image = await Image.create(req.body);
//     res.json(image);
//   } catch (e) {
//     next(e);
//   }
// });

// router.get("/", async (req, res, next) => {
//     try {
//       const image = await Image.findOne();
//       res.send(image);
//     } catch (e) {
//       next(e);
//     }
//   });

//   router.get("/", (req, res, next) => {
//     const limit = Math.min(req.query.limit || 25, 500);
//     const offset = req.query.offset || 0;
  
//     Image.findAndCountAll({ limit, offset })
//       .then((result) => res.send({ images: result.rows, total: result.count }))
//       .catch((error) => next(error));
//   });


//   router.get("/auth/messy", async (req, res, next) => {
//     const auth = req.headers.authorization && req.headers.authorization.split(" ");
//     if (auth && auth[0] === "Bearer" && auth[1]) {
//       try {
//         const data = toData(auth[1]);
//       } catch (e) {
//         res.status(400).send("Invalid JWT token");
//       }
//       const allImages = await Image.findAll();
//       res.json(allImages);
//     } else {
//       res.status(401).send({
//         message: "Please supply some valid credentials",
//       });
//     }
//   });

module.exports = router;
