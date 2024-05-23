/**
 * Contents.vue Startup File
 *
 * @project kaizee
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Monday, October 23, 2023 at 09:29 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/Contents.vue"
import bootstrap from "../bootstrap/Contents"

const app = createApp("contents", AppComponent)
bootstrap(app)
app.mount()
