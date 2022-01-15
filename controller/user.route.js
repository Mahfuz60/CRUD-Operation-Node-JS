let users = [];
//create id
import { v4 as uuidv4 } from "uuid";

//all users
export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

//create a user
export const createUser = (req, res) => {
  const user = req.body;
  const userId = uuidv4();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  res.send(`users with the name ${user.firstName} added to the database`);
};

//single user find
export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

//single user deleted
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User id is ${id} deleted with database`);
};

//single user updated
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);
  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  res.send(`user id is ${id} updated successfully done.`);
};
