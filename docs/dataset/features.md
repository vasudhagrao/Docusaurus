# Feature Engineering

We extracted the following features from the tweet text:

- **TF-IDF Vectors**: For capturing word importance
- **Tweet Length**: Number of characters
- **Hashtag & Mention Counts**: Number of `#` and `@`
- **URL Presence**: Binary flag

We later added embeddings using `Word2Vec` for deep learning models.
