Steps:
- Create React App (Using npm create-react-app command)
- Configured TailwindCSS
- Plan the features befor you start writing the code
- Create components, utils folder (Always starts with capital)
- Login file under components (rafce enter to get blueprint code)
- SETUP routing
- Login form
- Sign up form (Sign and Sign up form is just a one single form we are toggling it based on the state)
- Form validation (Either use state variables or useRef of input boxes)
- useRef hook ()
- Build Authentication ( We need backend for this- using firebase as backend as it's easy)/      Email and password login/ sign in throygh gmail, fb. You do all that in Authentication.
- Firebase setup
- deploying our app to production (domain purchasing websites: godaddy, host cator,)
- create sign up user account
- Implemented Sign in User API
- Create Redux store to store user information we are getting from firebase after signup and signin form.
- Create userSlice and add it in the redux store
- Implemented Sign out
- update Profile
- Fixed bug 1 and bug 2
- Fetch from TMDB Movies
- bugFIX 1 - redirect the user to browse page if he is already logged in and trying to access email pass page)
- bugFIX 2 - Any non user can go into the browse page. Restrict that access ) - it can only happen if we check auth on the browse page.
- bugFIX 3 - Sign up user displayName  and profile picture update.
- Hygiene practice 1: Unsubscribed to onAuthStateChanged callback
- Hygiene practice 2: Add hardcoded values to the constant files.
- Register for TMDB website, reg for APU and create a app and get an access token
- get data from tmdb "now plying movie list api"
- custom hook for now playing movies
- Put this movie data into our redux store(movieSlice)
- create movieSlice
- Update store with movies Data
- Planning for main container and secondary conatiner
- Fetch data for Trailer video
- Update store with Trailer video data
- Embedded the youtobe video and make iy autoplay and mute
- Tailwind classes to make Container look awesome
- Build secondary component 
- Build Movie List
- Build Movie card
- TMDB Image CDN URL
- Made the browse page amazing with Tailwind css
- UsePopoluar movie custom hook
*****
Chapt 3:
- GPT search feature
- We made our GPT search multilanguage.


  






Features:
-Login/Signup page
  - sign in/signup form
  -redirect to Browse page

Browse( after authentication)
  - Header
  - Main movie
    - Title and description
    - Movie suggestions
      - MovieList * N

-NetflixGPT
  - searchbar


Personal notes:

create react app/ Vite - you can use either create app.
- Create react app uses webpack bundler(parcel is an alternative way for creating build package)
- Jest is already installed.
- hot module replacement is already present
- use Formik library if you are creating big form.


- SETUP routing
1) Create app route(central deatiled info about different routes) 

            const appRouter = createBrowserRouter([
          {
            path: "/",
            element: <login />
          },
          {
            path: "browse",
            element: <Browse />
          }
        ])

2)Provide routing detail:
    a) import { RouterProvider } from "react-router-dom"
    b)  <RouterProvider router={appRouter}/> Instead of other login/body component on body just give RouterProvider component and give your router detail as an attribute
                        return (
                          <div>
                            <RouterProvider router={appRouter} />
                          </div>
                        )
  3) Form validation (useRef):
  useRef
    - (Either use state variables or useRef to know the values in the input boxes)
    - import React, {useState, useRef} from 'react'
    -  const email = useRef()
       const password = useRef()
    -   <input 
              ref={email}
              type="text" 
              placeholder="Email Address" 
              className="p-4 my-4 w-full bg-gray-700"
            />
          <input 
            ref={password}
          />
    - email.current.value
      to get the value
    -
4) Firebase deployment:
  - Install firebase CLI - 'npm install -g firebase-tools'
  -Firebase Login - Firebase login
  - Initilaize firebase = 'firebase init', then  select hosting
  - Deploy command - 'firebase deploy'

5)Redux:
  - npm install @reduxjs/toolkit react-redux    
  - create store: (utils/appStore.js)
      import { configureStore } from '@reduxjs/toolkit'
      export const store = configureStore({
        reducer: {},
      })
  - create slice
  - on the main file:
    import { appStore } from "./utils/appStore";
    import { Provider } from 'react-redux'
     <Provider store={store}>
      <App />
    </Provider>,
  - whenever the user state will change it will be handle at one place by get Auth and update the redux store. We don't need to handle every signin and signup of the user manually in .then portion of the api call.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
  },[])
  - import dispatch
    import {auth} from "../utils/firebase"
    import { useDispatch } from "react-redux";
    const Body = () => {
      const dispatch = useDispatch()
       useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed In
            const {uid, email, displayName} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName}))
            //this arguments are actions.payload.
          } else {
            // User is signed out
            dispatch(removeUser())
          }
      },[])
6)usenavigate Hook:
  When you want to redirect user to browser page after they login or signup successfully. You would want to use            useNavigate.
    - import { useNavigate } from "react-router-dom"
    - const navigate = useNavigate()
    - navigate("/home")
7)

      


 
Css notes:
  className=
    absolute 
    relative
    z-10 (z-index)  (netflix logo header page)
    px-8 
    py-2 
    bg-gradient-to-b from-black (background gradient 2 bottom with black) (Tnetflix logo  header page)
    mx-auto right-0 left-0 (margin x axis)
    bg-red-700 
    w-full 
    w-3/12 
    text-white 
    bg-opacity-80
    rounded-lg


bug fixes:
- bug 1 - redirect the user to browse page if he is already logged in and trying to access email pass page)
- bug 2 - Any non user can go into the browse page. Restrict that access ) - it can only happen if we check auth on the browse page.
- bug 3 - Sign up user displayName  and profile picture update.

Questions:
1) Why my APIs are getting called 2 times and giving the json outpuit twice in the console.
Ans: This is due to bydefault restrict mode in the react.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if we remove this react  strictmode component. We will get output only once. This is a react thing!!Intresting thing is it'll only happen to your local machine but nothing will happen.

Why this happen is?
Ans: Because react does extra render of your component to check some inconsistencies between your call. It just happen in your develppment mode not in production. It'll throw error if there is any inconisistency in rendering cycle.

