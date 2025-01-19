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



 
Css notes:
  className=
    absolute 
    relative
    z-10 (z-index)  (netflix logo header page)
    px-8 
    py-2 
    bg-gradient-to-b from-black (background gradient 2 bottom with black) (netflix logo  header page)
    mx-auto right-0 left-0 (margin x axis)
    bg-red-700 
    w-full 
    w-3/12 
    text-white 
    bg-opacity-80
    rounded-lg
