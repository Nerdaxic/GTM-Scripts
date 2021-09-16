# Article Engagement tracking

* Run on blog articles
* Sends a "full read" event when article has been scrolled to the end while taking minimum read time
* Minimum read time is calculated from the length of the article using 500 words per minute
* Google Analytics events in the form of
  - **Category:** "Article"
  - **Action**: "Scroll depth"
  - **Label**: "Article end"

  - **Category:** "Article"
  - **Action**: "Full read"
  - **Label**: Article name

**Note:** Scripts need to be edited to match your theme to catch things like position where article ends and what container the wordcount should be counted from.