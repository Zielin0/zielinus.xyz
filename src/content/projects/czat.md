---
name: "czat"
description: "A Chat Server + Client written in C"
status: "Abandoned"
languages:
    - "C"
    - "SQL"
    - "Shell"
source: "https://github.com/Zielin0/czat"
updated: "2025-06-19"
isPublic: false
---

***czat*** was supposed to be a chat server plus a chat client all written in C.

It was supposed to use SQL and [sqlite3](https://sqlite.org/index.html) for databases.

It was supposed to be secure using [OpenSSL](https://www.openssl.org/) and SSL certificates.

It was supposed to use raw C sockets and TCP packets.

The client was supposed to be a GUI application, and the server was supposed to be a console app.

The word *czat* comes from Polish - my native language, it means *a conversation via internet*.

# The Idea

I was playing around with [Qt6](https://www.qt.io/product/qt6) one day, just making a random GUI app.

And then I got the idea of making a chat client with Qt6. Sounded simple enough so I started.

Then I realized I was going to need a server for that. I considered making an IRC client, but

my own server sounded better. So I decided to make the client using Qt6 tool for designing UI and

and IDE in one. Very slow software. And the server was supposed to be in C.

Then I thought that it would be cool to make it secure with SSL as well.

# First Steps

So I started designing the whole client interface in Qt6 software first, when I made a big part

of the UI, I decided to move to the server side. So I started developing the server in C using

both OpenSSL for a secure connection and sqlite3 for databases.

# A Switch

I decided that Qt6 was too slow, janky, and ugly. So I decided to switch the "frontend" stack.

I switched from C++ and Qt6 to C with raysan5's [raylib](https://github.com/raysan5/raylib/) and [raygui](https://github.com/raysan5/raygui/).

At this point I had some experience with raylib, raygui, and C, and I thought the client side

would be way faster in performance, more comfortable to write and use.

# The Server Side

The server side was fully written in C, using OpenSSL's C library and sqlite3's C library.

The server also used SQL inside of the C code and outside as standalone files for creating tables

and migrations.

## The Structure

The server's structure was divided into 4 main parts:

- The Database System - For database communication
- The Logging System - For logging messages into the console and a file
- The Packet System - For sending meaningful data between peers
- The Server System - The Core of the server

## The Database System

The system of connecting and communicating with a database might be the most interesting here.

I had so much fun playing around with sqlite3 and learning some more SQL along the way.

Something I saw [Tsoding](https://github.com/Tsoding/) use was a migration system in C using sqlite3.

I believe it was for his personal terminal reminder app [tore](https://github.com/rexim/tore).

So I decided to steal some of that code, modify it and apply it to my codebase.

The database was just an sqlite file in my home directory.

So I had this whole API file with schemas for operating with tables and functions for this and more.

I used the transaction feature to apply the migrations which I discovered in Tsoding's tore.

The migrations were applied if the last entry in the migration table was less than the last file

in the migrations folder. The format was `XX-name.sql` where ***XX*** was a two-digit left-padded number.

Besides all that stuff I had a lot of functions for easy database communication. It was very fun.

## Logging

I had a very basic loggin system for the server. It used variadic arguments, a simple enum for

the log level, and a file descriptor to output the logs to a `.log` file when the server would

either crash or close.

Very simple system, just printed the date and time, the level, and the message.

## Packets

I had a simple packet system for transfering data between the peers (server and client).

Up to this point I had **8** packets:

- Response packet - this was sent from the server to the client,

with a packet id it responded to

- Ping packet - just a packet to check the connection and communication
- Pong packet - sent by the client upon receiving the ping packet
- Register packet - this was used to register a user
- Credentials Login packet - this packet was used to log in a user through a login and a password
- Session Login packet - upon loggin in with credentials, a session key was generated

this packet is used to log in with that session key

- Message packet - this packet had all the message data that was being sent from a clien to the server
- New Session packet - this packet requested a new session key from the server
- User Data packet - this packet responded with all of the public user data

The packet was a structure composed like so:

```c
typedef struct {
    PacketType type;
    PacketData data;
    struct tm timestamp;
} Packet;
```

`PacketType` was an enum, and `PacketData` was an union composed of structures for each packet.

I tried using `void*` as the packet data and casting it to an appropriate structure on both sides,

but nothing would work. That's because void* points to a memory address of the current program,

accessing a memory address of another program wouldn't work because it would either segfault or

get random garbage from the memory.

The packet API had 2 creation functions, and 2 validation functions, these were for validating

register data and credential login data.

## The Server System

The server had a limit of **100** users connected at the same time.

The server had a nice structure to it.

The `ServerState` structure had a `Socket` which was the main TCP server socket.

It had a `Client[CLIENT_LIMIT]` array. An accept thread descriptor, it also had a `Database` pointer,

which was just a structure wrapper for `sqlite3` structure. I thought I would need more data for the

database but it turned out false and I was just too lazy to replace `Database` with `sqlite3`.

The server also had the SSL context.

```c
typedef struct {
    Socket socket;
    Client clients[CLIENT_LIMIT];
    pthread_t accept_thread;
    Database* db;
    SSL_CTX* ssl_ctx;
} ServerState;
```
The `Client` structure had a socket for that particular client. It had a thread descriptor for

its own thread. A `void*` that was a pointer to the server state. A `Database` pointer. And an SSL

connection.

```c
typedef struct {
    Socket socket;
    pthread_t thread;
    void* server;
    Database* db;
    SSL* ssl;
} Client;
```

The `Socket` structure had a file descriptor for that particular socket, and an address.

```c
typedef struct {
    int fd;
    struct sockaddr_in addr;
} Socket;
```

The server had a lot of functions. Let's go through them:

- Initialization - both for the server in general and for the secure connection
- Closing - again, both for the server in general and for the secure connection
- Threading - the accept thread, used to accept incoming connections, and a thread for every client
- Reading and writing - for packets and plain text, although plain text was only for debugging
- Broadcast - used to broadcast a message to every connected user
- Expect packet - for example server would expect a PONG packet if it sent a PING packet
- Register, Credential Login, and Session Login - pretty much self-explanatory

~

That is it for the server side, in short. The server has over 2500 lines of code in C.

It's the most I've written in this language. And there's still the client side.

# The Client Side

After ditching Qt6 I decided to use raylib, raygui and C, like I mentioned above.

It was easier for me to write both the backend and the frontend in the same language.

And with libraries I was already familiar with, unlike Qt6 which was completely new to me.

## The Structure

The client's structure was a little bit simpler than the server's structure.

It was divided into 3 parts:

- GUI - For the graphical interface
- Connection - For connecting to the server
- Client - Everything put together to make it work

## The Graphical Interface

Most of the graphical interface came from raygui itself. This part of the client held

helper UI controls or custom UI controls based on the raygui's ones.

## The Connection System

Really simple system, way simpler than the server's one.

Basically had all the packet data, packet enumeration, certificate data, and some connection utils

in one place. In addition it had all the necessary functions for connection, sending and receiving

packets and other connection related stuff.

## The Client System

Everything put together.

The UI and the connection in one place.

This had all the states of the UI and the client itself. Some utils like username colors. And

all of the functions including:

- Initializing/Closing the client
- Loading the styles (czat-specific ones, not related to raygui that much)
- The main loop
- Rendering all of the states:
    * Login Window and Form
    * Register Window and Form
    * Chat Window
    * Settings Window
- Client-Side Validation of credentials
- Data sender functions
- A connection thread

~

That is it for the client side.

I mentioned the lines of code count in the server section so I'm going to do that here as well.

The client side has over 2000 lines of code.

# The Build System

I did not make the mistake of [baint](https://zielinus.xyz/projects/baint#do-not-use-make) and I did not use make.

For both sides I used shell scripts. For building itself and for utility.

## Server Scripts

I had **3** shell scripts on the server side.

- `build.sh` - For building the server executable, accepted an argument of `debug` for obvious reasons.
- `cert.sh` - For generating an SSL certificate and a certificate key.
- `sqlite.sh` - For downloading and building the sqlite3 amalgamation.

## Client Scripts

On the client side I only had a single script.

- `build.sh` - For building the client executable, also accepted an argument - like the server.

# The End

I stepped away from this project 2 months ago. It's 2025-06-19 as I'm writing this.

It was today that I decided to stop working on this project. I had some TODOs in mind.

I wanted to create a channel system, add user avatars, more customization, great things in general.

But I realized that I do not want to work on this project anymore.

Don't get me wrong, working on the server was super fun. And I learned a lot of things.

It's just that the client is so boring and tedious to develop, almost no effects at all.

I also wanted to implement some stuff using raygui's code but it did not go well.

I don't think there's anything wrong with any library used or the client's codebase.

*Well...* Maybe the client's codebase is not as good as server's but it's not the worst.

# What I learned

A lot. Really. I learned a lot of things while working on this project. And that's the most

important thing about working on fun projects. To learn stuff. Cool nerdy stuff.

So here's a list of what I think I learned:

- sqlite3, more SQL, database migrations, and general database knowledge

I really learned a lot about these. Just how to use the sqlite3 C library in general.

SQL transactions, refreshed usual SQL queries.

And the biggest thing here, database migrations. I have used them before. *In a web app...*

Obviously I had no idea how it worked then, but I do now! And it's very cool. All thanks to

Tsoding on this one.

- threading in C

I had a very limited amount of knowledge about threading in software in general.

It all changed with this project. I learned how to create threads and use them. I don't think

some sort of a lock is possible in **czat** but there may or may not exist some issues with data.

I don't think I used any mutexes in this project, but if there is an issue then I don't know about it

and I won't even fix it because this project is dead.

- raw C sockets, TCP, sending and receiving data

Like I mentioned before in this post, I had an issue with a `void*` on the packet data.

That was a great thing to learn. Raw sockets, again, very limited knowledge before, it's more

now, but not perfect, there's always room for improvement. TCP packets in general, was cool

to dive deeper about that stuff.

~

These are the highlights but I learned so much more for sure. I just can't remember everything as

of writing this.

# Conclusion

I learned a lot while working on this project. Also I learned that Qt6 is not that good.

It's bad actually. At least the way I used it. I suspect that using it programatically would be

way easier. But I was just too lazy to migrate the project to that way of making Qt6 apps and moved

to something I was familiar with.

The source code will probably stay private, though I might make the server code public.

I kinda like it.

:wq!

\- ziel

