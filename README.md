## goal is to successfully meet the requirements of the 50 User Stories below, ensuring they are fully functional and work together as a fully functional podcast app.

✅Project is deployed to a custom Netlify URL

✅ All views in the app display correctly on the smallest mobile device available, “iPhone SE”. This can be emulated in Chrome Dev tools.

✅ All favicon information has been created an added correctly via https://realfavicongenerator.net/ (you are welcome to use any free PNG image you find on https://www.flaticon.com/)

✅ All metatag information has been created and added via https://metatags.io/ (You are welcome to use any free image on https://unsplash.com/). Be mindful to manually replace all URL values (especially image URL) to absolute Netlify URL values (you will need to deploy to Netlify first)

✅ All show data loaded via a fetch call from the https://podcast-api.netlify.app/shows

✅ When viewing a specific show, data is loaded via fetch from individual show endpoint

✅ There is a loading state while initial data is being loaded

✅ There is a loading state while new data is being loaded

✅ User can view the details of a show broken down into seasons, sorted by number

✅ User can listen to any episode in a season of a show

✅ User can see a view where only episodes for a specifically selected season are shown

✅ User can toggle between different seasons for the same show

✅ User can see the name of all available shows on the platform

✅ User sees preview image of shows when browsing

✅ User sees the amount of seasons per show as a number when browsing

✅ User sees a human-readable date as to when a show was last updated

✅ User sees what genres (as genre titles) a show is associated with when browsing

✅ User sees a preview image of seasons for a specific show

✅ User sees the amount of episodes in a season as a number

✅ User can go back to a show view from a season-specific view

✅ User can mark specific episodes as favourites to find them again

✅ User can visit a view where they see all their favourites

✅ User can see the show and season of any episode in their favourites list

✅ Episodes related by season/show are grouped in favourites

✅ User is able to remove episodes from their favourites

✅ User can arrange the list of shows by title from A-Z

✅ User can arrange the list of shows by title from Z-A

✅ User can arrange the list of shows by date updated in ascending order

✅ User can arrange the list of shows by date updated in descending order

✅ User can filter shows by title through a text input

✅ User can find shows based on fuzzy matching of strings (you can use something like https://fusejs.io/)

✅ Automatically filter shows by genre if the genre label is clicked on

✅ User sees the date and time that an episode was added to their favourites list

✅ User can arrange favourites by show titles from A-Z

✅ User can arrange favourites by show titles from Z-A

✅ User can arrange favourites by date updated in ascending order

✅ User can arrange favourites by date updated in descending order

✅ Audio player shows current progress and episode length as timestamps

✅ Audio player is always visible, so the user can listen to episodes while they browse

✅ User is prompted to confirm they want to close the page when audio is playing

✅ App remembers which show and episode the user listened to last when returning to the platform

✅ App remembers which shows and episodes the user listened to all the way through

✅ App remembers the timestamp where the user stopped listening within a 10-second accuracy period of closing

✅ App remembers and shows the timestamp progress of any episode the user has started listening to

✅ User can "reset" all their progress, effectively removing their listening history

✅ User is presented with a sliding carousel of possible shows they might be interested in on the landing page

✅ User can log in via https://app.supabase.com authentication

✅ User favourites are stored in the https://app.supabase.com database

✅ User favourites are automatically synced when logged in, ensuring that they share favourites between devices

✅ Users can share their favourites as a publicly accessible URL

Netlify link : https://6571739e04c5ad4c2f95c1e3--stellar-piroshki-52f039.netlify.app/

## COMPLETED USER STORIES

### User Stories and Code Explanation:

0. Project is deployed to a custom Netlify URL, Netlify link : https://6571739e04c5ad4c2f95c1e3--stellar-piroshki-52f039.netlify.app/

1. All views in the app display correctly on the smallest mobile device available, “iPhone SE”. This can be emulated in Chrome Dev tools.

- Implementation: The responsive design is achieved by using media queries in my CSS.

2. All favicon information has been created and added correctly via RealFaviconGenerator. You are welcome to use any free PNG image you find on Flaticon.

3. All show data loaded via a fetch call from the podcast API.

- Implementation: In both SlideCarousel.jsx and ShowList.jsx, I use the fetch API to retrieve data from the provided endpoint. Data is fetched in the useEffect hook, and the fetched data is stored in the shows state.

4. There is a loading state while initial data is being loaded.

- Implementation: Both in SlideCarousel.jsx and ShowList.jsx, I use the loading state to conditionally render a loading message while data is being fetched.

5. There is a loading state while new data is being loaded.

- Implementation: The loading state is effectively used in both components. When data is being fetched or re-sorted, a loading message is displayed until the operation is complete.

6. User can view the details of a show broken down into seasons, sorted by number.

- Implementation: In SlideCarousel.jsx, details of a show, including seasons, are displayed within the carousel. Sorting functionality is not explicitly implemented here, but it's implemented in ShowList.jsx.

7. User can see the name of all available shows on the platform.

- Implementation: In ShowList.jsx, the names of all available shows are displayed in a list. Sorting options are also provided.

8. User sees a preview image of shows when browsing.

- Implementation: Both in SlideCarousel.jsx and ShowList.jsx, preview images of shows are displayed within the carousel and the list.

9. User sees the amount of seasons per show as a number when browsing.

- Implementation: In both SlideCarousel.jsx and ShowList.jsx, the number of seasons per show is displayed.

10. User sees a human-readable date as to when a show was last updated.

- Implementation: In SlideCarousel.jsx, a human-readable date is displayed for each show's last update.

11. User sees what genres (as genre titles) a show is associated with when browsing.

- Implementation: In SlideCarousel.jsx, genres are displayed as titles for each show.

12. User sees the amount of episodes in a season as a number.

- Implementation: The number of seasons and episodes are displayed in both SlideCarousel.jsx and ShowList.jsx.

13. User can arrange the list of shows by title from A-Z.

- Implementation: In ShowList.jsx, users can click a button to sort the list of shows alphabetically by title in ascending order.

14. User can arrange the list of shows by title from Z-A.

- Implementation: Similar to the previous user story, users can toggle the sorting order to be in descending order.

15. User can arrange the list of shows by date updated in ascending order.

- Implementation: In ShowList.jsx, users can click a button to sort the list of shows by the date they were last updated in ascending order.

16. User can arrange the list of shows by date updated in descending order.

- Implementation: Similar to the previous user story, users can toggle the sorting order to be in descending order.

17. User is presented with a sliding carousel of possible shows they might be interested in on the landing page.

- Implementation: In SlideCarousel.jsx, a sliding carousel is implemented to showcase possible shows.
