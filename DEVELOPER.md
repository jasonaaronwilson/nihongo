# These are notes for developers.

## Top Level File

The top-level file is quiz.html.

This loads many different fonts, defines CSS, contains the Vue.js
templates and contains the bulk of the Javascript that isn't raw data.

## Format of concepts

```
    {
        id: 'h-pyo',
        romaji: 'pyo',
        hiragana: 'ぴょ',
    },

```

This is a simple example for a concept for hiragana <--> romaji.

All concepts need an "id". Here the first letter is suggestive of this
type of concept. Here is a table:

```
h -- hiragana <--> romaji
k -- katakana <--> romaji
n -- noun <--> hiragana/katakana + kanji (if available)
v -- verb <--> hiragana/katakana + kanji (if available)
```

## Directions

```
    var directions = [
        make_direction('romaji', 'hiragana', id_prefix_match('h')),
        make_direction('hiragana', 'romaji', id_prefix_match('h')),
```

Here we define a direction. The last argument to the make_direction
function is an arbitrary predicate. Therefore we could define a
direction that would be say "difficult nouns" which could look for a
difficulty field on the JSON, etc.

## Hackiness

The current program is quite hacky as many organially grown projects
are.


