import fs from "fs";
import express from "express";
import { login } from "../controller/login-controller.js";
import { createUser } from "../controller/user-controller.js";

export const router = express.Router();

router.delete("/user/:id", (req, res) => {
  var { id } = req.params;

  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = JSON.parse(data);

    if (readError) {
      res.json({
        status: "errors",
      });
    }

    const filteredData = savedData.filter((element) => element.id !== id);
    console.log(id);
    fs.writeFile(
      "./data/user.json",
      JSON.stringify(filteredData),
      (writeError) => {
        if (writeError) {
          res.json({ statusOfUser: writeError });
        } else {
          res.json({
            status: "success",

            data: filteredData,
          });
        }
      }
    );
  });
});

router.get("/user", (request, response) => {
  fs.readFile("../../data/user.json", "utf-8", (readError, data) => {
    console.log("2");
    let savedData = JSON.parse(data);
    console.log("3");
    if (readError) {
      console.log("4");
      response.json({
        status: "read file error",
      });
    }
    console.log("5");
    response.json({
      status: "success",
      data: savedData,
    });
  });
});

router.get("/user/:id", (request, response) => {
  var { id } = request.params;

  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = JSON.parse(data);

    if (readError) {
      response.json({
        status: "read file error",
      });
    }
    response.json({
      status: "success",
      data: savedData,
    });
  });
});

router.post("/login", login);
router.post("/user", createUser);
