/*eslint-disable no-console*/
const path = require("path");
const express = require("express");
const graphqlHTTP = require("express-graphql");

const { buildSchema } = require("graphql");
// Graphql schema
const schema = buildSchema(`
type Query {
  course(id: Int!): Course
  courses(topic: String): [Course]
}
type Mutation {
  updateCourseTopic(id: Int!, topic: String!): Course
}
type Course {
  id: Int
  title: String
  author: String
  description: String
  topic: String
  url: String
}
`);

const coursesData = [
  {
    id: 1,
    title: "The Complete Node.js Developer Course",
    author: "Andrew Mead, Rob Percival",
    description:
      "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
    topic: "Node.js",
    url: "https://codingthesmartway.com/courses/nodejs/",
  },
  {
    id: 2,
    title: "Node.js, Express & MongoDB Dev to Deployment",
    author: "Brad Traversy",
    description:
      "Learn by example building & deploying real-world Node.js applications from absolute scratch",
    topic: "Node.js",
    url: "https://codingthesmartway.com/courses/nodejs-express-mongodb/",
  },
  {
    id: 3,
    title: "JavaScript: Understanding The Weird Parts",
    author: "Anthony Alicea",
    description:
      "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.",
    topic: "JavaScript",
    url: "https://codingthesmartway.com/courses/understand-javascript/",
  },
];

const getCourse = function(args) {
  const { id } = args;
  return coursesData.filter(course => {
    return course.id === id;
  })[0];
};

const getCourses = function(args) {
  if (args.topic) {
    const { topic } = args;
    return coursesData.filter(course => course.topic === topic);
  }
  return coursesData;
};

const updateCourseTopic = function({ id, topic }) {
  const newData = coursesData.map(course => {
    if (course.id === id) {
      return {
        ...course,
        topic,
      };
    }
    return course;
  });

  return newData.filter(course => course.id === id)[0];
};

// Root resolver
const root = {
  course: getCourse,
  courses: getCourses,
  updateCourseTopic,
};

const app = express();

const chalk = require("chalk");

const DEFAULT_PORT = 3001;
const PORT = process.env.PORT || DEFAULT_PORT;

app.set("port", PORT);

if (PORT === DEFAULT_PORT) {
  console.log(`
 ${chalk.bgHex("#224dff").white("--- ReactJS ---")}
 Starting server on port 3001
 You are connected to ${chalk.hex("#f7c132")("http://localhost:3001/")}
`);
}

const isDevelopment = process.env.NODE_ENV !== "production";

// Graphql endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

if (isDevelopment) {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const config = require("./webpack.config.dev");

  const compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      stats: {
        builtAt: false,
        children: false,
        colors: true,
        modules: false,
      },
    })
  );

  app.use(webpackHotMiddleware(compiler));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"));
  });
} else {
  app.use(express.static(path.join(__dirname, "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"));
  });
}

app.listen(app.get("port"));
