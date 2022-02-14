# LAMCODE
My first bigger open-source project. The app is designed to teach people basic stuff about programming &amp; more.

## Note about cloning
File `config.json` is private, use the following schema for config.json.
```json
{
    "id": "",
    "clientSecret": "",
    "callbackURL": ""
}
```

## Previews

![Main Website](https://user-images.githubusercontent.com/58445363/153083217-fe0bf96d-b764-41c5-9b50-f638e61cda4c.png)
![Courses](https://user-images.githubusercontent.com/58445363/153083224-675e4936-0be9-4372-96da-6583fbe828ea.png)
![Lessons](https://user-images.githubusercontent.com/58445363/153086306-e1ce26fa-2998-44b3-b8e0-a0e977d49e55.png)

# Docs

## How to add new Courses

> Note: This schema can and will change, Don't use it for now.

### Adding new Courses

You can add new courses by using the following schema.

```json
{
    "name": "C++",
    "description": "A short description about the course.",
    "authors": [
        {
            "name": "John Smith",
            "link": "A link to John Smith's profile e.g. on discord"
        },
    ],
    "lessons": [
        
    ]
}
```

Now you can add new lessons to the course using the following schema.

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

#### Question Types

1. Multiple Choice, supports multiple answers
2. Fill the blank
3. True or False