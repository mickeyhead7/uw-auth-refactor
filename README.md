# Playground: Partner portal app auth refactor

## Purpose

The purpose of this is to provide a proof-of-concept for some ideas around the impending refactor the auth flow of the partner portal app.

This app is far from fully fledged. Any components and app flows have been built solely for the purpose of demonstrating an idea, or to highlight an intention of how something could be fully built, and may be hacky and not fully work.

## Concepts

### Everything as a component

Everything in this app is a component. The benefit of this is the predictability of ther codebase and the ease of following workflows.

N.B. The inevitable exception to this is the use of sagas, e.g. to process login.

### The auth saga

The [auth saga](https://github.com/mickeyhead7/uw-auth-refactor/blob/master/src/Auth/store/sagas.js) is built purposefully for handling the login side-effects. The rest of the app is completely unaware of the login flow and only responds to changes in the store.

This architecture will enable us to create a cutom "plug-and-play" auth flow without affecting or having to touch anything else in the app.

## Page level loading gate

Included is a [page-level loaging gate](https://github.com/mickeyhead7/uw-auth-refactor/blob/master/src/Page/Loading/index.js). The concept of this is to enable the display of a loding message whilst a page is in a "not ready" state for any reason. You will see that the reducer [appends items to a loading array](https://github.com/mickeyhead7/uw-auth-refactor/blob/master/src/Page/store/reducers.js#L42) of things that induce the loading state.

Once something is loaded then it is [removed from the loading array](https://github.com/mickeyhead7/uw-auth-refactor/blob/master/src/Page/store/reducers.js#L48).

The loading state is only cleared and the page rendered when the [loading array is empty](https://github.com/mickeyhead7/uw-auth-refactor/blob/master/src/Page/store/reducers.js#L23).

This loading array could accept things such as:
* Page async loading
* Features request loading

The page would only render when everything is loaded.

## Bonus: Global notifications

I wanted to demonstrate a global notifications center. It is a [standalone component](https://github.com/mickeyhead7/uw-auth-refactor/blob/master/src/Page/Notice/index.js) that responds to the global store. 

An example of how to ping a notification is when the auth saga completes and someone is logged in; a [welcome message](https://github.com/mickeyhead7/uw-auth-refactor/blob/master/src/Auth/store/sagas.js#L12) is set in the store.

This approach means that we do not have to repeatedly build notifications and alerts into multiple components.

# Next steps

So far, I have fudged a very basic auth process. Feel free to create branches, add new concepts and explore ideas for refactoring the auth flow.
