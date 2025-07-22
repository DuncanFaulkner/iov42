Ultraplex notes

Things I would add if I had more time.

Change models to remove duplication of types.
add more validation, improve layout, improve color and include theme (light/dark).

Fix up unit tests, project currently running in zoneless mode, and test are failing as it's expecting zone.js, (I would have expected Karma to work and to take zoneless into consideration) this might require a move to a different test runner like Vitest and or the Angular Testing library.

### update - fixed unit tests

fixed issue with Karma and zoneless applications and added a few small unit tests for checking the API's

complete screenings and booking part of the task.

Had some initial issues with the API, where it wasn't returning all the records and lost a bit of time on this.

I've used Signals where possible to make the application reactive and performant.
