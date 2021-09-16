# Contact tracking: Email & Phone

* Script attaches a dataLayer event to all known contact links on the page.
* Listens to click and copy events of mailto and tel links
* Pushes "contact events" to dataLayer
* Generates event parameters based on the lists in the config section at the start.
* Google Analytics events in the form of
  - **Category:** "Contact"
  - **Action**: "Email"
  - **Label**: "Customer service"

## To install
### 1) Create new tag
- **Tag name:** JS - Contact Event Listener
- **Tag type:** Custom HTML
- **Content:** - Copy from [JS - Contact Event Listener.html](https://github.com/Nerdaxic/GTM-Scripts/blob/main/Conversion%20Tracking/Contact%20Tracking%20-%20Phone%20and%20Email/JS%20-%20Contact%20Event%20Listener.html)
- **Tigger:** - DOM Ready

Edit the row:
```javascript
var tracker_gtm = 'GTM-XXXXXXX';
```
to match the ID of the tag manager.

### 2) Add followind dataLayer variables

| Variable Name | Data Layer Variable Name | Folder |
|---------------|--------------------------|--------|
|DL - Contact Event Category|DLContactEventCategory|Conversion Tracking|
|DL - Contact Action|DLContactAction|Conversion Tracking|
|DL - Contact Label|DLContactLabel|Conversion Tracking|

### 3) Create new Google Analytics event tag

| Tag Name | Tag type | Folder |
|---------------|--------------------------|--------|
|GA - Event - Contact Events|Google Analytics event|Conversion Tracking|

Add category, action and label as variables from table above.

### 4) Add a new trigger to Google Analytics tag
| Trigger Name | Trigger type | Folder |
|---------------|--------------------------|--------|
|DL - Contact Event|Custom Event|Conversion Tracking|

- **Event Name:** Contact Event

### 5) Add phonebook and list of trackable emails
This list matches email addresses and phone numbers to event label. Only contacts on this list will be tracked!

- tracker_emailList add emails to be tracked
- tracker_phoneList add phone numbers to be tracked (no spaces)

**You can customise default event parameters using these variables:**
```javascript
- var tracker_category = "Contact";
- var tracker_callEventAction = "Call";
- var tracker_emailEventAction = "Email"
```