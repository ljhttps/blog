# RESTful API 最佳实践

## 动词 + 宾语

RESTful 的核心思想就是，客户端发出的数据操作指令都是"动词 + 宾语"的结构。比如，GET /articles 这个命令，GET 是动词，/articles 是宾语。

## 宾语必须是名词

宾语就是 API 的 URL，是 HTTP 动词作用的对象。它应该是名词，不能是动词。比如，/articles 这个 URL 就是正确的，而下面的 URL 不是名词，所以都是错误的。
不应该添加动词，使用路径表示资源位置。

```js
/getAllCars
/createNewCar
/deleteAllRedCars
```

## 复数 URL

既然 URL 是名词，那么应该使用复数，还是单数？

这没有统一的规定，但是常见的操作是读取一个集合，比如 GET /articles（读取所有文章），这里明显应该是复数。

为了统一起见，建议都使用复数 URL，比如 GET /articles/2 要好于 GET /article/2。

## 状态码必须精确

客户端的每一次请求，服务器都必须给出回应。回应包括 HTTP 状态码和数据两部分。

HTTP 状态码就是一个三位数，分成五个类别。

```js
1xx：相关信息
2xx：操作成功
3xx：重定向
4xx：客户端错误
5xx：服务器错误
```

这五大类总共包含 100 多种状态码，覆盖了绝大部分可能遇到的情况。每一种状态码都有标准的（或者约定的）解释，客户端只需查看状态码，就可以判断出发生了什么情况，所以服务器应该返回尽可能精确的状态码。

API 不需要 1xx 状态码。

### 4xx 状态码

4xx 状态码表示客户端错误，主要有下面几种。

400 Bad Request：服务器不理解客户端的请求，未做任何处理。

401 Unauthorized：用户未提供身份验证凭据，或者没有通过身份验证。

403 Forbidden：用户通过了身份验证，但是不具有访问资源所需的权限。

404 Not Found：所请求的资源不存在，或不可用。

405 Method Not Allowed：用户已经通过身份验证，但是所用的 HTTP 方法不在他的权限之内。

410 Gone：所请求的资源已从这个地址转移，不再可用。

415 Unsupported Media Type：客户端要求的返回格式不支持。比如，API 只能返回 JSON 格式，但是客户端要求返回 XML 格式。

422 Unprocessable Entity ：客户端上传的附件无法处理，导致请求失败。

429 Too Many Requests：客户端的请求次数超过限额。

## 深入理解 restful

- RESTful 是一种**架构的规范与约束、原则**，符合这种规范的架构就是 RESTful 架构。
- 英文 `Representational state transfer` **表述性状态转移** 其实就是对 资源 的表述性状态转移。
- RESTful 的核心思想就是，客户端发出的数据操作指令都是"**动词 + 宾语**"的结构。

### 动词通常就是五种 HTTP 方法，对应 CRUD 操作。

- GET：读取（Read）
- POST：新建（Create）
- PUT：更新（Update）
- PATCH：更新（Update），通常是部分更新
- DELETE：删除（Delete）

根据 HTTP 规范，动词一律大写。
