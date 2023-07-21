
## File Structure

**Assets folder**
-
_Contains the 'static' front-end graphic elements to our app.

- **Fonts Folder** : the font that is featured everywhere in our app

- **Images Folder** : all the images, graphics, headers etc used throughout the apps front end. 

_These are divided down into further folders, that are self explanatory_
-

**Components folder**
-
_Contains the 'component' front-end elements to our app._

- **Bubbles Folder** : the thought bubble components, that are used on the pet page

- **Pets Folder** : the pets components, that are also used on the pet page

- **Pets Folder** : the pets components, that are also used on the pet page

_This folder also contains the buttons used throughout the app, and the Modal for the task page_
-

**Content folder**
-
The 'content' elements for our app, which is currently just the information for the aboutUs screen

-
**Redux folder**
-
The Redux elements for our app. This includes the store
-
- **Features Folder** : the slices, which contain the reducers, for the redux store
-
_These are broken down into :_
- **petNeeds** : changes the pets needs     
_this informs different logic throughout the app, such as when different front end elemenents appear / disappear - and when the timer starts_
- **tasks** : marks a task on the task page as completed
-
**Screens Folder** 
-
This holds the screens for each page of our app, the names of which are self explanatory
-
**Src Folder** 
-
_Currently just holds the services folder, which handles the database query for the pet / firstName variables. It also has a database config file that may be defunked_