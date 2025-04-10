# Data Cleaning

Before modeling, the dataset required several cleaning steps:

- Removed URLs, mentions, and hashtags
- Lowercased all text
- Removed stopwords and punctuation
- Tokenized using `nltk` and `spaCy`
- Normalized elongated words (e.g., "soooo" → "so")

These steps helped reduce noise and prepare the data for feature extraction.
