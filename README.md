Testing out some of Algorithmia's most popular offerings for my own future use. Currently includes:
- Tweet search by keyword: Abstracts away communication with the API, very handy for quickly grabbing text data to feed into other algorithms. Obviously also limiting, as it does not provide user info or metadata, but a very useful tool for gathering real data to test other algorithms on
- PageRank (within a domain): Useful for thinking about UX of more complex applications
- Language Detection: Very fast, highly accurate. Would be great in combination with translation services.
- Nudity Detection: Extremely unreliable based on my tests
- Sentiment Analysis: Quite fast, but significantly less precision than alternatives such as indico.io
- TF-IDF: Reliably gives a solid idea of what a passage is about. Would be very useful for auto-generating topic tags for documents. Occasionally encounters problems with common non-topic words, such as "here", but this can largely be offset by requesting more words.
