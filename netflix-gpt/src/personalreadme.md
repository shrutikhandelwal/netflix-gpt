Steps:
- Create React App (Using npm create-react-app command)
- Configured TailwindCSS
- Plan the features befor you start writing the code
- Create components, utils folder (Always starts with capital)
- Login file under components (rafce enter to get blueprint code)
- SETUP routing
- Login form



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
                      
 
Css notes:
  className=
    absolute 
    relative
    z-10 (z-index)  (netflix logo header page)
    px-8 
    py-2 
    bg-gradient-to-b from-black (background gradient 2 bottom with black) (netflix logo  header page)
    mx-auto right-0 left-0 (margin x axis)
