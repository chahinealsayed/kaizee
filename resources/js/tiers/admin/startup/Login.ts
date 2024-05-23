/**
 * Login.vue Startup File
 *
 * @project kaizee
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Monday, October 23, 2023 at 09:29 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/Login.vue"
import bootstrap from "../bootstrap/Login"

const app = createApp("login", AppComponent)
bootstrap(app)
app.mount()
