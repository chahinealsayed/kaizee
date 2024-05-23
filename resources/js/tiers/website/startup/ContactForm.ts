/**
 * ContactForm.vue Startup File
 *
 * @project kaizee
 * @company Codendot <https://codendot.com>
 * @author Jawdat Sobh <jawdat@codendot.com>
 * @since Monday, October 30, 2023 at 09:32 AM GMT+2
 *
 */

import { createApp } from "@/lib/app"
import AppComponent from "../apps/ContactForm.vue"
import bootstrap from "../bootstrap/ContactForm"

const app = createApp("contactform", AppComponent)
bootstrap(app)
app.mount()
