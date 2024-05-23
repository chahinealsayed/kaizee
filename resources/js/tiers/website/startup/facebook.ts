/**
 * facebook.vue Startup File
 *
 * @project kaizee
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Monday, October 23, 2023 at 10:58 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/facebook.vue"
import bootstrap from "../bootstrap/facebook"

const app = createApp("facebook", AppComponent)
bootstrap(app)
app.mount()
