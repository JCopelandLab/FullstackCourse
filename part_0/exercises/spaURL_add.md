```mermaid
sequenceDiagram

participant Client
participant Server

Client->>Server: GET(URL/spa)
Server->>Client: HTML,CSS and JS

Client->>Server: POSTReq(URL/new_note_spa)

Server->>Client: responds with JSON data

```
