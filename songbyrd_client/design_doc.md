#Warbler refactor design doc

##Author
Ross Hunter, 3/1/2019

##Overview
This project substantially refactors an existing social media app in order to add more complete user functionality, and to embody a better development workflow.

##Objectives
To add new user stories to Warbler social media app, expand existing stories, and create a more maintainable codebase with TypeScript, React Hooks, and improved testing practices.

###Goals
-Client-side codebase will be written in TypeScript
-App will fulfill user stories specified in this document, as defined by individual fulfillment criteria.
-A unit and integration test harness will be developed concurrently as part of a TDD workflow.
-Feature branches will be rebased as necessary to maintain a clear, linear version history.
-React hooks API will replace class-based components where appropriate.

###Non-Goals
-App will not communicate with any actual existing social media platforms

###Stories
1.User can create secure account with data associated to them
-User can sign up with Google, Facebook, or local account. -_Fulfillment_: Google and Facebook login buttons exist on homepage. Successfully logging in through these services will automatically populate user's account with data from these services.[Status: unstarted]

2.User can interact with their own and others' messages.
-User can see a feed of all messages on home page. -_Fulfillment_: When user is logged-in, a vertical list of messages containing the message's author, profile img, and creation date is displayed.
-User can post messages.[Status: unstarted] -_Fulfillment_: User can type in a text area in their homepage and submit a new message that will then appear as latest message in the feed.
-User can change (only) messages they have authored.[Status: unstarted] -_Fulfillment_: When user is logged-in, UI is updated for messages belonging to that user to show edit/delete buttons. Editing or deleteing opens a confirmation modal.[Status: unstarted]

3.Users have a profile.
-User can create a profile on signup. -_Fulfillment_: Data is persistently associated to user on signup. Some/all of this data can come from other social media services via OAuth. An image and username appears on message authored by this user.
-User can maintain a public profile page. -_Fulfillment_: Usernames in messages is a link to a public page containing all public data belonging to that user (bio, pic, etc.)

##Technical Architecture
**Data Persistence**
A Mongo database will be implemented via MLab. While potentially less performant than running a local database, lower overhead and configuration time make this the best solution for now.

**Backend**
_Deployment:_
A Node/Express backend can be deployed to existing server behind an Nginx reverse-proxy. This server is already running in the wild. To allow reverse-proxy to distinguish between multiple running Node servers, requests to this server meant to server Warbler should follow pattern <domain>/warbler/api/<request_route>. This pattern will be referred to for the remainder of document as <endpoint>.

_REST-structure:_ (Note: b/c client UI/navigation will be handled by client scripts, these routes may not all be used)
-Messages:
_index:_ GET <endpoint>/messages
_new:_ GET <endpoint>/messages/new
_create:_ POST <endpoint>/messages
_show:_ GET <endpoint>/messages/:id
_edit:_ GET <endpoint>/messages/:id/edit
_update:_ PUT <endpoint>/messages/:id
_destroy:_ DELETE <endpoint>/messages/:id

-Users:
_index:_ GET <endpoint>/users
_new:_ GET <endpoint>/users/new
_create:_ POST <endpoint>/users
_show:_ GET <endpoint>/users/:id
_edit:_ GET <endpoint>/users/:id/edit
_update:_ PUT <endpoint>/users/:id
_destroy:_ DELETE <endpoint>/users/:id

-Auth:
-Auth will be handled with PassPortJS strategies for Google, Facebook, and local authentication. Popular Passport middleware provides security and flexibility and eliminates need for local tests of auth functionality.

-Token-based authentication should expire.

-_Areas to investigate:_
1.Design of auth routes: 2 routes may be required--1 for initial authorization and issuing an access token, and another for handling refresh requests
2.Cookies vs. local storage for token storage. HTML-only cookies likely more secure. Are they harder to work with?

**Frontend**
_Deployment:_
-Front-end will initally be deployed to Github Pages, as it will be more frequently updated, and automated repo-monitoring reduces overhead.

_Source:_
-Codebase will be written in modern React and TypeScript, and tested on Jest with react-testing-library. Choice of testing library dictated by support for React Hooks API.

_UI:_
-Material UI will provide stylesheets
-4 basic pages needed: Hero, form page (for signup/signin), main page for logged-in users displaying message feed and profile-aside, and a dedicated public profile page.
-In addition, a reusable modal component will be needed for notifications.

_Data Flow:_
Shared application state will be managed with Redux. State should have following shapes:

user: {
userName: string,
profileImg: string[URL],
createdAt: timestamp,
sessionIsActive: bool
}

Note: For development, a JSON mock-server populated with fake data will likely be used.
messages: [record1, record2, ...]
