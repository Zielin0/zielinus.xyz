---
name: "baint"
description: "Simple painting application"
status: "Abandoned"
languages:
    - "C++"
    - "C"
    - "GLSL"
source: "https://github.com/Zielin0/baint"
updated: "2025-06-19"
isPublic: false
---

***baint*** was supposed to be a *Simple painting application* just like MS Paint.

I decided to stop this project, however I learned a lot with this one.

# The Idea

The idea was planted inside of my head while watching [Tsoding](https://twitch.tv/tsoding) on twitch.tv.

Tsoding was developing his [neural network library in c](https://github.com/tsoding/nn.h) at the time.

He was working on a widget for his shape recognition neural network.

([Neural Network in C that Recognizes Shapes on YouTube](https://www.youtube.com/watch?v=fST6s4aOxuE&list=PLpM-Dvs8t0VZPZKggcql-MmjaBdZKeDMw))

Tsoding used [raysan5's](https://github.com/raysan5) [raylib](https://github.com/raysan5/raylib/) and his own [olive.c](https://github.com/tsoding/olive.c) to implement this widget.

I was blown away by the simplicity of this widget. So I wanted to create my own painting thing.

My mind immediately went to a full painting application because *How hard could it be?*

# First Steps

I thougt to myself, it would be cool to create an app like that. I took a note. I always do.

So the time came, I was ready to start this project.

## Choosing the technology

I thought: *If Tsoding used C, olive.c, and raylib, I could too.*

So I did. The project started using C, raylib, and olive.c.

I also wanted to use [raygui](https://github.com/raysan5/raygui) by raysan5 for buttons and stuff like that.

## The Realization

I quickly realized that I cannot program in C. *Well...*

I could create basic loops, functions and other regular stuff.

However, I lacked the ability to control the flow of the program.

I wanted to have a confirmation message box about saving an already-existing file.

It was supposed to show when a button was pressed,

however when the button was pressed, it would only show for a single frame and disappear.

This is when I decided to stop working on this project and give up.

# The Switch

After some time and thought I decided I could switch to another language and try again.

I had some experience with Java and C++ (OOP in general) so I decided to go with C++.

So I wrote the app from nothing, using some snippets of C code, in an object oriented manner.

It worked. And it felt great. I was finally able to work on a project that would actually work.

## The Wall

I hit a wall. I said it worked, but it did not work well.

There would be huge gaps when mouse was movied quickly on the canvas.

I wanted to give up but I decided to give it one more go, using AI this time.

I struggled for a couple of days to make it work with ChatGPT, and this only ensured me in how sh\*t AI is.

But I was finally able to fix the issue, it somehow worked.

The code was very ugly though, but I had to move on with the project.

## The Use of Shaders

I wanted to have this cool checker pattern in the background of the canvas.

It couldn't be filled pixels obviously, it had to be a shader on the canvas background.

This was my first time writing real shaders in GLSL. It did not go well at first,

but it worked in the end. I combined the use of AI and "stealing code" from [shadertoy](https://www.shadertoy.com/).

# Working on the GUI

At some time in the development, I can't remember when exactly (this was like 2 years ago),

I decided I won't use raygui and I will make my own GUI inside of the app.

I unknowingly complicated the whole thing by this decision. The UI was janky and ugly, with goofy icons

made in libresprite. The only decent looking thing was the menu bar. It worked almost perfectly.

I made quite a lot GUI controls in this project, with a little help from the raygui source code.

I had buttons, widgets (little windows inside of the app), the menu bar, and a lot of inputs.

# Things To Do

At some point, again I can't exactly remember, I decided to write down TODOs for this project.

There were quite a lot of them. I had ideas for this project like:

- Undo/Redo (which I did, but guess what, it was very laggy and did not really work)
- Better shaders and better selection (with my shader knowledge at the time, almost impossible)
- Tools like magic selection or even text
- Custom color palettes and color pickers (I basically reused raygui's code for the pickers)
- Layering system
- Image Filters, like blurs, inversion, color selection/replacement

This was a lot. I sometimes looked at the TODO list and thought: *It would be cool to do it one day*.

That day never came.

# A Decision

Every time I opened Visual Studio Code (my text editor of choice at the time)

I looked at the code for 5 minutes and closed the editor. I was not able to work on the project.

I decided to work on other projects, play around with other stuff, play games or watch movies,

and come back after a while. I did come back, to the same feeling.

I thought about it and decided to quit this project forever.

After some time more thoughts started coming. *Maybe the goal was set too high*,

*Maybe the libraries I used weren't right for this type of software*,

*Maybe C++ is not that good after all*, and many many more.

And honestly, all of the above were right. I did set a goal too high.

I did use unfinished, untested libraries. Libraries not intended for this type of applications.

Maybe I used them in a wrong way, maybe not.

And C++... Yeah I think I hated this language for a great while after deciding to quit this project.

# Lessons Learned

It's not like quitting a project is a waste of time. Most of the time you learn a lot

doing new stuff. And so did I.

## Do not use C++

Lesson 1 - Do not use C++ (or OOP in general). I started with Object Oriented Programming, and

the unfortunate truth is that my mind will, for a long time, thing about stuff in terms of objects.

Object Oriented is not always the right way to go, even if something doesn't work in procedural,

or even functional (I'm kinda scared of functional programming tho, maybe because of the OOP start).

The solution to my problem with a message box would be to set a global variable or a state variable

assigned to a message box being open, check with an if in the main loop, and there we go.

It's that easy, but because of this issue I switched to a whole another language.

## Do not use Make

Lesson 2 - Do not use weird build systems.

I wanted to make it a proper C++ and use make like a proper C++ developer.

Make is hell honestly, it's not good, and CMake is even worse. It's slow and the syntax is confusing.

Maybe it's a skill issue from my side. Maybe not.

The first edition of baint used shell scripts to build, another great thing I learned from Tsoding.

Nearing the end of the project i switched to [nob.h](https://github.com/tsoding/nob.h). A great

tool by Tsoding. It uses a nobuild philosophy:

programs should be built by the language they are written in.

Anyone can make a build system in any language, it's not only limited to C or C++.

You can even use nob.h for projects not connected to C in any way.

## Do not use AI for programming

Lesson 3 - do not stupidify yourself with AI.

I admit - I have used AI for this project like I mentioned before but for some other projects

on my github as well. And I will not use it for programming again. It's a great search engine

replacement though.

AI is really bad at working with projects that have over 100 lines of code and any complexity.

The code AI generates most of the time doesn't work, needs correction anyway, or doesn't follow

the style of the code provided. It's harder to program with AI because you have to correct its

mistakes.

## Do proper research

Lesson 4 - Do proper research about libraries you want to use.

If you see a cool library, check if it's even usable. Maybe the author left a note that

this particular library you want to use is not finished and should not be used.

It's fine to play around with libraries like that, but using them for real projects is not.

# Conclusion

I probably learned a lot more than mentioned above. C++ specific stuff like lambdas, weird and

quirky pointers, etc.

I would write more if I remembered more, however the last commit was 1 year ago according to github.

It's 2025-06-19 as I'm writing this.

I would like to explore this idea in the future. Make a proper painting application, or even

an image editor. Something like GIMP but way simpler.

The source code will stay private because I'm ashamed of this code, but on the other note -

I'm nowhere near popular enough for people to look at my random projects.

:wq!

\- ziel

