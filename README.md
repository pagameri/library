# library

This project is done after having taken a small break from JS. First it
was the advanced HTML to study, then I went on holiday. As a result, I am
a bit rusty at some of the techniques and found the instructions very
limited at first.

I was not sure how to get write the addBookToLibrary function taken from
the user's input. It might be an easy one, I feel, but I decided to carry
on with the next two task and once I am able to create a new book and see
what selectors I should use, I will revisit this task.

As expected, once I got around to implementing adding new book details
it was all easy to add the new book to the array. So I just moved the
object creator inside that function. And then I figured out how to keep
that function simple and just use it for what it is. To achieve the same
results, after the add book button is pressed and the new book is added
to the library, it now checks whether a table had been created and if it
has, then instead of adding the newly created book to the table, it now
adds the last element in the array.

So I got my project to quite a good state. I am stuck at the delete book 
function. I think my approach might be doable and will see might end up 
sticking to it but I am going to restart it in a temporary branch to make
it simpler. It would actually be a lot easier to display all the books
that are in the library all at once, without having to create just the
individual item. [Current issue is that if i splice the book array it is
bugged as my array is getting smaller but the data- ids remain the same 
so deletion starts at the wrong place.] Also, realised that given the
prototype learning lesson, I should be able to utilise it more and I am
starting to figure out what the aim of the addToLibrary() was. So will 
try to tackle that one from a new angle as well.

Now completed. Above notes done, delete button working, and the read
status toggle works as intended too.

For the future, the table could get an organiser where it sorts them in
order of each headings. Also, the new book field could get an option to
close, it could also get a module so it pops up and a way to close (in
both options).

It did let me move on, so I did the above two points too. I also did the
book counter on top that shows and updates number of books, incl read.

