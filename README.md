# UOTSCS-Assignment18-Social-Network-API

**Description:**

This app is a back end for a social network website. It has provision for Users, Users Thoughts, User Friends list and Friend Reactions to User Thoughts. It utilizes Express.js with Mongoose to interact with a MongoDB database. It follows the CRUD methodology in that it provides the ability to look up all Users or Thoughts, look up one User or Thought, create a User or Thought, update a User or Thought and delete a User or Thought. It also allows to update the addition of a friend and to delete a friend and to create a reaction to a thought and delete a reaction to a thought.

**User Story:**

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

**Acceptance Criteria:**

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN I my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT and DELETE routes in Insomnia Core
THEN I am able to successfully create, update and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a users friend list

**Video Walkthrough:**

Here is a video link demonstrating the API functionality.

