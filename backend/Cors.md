## What is CORS?

CORS stands for Cross-Origin Resource Sharing. It's a security feature implemented by web browsers to restrict web pages from making requests to a different origin (domain, protocol, or port) than the one from which the current page originated.

When a web page in domain A makes a request to a resource in domain B using JavaScript, the browser blocks the request by default due to the same-origin policy. CORS allows server administrators to control which domains can access their resources by specifying who can make requests to their server and which methods (e.g., GET, POST, PUT, DELETE) are allowed.

CORS headers are used by servers to inform the browser whether a given resource can be shared with a requesting domain. These headers include:

- `Access-Control-Allow-Origin`: Specifies which domains are allowed to access the resource. It can be set to a specific domain, `*` to allow any domain, or omitted to disallow access from any domain.
- `Access-Control-Allow-Methods`: Specifies which HTTP methods are allowed when accessing the resource.
- `Access-Control-Allow-Headers`: Specifies which HTTP headers can be used during the actual request.

By using CORS, servers can securely expose their resources to be accessed by web applications hosted on different domains, while still maintaining control over who can access those resources.

## How to create and use a CORS.

First install a package.

```bash
npm install cors
```

Import it to the project

```js
import cors from "cors";
```

Option 1: Allow All Origins with Default of cors(\*)

```js
app.use(cors());
```

Option 2: Allow Custom Origins

```js
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
```
