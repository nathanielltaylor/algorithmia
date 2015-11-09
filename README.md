Testing out some of Algorithmia's most popular offerings for my own future use. Currently includes:

- Tweet search by keyword: Abstracts away communication with the API, very handy for quickly grabbing text data to feed into other algorithms. Obviously also limiting, as it does not provide user info or metadata, but a very useful tool for gathering real data to test other algorithms on. Worth noting that this is extremely costly in terms of Algorithmia credits.

- PageRank (within a domain): Useful for thinking about UX of more complex applications.

- Language Detection: Very fast, highly accurate. Would be great in combination with translation services.

- Nudity Detection: Extremely unreliable based on my tests.

- Sentiment Analysis: Quite fast, but significantly less precision than alternatives such as indico.io.

- TF-IDF: Reliably gives a solid idea of what a passage is about. Would be very useful for auto-generating topic tags for documents. Occasionally encounters problems with common non-topic words, such as "here", but this can largely be offset by requesting more words.

- GitHub Autotagging: An interesting, high-level way to think about the big ideas behind a given git repo. The tags returned are definitely suitable, and could, with some human editing, make for a good categorization system.

- Summarizer: Works very well. There does not seem to be any documentation on how this algorithm is implemented, but based on results I would guess that it has something to do with taking the first and last few sentences of each paragraph, checking them for keywords, and keeping the sentence if they are found. May try to replicate this. Would be very useful for thumbnail summaries of articles on something like a news aggregator site.

- URL 2 Text: A quick, easy, and effective scraping tool.
