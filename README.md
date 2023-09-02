# Social-Network-API

Build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This is the back-end only.

## Table of Contents

- [User-story](#user-story)
- [Acceptance-Criteria](#acceptance-criteria)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Repo-Link](#repo-link)
- [Walkthrough-Video](#walkthrough-video)

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Description

This is a back-end social network API; it can (add, update, delete) users, thoughts, reactions, and friends.
You need to follow [Installation](#installation) to make sure install and open the software correctly.

## Installation

If you open this work locally, you need to some prepair work.
First, you need install VS Code, MongoDB, Node.js and insomnia.
Then, you can install npm packages:

```bash
npm i express moment mongoose
```

Next, you need to type:

```bash
>node server.js
```

in terminal.

Last, open insomnia to test the function.

## Usage

To use the application, you need to follow the installation part to open the application.

You can follow this to set HTTP request:

- User functions:

  - Get all users : Using GET method and put "```http://localhost:3001/api/users```" into http request; after you send request, you will get all users information with JSON formatt.

  - Get one user : Using GET method and put "```http://localhost:3001/api/users/:userId'```" into http request; after you send request, you will get user and user id associated user information with JSON formatt.

  - Delete one user : Using DELETE method and put "```http://localhost:3001/api/users/:userId'```" into http request; then you can send request to delete a user.

  - Create a user : Using POST method and put "```http://localhost:3001/api/users```" into http request, click ```NO Body```  and set to ```JSON```, and put code below to text area. (Be sure change ```xx``` to your unique name and ```xxx@xxxx``` to your unique email). Then you can send request.

  - Update a user : Using PUT method and put "```http://localhost:3001/api/users:userId```" into http request, click ```NO Body```  and set to ```JSON```, and put code below to text area. (Be sure change ```xx``` to your new unique name and ```xxx@xxxx``` to your new unique email). Then you can send request.
  
```bash
{
  "username":"xx",
  "email":"xxx@xxxx"
}
```

- User functions:

  - Add a friend : Using POST method and put "```http://localhost:3001/api/users/:userId/friends/:friendId```"(```:userId``` is the user that will add friend; ```:friendId``` is the friend's id you want to add), then you can send request.

  - Delete a friend : Using DELETE method and put "```http://localhost:3001/api/users/:userId/friends/:friendId```"(```:userId``` is the user that will delete a friend; ```:friendId``` is the friend's id you want to delete), then you can send request.

- Thought functions:

  - Get all thoughts : Using GET method and put "```http://localhost:3001/api/thoughts```" into http request; after you send request, you will get all thoughts information with JSON formatt.

  - Get one thought : Using GET method and put "```http://localhost:3001/api/thoughts/:thoughtId'```" into http request; after you send request, you will get that thought and thought id associated reaction information with JSON formatt.

  - Delete one thought : Using DELETE method and put "```http://localhost:3001/api/thoughts/:thoughtId'```" into http request; then you can send request to delete a thought.

  - Create a thought : Using POST method and put "```http://localhost:3001/api/thoughts```" into http request, click ```NO Body```  and set to ```JSON```, and put code below to text area. (Be sure change ```xx``` to the user id that belongs to, ```xxx``` to username that belongs to, and ```xxxx``` is the thoughts you want to write). Then you can send request.

  - Update a thought : Using PUT method and put "```http://localhost:3001/api/thoughts/:thoughtId```" into http request, click ```NO Body```  and set to ```JSON```, and put code below to text area. (Be sure change ```xx``` to the user id that belongs to, ```xxx``` to username that belongs to, and ```xxxx``` is the thoughts you want to update). Then you can send request.

```bash
{
  "userId":"xx",
  "username":"xxx",
  "thoughtText":"xxxx"
}
```

- Rection functions:

  - Delete a reaction : Using Delete method and put "```http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId```" (```:thoughtId``` is the reaction you want to delete belongs to with thought, ```:reactionId``` is the reaction you want to delete)Then you can send request.

  - Add a reaction : Using POST method and put "```http://localhost:3001/api/thoughts/:thoughtId/reactions```" into http request, click ```NO Body```  and set to ```JSON```, and put code below to text area. (Be sure change ```xx``` to the reaction you want to write, ```xxx``` to userId that belongs to, and ```xxxx``` is username). Then you can send request.

```bash
{
  "reactionBody":"xx",
  "userId":"xxx",
  "username":"xxxx"
}
```

You can also watch [Walkthrough-video](#walkthrough-video) to understand function of this web.
If you have anyother quesiton, feel free to reach me out.

## Repo Link

[Link to the code repository](https://github.com/CQlove/Social-Network-API)

## Walkthrough Video

https://github.com/CQlove/Social-Network-API/assets/128104973/6a33fb81-2e1d-4639-a782-097cc2608399



