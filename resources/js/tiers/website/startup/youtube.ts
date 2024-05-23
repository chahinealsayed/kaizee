/**
 * youtube.vue Startup File
 *
 * @project kaizee
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Monday, October 23, 2023 at 10:59 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/youtube.vue"
import bootstrap from "../bootstrap/youtube"

const app = createApp("youtube", AppComponent)
bootstrap(app)
app.mount()
