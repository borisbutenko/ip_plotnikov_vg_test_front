import { createApp } from "vue"

import App from '~/App'

let app = createApp(App)
let container = document.getElementById("__APP__")

await app.mount(container);
