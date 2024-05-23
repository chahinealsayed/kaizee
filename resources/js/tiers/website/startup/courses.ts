/**
 * courses.vue Startup File
 *
 * @project kaizee
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Wednesday, October 25, 2023 at 09:14 AM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/courses.vue"
import bootstrap from "../bootstrap/courses"

const app = createApp("courses", AppComponent)
bootstrap(app)
app.mount()
