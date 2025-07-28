---
name: "bogus-amogus"
description: "Simple Virtual Machine and Assembly-Like Language written in Free Pascal"
status: "In Development"
languages:
    - "Pascal"
    - "Shell"
source: "https://github.com/Zielin0/bogus-amogus"
published: "2025-07-27"
updated: "2025-07-27"
isPublic: true
---

Bogus-Amogus is divided into 2 parts:

- Bogus (`bogus.pas`) - *The Bogus Virtual Machine* - A very simple Virtual Machine which runs `.bogus` "executables".
- Amogus (`amogus.pas`) - *The Amogus Compiler* - A very simple compiler which parses `.amogus` Assembly-Like language and compiles it into a `.bogus` "executable".

# Intro

I decided to make this project after I was "burned out" and wanted to do anything. So I decided on a simple virtual machine.
I have never made anything like that before, the parses I tried to make always ended abandoned and half-working or not working at all.

# The Project

Like I described above it was divided into two parts. A compiler and a Virtual Machine.

But first let's explore what a compiler and what a virtual machine is.

## Compiler

Compiler is a program which parses a programming language and translates that to machine code.
That machine code can be anything, it can even be a second programming language.

## Virtual Machine

There are two main types of virtual machines:

- System virtual machine - This one is very advanced and basically simulates a whole computer
- Process virtual machine - This one is for executing programs in a "platform-independent" environment.

## Amogus

I made *The Amogus Compiler* first. It compiled the `.amogus` source files into `.bogus` "executables".

The `amogus` language had only ***4*** instructions available:

- `load` - loads a number into a register
- `add` - adds numbers from two registers and saves it into the first of them
- `sub` - subtracts numbers from two registers and saves it into the first of them
- `stop` - ends the program

The code was compiled into `.bogus` "executable" which was just raw bytes without any specific format.
Each function was saves as ***3*** bytes. The first one is for the instruction ID and the rest of them are for values or registers.

## Bogus

*The Bogus Virtual Machine* was made after *The Amogus Compiler*. It executed the `.bogus` "executable".

The machine also had ***4*** byte-sized registers and ***512*** bytes of "memory".
Since there are no memory stack operations and any functionality whatsoever, the memory is only used for loading the "executable".

*The Bogus Virtual Machine* went step by step through instructions and printed the machine state every time.

# The Fatal Flaw

So after making *The Amogus Compiler* and *The Bogus Virtual Machine* I wanted to extend the project.
I wanted to add more instructions and stuff like that. While doing that I realized that it is impossible to do that productively.
I made a fatal mistake in *The Amogus Compiler*. Instead of creating a parser like a sane person, I made it like I only expected those ***4*** instructions.
I could have made something like `ExpectInstruction` and `ExpectRegister` or `ExpectNumber` which would check the next "token" for the requirement.
Instead of that I parsed it like a retard in one go.

It is still possible to fix that issue, it won't be very simple though. The whole parser needs a rewrite.

# What's Next

I don't really know if I still want to work on this project. It was a cool experiment and perhaps it should stay like that.
I will either change the status of this article to **Abandoned** or I will come back one day and do this rewrite.
For now it will stay in this limbo state.

# What I Learned

Mostly just how to make a virtual machine. But this is not useless. Making virtual machines is cool. I might come back to this concept in another project one day.
I also learned some more *Pascal* with which I had little experience before. It's a cool language, and it compiles fast.
I also successfully made a parser and a compiler. Which has never happened before. Doesn't matter it's bad.

# Conclusion

I learned some stuff, this was a cool experiment.

The source code is available at [github.com/Zielin0/bogus-amogus](https://github.com/Zielin0/bogus-amogus).

:wq!

\- ziel

