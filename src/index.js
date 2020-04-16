import { renderHomeView } from "./views/home.js"
import { renderPostView } from "./views/post.js"
import { renderProfileView } from "./views/profile.js"
import { renderLoginView } from "./views/login.js"
import { renderExitView } from "./views/exit.js" 

export const components = {
  home: renderHomeView,
  post: renderPostView,
  profile: renderProfileView,
  login: renderLoginView,
  exit: renderExitView
};
