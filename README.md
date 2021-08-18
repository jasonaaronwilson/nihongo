# nihongo

This is a FOSS single page webapp for learning facts via flashcards.

If you want to improve your Hiragana <--> Romaji, Katakana <-->
Romaji, and Hiragana (nouns) <--> English, simply visit:

  https://jasonaaronwilson.github.io/nihongo/quiz.html

This will look like crap on a desktop but should look OK on many smart
phones or tablets.

## Current Functionality

There is a database of "facts" (concepts) and this program presents
them in a multiple choice fashion. Given the "clue" at the top of the
screen, you need only choose the correct choice from several
possibilities by clicking on it (a "tap" on your smart phone or a
click of the mouse). You then learn if your answer was correct or not.

Using local storage on your device, we keep track of your correct and
incorrect responses to present the hardest challenge to you and
eventually expose more questions in the database as you achieve
proficiency.

In the future we could sync between multiple devices but that might
end up requiring a hosting provider besides github and that would mean
either ads or some other form of keeping the lights on payments and no
one would want to pay for this in its current limited form. Certainly
some kind of data download / upload functionality would make sense so
at least if you switch phones every two years that you can take up
where you left off.

Unfortunately, timed repetition learning is not fully implemented but
definitely coming soon.

Timed repetition learning basically means that just because you knew
"dog" is "inu" today doesn't mean you will know this fact in 10 days
and so we should try to put it back into rotation before you forget
it. This really only comes into play once you are trying to learn
hundreds to thousands of facts or if you pause for a while in your
learning.

## Coming Soon

1. Randomized fonts

   While complete mastery using only the ultra readable Tokyo "subway"
   font would put you ahead, at least from my experience, you won't
   really understand the characters you actually know unless you
   actually see them in enough formats to "see" them.

1. Some form of spaced repetition learning by remembering recent
   stats of *when* you last got something correct.

2. 100 to the 1000 most common words Japanese words

   Japanese is *not* a difficult language for English speaker to
   learn to speak to a basic level.

3. Gibberish mode - compound Japanese syllables 

   Learn to read compound Characters at speed even if they are
   non-sense and don't actually appear in Japanese.

4. Confounding mode

   To my mind learning Hiragana and Katakana makes me think that some
   characters are similar when they aren't. If I can confound you a
   bit, you will do better than a pure random selection between
   characters that otherwise seem alike.

5. Timed / Easy mode

   When you are stuck, I can hide answers incorrect answers over
   time. This will engage your brain in a different way and may help
   you learn faster.

## Never Coming

There are "free" programs that are not OSS free that have you draw out
characters rather than choose from a set of choices. I actually believe
that this is a great way to engage the mind but I don't feel like I
can program this yet and do it justice.

## Nerd Forward

My goal is that fellow computer programmers find some of the nerd
focus helpful such as seeing raw JSON where it makes sense instead of
lots of custom "UI".
