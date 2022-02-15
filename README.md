# LAMCODE
My first bigger open-source project. The app is designed to teach 
people basic stuff about programming &amp; more.

<div style="text-align: center;">

![Discord Online Count](https://discord.com/api/guilds/740228240286679101/embed.png)
![GitHub branch checks state](https://github.com/CheryX/lamcode/actions/workflows/node.js.yml/badge.svg)

</div>


> ## Note about cloning
> File `config.json` is private, use the following schema for config.json.
> ```json
> {
>     "id": "",
>     "clientSecret": "",
>     "callbackURL": "",
>     "developer": true //Access to all courses
> }
> ```

# Contributing

## How to add new Courses

> Note: This schema can and will change, so please don't use it.

The `/courses` folder is where you can add new courses.
Begin by creating a new `.json` file and name it what you want.

Name | Description | Example
-----|-------------|--------
name | The name of the course | C++
icon | The icon of the course | `icons/cpp.svg`
description | A short description about the course | Learn how to code using C++
authors | An array of authors |
lessons | An array of lessons |

### Authors

Name | Description | Example
-----|-------------|--------
name | The name of the author | CheryX
icon | The icon of the author | `https://i.imgur.com/XXXXXX.png`
link | The link to the author's website | `https://www.youtube.com/watch?v=dQw4w9WgXcQ` 

**Example**

```json
{
    "name": "C++",
    "icon": "icons/cpp.svg",
    "description": "A short description about the course.",
    "authors": [
        {
            "name": "John Smith",
            "icon": "https://i.imgur.com/XXXXXX.png",
            "link": "A link to John Smith's profile e.g. on discord"
        },
    ],
    "lessons": [

    ]
}
```


```json
"basics": {
    "name": "Basics",
    "description": "A short description about the lesson.",
    "topics": [
        {
            "name": "Introduction",
            "text": "# Introduction\n\nThis is a short description about the lesson.\n> You can use markdown tho!"
        },
        {
            "name": "Hello World",
            "text": "# Hello World"
        }
    ],
    "questions": [
        {
            "name": "Question 1",
            "text": "Fill the blank",
            "type": 2,
            "hint": "What is the type of the variable? It returns `0`.",
            "questions": "%s void main() { \n... \n return 0; \n}",
            "answers": ["int"]
        }
    ]
}
```

### Question Types

ID | Description
---|-------------
1  | Multiple Choice
2  | Fill in the Blank
3  | Code
4  | True or False