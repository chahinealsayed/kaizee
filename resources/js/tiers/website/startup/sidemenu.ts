/**
 * sidemenu.vue Startup File
 *
 * @project kaizee
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Monday, October 23, 2023 at 02:16 PM GMT+3
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/sidemenu.vue"
import bootstrap from "../bootstrap/sidemenu"

const app = createApp("sidemenu", AppComponent)
bootstrap(app)
app.mount()
