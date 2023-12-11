import { UserModel } from "../models/user-model.js";
import { users } from "./user-controller.js";

export const login = async (req, res) => {
  // password, email
  const body = req.body;

  if (body.email === undefined) {
    res.status(403).json({ message: "Email required" });
    return;
  }
  if (body.password === undefined) {
    res.status(403).json({ message: "Password required" });
    return;
  }

  const oneUser = await UserModel.findOne({ email: body.email });

  if (!oneUser) {
    res.status(405).json({ message: "User not found" });
  } else {
    if (oneUser.password === body.password) {
      res.status(200).json({ user: oneUser });
      return;
    } else {
      res.status(405).json({ message: "Password not match" });
      return;
    }
  }
};
