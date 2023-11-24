export const getImageURL = (path) => {
    // Takes relative path which is passed to it, taking the base URL of website, appending it, and then passing it back
    // Makes it easy to dynamically import images into different components 
    return new URL(`/assets/${path}`, import.meta.url).href 
}