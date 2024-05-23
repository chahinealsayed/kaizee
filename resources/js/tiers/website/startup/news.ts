/**
 * news.vue Startup File
 *
 * @project kaizee
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Thursday, October 26, 2023 at 08:58 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/news.vue"
import bootstrap from "../bootstrap/news"

const app = createApp("news", AppComponent)
bootstrap(app)
app.mount()
